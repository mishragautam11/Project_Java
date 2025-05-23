import { test, expect } from '../testFixtures/pageFixture';
//const { expect } = require("@playwright/test");
const { assert } = require("console");
const { LoginPage } = require("../pages/loginPage.js");
const { HomePage } = require("./homePage");
const { CheckoutPage } = require("./checkOutPage");

/**
 * Page objects for Signup page.
 */
exports.SignUpPage = class SignUpPage {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.txtEmail = page.locator('xpath=//input[@id="email"]');
        this.btnLoginSignup = page.locator('xpath=//button[@data-testid="header-user"]');
        this.btnContinueToPassword = page.locator('xpath=//button[@id="email-validator-continue"]');
        this.accTypePersonal = page.locator('xpath=//span[@data-testid="profile-type-radio-personal"]');
        this.btnCustomerBusinessType = page.locator('//*[@id = "card-radio-button-profile-type-radio-business-business"]');
        this.enterGivenName = page.locator('xpath=//input[@id="given-name"]');
        this.enterFamilyName = page.locator('xpath=//input[@data-testid="family-name-input"]');
        this.mobileNumber = page.locator('xpath=//input[@id="mobile-number"]');
        this.txtPassword = page.locator('xpath=//input[@id="password"]');
        this.checkBox = page.locator('xpath=//input[@type="checkbox"]');
        this.createAccountBtn = page.locator('xpath=//button[@id="new-user-signup"]');
        this.continueBtn = page.locator("//button[@data-testid='continue-button']");
        this.industryTypeDropDown = page.locator("//select[@id='industry-input-field']");
        this.businessName = page.locator("//input[@id='business-name-input-field']");
        this.submitBtn = page.locator("//button[@type='submit']");
        this.noThanksBtn = page.locator('//form[@data-testid="mobile-verification-form"]//child::div//a');
        this.closeButton = page.locator('//button[@data-testid="close-button"]');      //B2B Inbox Signup Locators
        //accept invite sign up
        this.givenName = page.locator("//input[@id='given-name']");
        this.familyName = page.locator("//input[@id='family-name']");
        this.postCode = page.locator("//input[@id='locality-input-auto-complete']");
        this.password = page.locator("//input[@id='password']");
        this.createAccountButton = page.locator("//button[@id='new-user-signup']");
        this.verifySignUpMessage = page.locator("//p[@class='sc-gXRojI dIbdHx']");


    }


    async setPostCode(searchTerm = '3000') {

        await this.postCode.scrollIntoViewIfNeeded();
        if (await this.postCode.isVisible()) {
            await this.postCode.fill(searchTerm);
            await this.page.locator("//li[@id='locality-input-auto-complete-option-0']").click();
        }
    }
    /*
        Generate dynamic email id 
    */ 

    async generateDynamicEmail(){
        //generate a random string for the email prefix
        const randomString = Math.random().toString(36).substring(2, 12);
        const domain = "getnada.com";
        //combine the random string and domain name to form the eamil address
        const email = `${randomString}@${domain}`;
        return email;
    }



    async signUpAsCustomer(customerType = 'Personal',  givenName, familyName, mobileNumber, txtPassword, businessName, orderNumber = 'b2c') {

        const dynamicEmail = (await this.generateDynamicEmail()).toString();
        console.log("Generated Email : ", dynamicEmail);
        console.log(typeof(dynamicEmail));


        await expect(this.btnLoginSignup).toBeVisible();
        await this.page.waitForTimeout(5000);
        await this.btnLoginSignup.click();

        await this.txtEmail.fill(dynamicEmail);
        console.log("email", dynamicEmail);
        
        await this.btnContinueToPassword.click();
        if (customerType != 'Personal') {
            this.btnCustomerBusinessType.click();
        }
        await expect(this.enterGivenName).toBeEditable();
        await this.loginPage.waitToCompleteAction(800);
        await this.enterGivenName.fill(givenName);
        await expect(this.enterFamilyName).toBeEditable();
        await this.loginPage.waitToCompleteAction(800);
        await this.enterFamilyName.fill(familyName);
        await this.loginPage.waitToCompleteAction(500);
        await this.setPostCode();
        await expect(this.mobileNumber).toBeEditable();
        await this.mobileNumber.fill(mobileNumber);
        await expect(this.txtPassword).toBeEditable();
        await this.txtPassword.fill(txtPassword);
        await this.loginPage.waitToCompleteAction(200);
        await this.createAccountBtn.click();
        await this.loginPage.waitToCompleteAction(200);
        await this.continueBtn.click();
        if (customerType != 'Personal') {
            await this.businessName.fill(businessName);
            await this.industryTypeDropDown.selectOption("Childcare");
            await this.loginPage.waitToCompleteAction(200);
            await this.submitBtn.click();
        }
        await this.noThanksBtn.click();
        await this.loginPage.waitToCompleteAction(15000);
        if (await this.closeButton.isVisible() === true) {
            await this.loginPage.waitToCompleteAction(5000);
            await this.closeButton.click();
        }
        
        //capture dynamic email generated to pass to B2B script.
        if (orderNumber != 'b2c') {
            return dynamicEmail;
        }
    }

    /**
     * Method to sign in after shopper accepts the email invite from admin(B2B).
     * @param {*} givenName User name of the new shopper.
     * @param {*} familyName Family name of the new shopper.
     * @param {*} mobileNumber Mobile number of the new shopper.
     * @param {*} txtPassword Password of the new shopper.
     */
    async signUpFormAcceptInvite(givenName, familyName, mobileNumber, txtPassword) {
        await expect(this.givenName).toBeEditable();
        await this.givenName.fill(givenName);
        await expect(this.familyName).toBeEditable();
        await this.familyName.fill(familyName);
        await this.setPostCode();
        await expect(this.mobileNumber).toBeEditable();
        await this.mobileNumber.fill(mobileNumber);
        await expect(this.txtPassword).toBeEditable();
        await this.txtPassword.fill(txtPassword);
        await this.createAccountBtn.click();
        await expect(this.verifySignUpMessage).toBeVisible();
        await this.continueBtn.click();
        await expect(this.noThanksBtn).toBeVisible();
        await this.noThanksBtn.click();

    }


    async selectStoreLocation(searchTerm, location) {
        //const waStore = ['Riverto', 'Riverton, WA 6148', 'Coles Riverton'];
        await expect(this.postCode).toBeVisible();
        await this.postCode.fill(searchTerm);
        await this.loginPage.getByText(location).click();
    }
}