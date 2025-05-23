import { test, expect } from '../testFixtures/pageFixture';


exports.B2bUnsubscribePage = class B2bUnsubscribePage {
    
    constructor(page) {
        this.page = page;
        this.yesUnsubCta = page.locator('//button[@aria-label="Yes, unsubscribe"]');
        this.unsubText = page.locator('//div[normalize-space()="Unsubscribed successfully"]');
          
    }


    /**
     * Method To verify email subject line and click on it.
     */
    async unsubscribeInvite(){
        await this.yesUnsubCta.scrollIntoViewIfNeeded();
        await expect(this.yesUnsubCta).toBeVisible();
        await this.yesUnsubCta.click();
        await expect(this.unsubText).toBeVisible();
        
    }

   }
