import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SKILL_NAMES, installSkills, parseArgs, resolveTargets } from '../scripts/install.mjs';
import { validatePackage } from '../scripts/validate.mjs';
import { fixture } from './fixtures.mjs';

const packageRoot = fileURLToPath(new URL('../', import.meta.url));
const expected = ['fullstack-frontend-development', 'fullstack-design-style', 'fullstack-backend-development'];
const retired = ['fullstack-workflow', 'fullstack-ui-review', 'fullstack-liquid-glass-design',
  'fullstack-editor-reliability', 'fullstack-content-sync', 'fullstack-release',
  'fullstack-ai-safety', 'fullstack-security-review', 'fullstack-maintenance'];

test('exactly three discoverable source folders match the default and explicit installation catalog', async () => {
  assert.deepEqual(SKILL_NAMES, expected);
  const directories = (await readdir(path.join(packageRoot, 'skills'), { withFileTypes: true })).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  assert.deepEqual(directories, [...expected].sort());
  assert.deepEqual(parseArgs(['--agent', 'codex', '--scope', 'user']).skills, expected);
  for (const name of expected) assert.deepEqual(parseArgs(['--agent', 'codex', '--scope', 'user', '--skill', name]).skills, [name]);
});

test('retired skill names are explained rather than silently expanded into a broader installation', () => {
  for (const name of retired) {
    assert.throws(() => parseArgs(['--agent', 'codex', '--scope', 'user', '--skill', name]), /retired.*MIGRATION/);
    assert.throws(() => resolveTargets({ agents: ['codex'], scope: 'project', project: '.', skills: [name] }), /retired.*MIGRATION/);
  }
});

test('upgrading adds complete current entries without deleting a customized old installed skill', async (t) => {
  const data = await fixture(t, []);
  const oldFile = path.join(data.project, '.agents', 'skills', retired[0], 'SKILL.md');
  await mkdir(path.dirname(oldFile), { recursive: true });
  const customized = 'Locally customized old skill; preserve this.\n';
  await writeFile(oldFile, customized);
  const results = await installSkills({ packageRoot, project: data.project, agents: ['codex'], apply: true });
  assert.equal(results.length, 3);
  assert.ok(results.every((entry) => entry.status === 'copied'));
  assert.equal(await readFile(oldFile, 'utf8'), customized);
  const installed = await readdir(path.dirname(path.dirname(oldFile)));
  assert.deepEqual(installed.sort(), [...expected, retired[0]].sort());
});

test('small shared delivery, interaction and release resources stay identical in independently installed development skills', async () => {
  for (const file of ['references/delivery.md', 'references/interaction-checks.md', 'references/release-state.md', 'assets/project-contract.md', 'assets/release-record.md']) {
    const frontend = path.join(packageRoot, 'skills', expected[0], file);
    const backend = path.join(packageRoot, 'skills', expected[2], file);
    assert.deepEqual(await readFile(frontend), await readFile(backend), file);
  }
});

test('payload validation refuses an accidentally reintroduced retired entry', async (t) => {
  const data = await fixture(t);
  const oldFile = path.join(data.packageRoot, 'skills', retired[0], 'SKILL.md');
  await mkdir(path.dirname(oldFile), { recursive: true });
  await writeFile(oldFile, '# Retired entry should not be discoverable.\n');
  const findings = await validatePackage(data.packageRoot);
  assert.ok(findings.some((entry) => entry.rule === 'unexpected-skill' && entry.file.includes(retired[0])));
});

test('all three README catalogs link to exactly the current entry folders', async () => {
  for (const file of ['README.md', 'README.zh-CN.md', 'README.zh-TW.md']) {
    const text = await readFile(path.join(packageRoot, file), 'utf8');
    const linkedNames = [...new Set([...text.matchAll(/\]\(skills\/([^/]+)\/SKILL\.md\)/g)].map((match) => match[1]))].sort();
    assert.deepEqual(linkedNames, [...expected].sort(), file);
  }
});
