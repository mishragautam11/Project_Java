import { test, expect } from '../testFixtures/pageFixture';
const { CheckoutPage } = require("../pages/checkOutPage.js");
const { HomePage } = require("../pages/homePage.js");
const { LoginPage } = require("../pages/loginPage.js");
let addressDetails;
let slotDetails;
/**
 * Page objects for Order confirmation Page .
 */

exports.OrderConfirmationPage = class OrderConfirmationPage {

    constructor(page) {
        this.page = page;
        this.checkOutPage = new CheckoutPage(page);
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.sabReturnReminder = page.locator("//div[@class='sc-de42142a-0 fmgXgC']");
        this.orderLink = page.locator("//a[@identifier='orders']");
        //verify Address
        this.address = page.locator('(//div/child::div[text()="When"]/parent::div//div)[2]');
        this.slotTxt = page.locator('(//div/child::div[text()="When"]/parent::div//div)[4]');
        this.addressTxtOVP = page.locator('//div[@data-testid="delivery-info"]');
        this.slotInOVP = page.locator('//h3[text()="When"]//parent::span//following-sibling::div//child::span[1]');
        this.orderNumber = page.locator('//h3[text()="Order number"]//parent::span//following-sibling::div[@data-testid="order-date"]');
        this.sustainability = page.locator('//h3[text()="Customer notice"]//parent::div//following-sibling::span//a');
        this.moreOnPendingPaymentBtn = page.locator('//div[@data-testid="order-summary-disclaimer"]//a');
        this.paymentMethodSubText = page.locator('//h4/parent::section//child::div//child::div//div[@data-testid="payment-method-sub-text"]//p');
        this.paymentMethodMainText = page.locator('//h4/parent::section//child::div//child::div//div//p[@data-testid="payment-method-main-text"]');
        this.modifyMyOrderBtn = page.locator('//h2[text()="Need to make some changes?"]//parent::div//child::button');
        this.headerTxt = page.locator('//div//child::h1[@data-testid="modal-title"]');
        this.unifiedActionBtn = page.locator('(//div[@data-testid="modal-actions-container"]//button)[2]');
        this.shopProductLink = page.locator('//a[@data-testid="header-link-shop-categories"]');
        this.saveOrderToListBtn = page.locator('//button//span[text()="Save order as a list"]');
        this.totalPriceWithGST = page.locator('//tr[@data-testid="line-item-total"]//td[2]');
    }
    /**
    * For validating the return reminder for swap-a-box in order confirmation page for CC orders
    */
    async validateSabReturnReminder() {
        let baggingSummary = await this.checkOutPage.baggingOrderSummary.textContent({ timeout: 60000 })
        console.log(baggingSummary);
        if (baggingSummary === "Swap-a-box$2.00") {
            await this.sabReturnReminder.isVisible();
            console.log("The return reminder for swap-a-box is displayed");
        }
    }

    /**
    * Verifying bagging in Accounts , Order page for placed orders
    */
    async validateBaggingInPlacedOrder() {
        await this.page.waitForTimeout(1000);
        if (await this.homePage.closeFormButton.isVisible({ timeout: 90000 })) {
            await this.homePage.closeFormButton.click();
        }
        let orderNumber = await this.checkOutPage.orderId.textContent();
        console.log("order Number", orderNumber);
        await this.checkOutPage.baggingOrderSummary.isVisible();
        console.log("The bagging preference for the order :" + orderNumber + " is " + await this.checkOutPage.baggingOrderSummary.textContent());
        console.log("Open Accounts -> Orders Page")
        await this.homePage.btnAccount.isVisible({ timeout: 120000 });
        await this.homePage.btnAccount.click();
        await this.orderLink.click();
        await this.page.waitForTimeout(500);
        let orderNum = orderNumber.toString();
        console.log("Click on View Order button of placed order");
        await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-" + orderNum + "']/following-sibling::div[2]/button[@data-testid='order-details-button']").click();
        await this.checkOutPage.baggingOrderSummary.isVisible();
        console.log("The bagging preference for the order :" + orderNum + " is " + await this.checkOutPage.baggingOrderSummary.textContent());
    }
    /**
    * Verifying Address, after placing the order.
    */
    async getAddressAndSlot(){
        addressDetails = await this.address.innerText();
        console.log(addressDetails);
        slotDetails = await this.slotTxt.innerText();
        console.log(slotDetails);
    }
    async verifyOrderDetails(){
        expect(await this.addressTxtOVP).toBeVisible();
        let slotTxtInOVP = await this.slotInOVP.innerText();
        await this.page.waitForTimeout(2000);
        expect(slotDetails).toEqual(expect.stringMatching(slotTxtInOVP));
        await this.page.waitForTimeout(2000);
        expect(await this.orderNumber).toBeVisible();
    }
    async verifyOrderSummary(){
        expect(this.paymentMethodMainText).toBeVisible();
        console.log("card details or linked account is visible..!!");
        expect(this.paymentMethodSubText).toBeVisible();
        console.log("expiry date or linked paypal Id is visible..!!")
    }
   async modifyOrder(){
        await this.modifyMyOrderBtn.click();
        await this.page.waitForTimeout(1000);
        expect (await this.headerTxt).toBeVisible();
        await this.unifiedActionBtn.click();
        await this.page.waitForTimeout(15000);
        expect (await this.shopProductLink).toBeVisible();
   }
   async saveOrderToList(){
    await this.saveOrderToListBtn.click();
    await this.page.waitForTimeout(1000);
    expect (await this.headerTxt).toBeVisible();
    await this.unifiedActionBtn.click();
    await this.page.waitForTimeout(15000);
    await expect(this.page).toHaveURL(/lists/, { timeout: 10000 });
   }
   
   async verifyTotalPriceWithGST(expectedTotalPrice) {
    await this.loginPage.verifyInnerText(this.totalPriceWithGST, expectedTotalPrice);
    console.log("successfully verified price..!!");
}
}