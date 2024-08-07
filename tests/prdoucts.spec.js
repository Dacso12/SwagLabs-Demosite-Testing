import {test, expect} from '@playwright/test'
import {loginPage} from '../pages/login.js'
import { cartAdd } from '../pages/cart.js'
import { cartRemove } from '../pages/cartremove.js'

test('Login',async ({page}) => {
    
    const Login = new loginPage(page)
    await Login.gotoLoginPage()
    await Login.login('standard_user','secret_sauce') 

})

test('Cart',async ({page}) => {
    const Login = new loginPage(page)
    const Cart = new cartAdd(page)
    await Login.gotoLoginPage()
    await Login.login('standard_user','secret_sauce') 
    await Cart.click()
})

test.only('Cart Remove',async ({page}) => {
    const Login = new loginPage(page)
    const Cart = new cartAdd(page)
    const Remove = new cartRemove(page)
    await Login.gotoLoginPage()
    await Login.login('standard_user','secret_sauce') 
    await Cart.click()
    await Remove.click2()

})