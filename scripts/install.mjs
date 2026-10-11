#!/usr/bin/env node
import { lstat, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const SKILL_NAMES = Object.freeze([
  'fullstack-workflow', 'fullstack-ui-review', 'fullstack-liquid-glass-design', 'fullstack-editor-reliability',
  'fullstack-content-sync', 'fullstack-release', 'fullstack-ai-safety',
  'fullstack-security-review', 'fullstack-maintenance',
]);

// These are native installation paths, not a claim that all agents share a path.
export const AGENT_PATHS = Object.freeze({
  codex: { project: '.agents/skills', user: '.agents/skills' },
  'claude-code': { project: '.claude/skills', user: '.claude/skills' },
  cursor: { project: '.cursor/skills', user: '.cursor/skills' },
  'github-copilot': { project: '.github/skills', user: '.copilot/skills' },
  'gemini-cli': { project: '.gemini/skills', user: '.gemini/skills' },
  opencode: { project: '.opencode/skills', user: '.config/opencode/skills' },
  'deepseek-harness': { project: '.dsh/skills', user: '.dsh/skills' },
  'kimi-code': { project: '.kimi-code/skills', user: '.kimi-code/skills' },
  'kimi-cli': { project: '.kimi/skills', user: '.kimi/skills' },
  'qwen-code': { project: '.qwen/skills', user: '.qwen/skills' },
  workbuddy: { project: '.codebuddy/skills', user: '.codebuddy/skills' },
  qoder: { project: '.qoder/skills', user: '.qoder/skills' },
  'trae-cn': { project: '.trae/skills', user: '.trae-cn/skills' },
  'trae-cli': { project: '.traecli/skills', user: '.traecli/skills' },
});

// WorkBuddy documents compatibility with these existing CodeBuddy directories.
// Retain the old flag without planning duplicate writes to the same destination.
export const AGENT_ALIASES = Object.freeze({ codebuddy: 'workbuddy' });
const canonicalAgents = (agents) => [...new Set(agents.map((agent) => AGENT_ALIASES[agent] ?? agent))];

const defaultPackageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const splitValues = (value) => value.split(',').map((part) => part.trim()).filter(Boolean);

export function assertNoTraversal(value, label = 'path') {
  if (typeof value !== 'string' || !value || value.includes('\0') || value.split(/[\\/]+/).includes('..')) {
    throw new Error(`Invalid ${label}: parent traversal and empty paths are not allowed.`);
  }
}

export function parseArgs(args) {
  const options = { agents: [], skills: [], scope: 'project', apply: false, list: false, help: false };
  for (let index = 0; index < args.length; index += 1) {
    const flag = args[index];
    if (['--apply', '--list', '--help', '-h'].includes(flag)) {
      options[flag === '-h' ? 'help' : flag.slice(2)] = true;
      continue;
    }
    if (!['--agent', '--scope', '--project', '--skill'].includes(flag)) throw new Error(`Unknown option: ${flag}`);
    const value = args[++index];
    if (!value || value.startsWith('--')) throw new Error(`Missing value for ${flag}.`);
    if (flag === '--agent' || flag === '--skill') {
      const values = splitValues(value);
      if (!values.length) throw new Error(`Missing name for ${flag}.`);
      options[flag === '--agent' ? 'agents' : 'skills'].push(...values);
    }
    if (flag === '--scope') options.scope = value;
    if (flag === '--project') options.project = value;
  }
  options.agents = canonicalAgents(options.agents);
  options.skills = options.skills.length ? [...new Set(options.skills)] : [...SKILL_NAMES];
  for (const agent of options.agents) {
    if (agent === 'deepseek') throw new Error('Choose deepseek-harness for the native Agent, or opencode/codex for a DeepSeek-backed host. See docs/DEEPSEEK.md.');
    if (!Object.hasOwn(AGENT_PATHS, agent)) throw new Error(`Unsupported agent: ${agent}`);
  }
  for (const skill of options.skills) if (!SKILL_NAMES.includes(skill)) throw new Error('Unknown skill name; use --list.');
  if (!['project', 'user'].includes(options.scope)) throw new Error('--scope must be project or user.');
  if (options.project) assertNoTraversal(options.project, 'project path');
  if (!options.help && !options.list) {
    if (!options.agents.length) throw new Error('--agent is required; use --list to see the skills.');
    if (options.scope === 'project' && !options.project) throw new Error('Project scope requires --project <path>.');
    if (options.scope === 'user' && options.project) throw new Error('--project is only valid with project scope.');
  }
  return options;
}

async function maybeStat(file) {
  try { return await lstat(file); } catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

export async function assertNoSymlink(file) {
  const absolute = path.resolve(file);
  const root = path.parse(absolute).root;
  let current = root;
  const parts = absolute.slice(root.length).split(path.sep).filter(Boolean);
  for (const part of [null, ...parts]) {
    if (part !== null) current = path.join(current, part);
    const stat = await maybeStat(current);
    if (!stat) return;
    if (stat.isSymbolicLink()) throw new Error('Symbolic links and junctions are not allowed in source or destination paths.');
  }
}

async function snapshot(directory) {
  await assertNoSymlink(directory);
  const stat = await maybeStat(directory);
  if (!stat?.isDirectory()) throw new Error('A skill source or existing destination is not a directory.');
  const files = new Map();
  const directories = new Set(['']);
  async function walk(current, relative) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      const child = relative ? `${relative}/${entry.name}` : entry.name;
      const childStat = await lstat(full);
      if (childStat.isSymbolicLink()) throw new Error('Symbolic links and junctions are not allowed in skill contents.');
      if (childStat.isDirectory()) { directories.add(child); await walk(full, child); }
      else if (childStat.isFile()) files.set(child, await readFile(full));
      else throw new Error('Only regular files and directories can be installed.');
    }
  }
  await walk(directory, '');
  return { files, directories };
}

