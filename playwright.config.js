// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  expect: {
    timeout: 5000
  },
  use: {
    browserName: 'chromium',
    headless: true,
  }
});

