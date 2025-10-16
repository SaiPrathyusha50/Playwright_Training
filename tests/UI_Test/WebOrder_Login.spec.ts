import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('List of All Orders');
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.locator('#ctl00_MainContent_login_button')).toContainText('Login');
});