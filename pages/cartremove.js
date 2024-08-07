exports.cartRemove = class cartRemove {
    constructor(page) {
        this.page = page 
        this.page_pause = this.page.pause()
        this.cart = this.page.locator(('[data-test="shopping-cart-link"]'))
        this.removeIteam1 = this.page.locator("#remove-sauce-labs-backpack")
        this.removeIteam2 = this.page.locator('#remove-sauce-labs-bolt-t-shirt')
        this.removeIteam3 = this.page.locator('#remove-sauce-labs-onesie')
        this.removeIteam4 = this.page.locator("#remove-sauce-labs-bike-light")
        this.removeIteam5 = this.page.locator("#remove-sauce-labs-fleece-jacket")
        this.removeIteam6 = this.page.locator("#remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)")
    }


    async click2() {
        await this.page_pause
        await this.cart.click()
        await this.removeIteam1.click()
        await this.removeIteam2.click()
        await this.removeIteam3.click()
        await this.removeIteam4.click()
        await this.removeIteam5.click()
        await this.removeIteam6.click()
    }
}