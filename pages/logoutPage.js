import { test, expect } from '../testFixtures/pageFixture';
exports.LogoutPage = class LogoutPage {
    constructor(page) {
        this.page = page;

    /**
     * All page locators are below:
     */

        this.accountBtn = page.locator("//*[@id='header-user']");
        this.logoutBtn = page.locator("//div[@data-testid='account-dropdown']/div/div/button/span");

    }

    /** 
     * Validation and Click on "Account" Link on Home Page:
     */

    async accountBtnCLick(){
        if (await this.accountBtn.isVisible()){
            await this.accountBtn.click();
        }
    }

    /** 
     * Validation of "Log out" button.
     */
       
    async logoutBtnClick(){
        if(await this.logoutBtn.isVisible()){
            await this.logoutBtn.click();
            await this.page.waitForTimeout(10000)
        
        }
        
    }

}
