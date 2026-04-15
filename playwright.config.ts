import { defineConfig, devices } from '@playwright/test'

/** פורט נפרד מ־`vite` הרגיל (5173) כדי שלא ייטען פרויקט אחר כש־`reuseExistingServer` פעיל */
const E2E_DEV_PORT = 5174
const e2eBaseUrl = `http://localhost:${E2E_DEV_PORT}`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: e2eBaseUrl,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `npm run dev -- --port ${E2E_DEV_PORT}`,
    url: e2eBaseUrl,
    reuseExistingServer: false,
  },
})
