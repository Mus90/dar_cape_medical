import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Dar Cape Medica/);
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  await page.click('text=About');
  await expect(page).toHaveURL(/\/about/);
});

test('contact page loads', async ({ page }) => {
  await page.goto('/en/contact');
  await expect(page.locator('h1').first()).toContainText(/Contact|Assessment/);
});
