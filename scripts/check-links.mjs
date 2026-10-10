#!/usr/bin/env node
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { isIP } from 'node:net';
import { fileURLToPath } from 'node:url';
import { validatePackage, formatIssue } from './validate.mjs';

export function extractMarkdownLinks(markdown) {
  const prose = markdown.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[^\n]*$/gm, '').replace(/`[^`\n]+`/g, '');
  return [...prose.matchAll(/\[[^\]\n]*\]\((https:\/\/[^\s)]+)\)/g)].map((match) => match[1]);
}

function publicHttps(input) {
  const url = new URL(input);
  const host = url.hostname.replace(/^\[|\]$/g, '');
  if (url.protocol !== 'https:' || url.username || url.password || isIP(host)
      || host === 'localhost' || !host.includes('.') || /\.(?:local|internal|localhost)$/i.test(host)) {
    throw new Error('unsafe-target');
  }
  return url;
}

export async function checkUrl(input, fetcher = fetch) {
  let current;
  try { current = publicHttps(input); } catch { return { ok: false, reason: 'unsafe-target' }; }
  const original = current.href;
  const visited = new Set();
  for (let redirects = 0; redirects <= 6; redirects += 1) {
    if (visited.has(current.href)) return { url: original, ok: false, reason: 'redirect-loop' };
    visited.add(current.href);
    let response;
    try {
      response = await fetcher(current.href, {
        redirect: 'manual', signal: AbortSignal.timeout(15000),
        headers: { 'User-Agent': 'fullstack-site-skills-link-check/1.0' },
      });
    } catch { return { url: original, ok: false, reason: 'request-failed' }; }
    const location = response.headers.get('location');
    await response.body?.cancel();
    if ([301, 302, 303, 307, 308].includes(response.status) && location) {
      try { current = publicHttps(new URL(location, current).href); }
      catch { return { url: original, ok: false, reason: 'unsafe-redirect' }; }
      continue;
    }
    return { url: original, ok: response.ok, status: response.status, finalUrl: current.href };
  }
  return { url: original, ok: false, reason: 'redirect-limit' };
}

async function urlsInPackage(root) {
  const urls = new Set();
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(file);
      else if (entry.isFile() && entry.name.endsWith('.md')) {
        for (const url of extractMarkdownLinks(await readFile(file, 'utf8'))) urls.add(url);
      }
    }
  }
  await walk(root);
  return [...urls].sort();
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length > 1 || (args.length === 1 && args[0] !== '--local-only')) throw new Error('Use no arguments or --local-only.');
  const root = fileURLToPath(new URL('../', import.meta.url));
  const issues = await validatePackage(root);
  if (issues.length) {
    for (const issue of issues) console.error(formatIssue(issue));
    process.exitCode = 1; return;
  }
  console.log('Local files and Markdown targets are valid.');
  if (args[0] === '--local-only') return;
  const urls = await urlsInPackage(root);
  const queue = [...urls], results = [];
  await Promise.all(Array.from({ length: Math.min(6, queue.length) }, async () => {
    while (queue.length) {
      const url = queue.shift();
      const result = await checkUrl(url);
      results.push(result);
      console.log(`${result.ok ? 'OK' : 'CHECK'} ${result.status ?? result.reason} ${url}`);
    }
  }));
  const failed = results.filter((result) => !result.ok);
  console.log(`Public HTTPS links: ${results.length - failed.length}/${results.length} reachable from this network.`);
  process.exitCode = failed.length ? 1 : 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(() => { console.error('Link check failed; inspect paths, permissions and network connectivity.'); process.exitCode = 1; });
}
