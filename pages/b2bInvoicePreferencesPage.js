import { test, expect } from '../testFixtures/pageFixture';
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.B2bInvoicePreferencesPage = class B2bInvoicePreferencesPage {
    
    constructor(page) {
        this.page = page;
        //Invoice Preferences page locators

        this.accountButton = page.getByTestId('header-user');
        this.invoicePreferencesTab = page.locator("//*[text()='Invoice preferences']"); 
        this.organisationDetailTitle = page.locator("//*[text()='Organisation details']");
        this.organisationDetailEditButton = page.locator("//*[text()='Organisation details']/parent::div/button");
        this.businessNameValue = page.locator("//*[text()='Business name']/parent::div/div[2]");
        this.abnValue = page.locator("//*[text()='ABN (optional)']/parent::div/div[2]");
        this.costCentreValue = page.locator("//*[text()='Cost centre']/parent::div/div[2]");
        this.businessNameTextBox = page.locator("#organizationDetails-organisationName");
        this.abnTextBox = page.locator("#organizationDetails-abn");
        this.costCentreTextBox = page.locator("#organizationDetails-costCentre");
        this.organisationDetailsUpdateDetailButton = page.locator("//*[text()='Update details']");
        this.organisationDetailsCancelButton =page.locator("//*[text()='Cancel']");
        this.businessNameErrorMessage = page.locator("//*[text()='Field cannot be empty']");
        this.abnErrorMessage = page.locator("//*[text()='Invalid ABN']");
        this.costCentreErrorMessage = page.locator("//*[contains(text(),'Maximum 40 characters')]");
        this.sucessTostMessage = page.locator("//*[text()='Organisation details updated']");
        this.toastNotificationClose = page.locator("//*[text()='Organisation details updated']//parent::div//parent::div/button/span");
    }

    /**
     * Method to navigate to account page.
     */
    async navigateToAccountPage(){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.isVisible();
        await this.accountButton.click();
    }
    /**
     * Method to click on Invoice Preferences tab.
     */
    async invoicePreferencesTabClick(){
        await this.invoicePreferencesTab.scrollIntoViewIfNeeded();
        await expect(this.invoicePreferencesTab).toBeVisible();
        await this.invoicePreferencesTab.click();
    }
    /**
     * Method to validate Admin user
     */
    async validateAdminUser(){
        await expect(this.organisationDetailTitle).toBeVisible();
        await expect(this.organisationDetailEditButton).toBeVisible();
        await expect(this.businessNameValue).toHaveText("B2B Test Org 01");
        await expect(this.abnValue).toHaveText("35 991 756 644");
        await expect(this.costCentreValue).toHaveText("Cost Centre"); 
        console.log("Validated Exesting business name, ABN number and cost center");   

        await this.organisationDetailEditButton.click();
        await this.businessNameTextBox.fill("");
        await this.abnTextBox.fill("!@#$%^&*");
        await this.costCentreTextBox.fill('"');
        await this.organisationDetailsUpdateDetailButton.click();
        await expect(this.businessNameErrorMessage).toHaveText("Field cannot be empty");
        await expect(this.abnErrorMessage).toHaveText("Invalid ABN");
        await expect(this.costCentreErrorMessage).toContainText("Maximum 40 characters");
        await this.organisationDetailsCancelButton.click();
        console.log("Validated error message for business name, ABN number and cost center");

        await expect(this.organisationDetailEditButton).toBeVisible();
        await this.organisationDetailEditButton.click();
        await this.businessNameTextBox.fill("Organisation");
        await this.organisationDetailsUpdateDetailButton.click();
        await expect(this.sucessTostMessage).toHaveText("Organisation details updated");
        console.log("Validated Madetory field (business name)");

        await this.organisationDetailTitle.scrollIntoViewIfNeeded();
        await this.toastNotificationClose.click();
        await expect(this.organisationDetailEditButton).toBeVisible();
        await this.organisationDetailEditButton.click();
        await this.businessNameTextBox.fill("B2B Test Org 01");
        await this.abnTextBox.fill("35 991 756 644");
        await this.costCentreTextBox.fill("Cost Centre");
        await this.organisationDetailsUpdateDetailButton.click();
        await expect(this.sucessTostMessage).toHaveText("Organisation details updated");
    }
      /**
     * Method to validate Shopper user
     */
      async validateShopperUser(){
        await expect(this.organisationDetailTitle).toBeVisible();
        await expect(this.organisationDetailEditButton).toBeVisible();
        await expect(this.businessNameValue).toHaveText("B2B Test Org 01");
        await expect(this.abnValue).toHaveText("35 991 756 644");
        await expect(this.costCentreValue).toHaveText("Cost Centre"); 
        console.log("Validated Exesting business name, ABN number and cost center");  

        await this.organisationDetailEditButton.click();
        await this.businessNameTextBox.fill("");
        await this.abnTextBox.fill("!@#$%^&*");
        await this.costCentreTextBox.fill("!@#$%^&*():<>?");
        await this.organisationDetailsUpdateDetailButton.click();
        await expect(this.businessNameErrorMessage).toHaveText("Field cannot be empty");
        await expect(this.abnErrorMessage).toHaveText("Invalid ABN");
        await expect(this.costCentreErrorMessage).toContainText("Maximum 40 characters");
        await this.organisationDetailsCancelButton.click();
        console.log("Validated error message for business name, ABN number and cost center");

        await expect(this.organisationDetailEditButton).toBeVisible();
        await this.organisationDetailEditButton.click();
        await this.businessNameTextBox.fill("Organisation");
        await this.organisationDetailsUpdateDetailButton.click();
        await expect(this.sucessTostMessage).toHaveText("Organisation details updated");
        console.log("Validated Madetory field (business name)");
        
        await this.organisationDetailTitle.scrollIntoViewIfNeeded();
        await this.toastNotificationClose.click();
        await expect(this.organisationDetailEditButton).toBeVisible();
        await this.organisationDetailEditButton.click();
        await this.businessNameTextBox.fill("B2B Test Org 01");
        await this.abnTextBox.fill("35 991 756 644");
        await this.costCentreTextBox.fill("Cost Centre");
        await this.organisationDetailsUpdateDetailButton.click();
        await expect(this.sucessTostMessage).toHaveText("Organisation details updated");
    }
     /**
     * Method to validate Standalone user
     */
     async validateStandaloneUser(){
        await expect(this.organisationDetailTitle).toBeVisible();
        await expect(this.organisationDetailEditButton).toBeVisible();
        await expect(this.businessNameValue).toHaveText("Child Care");
        await expect(this.abnValue).toHaveText("35 991 756 644");
        await expect(this.costCentreValue).toHaveText("Cost Centre"); 
        console.log("Validated Exesting business name, ABN number and cost center");   

        await this.organisationDetailEditButton.click();
        await this.businessNameTextBox.fill("");
        await this.abnTextBox.fill("!@#$%^&*");
        await this.costCentreTextBox.fill("!@#$%^&*():<>?");
        await this.organisationDetailsUpdateDetailButton.click();
        await expect(this.businessNameErrorMessage).toHaveText("Field cannot be empty");
        await expect(this.abnErrorMessage).toHaveText("Invalid ABN");
        await expect(this.costCentreErrorMessage).toContainText("Maximum 40 characters");
        await this.organisationDetailsCancelButton.click();
        console.log("Validated error message for business name, ABN number and cost center");

        await expect(this.organisationDetailEditButton).toBeVisible();
        await this.organisationDetailEditButton.click();
        await this.businessNameTextBox.fill("Organisation");
        await this.organisationDetailsUpdateDetailButton.click();
        await expect(this.sucessTostMessage).toHaveText("Organisation details updated");
        console.log("Validated Madetory field (business name)");

        await this.organisationDetailTitle.scrollIntoViewIfNeeded();
        await this.toastNotificationClose.click();
        await expect(this.organisationDetailEditButton).toBeVisible();
        await this.organisationDetailEditButton.click();
        await this.businessNameTextBox.fill("Child Care");
        await this.abnTextBox.fill("35 991 756 644");
        await this.costCentreTextBox.fill("Cost Centre");
        await this.organisationDetailsUpdateDetailButton.click();
        await expect(this.sucessTostMessage).toHaveText("Organisation details updated");
    }
}