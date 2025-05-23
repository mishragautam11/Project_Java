import { test, expect } from '../testFixtures/pageFixture';
//const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage.js");

/**
 * Page objects for Product details page.
 */
exports.ProductDetailsPage = class ProductDetailsPage {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productTitle = page.locator('//h1');
        this.productPricing = page.locator('//span[@data-testid="pricing"]');
        this.btnAddToCart = page.locator('(//div[@data-testid="add-to-cart"])[1]');
        this.btnList = page.locator('(//button[@data-testid="list-button"])[1]');
        this.dateOfBirth = page.locator("//input[@id='dob']");
        this.btnConfirmAge = page.locator("//button[@data-testid='confirm-age']");
        this.restrictedProduct = page.locator("(//*[@data-testid='product-list-AgeRestriction']/descendant::span[@data-testid='product_add_list_to_trolley__title']/child::div)[1]");
        this.trolleyCTA = page.locator("//button[@data-testid='header-trolley-tablet-up']/span/span");
        this.btnIncreaseProductQty = page.locator('(//button[@data-testid="plus-btn"])[2]');
        this.promoOfferMsg = page.locator('//*[text()="Savings unlocked."]');
        this.offerPriceMsg = page.locator('//h1[@data-testid="modal-title"]');
        this.btnContinueShopping = page.locator('//button[@data-testid="modal-continue-shopping-button"]');
        this.trolleyPrice = page.locator('//div[@data-testid="trolley-price"]/child::div');
        this.productLink = page.locator('//a[@class="product__link product__image"]');
        this.tobaccoBanner= page.locator('//div[@data-testid="tobacco-quitline-banner"]');
        this.daysOfLifeMsg = page.locator('//span[@data-testid="daysOfLife"]');
        this.itemsTotalPrice = page.locator('(//dt[text()="Items"]/following-sibling::dd)[1]');
        this.viewItemDetails = page.locator('//div[@data-testid="trolley-price-details"]/child::button');
    }

    async verifyProductDetails(expectedProductTitle, expectedProductPricing) {
        await this.loginPage.verifyInnerText(this.productTitle,expectedProductTitle);
        await this.loginPage.verifyInnerText(this.productPricing,expectedProductPricing);
    }

    async verifyAgeGatePopUp() {
        await this.btnAddToCart.click();
        expect(await this.loginPage.getByText("You need to be of legal age to purchase restricted items. You’ll also need to show valid photo ID at pick up or delivery.").isVisible({ timeout: 30000 }));
    }

    async enterDOBInAgeGate(){
        await this.dateOfBirth.fill("13022020");
        await this.btnConfirmAge.click();
    }

    async verifyAgeGateRestrictionMsg(){
        expect(await this.loginPage.getByText("You need to be over 18 to continue.").isVisible({ timeout: 30000 }));
        await this.loginPage.getByText("Cancel").click();
    }
    async verifyLiquorNotAddedForAgeGate(){
        await this.page.waitForTimeout(5000);
        expect (await this.trolleyCTA.textContent()).toEqual("$0.00");
    }

    async validateComplexPromoApplied(){
        await this.btnIncreaseProductQty.click();
        await this.promoOfferMsg.isVisible({timeout:3000});
        const offerPrice = parseFloat(await this.offerPriceMsg.innerText().then(text => text.match(/\$([0-9]+)/)[1]));
        await this.btnContinueShopping.click();
        await this.trolleyCTA.click();
        await this.viewItemDetails.click();
        const trolleyPriceValue = parseFloat((await this.itemsTotalPrice.innerText()).slice(1));
        await expect(offerPrice).toEqual(trolleyPriceValue);
    }

    async validateTobaccoBannerIsPresentOnPDP(){
        await this.productLink.nth(0).click();
        await expect(this.tobaccoBanner).toBeVisible({timeout:3000});
    }

    async validateDaysOfLifeMsgOnPDP(){
        await this.productLink.nth(0).click();
        await expect(this.daysOfLifeMsg.nth(0)).toBeVisible({timeout:3000});
    }
    
}