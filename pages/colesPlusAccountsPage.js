import { expect } from '../testFixtures/pageFixture';

exports.ColesPlusAccountsPage = class ColesPlusAccountsPage {

    constructor(page) {
        this.page = page;
        this.tryOneMonthFreeButton = page.locator("//a[contains(@href,'/coles-plus/sign-up')]");
        this.joinColesPlusSaverButton = page.locator("//a[@href='/coles-plus-saver/sign-up']");
        this.subscriptionsHeading = page.locator("//h3[text()='Subscriptions']");
        this.editPaymentLink = page.locator("//a[@aria-label='Edit Payment method']");
        this.viewPaymentsLink = page.locator("//a[@href='/account/payment-history']");
        //this.cancelMembership = page.locator("//a[@href='/account/cancel-membership']");
        //this.cancelMembership = page.locator("a[@href='/account/coles-plus-saver-cancel-membership']");
        this.cancelMembership = page.locator("//span[text()='Cancel membership']");
        this.paymentMethodMainText = page.locator("//p[@data-testid='payment-method-main-text']");
        this.paymentCardExpiryDate = page.locator("//*[@data-testid='payment-method-sub-text']/p");

        this.btneditforPayment = page.locator("//button[text()='Edit']");
        this.radiobtnforCredicard = page.locator("//input[@name='Add credit or debit card']");

        //Edit Payment details.
        this.paymentMethodHeading = page.locator("(//div[@data-testid='payment-options-coles-plus'])[2]//p[@data-testid='payment-method-main-text']");
        this.paypalEmailID = page.locator("//p[contains(@class,'coles-targeting-PaymentMethodSummarySubText')]");

        this.cardHeading = page.locator("//p[contains(text(),'Card ending in')]");
        this.cardExpireDetail = page.locator("//p[contains(text(),'Expires')]");


        //Promo Code details
        //this.labelAppliedPromotions = page.locator("//section[contains(@class,'coles-targeting-StylesColesPlusSectionContainer')]/span[text()='Applied promotions']");
        this.labelAppliedPromotions = page.locator("//div[contains(text(),'Applied promotions')]");
        this.appliedPromoCode = page.locator("//span[contains(@class,'coles-targeting-AppliedPromotionPromoCode')]");
        this.appliedPromoDescription = page.locator("//*[contains(@class,'coles-targeting-AppliedPromotionPromoCode')]/ancestor::li/div[2]/div");

        //Coles Plus Saver
        this.saverHeading = page.locator("//section//span[text()='Coles Plus Saver']");
        this.saverCancelMembershipButton = page.locator("//a[@href='/account/coles-plus-saver-cancel-membership']");
        this.saverDiscountMonth = page.locator("(//span[text()='Coles Plus Saver']/ancestor::section//div[@class='title-section'])[1]");
        this.saverDiscountStatus = page.locator("(//span[text()='Coles Plus Saver']/ancestor::section//div[@class='title-section']/following-sibling::div)[1]");
        this.saverDiscountStatusSubText = page.locator("(//span[text()='Coles Plus Saver']/ancestor::section//div[@class='title-section']/following-sibling::div//div)[1]");
        this.saverDiscountStatusExpiry = page.locator("(//span[text()='Coles Plus Saver']/ancestor::section//div[@class='title-section']/following-sibling::div//div)[2]");
        //this.saverDiscountStatus = page.locator("//span[text()='Coles Plus Saver']/ancestor::section//div[@class='statusWrapper']/div");
        //this.saverDiscountStatusSubText = page.locator("//span[text()='Coles Plus Saver']/ancestor::section//div[@class='statusWrapper']/following-sibling::p[1]");
        //this.saverDiscountStatusExpiry = page.locator("//span[text()='Coles Plus Saver']/ancestor::section//div[@class='statusWrapper']/following-sibling::p[2]");
        this.saverMoneyContent = page.locator("//span[text()='Coles Plus Saver']/ancestor::section//div[@class='right-content-wrapper']/div/div");

        //Flybuys
        this.linkFlybuys = page.locator("//a[contains(@href,'integration-flybuys')][text()='Link your Flybuys']");

        //Marketing tile
        this.marketingHeading = page.locator("//h3[text()='You may also like']");
        this.marketingColesPlusLink = page.locator("//h3[text()='You may also like']/parent::div//a[contains(@href,'/ways-to-shop/')]");
        this.marketingColesPlusTnC = page.locator("//h3[text()='You may also like']/parent::div//a[contains(@href,'/important-information/terms/')]");
        this.marketingLearnMoreButton = page.locator("//h3[text()='You may also like']/parent::div//span[text()='Learn more']");
    
        //cancel subscription details
        this.cancelledMembershipText = page.locator("//div[text()='You’ve cancelled your membership']");
        this.cancelledMembershipDetail = page.locator("//div[@data-testid='message-content']");


        //Coles Plus and  Coles Plus Saver membership Content
        this.colesPlusHeading = page.locator("//h2[text()='Coles Plus']");
        this.standardBenefitInfo = page.locator("(//p[@data-testid='coles-plus-non-member-info'])[1]");
        this.standardDetails = page.locator("(//p[@data-testid='coles-plus-non-member-info']//following-sibling::div//p[contains(text(),'or $')])[1]");
        this.saverBenefitInfo = page.locator("(//p[@data-testid='coles-plus-non-member-info'])[2]");
        this.colesPlusSaverHeading = page.locator("//h2[text()='Coles Plus Saver']");
        this.saverDetails = page.locator("(//p[@data-testid='coles-plus-non-member-info']//following-sibling::div//p[contains(text(),'or $')])[2]");

        //annual benefits coles plus
        this.moneySavedHeading = page.locator("//strong[text()='Money saved']");
        this.moneySavedText = page.locator("(//span[text()='Coles Plus']/parent::div/following-sibling::div//div//div//div//div)[1]");
        this.timeSavedHeading = page.locator("//strong[text()='Time saved']");
        this.timeSavedText = page.locator("(//span[text()='Coles Plus']/parent::div/following-sibling::div//div//div//div//div)[2]");

        //saving Calculate
        this.savingCalculateLink = page.locator("//a[contains(@href,'/ways-to-shop/membership/coles-plus/savings-calculation')]");

        //payment details
        this.paymentDetailsButton = page.locator("//div[contains(text(),'Payment details')]");
        //this.paymentDetailsButton = page.locator("//div[@data-testid='accordion-title']");
        this.shopnowButton = page.locator("//span[text()='Shop now']");

    }

    /**
     * This method is to navigate to Coles Plus standard sign up page
     * for both free and non free trial user 
     */
    async goToColesPlusSignUp() {
        await expect(this.colesPlusHeading).toBeVisible();
        await expect(this.standardBenefitInfo).toContainText('Unlimited free deliveries over $50, supersized Flybuys points and more.');
        await expect(this.standardDetails).toContainText('or $16.58/month with a yearly membership');
        await expect(this.tryOneMonthFreeButton).toBeVisible({ timeout: 2000 });
        await this.tryOneMonthFreeButton.click();
    }

    /**
     * This method is to navigate to Coles Plus saver sign up page
     */
    async goToColesPlusSaverSignUp() {
        await expect(this.colesPlusSaverHeading).toBeVisible();
        await expect(this.saverBenefitInfo).toContainText('10% off one shop a calendar month (up to $50 off), double Flybuys points and more.');
        await expect(this.saverDetails).toContainText('or $5.83/month with a yearly membership');
        await expect(this.joinColesPlusSaverButton).toBeVisible({ timeout: 2000 });
        await this.joinColesPlusSaverButton.click();
    }

    /**
     * This method verifies that Coles Plus account is successfully created 
     * and reflected on Coles Plus accounts page
     */
    async verifyColesPlusSubscription(cardlastfourdigits, expirymonth, expiryyear) {

        await expect(this.linkFlybuys).toBeVisible();
        await expect(this.subscriptionsHeading).toBeVisible();
        await expect(this.moneySavedHeading).toBeVisible();
        await expect(this.moneySavedText).toContainText("Get your first delivery or Rapid Click & Collect order as a member. We’ll tally up the money you save here.");
        await expect(this.timeSavedHeading).toBeVisible();
        await expect(this.timeSavedText).toContainText('Better things to do than head to the shops? Order online and save time. Check this space to see how much.');
        await expect(this.savingCalculateLink).toBeVisible();
        await expect(this.paymentDetailsButton).toBeVisible();
        await this.paymentDetailsButton.click();
        await expect(this.editPaymentLink).toBeVisible();
        await expect(this.cancelMembership).toBeVisible();
        //await expect(this.viewPaymentsLink).toBeVisible();
        await this.verifyCardDetails(cardlastfourdigits, expirymonth, expiryyear);
        await this.verifyLearnMoreTile();
    }

    /**
     * This method verifies the marketing tile for other coles plus product is present when user
     * has either one of them
     */
    async verifyLearnMoreTile() {
        await expect(this.marketingHeading).toBeVisible();
        await expect(this.marketingColesPlusLink).toBeVisible();
        //await expect(this.marketingColesPlusTnC).toBeVisible();
        await expect(this.marketingLearnMoreButton).toBeVisible();
    }

    /**
     * This method verifies that Coles Plus Saver account is successfully created 
     * and reflected on Coles Plus accounts page
     */
    async verifyColesPlusSaverSubscription(cardlastfourdigits, expirymonth, expiryyear) {
        await expect(this.linkFlybuys).toBeVisible();
        await expect(this.subscriptionsHeading).toBeVisible();
        await expect(this.saverHeading).toBeVisible();
        

        //    Verify Saver offer status
        let today = new Date();
        let lastDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        let validity = (lastDayOfCurrentMonth.getDate() - today.getDate()).toString();

       await expect(this.saverDiscountMonth).toContainText(today.toLocaleString('en-AU', { month: 'long' }));
       await expect(this.saverDiscountMonth).toContainText(' 10% discount');
       await expect(this.saverDiscountStatus).toContainText('Available now');
       await expect(this.saverDiscountStatusSubText).toContainText('Your discount is ready to apply at checkout.');
       await expect(this.saverDiscountStatusExpiry).toContainText(`Discount expires in ${validity} days`);
       await expect(this.moneySavedHeading).toBeVisible();
       await expect(this.saverMoneyContent).toContainText("Ready to use your monthly discount? Nice! Check out now. We’ll tally up your savings every month.");
       await expect(this.shopnowButton).toBeVisible();
       await expect(this.paymentDetailsButton).toBeVisible();
       await this.paymentDetailsButton.click();
       await this.verifyCardDetails(cardlastfourdigits, expirymonth, expiryyear);
       await expect(this.editPaymentLink).toBeVisible();
       await expect(this.saverCancelMembershipButton).toBeVisible();
       await this.verifyLearnMoreTile();

    }

    /**
     * This method verifies that the promo code applied during sign up is displayed on 
     * accounts page
     */
    async verifyPromoCode(promo, description) {
        await expect(this.labelAppliedPromotions).toBeVisible();
        await this.labelAppliedPromotions.click();
        await expect(this.appliedPromoCode).toContainText(promo);
        await expect(this.appliedPromoDescription).toContainText(description);
    }

    /**
    * This method is used to click the edit payment link present on Coles Plus accounts page
    */
    async clickEditPaymentLink() {
        await expect(this.editPaymentLink).toBeVisible();
        await this.editPaymentLink.click();

    }

    /**
     * This method is used to validate the edited payment for cards Coles Plus accounts page
     */
    async verifyCardDetails(cardlastfourdigits, expirymonth, expiryyear) {
        //await expect(this.cardHeading).toContainText('Card ending in ' + cardlastfourdigits);
        //await expect(this.cardExpireDetail).toContainText('Expires ' + expirymonth + '/' + expiryyear);

    }

    /**
    * This method is used to validate the edited payment for paypal Coles Plus accounts page
    */

    async validateEditPaymentPaypal(paypalemail) {
        await expect(this.paymentMethodHeading).toContainText('Linked account');
        await expect(this.paypalEmailID).toContainText(paypalemail);
    }

    /* 
    **method to cancel coles plus membership for non free trial member   
    */

    async cancelColesPlusSubscription() {
        await expect(this.cancelMembership).toBeVisible();
        await this.cancelMembership.click();
    }


    async verifyColesPlusCancelSubscription(cardlastfourdigits, expirymonth, expiryyear) {

        await expect(this.cancelledMembershipText).toBeVisible();
        await expect(this.cancelledMembershipDetail).toBeVisible();

        
            await expect(this.linkFlybuys).toBeVisible();
            await expect(this.subscriptionsHeading).toBeVisible();
            await expect(this.moneySavedHeading).toBeVisible();
            await expect(this.moneySavedText).toContainText("Get your first delivery or Rapid Click & Collect order as a member. We’ll tally up the money you save here.");
            await expect(this.timeSavedHeading).toBeVisible();
            await expect(this.timeSavedText).toContainText('Better things to do than head to the shops? Order online and save time. Check this space to see how much.');
            await expect(this.savingCalculateLink).toBeVisible();
            await expect(this.paymentDetailsButton).toBeVisible();
            await this.paymentDetailsButton.click();
            await this.verifyCardDetails(cardlastfourdigits, expirymonth, expiryyear);
      
    }
}

