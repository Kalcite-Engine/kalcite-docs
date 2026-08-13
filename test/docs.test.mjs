import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { access } from 'node:fs/promises';

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

test('Kally user references exist and state delivery status', async () => {
  const pages = [
    'manifest.md',
    'scenes-and-nodes.md',
    'memory-and-pools.md',
    'assets-input-and-saves.md',
    'native-code.md',
    'platforms.md',
    'build-reports.md',
    'testing.md',
  ];

  for (const page of pages) {
    const url = new URL(`../src/content/docs/reference/${page}`, import.meta.url);
    await access(url);
    const content = await readFile(url, 'utf8');
    assert.match(content, /Current|Work in progress|Planned/);
  }
});

test('Kally tutorials are present and do not overstate UI delivery', async () => {
  const settings = await readFile(
    new URL('../src/content/docs/tutorials/settings-ui.md', import.meta.url),
    'utf8',
  );
  assert.match(settings, /Work in progress/);
  for (const page of ['first-game.md', 'numworks.md']) {
    await access(new URL(`../src/content/docs/tutorials/${page}`, import.meta.url));
  }
});

test('Kally is the explicit current documentation line', async () => {
  const [version, header, release] = await Promise.all([
    readFile(new URL('../src/config/version.ts', import.meta.url), 'utf8'),
    readFile(new URL('../src/components/KallyHeader.astro', import.meta.url), 'utf8'),
    readFile(new URL('../src/content/docs/releases/kally.md', import.meta.url), 'utf8'),
  ]);

  assert.match(version, /codeName: 'Kally'/);
  assert.match(version, /version: '0\.14'/);
  assert.match(header, /Select documentation version/);
  assert.match(release, /current Kalcite documentation line/);
});
