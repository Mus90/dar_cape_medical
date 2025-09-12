import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check if the page loads without errors
    await expect(page).toHaveTitle(/Dar Cape/);

    // Check for main navigation
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');

    // Look for hero content (adjust selectors based on actual implementation)
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText(/Dar Cape|Welcome/);
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Test navigation links (adjust based on actual navigation)
    const aboutLink = page.locator('a[href*="about"]').first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page).toHaveURL(/.*about.*/);
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check if page is still functional on mobile
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
  });
});
