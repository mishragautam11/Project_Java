import { test, expect } from '../testFixtures/pageFixture';
const { OrderConfirmationPage } = require("../pages/orderConfirmationPage.js");
const { CheckoutPage } = require("../pages/checkOutPage.js");

/**
 * Page objects for  Order Details page .
 */

exports.OrderDetailsPage = class OrderDetailsPage {

    constructor(page) {
        this.page = page;
        this.orderConfirmationPage = new OrderConfirmationPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.orderTrackerMainHeading = page.locator("//*[@data-testid='track-order-main-text']");
        this.orderPlacedHeading = page.locator("//*[@data-testid='track-order-sub-text']");
        this.orderTrackerStepTextOne = page.locator("//*[@data-testid='step-Order placed']");
        this.orderTrackerStepTextTwo = page.locator("//*[@data-testid='step-Preparing order']");
        this.orderTrackerStepTextThree = page.locator("//*[@data-testid='step-Out for delivery']");
        this.orderTrackerStepTextFour = page.locator("//*[@data-testid='step-Ready for collection']");
        this.orderId = page.locator("//div[@data-testid='order-date']/div");
        this.btnAccount = page.locator('//button[@data-testid="header-user"]');
        this.orderLink = page.locator('//a[@data-testid="nav-link"]//span[text()="Orders"]');
        this.baggingOrderSummary = page.locator('//tr[@data-testid="line-item-bagging"]');
        this.title = page.locator('//h1[@data-testid="modal-title"]');
        this.modifyOrder = page.locator('(//div[@data-testid="modal-actions-container"]/child::button)[2]');
        this.shopProduct = page.locator('//a[@data-testid="header-link-shop-categories"]');
        this.cancelOrder = page.locator('//*[@data-testid="cancel-order-btn"]');
        this.reorderItemsButton = page.locator('//*[@data-testid="reorder-items-btn"]');
        this.yesCancelOrderPopup = page.locator("//*[text()='Yes, cancel order']");
        this.popUp = page.locator("//*[@aria-labelledby= 'modal-title']");
    }

    async hdAuthenticatedDeliveryTracker() {
        let orderNumber = await this.orderId.textContent();
        console.log(typeof (orderNumber));
        console.log("order Number", orderNumber);
        console.log("Open Accounts -> Orders Page")
        await this.btnAccount.isVisible({ timeout: 12000 });
        await this.btnAccount.click();
        await this.page.waitForTimeout(5000);
        await this.orderLink.click();
        await this.page.waitForTimeout(5000);       
        console.log("Click on View Order button of placed order");
        await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-" + orderNumber + "']/following-sibling::div[2]/button[@data-testid='order-details-button']").click();
        await this.page.waitForTimeout(3000);
        await this.baggingOrderSummary.isVisible();
        await this.page.waitForTimeout(3000);
        await this.orderTrackerMainHeading.isVisible({ timeout: 5000 });
        await this.orderTrackerStepTextOne.isVisible({ timeout: 2000 });
        await this.orderTrackerStepTextTwo.isVisible({ timeout: 2000 });
        await this.orderTrackerStepTextThree.isVisible({ timeout: 2000 });
        console.log("Delivery Tracker is visible for Home delivery Order");
    }

    async ccAuthenticatedDeliveryTracker() {
        let orderNumber = await this.orderId.textContent();
        console.log(typeof (orderNumber));
        console.log("order Number", orderNumber);
        console.log("Open Accounts -> Orders Page")
        await this.btnAccount.isVisible({ timeout: 12000 });
        await this.btnAccount.click();
        await this.page.waitForTimeout(5000);
        await this.orderLink.click();
        await this.page.waitForTimeout(5000);       
        console.log("Click on View Order button of placed order");
        await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-" + orderNumber + "']/following-sibling::div[2]/button[@data-testid='order-details-button']").click();
        await this.page.waitForTimeout(3000);
        await this.baggingOrderSummary.isVisible();
        await this.page.waitForTimeout(3000);
        await this.orderTrackerMainHeading.isVisible({ timeout: 5000 });
        await this.orderTrackerStepTextOne.isVisible({ timeout: 2000 });
        await this.orderTrackerStepTextTwo.isVisible({ timeout: 2000 });
        await this.orderTrackerStepTextFour.isVisible({ timeout: 2000 });
        console.log("Delivery Tracker is visible for Home delivery Order");
    }
    async modifyOrderInOrderDetails(){
        let orderNumber = await this.orderId.textContent();
        console.log(typeof (orderNumber));
        console.log("order Number", orderNumber);
        console.log("Open Accounts -> Orders Page")
        await this.btnAccount.isVisible({ timeout: 5000 });
        await this.btnAccount.click();
        await this.page.waitForTimeout(5000);
        await this.orderLink.click();
        await this.page.waitForTimeout(5000);       
        console.log("Click on View Order button of placed order");
        await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-" + orderNumber + "']/following-sibling::div[2]/button[@data-testid='modify-order-button']").click();
        await this.page.waitForTimeout(3000);
        expect (await this.title).toBeVisible();
        await this.modifyOrder.click();
        await this.page.waitForTimeout(10000);
        expect (await this.shopProduct).toBeVisible({timeout:5000}); 
    }
    async verifyProductTotalPrice(expectedTotalPrice){
        let orderNumber = await this.orderId.textContent();
        console.log(typeof (orderNumber));
        console.log("order Number", orderNumber);
        console.log("Open Accounts -> Orders Page")
        await this.btnAccount.isVisible({ timeout: 12000 });
        await this.btnAccount.click();
        await this.page.waitForTimeout(5000);
        await this.orderLink.click();
        await this.page.waitForTimeout(5000);       
        console.log("Click on View Order button of placed order");
        await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-" + orderNumber + "']/following-sibling::div[2]/button[@data-testid='order-details-button']").click();
        await this.page.waitForTimeout(3000);
        await this.baggingOrderSummary.isVisible();
        await this.checkoutPage.verifyProductDetails(expectedTotalPrice);
        console.log("Product price verified in order details page..!!");
    }
    async verifyProductTotalPriceWithGST(expectedTotalPriceWithGST){
        let orderNumber = await this.orderId.textContent();
        console.log(typeof (orderNumber));
        console.log("order Number", orderNumber);
        console.log("Open Accounts -> Orders Page")
        await this.btnAccount.isVisible({ timeout: 12000 });
        await this.btnAccount.click();
        await this.page.waitForTimeout(5000);
        await this.orderLink.click();
        await this.page.waitForTimeout(5000);       
        console.log("Click on View Order button of placed order");
        await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-" + orderNumber + "']/following-sibling::div[2]/button[@data-testid='order-details-button']").click();
        await this.page.waitForTimeout(3000);
        await this.baggingOrderSummary.isVisible();
        await this.orderConfirmationPage.verifyTotalPriceWithGST(expectedTotalPriceWithGST);
    }
    async orderCancel(){
       
       
        let orderNumber = await this.orderId.textContent();
        console.log(typeof (orderNumber));
        console.log("order Number", orderNumber);
        console.log("Open Accounts -> Orders Page")
        await this.btnAccount.isVisible({ timeout: 5000 });
        await this.btnAccount.click();
        await this.page.waitForTimeout(5000);
        await this.orderLink.click();
        await this.page.waitForTimeout(5000);       
        console.log("Click on View Order button of placed order");
        await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-"+orderNumber+"']/following-sibling::div[2]/button[@data-testid='order-details-button']").click();
        await this.page.waitForTimeout(3000);
        expect (await this.title).toBeVisible();
        await this.cancelOrder.click();
        expect (await this.popUp).toBeVisible({timeout:20000});
        await this.yesCancelOrderPopup.click();
        await this.page.waitForTimeout(10000);
        expect (await this.reorderItemsButton).toBeVisible({timeout:20000}); 
        await this.reorderItemsButton.click();

    }


}
