import { test, expect } from '@playwright/test';

test.describe('Admin Portal', () => {
  test('should authenticate with valid credentials', async ({ page }) => {
    await page.goto('/admin');

    // Fill in admin password
    await page.fill('input[type="password"]', 'darcape2024');
    await page.click('button[type="submit"]');

    // Should redirect to admin dashboard
    await expect(page).toHaveURL(/.*admin.*/);
    await expect(page.locator('text=Admin Dashboard')).toBeVisible();
  });

  test('should reject invalid credentials', async ({ page }) => {
    await page.goto('/admin');

    // Fill in wrong password
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Should show error or stay on login page
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('should access content manager', async ({ page }) => {
    // Login first
    await page.goto('/admin');
    await page.fill('input[type="password"]', 'darcape2024');
    await page.click('button[type="submit"]');

    // Navigate to content manager
    await page.click('text=Content Manager');
    await expect(page.locator('text=Content Management')).toBeVisible();
  });

  test('should access blog manager', async ({ page }) => {
    // Login first
    await page.goto('/admin');
    await page.fill('input[type="password"]', 'darcape2024');
    await page.click('button[type="submit"]');

    // Navigate to blog manager
    await page.click('text=Blog Manager');
    await expect(page.locator('text=Blog Management')).toBeVisible();
  });

  test('should access gallery manager', async ({ page }) => {
    // Login first
    await page.goto('/admin');
    await page.fill('input[type="password"]', 'darcape2024');
    await page.click('button[type="submit"]');

    // Navigate to gallery manager
    await page.click('text=Gallery Manager');
    await expect(page.locator('text=Gallery Management')).toBeVisible();
  });

  test('should handle session timeout', async ({ page }) => {
    // Login first
    await page.goto('/admin');
    await page.fill('input[type="password"]', 'darcape2024');
    await page.click('button[type="submit"]');

    // Simulate session expiry by clearing sessionStorage
    await page.evaluate(() => {
      sessionStorage.clear();
    });

    // Refresh page - should redirect to login
    await page.reload();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });
});
