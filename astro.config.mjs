// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // Hosted on GitHub Pages behind the custom domain docs.calypsoide.tech.
  // Because it serves from the root of that subdomain, no `base` is needed.
  site: 'https://docs.calypsoide.tech',
  integrations: [
    starlight({
      title: 'Calypso IDE',
      description:
        'A phone-first code editor for Android — write, run and version code from your phone.',
      // logo: { src: './src/assets/logo.png', replacesTitle: false },
      // social: { github: 'https://github.com/your/repo' },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'What is Calypso?', slug: 'index' },
            { label: 'Getting started', slug: 'getting-started' },
          ],
        },
        {
          label: 'AI assistant',
          items: [
            { label: 'AI assistant & agent', slug: 'ai-assistant' },
          ],
        },
        {
          label: 'Writing code',
          items: [
            { label: 'IntelliSense', slug: 'intellisense' },
          ],
        },
        {
          label: 'Running code',
          items: [
            { label: 'What works where', slug: 'capabilities' },
            { label: 'Termux setup (power users)', slug: 'termux-setup' },
            { label: 'Terminal & web preview', slug: 'terminal' },
          ],
        },
        {
          label: 'Version control',
          items: [{ label: 'Git workflow', slug: 'git-workflow' }],
        },
        {
          label: 'Help',
          items: [{ label: 'Troubleshooting', slug: 'troubleshooting' }],
        },
        {
          label: 'Legal',
          items: [
            { label: 'Privacy Policy', slug: 'privacy-policy' },
            { label: 'Terms of Service', slug: 'terms-of-service' },
          ],
        },
      ],
    }),
  ],
});
