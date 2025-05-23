import exp from 'constants';
import { expect } from '../testFixtures/pageFixture';

exports.ColesPlusCancelPage = class ColesPlusCancelPage {

    constructor(page){

        this.page = page;

        //Cancel My Coles Plus Membership page
        //this.cancelMyColesPlusMembershipTitle = page.locator("//h2[text()='Cancel my Coles Plus membership']");
        this.cancelMyColesPlusMembershipTitle = page.locator("//h2[contains(text(),'Cancel my Coles Plus')]");
        this.offerCouponDescriptionText = page.locator("//div[contains(@class,'coles-targeting-OfferCouponDescription')]");
        this.benefitList = page.locator("//ul[contains(@class,'coles-targeting-InclusionListInclusionListItems')]/li/span");


        this.cancelMembershipButton = page.locator("//span[text()='Cancel membership']");


        //this.standardSubscriptionCancelTitle = page.locator('//h2[text()="You\'ve cancelled your Coles Plus membership"]');
        this.standardSubscriptionCancelTitle = page.locator('//h2[contains(text(),"You\'ve cancelled your Coles Plus")]');
        this.cancelMembershipDescription = page.locator("//p[contains(@class,'coles-targeting-CancelmembershipDescription')][1]");
        this.startSurveyButton = page.locator("//span[text()='Start survey']");
        this.skipFeedbackButton = page.locator("//span[text()='Skip feedback']");
        this.backButton = page.locator("//span[text()='Back to Account']");

    }


    /* 
    this method will verify Cancel My Coles Plus membership page text
    And click to cancel membership for non free trial member
    */

    async cancelMyColesPLusMembership() {
        
       
            await expect(this.cancelMyColesPlusMembershipTitle).toBeVisible();
            await expect(this.cancelMyColesPlusMembershipTitle).toContainText('Cancel my Coles Plus membership');

        /*let couponText = await this.offerCouponDescriptionText.textContent();
        console.log(couponText);
        await expect(couponText).toEqual('Stay with us and get $19 off an online shop over $70 next billing period. Choose Continue membership to activate. T&Cs apply');
        */
        await expect(this.benefitList).toContainText([
            'Unlimited free delivery for online Coles orders when you spend over $50',
            '2x Flybuys points instore and online at Coles, and in-store at First Choice Liquor and Liquorland',
            '10x Flybuys on liquor bought online at Coles, First Choice Liquor and Liquorland',
            'Free 90-minute Rapid Click & Collect, where available'
            ]);
        
        await expect(this.cancelMembershipButton).toBeVisible();
        await this.cancelMembershipButton.click();
 
    }

    /*
    **method to verify cancel survey page for non free trial coles plus member  
    */

    async cancelMembership(){

        await expect(this.standardSubscriptionCancelTitle).toBeVisible();

        
            let today = new Date();
            let todaydate = today.toLocaleString('en-AU', { day:'numeric', month: 'long', year:'numeric' });
            let cancelDescriptionText = await this.cancelMembershipDescription.textContent(); 
            console.log(cancelDescriptionText);
            await expect(cancelDescriptionText).toEqual(`It was a pleasure to have you with us! Come back anytime. And remember, you can still use Coles Plus until ${todaydate}.`); 
        
        await expect(this.backButton).toBeVisible();

    }
}