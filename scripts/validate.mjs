#!/usr/bin/env node
import { lstat, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SKILL_NAMES, assertNoSymlink } from './install.mjs';

const defaultPackageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const REQUIRED_FILES = Object.freeze([
  'README.md', 'README.zh-CN.md', 'README.zh-TW.md', 'LICENSE', 'package.json',
  'CONTRIBUTING.md', 'SECURITY.md', 'docs/COMPATIBILITY.md', 'docs/VALIDATION.md',
  'docs/PROVENANCE.md', 'scripts/install.mjs', 'scripts/validate.mjs',
  'docs/DEEPSEEK.md', 'docs/PUBLISH.zh-CN.md',
  'docs/WORKBUDDY.md', 'scripts/check-links.mjs',
  'docs/MIGRATION.md',
]);

// Deliberately limited to this package's portable scalar frontmatter. This is
// not a general YAML parser; also run the official Python skill validator.
export function parsePortableFrontmatter(text) {
  const lines = text.split(/\r?\n/);
  if (lines[0] !== '---') throw new Error('frontmatter-start');
  const end = lines.indexOf('---', 1);
  if (end < 0) throw new Error('frontmatter-end');
  const fields = {};
  for (const line of lines.slice(1, end)) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const match = /^([a-z][a-z0-9-]*):[ ]*(.+)$/.exec(line);
    if (!match || Object.hasOwn(fields, match[1])) throw new Error('frontmatter-scalar');
    const [, key, raw] = match;
    let value;
    if (raw.startsWith('"')) { try { value = JSON.parse(raw); } catch { throw new Error('frontmatter-scalar'); } }
    else if (raw.startsWith("'")) {
      if (!/^'(?:[^']|'')*'$/.test(raw)) throw new Error('frontmatter-scalar');
      value = raw.slice(1, -1).replaceAll("''", "'");
    } else {
      if (/^[\[\]{}|>&*!@`]/.test(raw) || /:\s|\s#|\t/.test(raw)
        || /^(?:true|false|null|~|[-+]?\d+(?:\.\d+)?)$/i.test(raw.trim())) throw new Error('frontmatter-scalar');
      value = raw.trim();
    }
    if (typeof value !== 'string' || !value.trim()) throw new Error('frontmatter-scalar');
    fields[key] = value;
  }
  return fields;
}

const SCAN_RULES = Object.freeze([
  ['private-key', /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/],
  ['github-token', /(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})/],
  ['api-secret', /\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{20,}/],
  ['aws-access-key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
  ['private-user-path', /(?<![A-Za-z0-9])(?:[A-Za-z]:[\\/]Users[\\/][^\s<>"'\\/]+[\\/]|\/(?:Users|home)\/[^\s<>"'/]+\/)/i],
  ['email-address-review', /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/],
  ['url-credential', /https?:\/\/[^\s/]+:[^\s/@]+@/i],
  ['hardcoded-secret', /(?:api[_-]?key|access[_-]?token|auth[_-]?token|client[_-]?secret|password|secret)\s*[:=]\s*["'](?!(?:<|\$\{|YOUR_|REPLACE_|EXAMPLE_|process\.env|\.\.\.))[^"'\r\n]{12,}["']/i],
]);

export function scanText(file, text) {
  const findings = [];
  text.split(/\r?\n/).forEach((line, index) => {
    for (const [rule, pattern] of SCAN_RULES) if (pattern.test(line)) findings.push({ file, line: index + 1, rule });
  });
  return findings;
}

export function formatIssue(issue) { return `${issue.file}:${issue.line}:${issue.rule}`; }

function inside(parent, child) {
  const relative = path.relative(parent, child);
  return relative === '' || (relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative));
}

function linksIn(text) {
  // Remove fenced and inline code so example syntax is not treated as a link.
  const withoutCode = text.replace(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\2[^\n]*$/gm, '')
    .replace(/`+[^`\n]*`+/g, '');
  const links = [];
  for (const match of withoutCode.matchAll(/!?\[[^\]\n]*\]\((<[^>]+>|[^)\n]+)\)/g)) links.push(match[1]);
  for (const match of withoutCode.matchAll(/^\s{0,3}\[[^\]]+\]:\s*(<[^>]+>|\S+)/gm)) links.push(match[1]);
  return links;
}

async function walkPackage(root, issues) {
  const files = new Map();
  async function walk(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      // Repository history is not part of this publishable payload. Do not read
      // private commit metadata or object storage when checking a fresh clone.
      if (current === root && entry.name === '.git') continue;
      const full = path.join(current, entry.name);
      const relative = path.relative(root, full).split(path.sep).join('/');
      const stat = await lstat(full);
      if (stat.isSymbolicLink()) { issues.push({ file: relative, line: 1, rule: 'symlink' }); continue; }
      if (stat.isDirectory()) await walk(full);
      else if (stat.isFile()) files.set(relative, await readFile(full));
      else issues.push({ file: relative, line: 1, rule: 'non-regular-file' });
    }
  }
  await walk(root);
  return files;
}

