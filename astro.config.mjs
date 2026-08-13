import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
const base = process.env.SITE_BASE ?? '/kalcite-docs';
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://kalcite-lang.github.io',
  base,
  integrations: [
    starlight({
      title: 'Kalcite documentation',
      customCss: ['./src/styles/custom.css'],
      social: { github: 'https://github.com/kalcite-lang' },
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'What is Kalcite?', link: '/intro/' },
            { label: 'Architecture overview', link: '/architecture/' },
            { label: 'Applications and UI roadmap', link: '/roadmap/applications-and-ui/' },
          ],
        },
        { label: 'Getting started', autogenerate: { directory: 'getting-started' } },
        { label: 'Language guide', autogenerate: { directory: 'language' } },
        { label: 'Reference', autogenerate: { directory: 'reference' } },
        { label: 'Toolchain & targets', autogenerate: { directory: 'toolchain' } },
        { label: 'Contributors', autogenerate: { directory: 'contributors' } },
      ],
    }),
  ],
});
