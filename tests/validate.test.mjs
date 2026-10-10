import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { SKILL_NAMES } from '../scripts/install.mjs';
import { formatIssue, parsePortableFrontmatter, scanText, validatePackage } from '../scripts/validate.mjs';
import { fixture } from './fixtures.mjs';

test('privacy findings are redacted for email addresses and credential-bearing URLs', () => {
  const address = 'owner' + '@' + 'example.invalid';
  const url = 'https' + '://' + 'example:placeholder' + '@' + 'example.invalid';
  const findings = scanText('example.md', `${address}\n${url}`);
  assert.ok(findings.some((issue) => issue.rule === 'email-address-review'));
  assert.ok(findings.some((issue) => issue.rule === 'url-credential'));
  const diagnostics = findings.map(formatIssue).join('\n');
  assert.equal(diagnostics.includes(address), false);
  assert.equal(diagnostics.includes(url), false);
  assert.deepEqual(scanText('guide.md', 'See https://docs.example.invalid/en/users/features/skills/'), []);
});

test('a cloned repository validates its release payload without reading root Git history', async (t) => {
  const { packageRoot } = await fixture(t);
  const gitDir = path.join(packageRoot, '.git');
  await mkdir(gitDir);
  const opaque = Buffer.from([0, 255, 17]);
  const history = path.join(gitDir, 'test-object');
  await writeFile(history, opaque);
  assert.deepEqual(await validatePackage(packageRoot), []);
  assert.deepEqual(await readFile(history), opaque);
});

test('portable scalar parser accepts common safe string forms and rejects nonportable YAML', () => {
  assert.deepEqual(parsePortableFrontmatter('---\nname: example\ndescription: "Use this: carefully."\nlicense: \'MIT\'\n---\n'), { name: 'example', description: 'Use this: carefully.', license: 'MIT' });
  for (const value of ['|', '>', '[a,b]', '{nested: value}', 'true', '1', 'text: extra']) {
    assert.throws(() => parsePortableFrontmatter(`---\nname: example\ndescription: ${value}\n---\n`), /frontmatter-scalar/);
  }
  assert.throws(() => parsePortableFrontmatter('---\nname: a\nname: b\n---\n'), /frontmatter-scalar/);
  assert.throws(() => parsePortableFrontmatter('# Title\n---\nname: a\n---\n'), /frontmatter-start/);
});

test('a complete isolated package passes; private npm metadata is acceptable', async (t) => {
  const data = await fixture(t);
  assert.deepEqual(await validatePackage(data.packageRoot), []);
});

test('missing references and links outside an individual skill are reported', async (t) => {
  const data = await fixture(t);
  const skillFile = path.join(data.packageRoot, 'skills', SKILL_NAMES[0], 'SKILL.md');
  await writeFile(skillFile, `${await readFile(skillFile, 'utf8')}\n[missing](references/absent.md)\n[outside](../../README.md)\n`);
  const issues = await validatePackage(data.packageRoot);
  assert.equal(issues.some((issue) => issue.rule === 'missing-or-unsafe-link'), true);
  assert.equal(issues.some((issue) => issue.rule === 'link-outside-skill'), true);
});

test('sensitive scanning and formatted diagnostics never echo matched values', async (t) => {
  const data = await fixture(t);
  const token = ['gh', 'p_'].join('') + 'Q'.repeat(32);
  const privatePath = ['/', 'home', '/', 'a-private-user', '/', 'project'].join('');
  const contents = `token=${token}\nlocal=${privatePath}\n`;
  const findings = scanText('example.md', contents);
  assert.deepEqual(findings.map((finding) => finding.rule), ['github-token', 'private-user-path']);
  assert.deepEqual(findings.map((finding) => finding.line), [1, 2]);
  const output = findings.map(formatIssue).join('\n');
  assert.equal(output.includes(token), false);
  assert.equal(output.includes(privatePath), false);
  assert.deepEqual(Object.keys(findings[0]), ['file', 'line', 'rule']);
  await writeFile(path.join(data.packageRoot, 'docs', 'fixture-secret.md'), contents);
  const issues = await validatePackage(data.packageRoot);
  assert.equal(JSON.stringify(issues).includes(token), false);
  assert.equal(JSON.stringify(issues).includes(privatePath), false);
});

test('scalar metadata, line limit, databases and binary bytes are checked', async (t) => {
  const data = await fixture(t);
  const skillFile = path.join(data.packageRoot, 'skills', SKILL_NAMES[0], 'SKILL.md');
  await writeFile(skillFile, `---\nname: wrong-name\ndescription: A fixture.\nlicense: MIT\n---\n${'line\n'.repeat(501)}`);
  await writeFile(path.join(data.packageRoot, 'fixture.sqlite'), Buffer.from([0, 1, 2]));
  const rules = new Set((await validatePackage(data.packageRoot)).map((issue) => issue.rule));
  for (const rule of ['skill-name', 'skill-line-limit', 'database-file', 'binary-file']) assert.equal(rules.has(rule), true);
});
