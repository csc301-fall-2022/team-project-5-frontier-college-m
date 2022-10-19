import { test, expect } from '@playwright/test'

test.describe('Example', () => {
  test('google loads', async ({ page }) => {
    await page.goto('https://www.google.ca/')
    expect(true).toBe(true)
  })
})
