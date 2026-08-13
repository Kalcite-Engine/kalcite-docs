import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('docs homepage labels planned support honestly', async () => {
  const page = await readFile(new URL('../src/content/docs/index.md', import.meta.url), 'utf8');
  assert.match(page, /Planned/);
});

test('applications roadmap labels its implementation status', async () => {
  const page = await readFile(
    new URL('../src/content/docs/roadmap/applications-and-ui.md', import.meta.url),
    'utf8',
  );
  assert.match(page, /Current foundations/);
  assert.match(page, /Work in progress/);
  assert.match(page, /Planned UI work/);
});
