import test from 'node:test';
import assert from 'node:assert/strict';
import { lstat, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { AGENT_PATHS, SKILL_NAMES, installSkills } from '../scripts/install.mjs';
import { fixture } from './fixtures.mjs';

const packageRoot = fileURLToPath(new URL('../', import.meta.url));

async function compareTree(source, destination) {
  const entries = await readdir(source, { withFileTypes: true });
  assert.deepEqual((await readdir(destination)).sort(), entries.map((entry) => entry.name).sort());
  for (const entry of entries) {
    const original = path.join(source, entry.name);
    const copy = path.join(destination, entry.name);
    assert.equal(entry.isSymbolicLink(), false);
    if (entry.isDirectory()) {
      assert.equal((await lstat(copy)).isDirectory(), true);
      await compareTree(original, copy);
    } else {
      assert.deepEqual(await readFile(copy), await readFile(original));
    }
  }
}

test('the actual release skills relocate intact into every documented product directory', async (t) => {
  const data = await fixture(t, []);
  const results = await installSkills({
    packageRoot,
    project: data.project,
    homeDir: data.homeDir,
    agents: Object.keys(AGENT_PATHS),
    scope: 'project',
    skills: SKILL_NAMES,
    apply: true,
  });
  assert.equal(results.length, SKILL_NAMES.length * Object.keys(AGENT_PATHS).length);
  for (const result of results) {
    assert.equal(result.status, 'copied');
    const name = path.basename(result.destination);
    await compareTree(path.join(packageRoot, 'skills', name), result.destination);
    assert.deepEqual(await readFile(path.join(result.destination, 'LICENSE')), await readFile(path.join(packageRoot, 'LICENSE')));
    const entry = await readFile(path.join(result.destination, 'SKILL.md'), 'utf8');
    for (const match of entry.matchAll(/\]\((references\/[^)]+|assets\/[^)]+|scripts\/[^)]+)\)/g)) {
      assert.equal((await lstat(path.join(result.destination, match[1]))).isFile(), true);
    }
  }
});
