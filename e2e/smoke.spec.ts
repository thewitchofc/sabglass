import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.describe('SAB Glass, זרימות בסיסיות', () => {
  test('דף הבית מציג קישור וואטסאפ', async ({ page }) => {
    await page.goto('/')
    const wa = page.locator('a[href*="wa.me"], a[href*="whatsapp.com"]')
    await expect(wa.first()).toBeVisible({ timeout: 20_000 })
  })

  test('לחיצה על CTA ב־Hero פותחת חלון לוואטסאפ', async ({ page }) => {
    await page.goto('/')
    const heroWa = page.locator('#home a[href^="https://wa.me/"]')
    await expect(heroWa.first()).toBeVisible({ timeout: 20_000 })
    const popupPromise = page.waitForEvent('popup')
    await heroWa.first().click()
    const popup = await popupPromise
    // Chromium לעיתים מפנה מ־wa.me ל־api.whatsapp.com
    expect(popup.url()).toMatch(/wa\.me|api\.whatsapp\.com/i)
    await popup.close()
  })

  test('במובייל מופיע סרגל סטיקי עם קישור וואטסאפ', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    const region = page.getByRole('region', { name: /פעולה מהירה/i })
    await expect(region).toBeVisible({ timeout: 20_000 })
    await expect(region.locator('a[href^="https://wa.me/"]')).toBeVisible()
  })
})

test.describe('נגישות (axe)', () => {
  test('עמוד הבית ללא הפרות קריטיות מ־axe-core', async ({ page }) => {
    await page.goto('/')
    const results = await new AxeBuilder({ page }).analyze()
    const critical = results.violations.filter((v) => v.impact === 'critical')
    expect(critical, JSON.stringify(critical, null, 2)).toEqual([])
  })
})
