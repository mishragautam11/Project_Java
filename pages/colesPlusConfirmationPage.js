import exp from 'constants';
import { expect } from '../testFixtures/pageFixture';
import { execute } from 'graphql';


exports.ColesPlusConfirmationPage = class ColesPlusConfirmationPage {

    

    constructor(page) {
        this.page = page;

        //Confirmation message
        this.successMessage = page.locator("//h1[text()='Yay! Thanks for joining Coles Plus']");
        this.flybuysLink = page.locator("//a[@href='/account/flybuys']");

        //Membership summary
        this.paymentMethod = page.locator("//p[@data-testid='payment-method-main-text']");
        this.expiryDate = page.locator("//div[@data-testid='payment-method-sub-text']/p");
        this.paidtodayAmount = page.locator("//span[text()='Paid today']/following-sibling::span");
        this.ongoingPayment = page.locator("//span[text()='On going monthly payment']/following-sibling::span");
        //this.disclaimerFree = page.locator("//h3[text()='Membership summary']/ancestor::section//div[contains(text(),'Membership automatically renews each ')]");
        this.disclaimerFree = page.locator("//h3[text()='Membership summary']/ancestor::section//div//span[contains(text(),'Your first ')]");
        //this.disclaimerNonFree = page.locator("//h3[text()='Membership summary']/ancestor::section//div[contains(text(),'Your next ')]");
        this.disclaimerNonFree = page.locator("//h3[text()='Membership summary']/ancestor::section//div//div[contains(text(),'Membership automatically renews each ')]");

        this.monthlyPaymentsWithPromo = page.locator("//span[contains(text(),'monthly payments')]");
        this.monthlyPaymentsAmountWithPromo = page.locator("//span[contains(text(),'monthly payments')]/following-sibling::span");
        this.paymentDisclaimerNonFreeWithPromo = page.locator("//h3/parent::div//div//div[contains(text(),'Renews automatically')]");

        //Confirmation message Saver
        this.successMessageSaver = page.locator("//section/h1");
        this.membershipDisclaimerSaver = page.locator("//div[contains(text(),'Membership automatically renews each ')]");
        this.paymentDisclaimerWithPromo = page.locator("//h3/parent::div//span[contains(text(),'Renews automatically')]");

        //payment details
        this.cardHeading = page.locator("//p[contains(text(),'Card ending in')]");
        this.cardExpireDetail = page.locator("//p[contains(text(),'Expires')]");

        //payment frequency
        this.paymentFrequencyHeading = page.locator("//div[text()='Payment frequency']");
        this.subscriptionPlan = page.locator("(//div[text()='Payment frequency']//parent::div)[1]");
    }

    /** This method is to verify confirmation message and 
     * membership summary for a coles plus subscriber eligible
     * for free trial
     */
    async verifyConfirmationMessageForFreeTrialUser(cardExpiryMonth, cardExpiryYear) {
        //Confirmation message
        await expect(this.successMessage).toBeVisible();

        //Membership summary
        await this.verifyConfirmationCardDetails(cardExpiryMonth, cardExpiryYear);
        await expect(this.paidtodayAmount).toContainText('$0.00');
        //await expect(this.ongoingPayment).toContainText('19.00');
        
        await expect(this.paymentFrequencyHeading).toBeVisible();
        
        let subscriptionValid = await this.subscriptionPlan.textContent();
        if(subscriptionValid.includes("Yearly")){
            await expect(this.subscriptionPlan).toContainText("Yearly");
            await expect(this.disclaimerFree).toBeVisible();
            let today = new Date();
            today.setMonth(today.getMonth() + 1);
            let nextBilldate = today.toLocaleString('en-AU', { day:'numeric', month: 'long', year:'numeric' });
            await expect(this.disclaimerFree).toContainText(`Your first yearly payment of $199.00 will come out on ${nextBilldate} if not cancelled before.`);
            console.log("Yearly");
        }else{
            await expect(this.subscriptionPlan).toContainText("Monthly");
            await expect(this.disclaimerFree).toBeVisible();
            let today = new Date();
            today.setMonth(today.getMonth() + 1);
            let nextBilldate = today.toLocaleString('en-AU', { day:'numeric', month: 'long', year:'numeric' });
            await expect(this.disclaimerFree).toContainText(`Your first monthly payment of $19.00 will come out on ${nextBilldate} if not cancelled before.`);
            console.log("Monthly");
        }


    }

    /** This method is to verify confirmation message and 
    * membership summary for a coles plus subscriber not eligible
    * for free trial
    */
    async verifyConfirmationMessageForNonFreeTrialUser(cardExpiryMonth, cardExpiryYear) {
        //confirmation message
        await expect(this.successMessage).toBeVisible();

        
    
        //Membership summary
        await this.verifyConfirmationCardDetails(cardExpiryMonth, cardExpiryYear);
        await expect(this.paymentFrequencyHeading).toBeVisible();
        
        let subscriptionValid = await this.subscriptionPlan.textContent();
        if(subscriptionValid.includes("Yearly")){
            await expect(this.subscriptionPlan).toContainText("Yearly");
            await expect(this.paidtodayAmount).toContainText('199.00');
            await expect(this.disclaimerNonFree).toBeVisible();
            await expect(this.disclaimerNonFree).toContainText('Membership automatically renews each year. Benefits start immediately. Cancel anytime.');
            console.log("Yearly");
        }else{
            await expect(this.subscriptionPlan).toContainText("Monthly");
            await expect(this.paidtodayAmount).toContainText('19.00');
            await expect(this.disclaimerNonFree).toBeVisible();
            await expect(this.disclaimerNonFree).toContainText('Membership automatically renews each month. Benefits start immediately. Cancel anytime.');
            console.log("Monthly");
        }
    }

    /** This method is to verify confirmation message and 
    * membership summary for a Coles Plus Saver subscriber 
    * without promo code
    */
    async verifyConfirmationMessageForSaver(cardExpiryMonth, cardExpiryYear) {
        //Membership summary
        await this.verifyConfirmationCardDetails(cardExpiryMonth, cardExpiryYear);
        await expect(this.paymentFrequencyHeading).toBeVisible();
        
        let subscriptionValid = await this.subscriptionPlan.textContent();
        if(subscriptionValid.includes("Yearly")){
            await expect(this.subscriptionPlan).toContainText("Yearly");
            await expect(this.paidtodayAmount).toContainText('$70.00');
            await expect(this.membershipDisclaimerSaver).toBeVisible();
            await expect(this.membershipDisclaimerSaver).toContainText('Membership automatically renews each year. Benefits start immediately. Cancel anytime.');
            console.log("Yearly");
        }else{
            await expect(this.subscriptionPlan).toContainText("Monthly");
            await expect(this.paidtodayAmount).toContainText('$7.00');
            await expect(this.membershipDisclaimerSaver).toBeVisible();
            await expect(this.membershipDisclaimerSaver).toContainText('Membership automatically renews each month. Benefits start immediately. Cancel anytime.');
            console.log("Monthly");
        }

    }


    /** This method is to verify confirmation message and 
    * membership summary for a Coles Plus Saver subscriber 
    * using promo code
    */
    async verifyConfirmationMessageForSaverWithPromo(cardExpiryMonth, cardExpiryYear, amount) {
        //Membership summary
        await this.verifyConfirmationCardDetails(cardExpiryMonth, cardExpiryYear);
        /*
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let monthTime = (12 + currentMonth - months) % 12 ;
        */
        await expect(this.paymentFrequencyHeading).toBeVisible();
        
        let subscriptionValid = await this.subscriptionPlan.textContent();
        if(subscriptionValid.includes("Yearly")){
            await expect(this.subscriptionPlan).toContainText("Yearly");
            let topayamount = 70.00 - amount;
            await expect(this.paidtodayAmount).toContainText("$" + topayamount.toFixed(2));
            await expect(this.membershipDisclaimerSaver).toBeVisible();
            await expect(this.membershipDisclaimerSaver).toContainText('Membership automatically renews each year. Benefits start immediately. Cancel anytime.');
            console.log("Yearly");
        }else{
            await expect(this.subscriptionPlan).toContainText("Monthly");
            let topayamount = 7.00 - amount;
            await expect(this.paidtodayAmount).toContainText("$" + topayamount.toFixed(2));
            await expect(this.membershipDisclaimerSaver).toBeVisible();
            await expect(this.membershipDisclaimerSaver).toContainText('Membership automatically renews each month. Benefits start immediately. Cancel anytime.');
            console.log("Monthly");
        }
        //let discountperiod = 'After your ' + months + "-month discount, membership will continue at $7/month. Renews automatically. Cancel anytime.";
        //await expect(this.paymentDisclaimerWithPromo).toContainText(discountperiod);
    }

    /* this method is to verify confirmation message and
    * membership summary for a Coles Plus Standard non free trial subcriber
    *using promocode
    */
   async verifyConfirmationMessageForNonFreeTrialUserWithPromo(cardExpiryMonth, cardExpiryYear, amount, months) {
     //confirmation message
     await expect(this.successMessage).toBeVisible();
    
    //Membership Summary
    await this.verifyConfirmationCardDetails(cardExpiryMonth, cardExpiryYear);

    await expect(this.paymentFrequencyHeading).toBeVisible();
        
    let subscriptionValid = await this.subscriptionPlan.textContent();
    if(subscriptionValid.includes("Yearly")){
        await expect(this.subscriptionPlan).toContainText("Yearly");
        let topayamount = 199.00 - amount;
        await expect(this.paidtodayAmount).toContainText("$" + topayamount.toFixed(2));
        await expect(this.disclaimerNonFree).toBeVisible();
        await expect(this.disclaimerNonFree).toContainText('Membership automatically renews each year. Benefits start immediately. Cancel anytime.');
        console.log("Yearly");
    }else{
        await expect(this.subscriptionPlan).toContainText("Monthly");
        let topayamount = 19.00 - amount;
        await expect(this.paidtodayAmount).toContainText("$" + topayamount.toFixed(2));
        await expect(this.disclaimerNonFree).toBeVisible();
        await expect(this.disclaimerNonFree).toContainText('Membership automatically renews each month. Benefits start immediately. Cancel anytime.');
        console.log("Monthly");
    }

    /*let topayamount = 19.00 - amount;
    await expect(this.paidtodayAmount).toContainText("$" + topayamount.toFixed(2));
    await expect(this.disclaimerFree).toContainText('Membership automatically renews each month. Benefits start immediately. Cancel anytime.');
    */
   }

   /**
     * This method is used to validate the edited payment for cards Coles Plus accounts page
     */

   async verifyConfirmationCardDetails(cardExpiryMonth, cardExpiryYear){
    //await expect(this.cardHeading).toContainText('Card ending in ');
    //await expect(this.cardExpireDetail).toContainText('Expires in ' + cardExpiryMonth + '/' + cardExpiryYear);
   }

}