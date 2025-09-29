import { test, expect } from '@playwright/test';

test.describe('Team Section', () => {
  test('should display team section on about page', async ({ page }) => {
    await page.goto('/about');

    // Check if team section is visible
    await expect(page.locator('text=Meet Our Team')).toBeVisible();
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
    await expect(page.locator('text=Founder & Lead Medical Advisor')).toBeVisible();
    await expect(page.locator('text=Operations & Compliance Lead')).toBeVisible();
    await expect(page.locator('text=Admissions & Partnerships Coordinator')).toBeVisible();
  });

  test('should render avatar placeholders instead of photos', async ({ page }) => {
    await page.goto('/about');

    // Ensure no <img> elements are present within the team section (avatars are styled divs)
    const teamSection = page.locator('section:has-text("Meet Our Team")');
    await expect(teamSection.locator('img')).toHaveCount(0);
  });

  test('should show contact information on hover', async ({ page }) => {
    await page.goto('/about');

    // Hover over team member card
    const teamCard = page.locator('text=Mustafa').locator('..').locator('..');
    await teamCard.hover();

    // Check if contact icons appear
    await expect(page.locator('a[href="mailto:mustafa@darcape.com"]')).toBeVisible();
    await expect(page.locator('a[href="tel:+27749548756"]')).toBeVisible();
  });

  test('should have working email links', async ({ page }) => {
    await page.goto('/about');

    // Hover to show contact links
    const teamCard = page.locator('text=Mustafa').locator('..').locator('..');
    await teamCard.hover();

    // Check email link
    const emailLink = page.locator('a[href="mailto:mustafa@darcape.com"]');
    await expect(emailLink).toHaveAttribute('href', 'mailto:mustafa@darcape.com');
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
