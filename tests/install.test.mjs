import test from 'node:test';
import assert from 'node:assert/strict';
import { access, lstat, mkdir, readFile, symlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { AGENT_PATHS, SKILL_NAMES, installSkills, parseArgs, resolveTargets } from '../scripts/install.mjs';
import { fixture } from './fixtures.mjs';

const first = SKILL_NAMES[0];
const options = (data, extra = {}) => ({ ...data, agents: ['codex'], scope: 'project', skills: [first], ...extra });
async function absent(file) { await assert.rejects(access(file), { code: 'ENOENT' }); }

test('arguments accept a selected agent and skill subset; copying requires --apply', () => {
  const parsed = parseArgs(['--agent', 'codex,cursor', '--scope', 'project', '--project', './demo', '--skill', first]);
  assert.deepEqual(parsed.agents, ['codex', 'cursor']);
  assert.deepEqual(parsed.skills, [first]);
  assert.equal(parsed.apply, false);
  assert.equal(parseArgs(['--list']).list, true);
  assert.deepEqual(parseArgs(['--agent', 'codex', '--scope', 'user']).skills, SKILL_NAMES);
  assert.throws(() => parseArgs(['--agent', 'codex']), /requires --project/);
  assert.throws(() => parseArgs(['--agent', 'unknown', '--scope', 'user']), /Unsupported agent/);
  assert.throws(() => parseArgs(['--agent', 'deepseek', '--scope', 'user']), /deepseek-harness/);
  assert.throws(() => parseArgs(['--agent', 'codex', '--scope', 'other']), /scope/);
  assert.throws(() => parseArgs(['--agent', 'codex', '--scope', 'user', '--project', './demo']), /only valid/);
  assert.throws(() => parseArgs(['--unknown']), /Unknown option/);
});

test('dry run performs no destination writes', async (t) => {
  const data = await fixture(t, [first]);
  const result = await installSkills(options(data));
  assert.equal(result[0].status, 'would-copy');
  await absent(path.join(data.project, '.agents'));
  await absent(path.join(data.homeDir, '.agents'));
});

test('WorkBuddy and its legacy flag resolve to one complete non-overwriting install', async (t) => {
  const data = await fixture(t, [first]);
  const parsed = parseArgs(['--agent', 'codebuddy,workbuddy', '--scope', 'user']);
  assert.deepEqual(parsed.agents, ['workbuddy']);
  const results = await installSkills(options(data, { agents: ['codebuddy', 'workbuddy'], apply: true }));
  assert.equal(results.length, 1);
  assert.equal(results[0].agent, 'workbuddy');
  assert.equal(results[0].destination, path.join(data.project, '.codebuddy', 'skills', first));
  const [second] = await installSkills(options(data, { agents: ['codebuddy'], apply: true }));
  assert.equal(second.status, 'unchanged');
});

test('apply copies the complete directory including references, metadata, assets and empty directories', async (t) => {
  const data = await fixture(t, [first]);
  const [result] = await installSkills(options(data, { apply: true }));
  assert.equal(result.status, 'copied');
  for (const file of ['SKILL.md', 'references/guide.md', 'agents/openai.yaml', 'assets/example.txt']) {
    assert.deepEqual(await readFile(path.join(result.destination, file)), await readFile(path.join(data.packageRoot, 'skills', first, file)));
  }
  assert.equal((await lstat(path.join(result.destination, 'assets/empty'))).isDirectory(), true);
  await writeFile(path.join(data.packageRoot, 'skills', first, 'assets/example.txt'), 'Source modified.');
  assert.equal(await readFile(path.join(result.destination, 'assets/example.txt'), 'utf8'), 'A supporting asset.\n');
});

test('identical second install safely skips all writes', async (t) => {
  const data = await fixture(t, [first]);
  const [initial] = await installSkills(options(data, { apply: true }));
  const file = path.join(initial.destination, 'SKILL.md');
  const before = await lstat(file);
  const [result] = await installSkills(options(data, { apply: true }));
  assert.equal(result.status, 'unchanged');
  assert.equal((await lstat(file)).mtimeMs, before.mtimeMs);
});

test('one conflicting destination blocks the complete batch before any copies', async (t) => {
  const data = await fixture(t, SKILL_NAMES.slice(0, 2));
  const conflict = path.join(data.project, '.cursor', 'skills', SKILL_NAMES[1]);
  await mkdir(conflict, { recursive: true });
  await writeFile(path.join(conflict, 'SKILL.md'), 'User-owned content.');
  await assert.rejects(installSkills(options(data, { agents: ['codex', 'cursor'], skills: SKILL_NAMES.slice(0, 2), apply: true })), /Destination conflict/);
  await absent(path.join(data.project, '.agents'));
  assert.equal(await readFile(path.join(conflict, 'SKILL.md'), 'utf8'), 'User-owned content.');
  await absent(path.join(data.project, '.cursor', 'skills', first));
});

test('extra existing content is preserved and refused', async (t) => {
  const data = await fixture(t, [first]);
  const [result] = await installSkills(options(data, { apply: true }));
  await writeFile(path.join(result.destination, 'user-note.txt'), 'Keep this.');
  await assert.rejects(installSkills(options(data, { apply: true })), /Destination conflict/);
  assert.equal(await readFile(path.join(result.destination, 'user-note.txt'), 'utf8'), 'Keep this.');
});

test('traversal is rejected through CLI inputs and exported target mapping', async (t) => {
  const data = await fixture(t, [first]);
  assert.throws(() => parseArgs(['--agent', 'codex', '--project', '../outside']), /traversal/);
  assert.throws(() => parseArgs(['--agent', 'codex', '--scope', 'user', '--skill', '../outside']), /Unknown skill/);
  assert.throws(() => resolveTargets({ agents: ['codex'], scope: 'project', project: data.project, skills: ['../outside'] }), /Invalid skill/);
  await assert.rejects(installSkills(options(data, { packageRoot: path.join(data.root, 'package', '..', 'package') + `${path.sep}..${path.sep}package` })), /traversal/);
  await absent(path.join(data.project, '.agents'));
});

test('source directory links are refused', async (t) => {
  const data = await fixture(t, [first]);
  const references = path.join(data.packageRoot, 'skills', first, 'linked-references');
  const outside = path.join(data.root, 'outside-references');
  await mkdir(outside);
  try { await symlink(outside, references, 'junction'); }
  catch (error) { if (['EPERM', 'EACCES', 'ENOSYS'].includes(error.code)) { t.skip('OS does not permit directory symlinks.'); return; } throw error; }
  await assert.rejects(installSkills(options(data, { apply: true })), /Symbolic links/);
  await absent(path.join(data.project, '.agents'));
});

test('destination ancestor links are refused without writing to their targets', async (t) => {
  const data = await fixture(t, [first]);
  const outside = path.join(data.root, 'outside-agent');
  await mkdir(outside);
  try { await symlink(outside, path.join(data.project, '.agents'), 'junction'); }
  catch (error) { if (['EPERM', 'EACCES', 'ENOSYS'].includes(error.code)) { t.skip('OS does not permit directory symlinks.'); return; } throw error; }
  await assert.rejects(installSkills(options(data, { apply: true })), /Symbolic links/);
  await absent(path.join(outside, 'skills'));
});

test('all fourteen product targets map and install to isolated project and fake-home roots', async (t) => {
  const data = await fixture(t, [first]);
  const expected = {
    codex: ['.agents/skills', '.agents/skills'],
    'claude-code': ['.claude/skills', '.claude/skills'],
    cursor: ['.cursor/skills', '.cursor/skills'],
    'github-copilot': ['.github/skills', '.copilot/skills'],
    'gemini-cli': ['.gemini/skills', '.gemini/skills'],
    opencode: ['.opencode/skills', '.config/opencode/skills'],
    'deepseek-harness': ['.dsh/skills', '.dsh/skills'],
    'kimi-code': ['.kimi-code/skills', '.kimi-code/skills'],
    'kimi-cli': ['.kimi/skills', '.kimi/skills'],
    'qwen-code': ['.qwen/skills', '.qwen/skills'],
    workbuddy: ['.codebuddy/skills', '.codebuddy/skills'],
    qoder: ['.qoder/skills', '.qoder/skills'],
    'trae-cn': ['.trae/skills', '.trae-cn/skills'],
    'trae-cli': ['.traecli/skills', '.traecli/skills'],
  };
  assert.deepEqual(Object.keys(AGENT_PATHS), Object.keys(expected));
  for (const scope of ['project', 'user']) {
    const results = await installSkills(options(data, { agents: Object.keys(expected), scope, apply: true }));
    for (const result of results) {
      const base = scope === 'project' ? data.project : data.homeDir;
      assert.equal(result.destination, path.join(base, expected[result.agent][scope === 'project' ? 0 : 1], first));
      assert.equal(result.status, 'copied');
      assert.equal((await lstat(path.join(result.destination, 'SKILL.md'))).isFile(), true);
    }
  }
});
