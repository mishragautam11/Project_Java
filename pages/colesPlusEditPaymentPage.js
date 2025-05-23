import { expect } from '../testFixtures/pageFixture';

exports.ColesPlusEditPaymentPage = class ColesPlusEditPaymentPage {

    constructor(page) {
        this.page = page;
        //Linked Payment details.
        this.linkedPaymentHeading = page.locator("//h3[text()='Coles Plus']/parent::div//p[@data-testid='payment-method-main-text']");
        this.linkedPaymentDetail = page.locator("//h3[text()='Coles Plus']/parent::div//div[@data-testid='payment-method-sub-text']/p");
        //side menu
        this.colesPlusLink = page.locator("//a[@identifier='coles_plus']");
    }

    /**
     * This method is used to validate the edited payment for paypal Coles Plus subscription
    */
    async validateLinkedPaypal(paypalID) {
        await expect(this.linkedPaymentHeading).toContainText('Linked account');
        await expect(this.linkedPaymentDetail).toContainText(paypalID);
    }


    /**
    * This method is used to validate the edited payment for card for Coles Plus subscription
    */
    async validateLinkedCard(cardlastfourdigits, expirymonth, expiryyear) {
        await expect(this.linkedPaymentHeading).toContainText('Card ending in ' + cardlastfourdigits);
        await expect(this.linkedPaymentDetail).toContainText('Expires ' + expirymonth + '/' + expiryyear);
    }


    /**
     * This method is used to navigate to Coles Plus accounts page
     */
    async goToColesPlusPage() {
        await this.colesPlusLink.click();
    }


}