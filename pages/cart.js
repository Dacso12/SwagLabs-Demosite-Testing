
exports.cartAdd = class cartAdd {
    constructor(page) {
        this.page = page
        this.productIteam1 = this.page.locator('#add-to-cart-sauce-labs-backpack')
        this.productIteam2 = this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.productIteam3 = this.page.locator('#add-to-cart-sauce-labs-onesie')
        this.productIteam4 = this.page.locator('#add-to-cart-sauce-labs-bike-light')
        this.productIteam5 = this.page.locator('#add-to-cart-sauce-labs-fleece-jacket')
        this.productIteam6 = this.page.locator('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)'); // Escaped selector
    }

    async click() {
        await this.productIteam1.click()
        await this.productIteam2.click()
        await this.productIteam3.click()
        await this.productIteam4.click()
        await this.productIteam5.click()
        await this.productIteam6.click()
    }
}