export async function validatePackage(packageRoot = defaultPackageRoot) {
  const root = path.resolve(packageRoot);
  const issues = [];
  try { await assertNoSymlink(root); } catch { return [{ file: '.', line: 1, rule: 'symlink' }]; }
  const files = await walkPackage(root, issues);
  const add = (file, rule, line = 1) => issues.push({ file, line, rule });
  for (const file of REQUIRED_FILES) if (!files.has(file)) add(file, 'required-file');
  if (files.has('package.json')) {
    try {
      const metadata = JSON.parse(files.get('package.json').toString('utf8'));
      if (metadata.license !== 'MIT') add('package.json', 'package-license');
    } catch { add('package.json', 'package-json'); }
  }
  for (const name of SKILL_NAMES) {
    const prefix = `skills/${name}/`;
    const file = `${prefix}SKILL.md`;
    if (!files.has(file)) { add(file, 'required-skill'); continue; }
    if (![...files.keys()].some((entry) => entry.startsWith(`${prefix}references/`))) add(`${prefix}references`, 'required-references');
    if (!files.has(`${prefix}agents/openai.yaml`)) add(`${prefix}agents/openai.yaml`, 'required-metadata');
    const text = files.get(file).toString('utf8');
    if (text.split(/\r?\n/).length > 500) add(file, 'skill-line-limit');
    try {
      const fields = parsePortableFrontmatter(text);
      for (const key of ['name', 'description', 'license']) if (!fields[key]) add(file, `required-${key}`);
      if (fields.name !== name || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(fields.name ?? '') || (fields.name?.length ?? 0) > 64) add(file, 'skill-name');
      if ((fields.description?.length ?? 0) > 1024) add(file, 'description-limit');
      if (fields.license && fields.license !== 'MIT') add(file, 'skill-license');
    } catch (error) { add(file, error.message); }
  }
  for (const [file, bytes] of files) {
    if (file.startsWith('skills/') && !SKILL_NAMES.includes(file.split('/')[1])) add(file, 'unexpected-skill');
    if (/\.(?:db|db3|sqlite|sqlite3|mdb|accdb|dump|backup)$/i.test(file)) add(file, 'database-file');
    if (/(?:^|\/)\.env(?:\.(?!example$|sample$|template$)[^/]+)?$|\.(?:pem|p12|pfx|key)$/i.test(file)) add(file, 'private-material-file');
    const text = bytes.toString('utf8');
    if (bytes.includes(0) || !Buffer.from(text, 'utf8').equals(bytes)
      || /\.(?:exe|dll|so|dylib|zip|gz|tar|7z|pdf|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|mp[34]|mov)$/i.test(file)) {
      add(file, 'binary-file'); continue;
    }
    issues.push(...scanText(file, text));
    if (!file.endsWith('.md')) continue;
    const parts = file.split('/');
    const boundary = parts[0] === 'skills' && SKILL_NAMES.includes(parts[1]) ? path.join(root, 'skills', parts[1]) : root;
    for (let target of linksIn(text)) {
      target = target.startsWith('<') ? target.slice(1, target.indexOf('>')) : target.trim().split(/\s+["']/)[0];
      if (!target || target.startsWith('#') || /^(?:https?:|mailto:)/i.test(target)) continue;
      if (/^[a-z][a-z0-9+.-]*:|^[\\/]/i.test(target)) { add(file, 'absolute-link'); continue; }
      try { target = decodeURIComponent(target.split(/[?#]/)[0]); } catch { add(file, 'invalid-link'); continue; }
      const resolved = path.resolve(path.dirname(path.join(root, file)), target);
      if (!inside(boundary, resolved)) { add(file, 'link-outside-skill'); continue; }
      try {
        await assertNoSymlink(resolved);
        await lstat(resolved);
      } catch { add(file, 'missing-or-unsafe-link'); }
    }
  }
  return issues.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || a.rule.localeCompare(b.rule));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (process.argv.length > 2) throw new Error('Run this validator without arguments from the package; it checks its own package root.');
    const issues = await validatePackage();
    if (issues.length) { for (const issue of issues) console.error(formatIssue(issue)); process.exitCode = 1; }
    else console.log(`Validated ${SKILL_NAMES.length} skills, required package files, links, and content scans.`);
    console.log('Frontmatter validation is limited to portable scalars; also run the official Python skill validator.');
  } catch { console.error('.:1:validation-error'); process.exitCode = 1; }
}
