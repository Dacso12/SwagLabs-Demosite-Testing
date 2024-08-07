import { test, expect } from '@playwright/test';

test.describe.only("Check the webiste", () => {
    test('Verify the website', async ({page}) => {
        await page.goto('https://www.saucedemo.com')
    
    })

  test('Login Functionality Verify vaild credentials',async ({page}) => {
    await page.goto('https://www.saucedemo.com')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await page.pause() // We can login in with vaild credentials
  })

  test('Login Functionality Verify invaild credentials',async ({page}) => {
    await page.goto('https://www.saucedemo.com')
    await page.locator('#user-name').fill('Daniel')
    await page.locator('#password').fill('GiveDanielaChips')
    await page.locator('#login-button').click()
    await page.pause() // We got a ERROR MSG // Epic sadface: Username and password do not match any user in this service
  })

  test('Login Functionality Verify empty credentials',async ({page}) => {
    await page.goto('https://www.saucedemo.com')
    await page.locator('#user-name').fill('')
    await page.locator('#password').fill('')
    await page.locator('#login-button').click()
    await page.pause() // Weo got a ERROR MSG "Epic sadface: Username is required"
  })
  test('Login Functionality check if there is a error massage',async ({page}) => {
    await page.goto('https://www.saucedemo.com')
    await page.locator('#user-name').fill('Daniel')
    await page.locator('#password').fill('GiveDanielaChips')
    await page.locator('#login-button').click()
    await expect (page.locator('[data-test="error"]')).toHaveText("Epic sadface: Username and password do not match any user in this service")
    await page.pause() // We got a ERROR MSG Epic sadface: Username and password do not match any user in this service
  })

})
