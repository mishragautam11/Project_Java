import { expect } from '../testFixtures/pageFixture';



exports.PaypalPage = class PaypalPage {

    constructor(page) {
        this.page = page;
      
        //Paypal payment locators

        this.inputEmailPaypal = page.locator("//div[@id='login_emaildiv']//input[@id='email']");
        this.nextButtonPaypal = page.locator("//div[@id='splitEmail']//button[@id='btnNext']");
        this.inputPasswordPaypal = page.locator("//input[@id='password']");
        this.loginButtonPaypal = page.locator("//button[@id='btnLogin']");
        this.cardDetailsPaypal = page.locator("//div[contains(text(),'Credit ••')]");
        this.agreeAndContinueButtonPaypal = page.locator("//button[@id='consentButton']");

    }



    async payWithPaypal(paypalId , paypalPassword) {
       
        await this.inputEmailPaypal.fill(paypalId);
        await this.nextButtonPaypal.click();
        await this.inputPasswordPaypal.fill(paypalPassword);
        await this.loginButtonPaypal.click();       
        await expect(this.cardDetailsPaypal).toBeVisible();
        await this.agreeAndContinueButtonPaypal.click();
              
    }
}