function sameSnapshot(left, right) {
  return left.files.size === right.files.size && left.directories.size === right.directories.size
    && [...left.directories].every((entry) => right.directories.has(entry))
    && [...left.files].every(([entry, bytes]) => right.files.get(entry)?.equals(bytes));
}

function isInside(parent, child) {
  const relative = path.relative(parent, child);
  return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative));
}

export function resolveTargets({ agents, scope, project, homeDir = os.homedir(), skills = SKILL_NAMES }) {
  if (!['project', 'user'].includes(scope)) throw new Error('Invalid installation scope.');
  const base = scope === 'project' ? project : homeDir;
  assertNoTraversal(base, 'installation root');
  return canonicalAgents(agents).flatMap((agent) => {
    if (!Object.hasOwn(AGENT_PATHS, agent)) throw new Error(`Unsupported agent: ${agent}`);
    return [...new Set(skills)].map((skill) => {
      if (!SKILL_NAMES.includes(skill)) throw new Error('Invalid skill name.');
      return { agent, skill, destination: path.resolve(base, AGENT_PATHS[agent][scope], skill) };
    });
  });
}

export async function installSkills({
  agents, scope = 'project', project, skills = SKILL_NAMES, apply = false,
  packageRoot = defaultPackageRoot, homeDir = os.homedir(),
}) {
  assertNoTraversal(packageRoot, 'package path');
  const sourceRoot = path.resolve(packageRoot, 'skills');
  const targets = resolveTargets({ agents, scope, project, homeDir, skills });
  if (!targets.length) throw new Error('At least one agent and skill must be selected.');
  const base = path.resolve(scope === 'project' ? project : homeDir);
  await assertNoSymlink(base);
  if (!(await maybeStat(base))?.isDirectory()) throw new Error('The project or user installation root must already exist as a directory.');
  const sources = new Map();
  for (const skill of new Set(skills)) {
    const contents = await snapshot(path.join(sourceRoot, skill));
    if (!contents.files.has('SKILL.md')) throw new Error(`Missing SKILL.md for ${skill}.`);
    sources.set(skill, contents);
  }

  // Preflight the complete batch before creating even the first directory.
  const plan = [];
  for (const target of targets) {
    if (isInside(sourceRoot, target.destination) || isInside(target.destination, sourceRoot)) {
      throw new Error('Installation sources and destinations must not overlap.');
    }
    await assertNoSymlink(target.destination);
    const existing = await maybeStat(target.destination);
    if (existing) {
      const contents = await snapshot(target.destination);
      if (!sameSnapshot(sources.get(target.skill), contents)) throw new Error(`Destination conflict for ${target.agent}/${target.skill}; existing content was preserved.`);
      plan.push({ ...target, status: 'unchanged' });
    } else plan.push({ ...target, status: 'would-copy' });
  }
  if (!apply) return plan;

  for (const target of plan) {
    if (target.status === 'unchanged') continue;
    // Exclusive creates also refuse an unexpected destination created after preflight.
    await assertNoSymlink(path.dirname(target.destination));
    await mkdir(path.dirname(target.destination), { recursive: true });
    await assertNoSymlink(path.dirname(target.destination));
    await mkdir(target.destination);
    const source = sources.get(target.skill);
    for (const directory of [...source.directories].filter(Boolean).sort((a, b) => a.split('/').length - b.split('/').length)) {
      const destination = path.join(target.destination, ...directory.split('/'));
      await assertNoSymlink(destination);
      await mkdir(destination);
    }
    for (const [relative, bytes] of source.files) {
      const destination = path.join(target.destination, ...relative.split('/'));
      await assertNoSymlink(destination);
      await writeFile(destination, bytes, { flag: 'wx' });
    }
    target.status = 'copied';
  }
  return plan;
}

const usage = `Usage: node scripts/install.mjs --agent <agents> --scope project --project <path> [--skill <names>] [--apply]
       node scripts/install.mjs --agent <agents> --scope user [--skill <names>] [--apply]
       node scripts/install.mjs --list
Agents: ${Object.keys(AGENT_PATHS).join(', ')}
Names may be comma-separated. Without --apply, this only previews copies.
Existing identical skills are skipped. Conflicts and symlinks are refused.
Native default paths only: custom client roots require a manual copy.
DeepSeek: use deepseek-harness; the web chat/API has no local skills folder.
WorkBuddy: codebuddy is a compatible alias; both use the documented .codebuddy paths.
kimi-code is current; kimi-cli is the legacy Python client. trae-cn is the mainland IDE; trae-cli is the CLI.`;

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const options = parseArgs(process.argv.slice(2));
    if (options.help) console.log(usage);
    else if (options.list) console.log(SKILL_NAMES.join('\n'));
    else {
      const results = await installSkills(options);
      for (const result of results) console.log(`${result.status}: ${result.agent}/${result.skill} -> ${result.destination}`);
      if (!options.apply) console.log('Preview only. Add --apply to copy the skills.');
    }
  } catch (error) { console.error(`Install failed: ${error.message}`); process.exitCode = 1; }
}
