import { test, expect } from '../testFixtures/pageFixture';

exports.B2bOrderListPage = class B2bOrderListPage {
    
    constructor(page) {
        this.page = page;

        this.accountButton = page.getByTestId('header-user');
        this.ordersTab = page.locator("//a[@identifier='business_orders']");
        this.orderApprovalTab = page.locator("//span[text()= 'Order Approvals']");
        this.seacrhOrderNumTxtBox = page.locator("//div[@id='business-orders-tab-1']//div[@data-testid='search-field']/input");
        this.dueByText = page.locator("//th[text()= 'Due by']");
        this.orderNumberText = page.locator("//div[@id='business-orders-tab-1']//th[text()= 'Order number']");
        this.emailText = page.locator("//div[@id='business-orders-tab-1']//th[text()= 'Email']");
        this.totalText = page.locator("//div[@id='business-orders-tab-1']//th[text()= 'Total']");
        this.actionText = page.locator("//div[@id='business-orders-tab-1']//th[text()= 'Action']");
        this.approveButton = page.locator("//td[text()= '195232157']/parent::tr//*[text()= 'Approve']");
        this.approvedStatusText = page.locator("//td[text()= '195232157']/parent::tr//*[text()= 'Approved']");

        this.activeOrdersTab = page.locator("//a[text()= 'Active Orders']");
        this.logoutButton = page.locator("//span[text()= 'Log out']");
        

        
    }

    /**
     * Method to approve an order in order List page.
     */
    async approveOrderInOrderList(orderId) {
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.ordersTab).toBeVisible();
        await this.ordersTab.click();
        await expect(this.orderApprovalTab).toBeVisible();
        await this.orderApprovalTab.click();
        await expect(this.seacrhOrderNumTxtBox).toBeVisible();
        await this.seacrhOrderNumTxtBox.fill(orderId);
        const approveBtn ="//td[text()= '"+orderId+"']/parent::tr//*[text()= 'Approve']";
        await expect(this.page.locator(approveBtn)).toBeVisible();
        await this.page.locator(approveBtn).click();
        await this.page.waitForTimeout(4000);
        const approvedTxt ="//td[text()= '"+orderId+"']/parent::tr//*[text()= 'Approved']";
        await expect(this.page.locator(approvedTxt)).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();

    }
    
     /**
     * Method to navigate to order detail page(B2B).
     */
     async navigateToOrderDetailPage(orderId) {
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.ordersTab).toBeVisible();
        await this.ordersTab.click();
        await expect(this.orderApprovalTab).toBeVisible();
        await this.orderApprovalTab.click();
        await expect(this.seacrhOrderNumTxtBox).toBeVisible();
        await this.seacrhOrderNumTxtBox.fill(orderId);
        const approveChevron ="//td[text()= '"+orderId+"']/parent::tr/td[6]/button";
        await expect(this.page.locator(approveChevron)).toBeVisible();
        await this.page.locator(approveChevron).click();
        await this.page.waitForTimeout(3000);

    }
    
   }
