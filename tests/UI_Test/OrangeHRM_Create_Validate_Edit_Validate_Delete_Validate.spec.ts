import { test, expect } from '@playwright/test';

test('OrangeHRM_Create_Validate_Edit_Validate_Delete_Validate_logout_validate)', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  //login
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();

  //landing on Dashboard page 
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('banner')).toContainText('User Management');

  // creating user 
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.getByText('Ranga Akunuri').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Prathyusha');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('admin123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();

  // verifying the created user 
  await expect(page.getByRole('table')).toContainText('Prathyusha');
  //updating 
  await page.locator('div:nth-child(16) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)').click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.getByText('Timothy Lewis Amiano').click();
  await page.getByRole('button', { name: 'Save' }).click();

  // verifying updating record
  await expect(page.getByRole('table')).toContainText('Prathyusha');
  await expect(page.getByRole('table')).toContainText('Timothy Amiano');

  // deleting record from the table 
  await page.locator('div:nth-child(16) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button').first().click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
  await page.locator('.orangehrm-container').click();
  await page.getByRole('banner').getByText('Test name Last Name').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page.getByRole('heading')).toContainText('Login');
});