import { test, expect } from '../testFixtures/pageFixture';

exports.PreferencesPage = class PreferencesPage {
    constructor(page) {
        this.page = page;

    /*
    All page locators are below:
    */    

        this.preferencesLink = page.locator("//*[@id='account-popover']/div[3]/div/ul/li[7]/a/span");
        this.editYourPreferences = page.locator("//a[text()='Edit your preferences']");
        this.inStoreHeading = page.locator("//p[text()='Instore shopping']");
        this.onlineHeading = page.locator("//p[text()='Online shopping']");
        this.onlineShoppingText = page.locator('//p[text()="We\'re working on it. You\'ll see online shopping receipt preferences here soon."]')
        this.paperBox = page.locator("//label[normalize-space()='Paper']");
        this.emailBox = page.locator("//label[normalize-space()='Email']");
        this.smsBox = page.locator("//label[normalize-space()='SMS']");
        this.savePrefrences = page.locator("//button[@data-testid='save-button']");
        this.managePreferencesHeader = page.locator("//h1[text()='Manage my Coles Supermarkets receipt preferences']");
        this.continueBtn = page.locator("//button[text()='Continue']");
        this.returnToShopBtn = page.locator("//span[text()='Return to shop']");
        this.preferencesHeading = page.locator("//div[@data-testid='account-content']/div/h2");
        this.setMarketPreferencesBtn = page.locator("//span[text()='Set marketing preferences']");
        this.savePreferancesBtn = page.locator("//button[text()='Save preferences']");

    }
    /*
     method to click on preferances link
    */
   async preferencesLinkCLick(){
    await this.preferencesLink.click();
}
    /*
    Validation of set marketing preferences Page
    */
    async setMarketPreferences(){
        await this.page.waitForTimeout(5000);
        await this.setMarketPreferencesBtn.click();
        await this.emailBox.click();
        await this.smsBox.click();
        await this.savePreferancesBtn.click();
        await this.continueBtn.click();
        await expect(this.preferencesHeading).toHaveText('Preferences');

    }
    /*
    Validation of "Edit Your Preferences" and content of the page:
    */
    async editYourPreferencesClick(){

        if( await this.editYourPreferences.isVisible()){
            await this.page.waitForTimeout(5000);
            await this.editYourPreferences.click();
            expect(this.inStoreHeading).toBeVisible();
            await this.paperBox.click();
            expect(this.onlineHeading).toContainText("Online shopping");
            expect(await this.onlineShoppingText.textContent()).toEqual("We're working on it. You'll see online shopping receipt preferences here soon.");
            await this.savePrefrences.click();
            await this.continueBtn.click();
            await this.page.waitForTimeout(5000);
            await expect(this.preferencesHeading).toHaveText('Preferences');
        }
        
    }
    /*
    Validation preferances page when click on Return to shop button
    */
   async returnToShopClick(){
    await this.page.waitForTimeout(5000);
    await this.setMarketPreferencesBtn.click();
    await this.emailBox.click();
    await this.savePreferancesBtn.click();
    await this.returnToShopBtn.click();
    await expect(this.preferencesHeading).toHaveText('Preferences');
}
      

}