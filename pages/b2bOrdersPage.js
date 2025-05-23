import { test, expect } from '../testFixtures/pageFixture';

exports.B2bOrdersPage = class B2bOrdersPage {
    
    constructor(page) {
        this.page = page;
        this.accountButton = page.locator("//button[@data-testid='header-user']");
        this.ordersTab = page.locator("//a[@identifier='business_orders']");
        this.shopperOrdersTab = page.locator("//a[@identifier='orders']");
        this.shopperActiveOrdersTab = page.locator("//div[@data-testid='tab-navlist']/a[normalize-space()='Active orders']")
        this.adminActiveOrdersTab = page.locator("//div[@data-testid='tab-navlist']/a[normalize-space()='Active Orders']")
        this.pastOrdersTab = page.locator("//div[@data-testid='tab-navlist']/a[text()=' Past orders']");
        this.instorePurchaseTab = page.locator("//div[@data-testid='tab-navlist']/a[normalize-space()='Instore purchases']");
        this.businessOrdersTab = page.locator("//div[@data-testid='tab-navlist']/a[normalize-space()='Business orders']");
        this.approvalRequestTab = page.locator("//div[@data-testid='tab-navlist']/a[normalize-space()='Approval requests']");
        //Active Order Locators
        this.orderEmailDropDown = page.locator("//div[@id='selectable-search-selectdropdown-:r1b:']");
        this.statusDropDown = page.locator("//div[@id='filter-selectdropdown-:r1d:']");
        this.viewYourOrdersButton = page.locator("//div[@id='business-orders-tab-0']//button/span[normalize-space()='View your orders']");
    

        //Past Order Locators
        this.emailOrderDropDown = page.locator("//div[@id='selectable-search-selectdropdown-:r1e:']");
        this.daysDropDown = page.locator("//div[@id='filter-selectdropdown-:r1j:']");
        this.viewAllStatusDropDown = page.locator("//div[@id='filter-selectdropdown-:r1g:']");
        this.logoutButton = page.locator("//span[text()= 'Log out']");

    }

    /**
     * Method to validate active order tab(B2B).
     */
    async validateActiveOrdersAdmin(){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.isVisible();
        await this.accountButton.click();
        await expect(this.ordersTab).toBeVisible();
        await this.ordersTab.click();
        await expect(this.adminActiveOrdersTab).toBeVisible();
        await expect(this.pastOrdersTab).toBeVisible();
        await expect(this.instorePurchaseTab).toBeVisible();
        await expect(this.businessOrdersTab).toBeVisible();
        await expect(this.approvalRequestTab).toBeVisible();
        await expect(this.orderEmailDropDown).toBeVisible();
        await expect(this.statusDropDown).toBeVisible();
        await expect(this.approvalRequestTab).toBeVisible();
    }

    /**
     * Method to validate a order in active order tab(B2B).
     */
    async validateActiveOrders(orderId){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.isVisible();
        await this.accountButton.click();
        await expect(this.shopperOrdersTab).toBeVisible();
        await this.shopperOrdersTab.click();
        await expect(this.shopperActiveOrdersTab).toBeVisible();
        await this.shopperActiveOrdersTab.click();
        const orderIdShopper ="//div[@id='orders-tab-0']//div[text()='"+orderId+"']";
        await expect(this.page.locator(orderIdShopper)).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        
    }
    
    /**
     * Method to validate a order in past order tab(B2B).
     */
    async validatePastOrders(orderId){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.isVisible();
        await this.accountButton.click();
        await expect(this.shopperOrdersTab).toBeVisible();
        await this.shopperOrdersTab.click();
        await expect(this.pastOrdersTab).toBeVisible();
        await this.pastOrdersTab.click();
        const orderIdShopper ="//div[@id='orders-tab-1']//div[text()='"+orderId+"']";
        await expect(this.page.locator(orderIdShopper)).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        
    }

    /**
     * Method to validate pending approval status in active order tab(B2B).
     */
    async validatePendingApprovalOrderStatus(orderId){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.isVisible();
        await this.accountButton.click();
        await expect(this.shopperOrdersTab).toBeVisible();
        await this.shopperOrdersTab.click();
        await expect(this.shopperActiveOrdersTab).toBeVisible();
        await this.shopperActiveOrdersTab.click();

        const orderPendingApproval ="//div[text()='"+orderId+"']/ancestor::li//h3[text()='Order pending approval']";
        await expect(this.page.locator(orderPendingApproval)).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        
    }


   }
