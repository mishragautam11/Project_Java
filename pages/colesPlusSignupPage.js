import { expect } from '../testFixtures/pageFixture';
const exp = require("constants");


exports.ColesPlusSignUpPage = class ColesPlusSignUpPage{

    constructor(page){
        this.page=page;
        
        //Membership summary Standard
        this.noFreeTrialMessage = page.locator("//span[contains(@class,'coles-targeting-MembershipSummaryNoFreeTrialMessage')]");
        this.promoCodeTextBox = page.locator("//*[@id='promotion-code']"); 
        this.priceSummary = page.locator("//div[contains(@class,'coles-targeting-MembershipSummaryPriceSummary')]/div/span[2]");
        this.applyPromo = page.locator("//button[@aria-label='Apply promotional code']");
        this.removeLink = page.locator("//button[contains(@aria-label,'remove promocode')]");
        this.membershipPriceToPayOn = page.locator("//span[contains(@class,'coles-targeting-MembershipSummaryDescription')][1]");
        this.membershipPrice = page.locator("//span[contains(@class,'coles-targeting-MembershipSummaryDescription')][2]");
        this.membershipPriceSummary = page.locator("//div[contains(@class,'coles-targeting-MembershipSummaryPriceSummary')]/div[2]");
        this.termsAndConditionsDisclaimer = page.locator("//span[contains(@class,'coles-targeting-MembershipSummaryDisclaimer')]");
        this.termsAndConditionsLink = page.locator("//span[contains(@class,'coles-targeting-MembershipSummaryDisclaimer')]//a");
        this.startmyMembershipButton = page.locator("(//section[contains(@class,'coles-targeting-MembershipSummaryWrapper')]//button[contains(@class,'coles-targeting-ButtonButton')])[2]");
        
        //Membership Summary Saver
        this.membershipPriceToPayTodayAmountSaver = page.locator("//div[text()='To pay today']/following-sibling::div");
        this.membershipPriceSummaryTextSaver = page.locator("//div[text()='To pay today']/parent::div/following-sibling::div");

        //promo code
        this.labelAppliedPromo = page.locator("//h4[text()='Applied promotions']");
        this.appliedPromoCodeLabel = page.locator('//*[@data-testid="promocode-${promoname}"]');
        this.appliedPromoCode = page.locator("//span[contains(@data-testid,'promocode')][contains(@class,'coles-targeting-AppliedPromotionPromoCode')]");
        this.appliedPromoCodeDescription = page.locator("//*[@data-testid='promocode-subtext']");
        this.promoCodeAmount = page.locator("//*[@data-testid='promocode-amount']");

        //Membership Summary Coles Plus Non Free trial with Promocode
        this.membershipPriceToPayTodayAmountStandard = page.locator("//span[text()='To pay today']/following-sibling::span");
        this.membershipPriceSummaryDescription = page.locator("//span[text()='To pay today']/parent::div/following-sibling::div");

        //coles plus main content
        this.annualNonFreeTrialMessage = page.locator("//div[contains(@data-testid,'message-name')]");

        this.colesPlusHeading = page.locator("//h1[text()='Join Coles Plus']");
        this.standardBenefitList = page.locator("//h1[text()='Join Coles Plus']/parent::div//ul//li//span");

        //Coles Plus Annual membership
        this.annualMembershipPrice = page.locator("(//div[@data-value='Annually']//div//div//div)[1]");
        this.annualMembershipText = page.locator("(//div[@data-value='Annually']//div//div//div)[2]");

        //Coles Plus Monthly membership
        this.monthlyMembershipPrice = page.locator("(//div[@data-value='Annually']//div//div//div)[3]");
        this.monthlyMembershipText = page.locator("(//div[@data-value='Annually']//div//div//div)[4]");

        //coles plus saver monthly membership
        this.saverMonthlyPrice = page.locator("(//div[@data-value='Monthly']//div//div//div)[3]");
        this.saverMonthlyText = page.locator("(//div[@data-value='Monthly']//div//div//div)[4]");

        //coles plus saver main content
        this.colesPlusSaverHeading = page.locator("//h1[text()='Join Coles Plus Saver']");
        this.saverBenefitList = page.locator("//h1[text()='Join Coles Plus Saver']/parent::div//ul//li//span");
        this.saverSignupButton = page.locator("//span[text()='Start membership']");

        //flybuys detail
        this.flybuysText = page.locator("//div//p[contains(text(),'You must link your Flybuys card')]");
        this.linkFlybuys = page.locator("//span[text()='Link Flybuys']");
        this.joinFlybuysButton = page.locator("//span[text()='Join Flybuys']"); 
        this.flybuysError = page.locator("//h2[text()=' Link your Flybuys']//parent::div//following-sibling::div//div[@data-testid='message-name']");
        this.flybuysErrorText = page.locator("//h2[text()=' Link your Flybuys']//parent::div//following-sibling::div//div[@data-testid='message-content']");
        this.flybuysErrorSummary = page.locator("//div[text()='To pay today']/parent::div/parent::div/following-sibling::div//div[@data-testid='message-name']");
        this.flybuysErrorSummaryText = page.locator("//div[text()='To pay today']/parent::div/parent::div/following-sibling::div//div[@data-testid='message-content']");
        this.backButton = page.locator("(//a[@href='/ways-to-shop/coles-plus-saver'])[1]");

                  
    }

    /**
     * This method is used to enter a Manual promocode 
     * while signing up to Coles plus subscription
     */
    async applyManualPromoCode(promo, description, amount){
        await this.promoCodeTextBox.click();
        await this.promoCodeTextBox.fill(promo);
        await this.applyPromo.click();

        await this.page.waitForTimeout(5000);
        //verify manual promo code 
        await expect(this.appliedPromoCode).toContainText(promo);
        await expect(this.appliedPromoCodeDescription).toContainText(description);
        await expect(this.removeLink).toBeVisible();
        await expect(this.removeLink).toBeEnabled();
        await expect(this.promoCodeAmount).toContainText("-$" + amount);
    }

    /**
     * This method submits the sign up request for
     * free or non free trial Coles Plus subscriber
     */

    async confirmMembership(){
            await this.startmyMembershipButton.click();
    }
    
    /*
    * This method verifies Annual Coles Plus subscription 
    */
    async verifyMembershipSummaryForAnnualStandardFreeTrial(subscriptionType = 'Annual'){
        await expect(this.membershipPriceToPayOn).toContainText('First month');
        await expect(this.membershipPrice).toContainText('Free');
        if (subscriptionType != 'Annual'){
            this.monthlyMembershipPrice.click();
            await expect(this.monthlyMembershipPrice).toContainText('$19 / month');
            await expect(this.monthlyMembershipText).toContainText('Take it a month at a time');
            await expect(this.membershipPriceSummary).toContainText('Membership will continue at $19/month. Renews automatically. Cancel anytime.');
            await expect(this.termsAndConditionsDisclaimer).toContainText('Membership automatically renews each month. Benefits start immediately. Cancel anytime.');
        }else{
            await expect(this.annualMembershipPrice).toContainText('$199 / year');
            await expect(this.annualMembershipText).toContainText('Pay in one go (comes to $16.58 per month)');
            //await expect(this.annualMembershipText).toContainText('Pay in one go (comes to $19.00 per month)');
            await expect(this.membershipPriceSummary).toContainText('Membership will continue at $199/year. Renews automatically. Cancel anytime.');
            await expect(this.termsAndConditionsDisclaimer).toContainText('Membership automatically renews each year. Benefits start immediately. Cancel anytime.');     
        }
        await expect(this.colesPlusHeading).toBeVisible();
        await expect(this.standardBenefitList).toContainText([
            'Unlimited free delivery over $50',
            'Try 1 month free',
            'Make sure to link your Flybuys to be eligible for extra Flybuys points at Coles, First Choice Liquor and Liquorland'
        ]);
        await expect(this.termsAndConditionsLink).toBeVisible();
        await expect(this.termsAndConditionsLink).toContainText('Coles Plus terms and conditions');
        await expect(this.termsAndConditionsLink).toHaveAttribute('href','/important-information/terms/coles-plus'); 
        await expect(this.termsAndConditionsDisclaimer).toContainText('Start 1 month free trial');
    }

    /*
    * This method verifies Annual Coles Plus subscription 
    * for existing user
    */
    async verifyAnnualMembershipSummaryForNonFreeTrial(subscriptionType = 'Annual'){
        await expect(this.annualNonFreeTrialMessage).toContainText("Hey, great to see you again! Thanks for coming back to Coles Plus.")
        await expect(this.membershipPriceToPayOn).toContainText('To pay today');
        if (subscriptionType != 'Annual'){
            this.monthlyMembershipPrice.click();
            await expect(this.monthlyMembershipPrice).toContainText('$19 / month');
            await expect(this.monthlyMembershipText).toContainText('Take it a month at a time');
            await expect(this.membershipPrice).toContainText('$19.00');
            await expect(this.termsAndConditionsDisclaimer).toContainText('Membership automatically renews each month. Benefits start immediately. Cancel anytime.');
        }else{
            await expect(this.annualMembershipPrice).toContainText('$199 / year');
            await expect(this.annualMembershipText).toContainText('Pay in one go (comes to $16.58 per month)');
            await expect(this.membershipPrice).toContainText('$199.00');
            //await expect(this.membershipPriceSummary).toContainText('Membership will continue at $199/year. Renews automatically. Cancel anytime.');
            await expect(this.termsAndConditionsDisclaimer).toContainText('Membership automatically renews each year. Benefits start immediately. Cancel anytime.');     
        }
        await expect(this.colesPlusHeading).toBeVisible();
        await expect(this.standardBenefitList).toContainText([
            'Unlimited free delivery over $50',
            'Try 1 month free',
            'Make sure to link your Flybuys to be eligible for extra Flybuys points at Coles, First Choice Liquor and Liquorland'
        ]);
        await expect(this.termsAndConditionsDisclaimer).toContainText('Start membership');
        await expect(this.termsAndConditionsDisclaimer).toContainText('Only available to one member per Flybuys account.');
        await expect(this.termsAndConditionsLink).toBeVisible();
        await expect(this.termsAndConditionsLink).toContainText('Coles Plus terms and conditions');
        await expect(this.termsAndConditionsLink).toHaveAttribute('href','/important-information/terms/coles-plus'); 
    }

    /*
    **This method verifies Annual Coles Plus Saver subscription 
    */

    async verifyMembershipSummaryForAnnualSaver(subscriptionType = 'Annual'){
        await expect(this.flybuysText).toContainText('You must link your Flybuys card to join Coles Plus Saver. Once you do, you\’ll enjoy double points at Coles, First Choice Liquor and Liquorland. T&Cs apply.');
        await expect(this.linkFlybuys).toBeVisible();
        await expect(this.joinFlybuysButton).toBeVisible();
        if(subscriptionType != 'Annual'){
            await this.monthlyMembershipPrice.click();
            await expect(this.saverMonthlyPrice).toContainText('$7 / month');
            await expect(this.saverMonthlyText).toContainText('Take it a month at a time');
            await expect(this.membershipPriceToPayTodayAmountSaver).toContainText('$7.00');
            await expect(this.membershipPriceSummaryTextSaver).toContainText('Membership will continue at $7/month. Cancel anytime.');
            await expect(this.termsAndConditionsDisclaimer).toContainText('Membership automatically renews each month. Benefits start immediately. Cancel anytime.');

        }else{
            await expect(this.annualMembershipPrice).toContainText('$70 / year');
            await expect(this.annualMembershipText).toContainText('Pay in one go (comes to $5.83 per month)');
            await expect(this.membershipPriceToPayTodayAmountSaver).toContainText('$70.00');
            await expect(this.membershipPriceSummaryTextSaver).toContainText('Membership will continue at $70/year. Cancel anytime.');
            await expect(this.termsAndConditionsDisclaimer).toContainText('Membership automatically renews each year. Benefits start immediately. Cancel anytime.');
        }
        await expect(this.colesPlusSaverHeading).toBeVisible();
        await expect(this.saverBenefitList).toContainText([
            'Enjoy 10% off one shop every calendar month - up to $50 off',
            'Collect double Flybuys points',
            'Pay $7 a month. Cancel anytime'
        ]);
        await expect(this.termsAndConditionsDisclaimer).toContainText('Start membership');
        await expect(this.termsAndConditionsDisclaimer).toContainText('Only available to one member per Flybuys account.');
        await expect(this.termsAndConditionsLink).toBeVisible();
        await expect(this.termsAndConditionsLink).toContainText('Coles Plus Saver terms and conditions');
        await expect(this.termsAndConditionsLink).toHaveAttribute('href','/important-information/terms/coles-plus-saver'); 
    }

    /*
    **This method verifies Annual Coles Plus Saver subscription with promo 
    */

    async verifyMembershipSummaryForAnnualSaverWithPromo(subscriptionType = 'Annual', promo, description, amount, months){
        if(subscriptionType != 'Annual'){
            await this.monthlyMembershipPrice.click();
            await expect(this.saverMonthlyPrice).toContainText('$7 / month');
            await expect(this.saverMonthlyText).toContainText('Take it a month at a time');
            await this.applyManualPromoCode(promo, description, amount);

            let topayamount = 7.00 - amount;
            await expect(this.membershipPriceToPayTodayAmountSaver).toContainText(topayamount.toFixed(2));
            //let discountperiod ='After your ' + months + "-month discount, membership will continue at $7/month. Renews automatically. Cancel anytime.";
            //await expect(this.membershipPriceSummaryTextSaver).toContainText(discountperiod);
            await expect(this.membershipPriceSummaryTextSaver).toContainText('Membership will continue at $7/month. Cancel anytime.');
            //await expect(this.termsAndConditionsDisclaimer).toContainText('Membership will continue at $7/month. Renews automatically. Cancel anytime.');
        }else{
            await expect(this.annualMembershipPrice).toContainText('$70 / year');
            await expect(this.annualMembershipText).toContainText('Pay in one go (comes to $5.83 per month)');
            await this.applyManualPromoCode(promo, description, account);

            let topayamount = 70.00 - amount;
            await expect(this.membershipPriceToPayTodayAmountSaver).toContainText(topayamount.toFixed(2));
            //let discountperiod ='After your ' + months + "-month discount, membership will continue at $70/year. Renews automatically. Cancel anytime.";
            //await expect(this.membershipPriceSummaryTextSaver).toContainText(discountperiod);
            await expect(this.membershipPriceSummaryTextSaver).toContainText('Membership will continue at $70/year. Cancel anytime.');
            //await expect(this.termsAndConditionsDisclaimer).toContainText('Membership will continue at $70/year. Renews automatically. Cancel anytime.');
            //await expect(this.termsAndConditionsDisclaimer).toContainText('Membership automatically renews each year. Benefits start immediately. Cancel anytime.');
        }
        await expect(this.termsAndConditionsDisclaimer).toContainText('Start membership');
        await expect(this.termsAndConditionsDisclaimer).toContainText('Only available to one member per Flybuys account.');
        await expect(this.colesPlusSaverHeading).toBeVisible();
        await expect(this.saverBenefitList).toContainText([
            'Enjoy 10% off one shop every calendar month - up to $50 off',
            'Collect double Flybuys points',
            'Pay $7 a month. Cancel anytime'
        ]);
        await expect(this.termsAndConditionsLink).toBeVisible();
        await expect(this.termsAndConditionsLink).toContainText('Coles Plus Saver terms and conditions');
        await expect(this.termsAndConditionsLink).toHaveAttribute('href','/important-information/terms/coles-plus-saver'); 
    }

    /*
    **This method verifies Annual Coles Plus subscription with promo 
    */

    async verifyMembershipSummaryForAnnualColesPlusNonFreeTrialWithPromoCode (subscriptionType = 'Annual', promo, description, amount, months){

        await expect(this.annualNonFreeTrialMessage).toContainText("Hey, great to see you again! Thanks for coming back to Coles Plus.")
        await expect(this.membershipPriceToPayOn).toContainText('To pay today');
        if (subscriptionType != 'Annual'){
            await this.monthlyMembershipPrice.click();
            await expect(this.monthlyMembershipPrice).toContainText('$19 / month');
            await expect(this.monthlyMembershipText).toContainText('Take it a month at a time');
            await this.applyManualPromoCode(promo, description, amount);
            let payamount = 19.00 - amount;
            await expect(this.membershipPriceToPayTodayAmountStandard).toContainText(payamount.toFixed(2));
            //let discountperiod ='After your ' + months + "-month discount, membership will continue at $19/month. Renews automatically. Cancel anytime.";
            //await expect(this.membershipPriceSummaryDescription).toContainText(discountperiod);
            await expect(this.membershipPriceSummaryDescription).toContainText('Membership will continue at $19/month. Cancel anytime.');
            //await expect(this.termsAndConditionsDisclaimer).toContainText('Membership automatically renews each month. Benefits start immediately. Cancel anytime.');
        }else{
            await expect(this.annualMembershipPrice).toContainText('$199 / year');
            await expect(this.annualMembershipText).toContainText('Pay in one go (comes to $16.58 per month)');

            await this.applyManualPromoCode(promo, description, amount);
            let payamount = 199.00 - amount;
            await expect(this.membershipPriceToPayTodayAmountStandard).toContainText(payamount.toFixed(2));
            //let discountperiod ='After your ' + months + "-month discount, membership will continue at $199/year. Renews automatically. Cancel anytime.";
            //await expect(this.membershipPriceSummaryDescription).toContainText(discountperiod);
            await expect(this.membershipPriceSummaryDescription).toContainText('Membership will continue at $199/year. Cancel anytime.');            
            //await expect(this.termsAndConditionsDisclaimer).toContainText('Membership automatically renews each year. Benefits start immediately. Cancel anytime.');     
        }
        await expect(this.colesPlusHeading).toBeVisible();
        await expect(this.standardBenefitList).toContainText([
            'Unlimited free delivery over $50',
            'Try 1 month free',
            'Make sure to link your Flybuys to be eligible for extra Flybuys points at Coles, First Choice Liquor and Liquorland'
        ]);
        await expect(this.termsAndConditionsDisclaimer).toContainText('Start membership');
        await expect(this.termsAndConditionsDisclaimer).toContainText('Only available to one member per Flybuys account.');
        await expect(this.termsAndConditionsLink).toBeVisible();
        await expect(this.termsAndConditionsLink).toContainText('Coles Plus terms and conditions');
        await expect(this.termsAndConditionsLink).toHaveAttribute('href','/important-information/terms/coles-plus');
    }

    //Flybuys error

    async verifyFlybuysError(){
        await expect(this.flybuysError).toContainText('Flybuys must be linked to join Coles Plus Saver');
        let errorText = await this.flybuysError.textContent();
        console.log(errorText);
        await expect(this.flybuysErrorText).toContainText('This will ensure you get all your member benefits instore and online.');
        await expect(this.flybuysErrorSummary).toContainText('Flybuys must be linked to join Coles Plus Saver');
        await expect(this.flybuysErrorSummaryText).toContainText('This will ensure you get all your member benefits instore and online.');
        await this.backButton.click();

    }

}