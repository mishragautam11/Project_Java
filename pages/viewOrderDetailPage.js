import { test, expect } from '../testFixtures/pageFixture';

const{CheckoutPage} = require("../pages/checkOutPage.js");
const { HomePage } = require("../pages/homePage.js");
const {OrderConfirmationPage} = require("../pages/orderConfirmationPage.js");

/**
 * Page objects for view Order Details page .
 */

exports.viewOrderDetailPage = class viewOrderDetailPage {

    constructor(page) {
        this.page = page;
        this.checkOutPage = new CheckoutPage(page);
        this.homePage = new HomePage(page);
        this.orderConfirmationPage = new OrderConfirmationPage(page);
        this.orderTrackerMainHeading=page.locator("//*[@data-testid='track-order-main-text']");
        this.orderPlacedHeading=page.locator("//*[@data-testid='track-order-sub-text']");
        this.orderTrackerStepText1=page.locator("//*[@data-testid='step-Order placed']");
        this.orderTrackerStepText2=page.locator("//*[@data-testid='step-Preparing order']");
        this.orderTrackerStepText3=page.locator("//*[@data-testid='step-Out for delivery']");
        this.orderTrackerStepText4=page.locator("//*[@data-testid='step-Ready for collection']");
        this.yesCancelOrderpopup = page.locator("/*[text()='Yes, cancel order']");
    }

    async authenticatedDeliveryTrackerHD(){
        if (await this.homePage.closeFormButton.isVisible({ timeout: 90000 })) {
            await this.homePage.closeFormButton.click();
        }
            let orderNumber = await this.checkOutPage.orderId.textContent();
            console.log("order Number",orderNumber);
            console.log("Open Accounts -> Orders Page")
            await this.homePage.btnAccount.isVisible({ timeout: 120000 });
            await this.homePage.btnAccount.click();
            await this.orderLink.click();
            await this.page.waitForTimeout(500);
            let orderNum=orderNumber.toString();
            console.log("Click on View Order button of placed order");
            await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-"+orderNum+"']/following-sibling::div[2]/button[@data-testid='order-details-button']").click();
            await this.checkOutPage.baggingOrderSummary.isVisible();
            await this.page.orderTrackerMainHeading.isVisible({timeout:8000});
            await this.page.orderTrackerStepText1.isVisible({timeout:8000});
            await this.page.orderTrackerStepText2.isVisible({timeout:8000});
            await this.page.orderTrackerStepText3.isVisible({timeout:8000});
            console.log("Delivery Tracker is visible for Home delivery Order");
    
    }

    async authenticatedDeliveryTrackerCC(){
        if (await this.homePage.closeFormButton.isVisible({ timeout: 90000 })) {
            await this.homePage.closeFormButton.click();
        }
            let orderNumber = await this.checkOutPage.orderId.textContent();
            console.log("order Number",orderNumber);
            console.log("Open Accounts -> Orders Page")
            await this.homePage.btnAccount.isVisible({ timeout: 120000 });
            await this.homePage.btnAccount.click();
            await this.orderLink.click();
            await this.page.waitForTimeout(500);
            let orderNum=orderNumber.toString();
            console.log("Click on View Order button of placed order");
            await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-"+orderNum+"']/following-sibling::div[2]/button[@data-testid='order-details-button']").click();
            await this.page.orderTrackerMainHeading.isVisible({timeout:8000});
            await this.page.orderTrackerStepText1.isVisible({timeout:8000});
            await this.page.orderTrackerStepText2.isVisible({timeout:8000});
            await this.page.orderTrackerStepText4.isVisible({timeout:8000});
            console.log("Delivery Tracker is visible for C&C order");
    

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
        await this.page.locator("//*[@id='orders-tab-0']/ul/li/div[@id='order-item-"+orderNum+"']/following-sibling::div[2]/button[@data-testid='order-details-button']").click();
        await this.page.waitForTimeout(3000);
        expect (await this.title).toBeVisible();
        await this.cancelOrder.click();
        await this.yesCancelOrderpopup.click();
        await this.page.waitForTimeout(10000);
        expect (await this.reorderItemsButton).toBeVisible({timeout:5000}); 
        await this.reorderItemsButton.click();

    }


}
