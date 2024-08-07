 exports.loginPage =class loginPage {
    constructor(page) {
        this.page = page
        this.username_textbox = this.page.locator('#user-name')
        this.password_textbox = this.page.locator('#password')
        this.login_button = this.page.locator('#login-button');
        this.page_pause = this.page.pause()
        

    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com')

    }

    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
        await this.page_pause
    }
}
