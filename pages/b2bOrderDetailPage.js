import { test, expect } from '../testFixtures/pageFixture';

exports.B2bOrderDetailPage = class B2bOrderDetailPage {
    
    constructor(page) {
        this.page = page;

        this.accountButton = page.getByTestId('header-user');
        this.ordersTab = page.locator("//a[@identifier='business_orders']");
        this.orderApprovalTab = page.locator("//span[text()= 'Order Approvals']");
        this.seacrhOrderNumTxtBox = page.locator("//div[@id='business-orders-tab-1']//div[@data-testid='search-field']/input");
        this.pendingApprovalText = page.locator("//p[text()= 'Pending approval']");
        this.approveOrderButton = page.locator("//span[text()= 'Approve order']");
        this.approveOrderModelButton = page.locator("//div[@aria-describedby='modal-description']//span[text()= 'Approve order']");
        this.approveOrderText = page.locator("//h1[text()= 'Would you like to approve this order?']");
        this.orderApprovedMsg = page.locator("//div[text()= 'Order approved']");
        this.orderPlacedMsg = page.locator("//div[@data-testid='track-order-sub-text']//p[text()= 'Order placed']");
        this.rejectOrderButton = page.locator("//span[text()= 'Reject order']");
        this.rejectOrderText = page.locator("//h1[text()= 'Would you like to reject this order?']");
        this.reasonForReject = page.locator("//input[@id='reason']");
        this.rejectOrderModelButton = page.locator("//div[@aria-describedby='modal-description']//span[text()= 'Reject order']");
        this.orderRejectedModMsg = page.locator("//div[text()= 'Order rejected']");
        this.orderRejectedLabel = page.locator("//div[@data-testid='track-order-sub-text']//p[text()= 'Order rejected']");

        this.logoutButton = page.locator("//span[text()= 'Log out']");
        
    }

    /**
     * Method to approve an order in order Detail page.
     */
    async approveOrderInOrderDetail(orderId) {
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.ordersTab).toBeVisible();
        await this.ordersTab.click();
        await expect(this.orderApprovalTab).toBeVisible();
        await this.orderApprovalTab.click();
        await expect(this.seacrhOrderNumTxtBox).toBeVisible();
        await this.seacrhOrderNumTxtBox.fill(orderId);
        const orderDetailChevron = "//td[text()= '"+orderId+"']/parent::tr//td/button";
        await this.page.waitForTimeout(4000);
        await expect(this.page.locator(orderDetailChevron).last()).toBeVisible();
        await this.page.locator(orderDetailChevron).last().click();
        await expect(this.approveOrderButton).toBeVisible();
        await this.approveOrderButton.click();
        await expect(this.approveOrderText).toBeVisible();
        await expect(this.approveOrderModelButton).toBeVisible();
        await this.approveOrderModelButton.click();
        await this.page.waitForTimeout(4000);
        await expect(this.orderApprovedMsg).toBeVisible();
        await expect(this.orderPlacedMsg).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();

    }

    /**
     * Method to reject an order in order Detail page.
     */
    async rejectOrderInOrderDetail(orderId) {
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.ordersTab).toBeVisible();
        await this.ordersTab.click();
        await expect(this.orderApprovalTab).toBeVisible();
        await this.orderApprovalTab.click();
        await expect(this.seacrhOrderNumTxtBox).toBeVisible();
        await this.seacrhOrderNumTxtBox.fill(orderId);
        const orderDetailChevron = "//td[text()= '"+orderId+"']/parent::tr//td/button";
        await this.page.waitForTimeout(4000);
        await expect(this.page.locator(orderDetailChevron).last()).toBeVisible();
        await this.page.locator(orderDetailChevron).last().click();
        await expect(this.rejectOrderButton).toBeVisible();
        await this.rejectOrderButton.click();
        await expect(this.rejectOrderText).toBeVisible();
        await expect(this.reasonForReject).toBeEditable();
        await this.reasonForReject.fill('Reject');
        await expect(this.rejectOrderModelButton).toBeVisible();
        await this.rejectOrderModelButton.click();
        await this.page.waitForTimeout(4000);
        await expect(this.orderRejectedModMsg).toBeVisible();
        await expect(this.orderRejectedLabel).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();

    }
   
    
    
   }
