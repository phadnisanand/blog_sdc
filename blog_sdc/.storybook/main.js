import { join } from 'node:path';
import { cwd } from 'node:process';

const config = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {
      builder: {
        viteConfigPath: './.storybook/vite.config.js',
      },
    },
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;