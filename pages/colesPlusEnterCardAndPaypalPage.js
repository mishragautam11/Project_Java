import { expect } from '../testFixtures/pageFixture';



exports.ColesPlusEnterCardAndPaypalPage = class ColesPlusEnterCardAndPaypalPage{

    constructor(page) {
        this.page = page;

        //Card details
        this.iFrameCCNumber = page.frameLocator('//iframe[@id="#card-number"]');
        this.iFrameCCV = page.frameLocator('//iframe[@id="#security-code"]');
        this.iFrameExpiryMonth = page.frameLocator('//iframe[@id="#expiry-month"]');
        this.iFrameExpiryYear = page.frameLocator('//iframe[@id="#expiry-year"]');
        this.cardNumber = page.locator('//*[@id="number"]');
        this.expiryMonth = page.locator('//*[@id="expiryMonth"]');
        this.expiryYear = page.locator('//*[@id="expiryYear"]');
        this.cvv = page.locator('//*[@id="securityCode"]');
        this.saveAndContinueBtn = page.locator("//button[@aria-label='Continue']|//span[text()='Save']");
        this.savedcardCheckIcon = page.locator("//span[contains(@class,'coles-targeting-CheckoutStepperCheckoutStepCheckIcon')]");
        //this.editCardDetails = page.locator("//*[@aria-label='Edit payment method']");
        this.editCardDetails = page.locator("//span[text()='Edit']");

        this.iframePaymentConfirmation = page.frameLocator("//iframe[@id='challengeFrame']");
        this.submitButtonConfirmationPopUp = page.locator("//input[@id='acssubmit']");
        this.editPaymentSuccessMessage = page.locator("//div[text()='New card has been saved']");
        this.saveButtonForEditPayment = page.locator("//button[@aria-label='Save Coles Plus Saver payment method']");

        //Paypal payment locators

        this.linkPaypal = page.locator("//button[@data-testid='link-paypal-button']");     
        this.successNotificationPaypal = page.locator("//div[text()='PayPal account is now linked']");
        this.colesPlusPageLink = page.locator("//span[normalize-space()='Coles Plus']");
        this.paypalRadioButton = page.locator("//input[@aria-label='PayPal']");

    }


    /**
     * This method is used to enter card details or paypal 
     * account for coles plus subscription
    */

    async enterCardDetails(cardNumber, expiryMonth, expiryYear, cvv) {

        await this.page.getByText('Choose payment method').isVisible();
        await this.page.getByText('Add credit or debit card').isVisible();
        await this.iFrameCCNumber.locator(this.cardNumber).fill(cardNumber);
        await this.iFrameExpiryMonth.locator(this.expiryMonth).selectOption(expiryMonth);
        await this.iFrameExpiryYear.locator(this.expiryYear).selectOption(expiryYear);
        await this.iFrameCCV.locator(this.cvv).fill(cvv);
        await expect(this.saveAndContinueBtn).toBeVisible();
        await this.saveAndContinueBtn.click();

    }

    async verifyCardIsSaved(){
        //await expect(this.savedcardCheckIcon).toBeVisible();
        await expect(this.editCardDetails).toBeVisible();
    }
    /**
     * This method is used to perform action on payment confirmation popup
     */

    async confirmEditPayment() {
        await this.iframePaymentConfirmation.locator(this.submitButtonConfirmationPopUp).click();
        await expect(this.editPaymentSuccessMessage).toContainText('New card has been saved');

    }

    async openPaypalPage(){
        await this.paypalRadioButton.click();
        await this.linkPaypal.click();
    }

    
    async validateSuccessMessagePaypal() {
        await expect(this.successNotificationPaypal).toContainText('PayPal account is now linked');
    }
}