import { test, expect } from '@playwright/test';

test.describe('Team Section', () => {
  test('should display team section on about page', async ({ page }) => {
    await page.goto('/about');
    
    // Check if team section is visible
    await expect(page.locator('text=Our Team')).toBeVisible();
    await expect(page.locator('text=Meet our dedicated professionals')).toBeVisible();
  });

  test('should display all team members', async ({ page }) => {
    await page.goto('/about');
    
    // Check for team member names
    await expect(page.locator('text=Mustafa')).toBeVisible();
    await expect(page.locator('text=Mujahid')).toBeVisible();
    await expect(page.locator('text=Ahmed')).toBeVisible();
  });

  test('should display team member positions', async ({ page }) => {
    await page.goto('/about');
    
    // Check for positions
    await expect(page.locator('text=CEO & Founder')).toBeVisible();
    await expect(page.locator('text=CTO')).toBeVisible();
    await expect(page.locator('text=Operations Manager')).toBeVisible();
  });

  test('should load team member images', async ({ page }) => {
    await page.goto('/about');
    
    // Check if images are loaded
    const mustafaImage = page.locator('img[alt="Mustafa"]');
    const mujahidImage = page.locator('img[alt="Mujahid"]');
    
    await expect(mustafaImage).toBeVisible();
    await expect(mujahidImage).toBeVisible();
    
    // Check image sources
    await expect(mustafaImage).toHaveAttribute('src', '/images/team/mustafa.png');
    await expect(mujahidImage).toHaveAttribute('src', '/images/team/mujahid.jpg');
  });

  test('should show contact information on hover', async ({ page }) => {
    await page.goto('/about');
    
    // Hover over team member card
    const teamCard = page.locator('text=Mustafa').locator('..').locator('..');
    await teamCard.hover();
    
    // Check if contact icons appear
    await expect(page.locator('a[href="mailto:mustafa@capehome.co.za"]')).toBeVisible();
    await expect(page.locator('a[href="tel:+27817394084"]')).toBeVisible();
  });

  test('should have working email links', async ({ page }) => {
    await page.goto('/about');
    
    // Hover to show contact links
    const teamCard = page.locator('text=Mustafa').locator('..').locator('..');
    await teamCard.hover();
    
    // Check email link
    const emailLink = page.locator('a[href="mailto:mustafa@capehome.co.za"]');
    await expect(emailLink).toHaveAttribute('href', 'mailto:mustafa@capehome.co.za');
  });

  test('should be responsive on mobile devices', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/about');
    
    // Check if team section is still visible and functional on mobile
    await expect(page.locator('text=Our Team')).toBeVisible();
    await expect(page.locator('text=Mustafa')).toBeVisible();
    await expect(page.locator('text=Mujahid')).toBeVisible();
  });
});
