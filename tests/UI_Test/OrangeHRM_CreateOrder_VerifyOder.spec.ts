import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('banner')).toContainText('AdminUser Management');
  await page.getByRole('button', { name: ' Add' }).click();
  await expect(page.locator('#app')).toContainText('Add User');

  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByText('Enabled').click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  //await page.getByText('Ranga Akunuri').click();
  //await page.getByText('George Al Kaseri').click();
  //await page.getByText('Raju  G').click();
  await page.waitForTimeout(3000)  
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  //await page.getByText('Next Automation').click();
  await page.getByRole('textbox').nth(2).click();
  
  //await page.getByRole('textbox').nth(2).fill('ExpUserName');
  //await page.getByLabel('Quantity:*').fill('5');
  //await page.getByLabel('Customer name:*').click();
  
  const d = new Date();
  let ms = d.getMilliseconds(); //use gettime to get milliseconds 
  const ExpUserName = 'Prathyusha' + ms;

  await page.getByRole('textbox').nth(2).fill(ExpUserName);
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('admin123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();
  //await page.locator('div:nth-child(19) > .oxd-table-row > div > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click();
  //await expect(page.getByRole('table')).toContainText('ExpUserName');
   
  await page.waitForSelector(".orangehrm-container")
  await expect(page.locator(".orangehrm-container")).toContainText(ExpUserName)
  await page.check("//div[text()='"+ExpUserName+"']/parent::div/preceding-sibling::div//i");

  await page.waitForSelector("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']");
  await expect(page.locator("//div[text()='"+ExpUserName+"']/parent::div/following-sibling::div/div").first()).toHaveText('ESS');
    //Click on Logout and Verify user got logged out
  await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();

    // Click text=Logout
  await page.locator('text=Logout').click();
    //await page.waitForTimeout(1000)
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


  // //updating 
  // await page.locator('div:nth-child(16) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)').click();
  // await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  // await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  // await page.getByText('Timothy Lewis Amiano').click();
  // await page.getByRole('button', { name: 'Save' }).click();
});



// import { test, expect } from '@playwright/test';

// test('Login to OrangeHRM', async ({ page }) => {

//   // Go to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   // Click [placeholder="Username"]
//   await page.locator('[placeholder="Username"]').click();
//   // Fill [placeholder="Username"]
//   await page.locator('[placeholder="Username"]').fill('Admin');
//   // Click [placeholder="Password"]
//   await page.locator('[placeholder="Password"]').click();
//   // Fill [placeholder="Password"]
//   await page.locator('[placeholder="Password"]').fill('admin123');
//   // Click button:has-text("Login")
//   await page.locator('button:has-text("Login")').click();
//   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//   // Click span:has-text("Admin")
//   await page.locator('span:has-text("Admin")').click();
//   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
//   // Click text=Add
//   await page.locator('text=Add').click();
//   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
//   // Click text=User Role-- Select -- >> i
//   await page.locator('text=User Role-- Select -- >> i').click();
//   // Click div[role="option"]:has-text("Admin")
//   await page.locator('div[role="option"]:has-text("Admin")').click();
//   // Click text=Status-- Select -- >> i
//   await page.locator('text=Status-- Select -- >> i').click();
//   // Click div[role="option"]:has-text("Enabled")
//   await page.locator('div[role="option"]:has-text("Enabled")').click();
//   await page.locator('[placeholder="Type for hints..."]').click();
//   await page.locator('[placeholder="Type for hints..."]').fill('A');
//   await page.waitForTimeout(3000)
//   //await page.pause()
// // Click by Index
//   //await page.locator('div.oxd-autocomplete-option').nth(0).click();

//   // await page.keyboard.press('ArrowDown');
//   await page.keyboard.press('ArrowDown');
//   await page.keyboard.press('Enter');
 
//   // Click input >> nth=2
//   await page.locator('input').nth(2).click();
//   const ExpUserName = 'Abhi'+ Math.random() * 100;
//   // Fill input >> nth=2
//   await page.locator('input').nth(2).fill(ExpUserName);
//   //await page.waitForTimeout(1000)
//   // Click text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]
//   await page.locator('text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]').click();

//   // Fill text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]
//   await page.locator('text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]').fill('Admin@123');
//   await page.waitForTimeout(1000)
//   // Click input[type="password"] >> nth=1
//   await page.locator('input[type="password"]').nth(1).click();

//   // Fill input[type="password"] >> nth=1
//   await page.locator('input[type="password"]').nth(1).fill('Admin@123');

//   // Click text=Save
//   await page.locator('text=Save').click();
//   //await page.waitForTimeout(1000)
//   await page.waitForSelector(".orangehrm-container")
//   await expect(page.locator(".orangehrm-container")).toContainText(ExpUserName)

// })