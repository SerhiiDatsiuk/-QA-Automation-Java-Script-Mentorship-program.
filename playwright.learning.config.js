// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './learning-tests',
  outputDir: './test-results/learning',

  fullyParallel: true,

  reporter: [
    ['html', { outputFolder: './playwright-report/learning', open: 'never' }],
  ],

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
