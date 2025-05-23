import { test, expect } from '../testFixtures/pageFixture';
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.B2bShopperDetailPage = class B2bShopperDetailPage {
    
    constructor(page) {
        this.page = page;
        this.accountButton = page.locator("//button[@data-testid='header-user']");
        this.manageShopperTab = page.locator("//a[@identifier='manage_shoppers']");
        this.shoppersInputBox = page.locator("//div[@data-testid='search-shoppers']/input");
        this.shopperDetArrow = page.locator("//button[text()='autoshopperedit@getnada.com']/parent::td/following-sibling::td[4]/button");
        this.manageShopperText = page.locator("//h2[text()='Manage shopper details']");
        this.profileText = page.locator("//h3[text()='Profile']");
        this.roleText = page.locator("//h3[text()='Role']");
        this.invoiceDetailsText = page.locator("//h3[text()='Invoicing details']");
        this.orderDetailsText = page.locator("//h3[text()='Order details']");
        this.logoutButton = page.locator("//span[text()='Log out']");
        //role options
        this.role = page.locator("//div[@data-testid='role']");
        this.roleEditButton = page.locator("//h3[text()='Role']/parent::div/child::button");
        this.roleDropDownButton = page.locator("//select[@id='userDetails-status']");
        this.roleSaveButton = page.locator("//span[text()='Save']");
        this.adminRoleUpdateMsg = page.locator("//div[text()='The role has been changed to admin.']");
        this.shopperRoleUpdateMsg = page.locator("//div[text()='The role has been changed to shopper.']");
        this.closeNotificationButton = page.locator("//div[@data-testid='notification']/button/span");
        this.roleAdminText = page.locator("//div[@data-testid='role'][text()='Admin']");
        this.roleShopperText = page.locator("//div[@data-testid='role'][text()='Shopper']");
        //invoicing details
        this.invoiceEditButton = page.locator("//h3[text()='Invoicing details']/parent::div/child::button");
        this.businessNameTextBox = page.locator("//div[@data-testid='organizationDetails-name']/input");
        this.abnTextBox = page.locator("//div[@data-testid='organizationDetails-abn']/input");
        this.costCenterTextBox = page.locator("//div[@data-testid='organizationDetails-costCentre']/input");
        this.invBusinessNameText = page.locator("//p[text()='Contains invalid characters']");
        this.invAbnText = page.locator("//p[text()='Invalid ABN']");
        this.invoiceToastMsg = page.locator("//div[text()='Invoicing details have been updated.']");
        this.invoiceNotiCloseButton = page.locator("//button[@aria-label='Close notification dialog']/span");
        this.businessNameText = page.locator("//div[@data-testid='business-name'][text()='B2B Test Org 02']");
        this.abnText = page.locator("//div[@data-testid='abn'][text()='98449786904']");
        this.deactivateButton = page.locator("//span[text()='Deactivate account']");
        this.deactivateModelText = page.locator("//h1[text()='Deactivate account?']");
        this.yesDeactivateCta = page.locator("//span[text()='Yes, deactivate account']");
        this.deactivateNotiMsg = page.locator("//div[text()='This account has been deactivated.']");
        this.disabledLabel = page.locator("//section[text()='Disabled']");

        this.reactivateButton = page.locator("//span[text()='Reactivate account']");        
        this.reactivateModelText = page.locator("//h1[text()='Reactivate account?']");
        this.yesReactivateCta = page.locator("//span[text()='Yes, reactivate account']");
        this.reactivateNotiMsg = page.locator("//div[text()='This account has been reactivated.']");
        this.activeLabel = page.locator("//section[text()='Active']");
        

    }

    /**
     * Method to update the shopper role to admin in shopper detail page(B2B).
     */
    async validateChangeOfRoleToAdmin(){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.manageShopperTab).toBeVisible();
        await this.manageShopperTab.click();
        await expect(this.shoppersInputBox).toBeVisible();
        await this.shoppersInputBox.fill(dataset.B2BShopperDetPageSvt);
        await expect(this.shopperDetArrow).toBeVisible();
        await this.shopperDetArrow.click();
        await expect(this.manageShopperText).toBeVisible();
        await expect(this.profileText).toBeVisible();
        await expect(this.roleText).toBeVisible();
        await expect(this.invoiceDetailsText).toBeVisible();
        await expect(this.orderDetailsText).toBeVisible();

        const roleName = await this.role.textContent();
        console.log("role name:", roleName)
        if(roleName === 'Admin'){
            await expect(this.roleEditButton).toBeVisible();
            await this.roleEditButton.click();
            await expect(this.roleDropDownButton).toBeVisible();
            await this.roleDropDownButton.click();
            await this.roleDropDownButton.selectOption(dataset.B2bRoleDropdownShopper);
            await expect(this.roleSaveButton).toBeVisible();
            await this.roleSaveButton.click();
            await expect(this.shopperRoleUpdateMsg).toBeVisible();
            await expect(this.closeNotificationButton).toBeVisible();
            await this.closeNotificationButton.click();
        }
        if(roleName === 'Shopper'){
            await expect(this.roleEditButton).toBeVisible();
            await this.roleEditButton.click();
            await expect(this.roleDropDownButton).toBeVisible();
            await this.roleDropDownButton.click();
            await this.roleDropDownButton.selectOption(dataset.B2bRoleDropdownAdmin);
            await expect(this.roleSaveButton).toBeVisible();
            await this.roleSaveButton.click();
            await expect(this.adminRoleUpdateMsg).toBeVisible();
            await expect(this.closeNotificationButton).toBeVisible();
            await this.closeNotificationButton.click();
        }
        await expect(this.roleAdminText).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        await this.page.waitForTimeout(6000);
        
    }
    
    /**
     * Method to update the admin role to shopper in shopper detail page(B2B).
     */
    async validateChangeOfRoleToShopper(){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.manageShopperTab).toBeVisible();
        await this.manageShopperTab.click();
        await expect(this.shoppersInputBox).toBeVisible();
        await this.shoppersInputBox.fill(dataset.B2BShopperDetPageSvt);
        await expect(this.shopperDetArrow).toBeVisible();
        await this.shopperDetArrow.click();
        await expect(this.manageShopperText).toBeVisible();
        await expect(this.profileText).toBeVisible();
        await expect(this.roleText).toBeVisible();
        await expect(this.invoiceDetailsText).toBeVisible();
        await expect(this.orderDetailsText).toBeVisible();
        await expect(this.roleEditButton).toBeVisible();
        await this.roleEditButton.click();
        await expect(this.roleDropDownButton).toBeVisible();
        await this.roleDropDownButton.click();
        await this.roleDropDownButton.selectOption(dataset.B2bRoleDropdownShopper);
        await expect(this.roleSaveButton).toBeVisible();
        await this.roleSaveButton.click();
        await expect(this.shopperRoleUpdateMsg).toBeVisible();
        await expect(this.closeNotificationButton).toBeVisible();
        await this.closeNotificationButton.click();
        await expect(this.roleShopperText).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        await this.page.waitForTimeout(6000);
        
    }
    
    /**
     * Method to validate invoicing details in shopper detail page(B2B).
     */
    async validateInvoicingDetails(){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.manageShopperTab).toBeVisible();
        await this.manageShopperTab.click();
        await expect(this.shoppersInputBox).toBeVisible();
        await this.shoppersInputBox.fill(dataset.B2BShopperDetPageSvt);
        await expect(this.shopperDetArrow).toBeVisible();
        await this.shopperDetArrow.click();
        await expect(this.manageShopperText).toBeVisible();
        await expect(this.profileText).toBeVisible();
        await expect(this.roleText).toBeVisible();
        await expect(this.invoiceDetailsText).toBeVisible();
        await expect(this.orderDetailsText).toBeVisible();
        await expect(this.invoiceEditButton).toBeVisible();
        await this.invoiceEditButton.click();
        await expect(this.businessNameTextBox).toBeVisible();
        await this.businessNameTextBox.fill(dataset.B2bInvalidBusinessName);
        await expect(this.abnTextBox).toBeVisible();
        await this.abnTextBox.fill(dataset.B2bInvalidAbnNumber);
        await expect(this.roleSaveButton).toBeVisible();
        await this.roleSaveButton.click();
        await expect(this.invBusinessNameText).toBeVisible();
        await expect(this.invAbnText).toBeVisible();
        await expect(this.costCenterTextBox).toBeVisible();

        await expect(this.businessNameTextBox).toBeVisible();
        await this.businessNameTextBox.fill(dataset.B2bBusinessName);
        await expect(this.abnTextBox).toBeVisible();
        await this.abnTextBox.fill(dataset.B2bAbnNumber);
        await expect(this.roleSaveButton).toBeVisible();
        await this.roleSaveButton.click();
        await expect(this.invoiceToastMsg).toBeVisible();
        await expect(this.invoiceNotiCloseButton).toBeVisible();
        await this.invoiceNotiCloseButton.click();
        await expect(this.businessNameText).toBeVisible();
        await expect(this.abnText).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        
    }

    /**
     * Method to deactivate button in shopper detail page(B2B).
     */
    async deactivateAccount(){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.manageShopperTab).toBeVisible();
        await this.manageShopperTab.click();
        await expect(this.shoppersInputBox).toBeVisible();
        await this.shoppersInputBox.fill(dataset.B2BShopperDetPageSvt);
        await expect(this.shopperDetArrow).toBeVisible();
        await this.shopperDetArrow.click();
        await expect(this.manageShopperText).toBeVisible();
        await expect(this.profileText).toBeVisible();
        await expect(this.roleText).toBeVisible();
        await expect(this.invoiceDetailsText).toBeVisible();
        await expect(this.orderDetailsText).toBeVisible();
        await expect(this.deactivateButton).toBeVisible();

        await this.deactivateButton.click();
        await expect(this.deactivateModelText).toBeVisible();
        
        await expect(this.yesDeactivateCta).toBeVisible();
        await this.yesDeactivateCta.click();
        await expect(this.deactivateNotiMsg).toBeVisible();
        await expect(this.invoiceNotiCloseButton).toBeVisible();
        await this.invoiceNotiCloseButton.click();
        await this.page.waitForTimeout(3000);
        while(await this.activeLabel.isVisible() == true){
            await this.page.reload();
            await this.page.waitForTimeout(3000);
            if(await this.disabledLabel.isVisible()){
                break;
            }
        }
        await expect(this.disabledLabel).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        await this.page.waitForTimeout(6000);

    }

    /**
     * Method to activate button in shopper detail page(B2B).
     */
    async activateAccount(){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.manageShopperTab).toBeVisible();
        await this.manageShopperTab.click();
        await expect(this.shoppersInputBox).toBeVisible();
        await this.shoppersInputBox.fill(dataset.B2BShopperDetPageSvt);
        await expect(this.shopperDetArrow).toBeVisible();
        await this.shopperDetArrow.click();
        await expect(this.manageShopperText).toBeVisible();
        await expect(this.profileText).toBeVisible();
        await expect(this.roleText).toBeVisible();
        await expect(this.invoiceDetailsText).toBeVisible();
        await expect(this.orderDetailsText).toBeVisible();
        await expect(this.reactivateButton).toBeVisible();

        await this.reactivateButton.click();
        await expect(this.reactivateModelText).toBeVisible();
        
        await expect(this.yesReactivateCta).toBeVisible();
        await this.yesReactivateCta.click();
        await expect(this.reactivateNotiMsg).toBeVisible();
        await expect(this.invoiceNotiCloseButton).toBeVisible();
        await this.invoiceNotiCloseButton.click();
        
        
        while(await this.disabledLabel.isVisible() == true){
            await this.page.reload();
            await this.page.waitForTimeout(3000);
            if(await this.activeLabel.isVisible()){
                break;
            }
        }
        
        await expect(this.activeLabel).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        await this.page.waitForTimeout(6000);

    }

    
    /**
     * Method to validate if account is active(B2B).
     */
    async validateIfAccountIsActive(){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect(this.manageShopperTab).toBeVisible();
        await this.manageShopperTab.click();
        await expect(this.shoppersInputBox).toBeVisible();
        await this.shoppersInputBox.fill(dataset.B2BShopperDetPageSvt);
        await expect(this.shopperDetArrow).toBeVisible();
        await this.shopperDetArrow.click();
        await expect(this.manageShopperText).toBeVisible();
        await expect(this.profileText).toBeVisible();
        await expect(this.roleText).toBeVisible();
        await expect(this.invoiceDetailsText).toBeVisible();
        await expect(this.orderDetailsText).toBeVisible();
        if(await this.disabledLabel.isVisible()){
            await expect(this.reactivateButton).toBeVisible();
            await this.reactivateButton.click();
            await expect(this.reactivateModelText).toBeVisible();
            await expect(this.yesReactivateCta).toBeVisible();
            await this.yesReactivateCta.click();
            await expect(this.reactivateNotiMsg).toBeVisible();
            await expect(this.invoiceNotiCloseButton).toBeVisible();
            await this.invoiceNotiCloseButton.click();
            await expect(this.activeLabel).toBeVisible();
            await expect(this.logoutButton).toBeVisible();
            await this.logoutButton.click();
            await this.page.waitForTimeout(6000);
        }

    }


   }
