/**
 * The single public documentation release line for this site.
 *
 * Keep this synchronized with the root workspace version and docs/VERSIONING.md.
 * A released line becomes immutable and is published from its matching tag.
 */
export const currentDocumentationVersion = {
  codeName: 'Kally',
  version: '0.14',
  label: 'Kally 0.14',
  status: 'Current documentation',
  branch: 'main',
} as const;

export const documentationVersions = [
  {
    ...currentDocumentationVersion,
    href: '/',
    current: true,
  },
  {
    codeName: 'Development',
    version: 'next',
    label: 'Development snapshot',
    status: 'Unreleased source',
    href: 'https://github.com/kalcite-lang/kalcite/tree/main/kalcite-docs',
    current: false,
  },
] as const;
