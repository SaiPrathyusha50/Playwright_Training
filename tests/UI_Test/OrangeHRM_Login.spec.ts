import { test, expect } from '@playwright/test';

test('Verify OrangeHRM login page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  await page.getByPlaceholder('Username').fill('Admin');
  //await page.pause()
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  //await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
  await expect(page.locator('h6')).toContainText('Dashboard');

});