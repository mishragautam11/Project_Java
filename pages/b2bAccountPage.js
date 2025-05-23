import { test, expect } from '../testFixtures/pageFixture';

exports.B2bAccountPage = class B2bAccountPage {
    
    constructor(page) {
        this.page = page;

        this.businessHub = page.locator("//h2[normalize-space()='Business hub']");
        this.overviewTab = page.locator("//a[@identifier='overview']");
        this.ordersTab = page.locator("//a[@identifier='business_orders']");
        this.shopperOrdersTab = page.locator("//a[@identifier='orders']");
        this.businessDetailsTab = page.locator("//a[@identifier='business_details']");
        this.inviocePreferenceTab = page.locator("//a[@identifier='invoice_preferences']");
        this.manageShopperTab = page.locator("//a[@identifier='manage_shoppers']");
        this.restrictCategoryTab = page.locator("//a[@identifier='restrict_categories']");
        this.adminHelpTab = page.locator("//a[@identifier='admin_help']");

        this.yourAccount = page.locator("//h2[normalize-space()='Your account']");
        this.yourDetailsTab = page.locator("//a[@identifier='your_details']");
        this.paymentOptionsTab = page.locator("//a[@identifier='payment_options']");
        this.addressTab = page.locator("//a[@identifier='addresses']");
        this.flybuysTab = page.locator("//a[@identifier='flybuys']");
        this.colesPlusTab = page.locator("//a[@identifier='coles_plus']");
        this.accountSecurityTab = page.locator("//a[@identifier='account_security']");
        this.preferencesTab = page.locator("//a[@identifier='preferences']");
        this.colesAcctBarcodeTab = page.locator("//a[@identifier='coles_account_barcode']");
        this.accountButton = page.locator("//button[@data-testid='header-user']");
        this.logoutButton = page.locator("//span[text()= 'Log out']");

        
    }

    /**
     * Mehtod to navigate to B2B account page.
     */
    async navigateToAccountPage() {
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
    }
    
    /**
     * This method is to validate if all the menu items for different B2B user is visible on account page.
     * @param {*} userType admin/shopper/standalone.
     */
    async validateMenuItems(userType) {
        await expect(this.businessHub).toBeVisible();
        if(userType != "shopper"){
            await expect(this.overviewTab).toBeVisible();
            await expect(this.manageShopperTab).toBeVisible();
            await expect(this.restrictCategoryTab).toBeVisible();
        }
        else{
            await expect(this.shopperOrdersTab).toBeVisible();
        }
        
        
        await expect(this.businessDetailsTab).toBeVisible();
        await expect(this.inviocePreferenceTab).toBeVisible();
        
        //if(userType === "admin"){
        //    await expect(this.adminHelpTab).toBeVisible();
        //}
        await expect(this.yourAccount).toBeVisible();
        await expect(this.yourDetailsTab).toBeVisible();
        await expect(this.paymentOptionsTab).toBeVisible();
        await expect(this.addressTab).toBeVisible();
        await expect(this.flybuysTab).toBeVisible();
        await expect(this.colesPlusTab).toBeVisible();
        await expect(this.accountSecurityTab).toBeVisible();
        await expect(this.preferencesTab).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        
    }
    
   }
