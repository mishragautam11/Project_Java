const { expect } = require("@playwright/test");

exports.AddressesPage = class AddressesPage {
    constructor(page) {
        this.page = page;

        /**
         * All page locators are below:
         */
        this.addressesLink = page.locator("//div[@data-testid='account-dropdown']/ul/li[4]/a/span");
        this.addressType = page.locator("//*[contains(@id,'street-address')]");
        this.headerContainer = page.locator("//h2[@data-testid='addresses-heading']");
        this.removeBtn = page.locator("//ul[@data-testid='addresses-list']/li[1]/span[2]/button");
        this.selectSecondremoveBtn = page.locator("//ul[@data-testid='addresses-list']/li[2]/span[2]/button");
        this.keepBtn = page.locator("//div[@data-testid='modal-actions-container']/button[1]/span");
        this.xCloseBtn = page.locator("//button[@data-testid='close-button']")
        this.yesRemoveBtn = page.locator("//button/span[text()='Yes, remove']")
        this.cannotRemove = page.locator("//h1[@data-testid='modal-title']")
        this.removeItemAlertBtn = page.locator("//div[@data-testid='notification']/child::*[3]/descendant::*[4]")
        this.addressHeadingText = page.locator("//h2[@data-testid='addresses-heading']")
        this.addressInputFieldDropdown = page.locator("//input[@placeholder='Start typing to add an address']")
        this.addressList = page.locator("//*[contains(@id,'street-address') and contains(@activedescentdant,'street-address')]")
        this.addAddressBtn = page.locator("//span[text()='Add address']");
        this.selectedAddress = page.locator("(//ul[@data-testid='addresses-list']/li/span/span[1])[1]");
        this.okGotItBtn = page.locator("//span[text()='OK, got it']")
        this.closeDialogBtn = page.locator("//button[@data-testid='close-button']")
        this.removeAddressNotification = page.locator("//div/div[text()='Address removed from saved addresses']")
        this.closeRemoveAddressNotification = page.locator("//button[@aria-label='Close notification dialog']")

    }
    /**
     * Validation of "Addresses" page and validation of "Addresses" Page header:
     * Validation of suggestion box for adding address:
     */

    async addressesLinkCLick() {
            await this.addressesLink.click();
            await this.page.waitForTimeout(3000);
    }

    /**
     * Validation of removing address from addresses page:
     * Validation of Remove button:
     */

    async removeBtnClick() {
            await this.removeBtn.click();
            await this.page.waitForTimeout(5000);
    }
    /** 
     * Validation of removing address from addresses page:
     * Validation of Keep button:
     */


    async keepBtnClick() {
            await this.keepBtn.click();
            await this.page.waitForTimeout(5000);
    }

    /**
     * Validation of removing address from addresses page:
     * Validation of Close button:
     */

    async xCloseBtnClick() {
            await this.xCloseBtn.click();
            await this.page.waitForTimeout(3000);
    }

    /*
     * Validation of YesRemove button:
     */
    async yesremoveBtnClick() {
            await this.yesRemoveBtn.click();
            await this.page.waitForTimeout(3000);
    }
    /*
     * Validation of okGotIt button:
     */
    async okGotItBtnClick() {
            await this.okGotItBtn.click();
            await this.page.waitForTimeout(3000);
    }
    /**
     * when items in trolly and  user wants remove delivery address then one pop-up showing on page:
     * Validating this alert pop-up:
     */  
    async validateConnotRemoveNotificaton(){
        
        if( await this.cannotRemove.isVisible()){
            await this.okGotItBtnClick();
            await this.selectSecondremoveBtn.scrollIntoViewIfNeeded();
            await this.selectSecondremoveBtn.click();
            await this.page.waitForTimeout(3000);
            await this.yesremoveBtnClick();

        }
    }

    /* Validation of Addresses dropdown list*/
    async validateAddressDropdown() {
        if (await this.addressInputFieldDropdown.isVisible()) {
            await this.addressInputFieldDropdown.click();
            await this.page.waitForTimeout(5000)

        }
    }
    /*
    *Method for add address to the address list
    */
    async addAddressToList(searchTerm = '10 Shetland Street, Endeavour Hills VIC 3802', location = '10 Shetland Street, Endeavour Hills VIC 3802'){
        if(await this.addressHeadingText.isVisible()){
            await this.addressInputFieldDropdown.fill(searchTerm);
            await this.page.getByText(location).click(); 
            await this.addAddressBtn.click(); 
            await this.page.waitForTimeout(5000)
        }
    }
    /*Method for validation of popup massage "Address removed from saved addresses" */
    async validateRemovedAddressNotification() {
        expect(await this.removeAddressNotification).toBeVisible();
        await this.closeRemoveAddressNotification.click();
    }
}
