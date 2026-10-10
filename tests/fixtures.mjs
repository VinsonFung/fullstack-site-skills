import { mkdtemp, mkdir, realpath, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { REQUIRED_FILES } from '../scripts/validate.mjs';
import { SKILL_NAMES } from '../scripts/install.mjs';

export async function fixture(test, names = SKILL_NAMES) {
  const tempBase = await realpath(os.tmpdir());
  const root = await mkdtemp(path.join(tempBase, 'fullstack-skills-test-'));
  test.after(async () => {
    if (path.dirname(root) !== tempBase || !path.basename(root).startsWith('fullstack-skills-test-')) {
      throw new Error('Refusing cleanup outside the isolated test fixture.');
    }
    await rm(root, { recursive: true, force: true });
  });
  const packageRoot = path.join(root, 'package');
  const project = path.join(root, 'project');
  const homeDir = path.join(root, 'fake-home');
  await Promise.all([packageRoot, project, homeDir].map((directory) => mkdir(directory)));
  for (const file of REQUIRED_FILES) {
    await mkdir(path.dirname(path.join(packageRoot, file)), { recursive: true });
    const content = file === 'package.json' ? JSON.stringify({ name: 'fixture', license: 'MIT', private: true, engines: { node: '>=20' } }) : 'Fixture content.\n';
    await writeFile(path.join(packageRoot, file), content);
  }
  for (const name of names) {
    const skill = path.join(packageRoot, 'skills', name);
    await mkdir(path.join(skill, 'references'), { recursive: true });
    await mkdir(path.join(skill, 'agents'));
    await mkdir(path.join(skill, 'assets', 'empty'), { recursive: true });
    await writeFile(path.join(skill, 'SKILL.md'), `---\nname: ${name}\ndescription: Portable fixture workflow for tests.\nlicense: MIT\n---\n\nRead [guide](references/guide.md).\n`);
    await writeFile(path.join(skill, 'references', 'guide.md'), 'A complete supporting reference.\n');
    await writeFile(path.join(skill, 'agents', 'openai.yaml'), 'interface:\n  display_name: "Fixture"\n');
    await writeFile(path.join(skill, 'assets', 'example.txt'), 'A supporting asset.\n');
  }
  return { root, packageRoot, project, homeDir };
}
