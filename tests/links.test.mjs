import test from 'node:test';
import assert from 'node:assert/strict';
import { extractMarkdownLinks, checkUrl } from '../scripts/check-links.mjs';

test('public Markdown links are deduced from prose rather than code examples', () => {
  const source = '[Guide](https://docs.example.org/guide)\n```text\n[Example](https://docs.example.org/not-used)\n```\n';
  assert.deepEqual(extractMarkdownLinks(source), ['https://docs.example.org/guide']);
});

test('redirects are followed without credentials and the final HTTP status is checked', async () => {
  const calls = [];
  const result = await checkUrl('https://docs.example.org/old', async (url, options) => {
    calls.push(url);
    assert.equal(options.redirect, 'manual');
    assert.equal(Object.keys(options.headers).some((key) => key.toLowerCase() === 'authorization'), false);
    return url.endsWith('/old') ? new Response(null, { status: 302, headers: { location: '/guide' } }) : new Response(null, { status: 200 });
  });
  assert.equal(result.ok, true);
  assert.equal(result.finalUrl, 'https://docs.example.org/guide');
  assert.equal(calls.length, 2);
  assert.equal((await checkUrl('https://docs.example.org/missing', async () => new Response(null, { status: 404 }))).ok, false);
});

test('unsafe redirects, failed requests and redirect loops terminate without requesting private targets', async () => {
  assert.equal((await checkUrl('https://docs.example.org/guide', async () => new Response(null, { status: 302, headers: { location: 'http://127.0.0.1/' } }))).reason, 'unsafe-redirect');
  assert.equal((await checkUrl('https://docs.example.org/guide', async () => { throw new Error('offline'); })).reason, 'request-failed');
  assert.equal((await checkUrl('https://docs.example.org/guide', async () => new Response(null, { status: 302, headers: { location: '/guide' } }))).reason, 'redirect-loop');
});
