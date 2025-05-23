import { test, expect } from '../testFixtures/pageFixture';
const { assert } = require("console");
exports.FlyBuysPage = class FlyBuysPage {
    constructor(page) {
        this.page = page;
        this.flybuysHeading = page.getByRole('heading', { name: 'Flybuys' });
        this.unlinkButton = page.locator("//button[@data-testid='unlink-button']");
        this.linkYourFlybuysText = page.locator('//div[@class="flybuys__button_section"]//a//span');
    }
    async verifyLinkedFlybuys() {
        expect(this.flybuysHeading).toBeVisible({ timeout: 20000 });
        await this.page.waitForTimeout(2000);
        expect(this.unlinkButton).toBeEnabled({ timeout: 25000 });
    }
    async verifyNoFlybuysLinked(){
       const noFlyBuyLinked = await this.linkYourFlybuysText.innerText();
        expect(noFlyBuyLinked).toContain("Link your Flybuys");
    }
}
