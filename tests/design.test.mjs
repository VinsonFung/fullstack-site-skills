import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const stylesheet = await readFile(new URL('../skills/fullstack-design-style/assets/glass-tokens.css', import.meta.url), 'utf8');
const css = stylesheet.replace(/\/\*[\s\S]*?\*\//g, '');
const blocks = [...css.matchAll(/(\[data-fsg-theme(?:="dark")?\])\s*\{([^}]+)\}/g)];
const tokens = (block) => Object.fromEntries([...block.matchAll(/(--fsg-[\w-]+)\s*:\s*([^;]+);/g)].map((entry) => [entry[1], entry[2].trim()]));
const light = tokens(blocks[0][2]);
const darkOverrides = tokens(blocks[1][2]);
const dark = { ...light, ...darkOverrides };

function luminance(hex) {
  assert.match(hex, /^#[\da-f]{6}$/i);
  const linear = hex.slice(1).match(/../g).map((channel) => {
    const srgb = parseInt(channel, 16) / 255;
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}
function contrast(first, second) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

test('optional design tokens are scoped and introduce no remote assets or global element styles', () => {
  assert.equal(blocks.length, 3);
  assert.deepEqual(blocks.map((block) => block[1]), ['[data-fsg-theme]', '[data-fsg-theme="dark"]', '[data-fsg-theme]']);
  assert.equal(/@import\b|\burl\s*\(|https?:/i.test(css), false);
  const residue = css.replace(/\[data-fsg-theme(?:="dark")?\]\s*\{[^}]+\}/g, '').replace(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{|\}|\s+/g, '');
  assert.equal(residue, '');
  assert.ok(Object.keys(light).length > 30);
});

test('dark palette overrides only shared paint roles; reduced motion changes durations rather than geometry', () => {
  assert.ok(Object.keys(darkOverrides).length > 10);
  for (const name of Object.keys(darkOverrides)) {
    assert.ok(Object.hasOwn(light, name), `Dark role has no light counterpart: ${name}`);
    assert.equal(/font|space|text-|leading|radius|touch|blur|duration|ease/.test(name), false);
  }
  const reduced = tokens(blocks[2][2]);
  assert.deepEqual(Object.keys(reduced), ['--fsg-duration-feedback', '--fsg-duration-panel']);
  for (const name of Object.keys(reduced)) {
    assert.ok(parseFloat(reduced[name]) <= 100);
    assert.ok(parseFloat(reduced[name]) < parseFloat(light[name]));
  }
});

test('starter foreground roles meet solid-surface text and focus contrast in both palettes', () => {
  for (const [themeName, theme] of [['light', light], ['dark', dark]]) {
    for (const foreground of ['ink', 'muted', 'accent', 'error', 'success']) {
      for (const background of ['page', 'surface', 'field', 'glass-fallback']) {
        const value = contrast(theme[`--fsg-${foreground}`], theme[`--fsg-${background}`]);
        assert.ok(value >= 4.5, `${themeName} ${foreground} on ${background}: ${value.toFixed(2)}:1`);
      }
    }
    assert.ok(contrast(theme['--fsg-accent-ink'], theme['--fsg-accent']) >= 4.5);
    for (const background of ['page', 'surface', 'field', 'glass-fallback']) {
      assert.ok(contrast(theme['--fsg-focus'], theme[`--fsg-${background}`]) >= 3);
    }
  }
});
