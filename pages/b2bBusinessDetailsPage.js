import { test, expect } from '../testFixtures/pageFixture';

const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.B2bBusinessDetailsPage = class B2bBusinessDetailsPage {
    
    constructor(page) {
        this.page = page;

        this.businessDetailsTab = page.locator("//a[@identifier='business_details']");
        this.businessDetailsHeader = page.locator("//h2[normalize-space()='Business details']");
        this.orgDetails = page.locator("//h3[normalize-space()='Organisation details']");
        this.editBusDetButton = page.locator("//button[@aria-label='Edit business details preferences']");
        this.industryType = page.locator("//select[@data-testid='organizationDetails-industry']");
        this.adminIndusType = page.locator("//select[@id='organizationDetails-industry']");
        this.updateDetailsButton = page.locator("//span[normalize-space()='Update details']");
        this.orgUpdatedNotification = page.locator("//div[@data-testid='notification']");
        this.orgUpdNotificationClose = page.locator("//button[@aria-label='Close notification dialog']");
        this.valIndusType = page.locator("//div[contains(text(),'Hospitality')]");
        this.btnAccount = page.locator('//button[@data-testid="header-user"]');
        this.logoutButton = page.locator("//span[normalize-space()='Log out']");

        this.businessNameLbl = page.locator("//div[normalize-space()='Business name']");
        this.busNameTxtBox = page.locator("//div[@data-testid='organizationDetails-organisationName']/input");
        this.busNameHelper = page.locator("//p[normalize-space()='Field cannot be empty']");
        this.abnLabel = page.locator("//div[normalize-space()='ABN (optional)']");
        this.abnTextBox = page.locator("//div[@data-testid='organizationDetails-abn']/input");
        this.abnHelper = page.locator("//p[normalize-space()='Invalid ABN']");

        this.sizeText = page.locator("//h3[normalize-space()='Size']");
        this.noOfLocTxt = page.locator("//div[normalize-space()='Number of locations']");
        this.noOfLocDropDown = page.locator("//select[@id='organizationDetails-noOfLocations']");

        this.noOfEmpTxt = page.locator("//div[normalize-space()='Number of employees']");
        this.noOfEmpDropDown = page.locator("//select[@id='organizationDetails-noOfEmployees']");

        this.valBusName = page.locator("//div[@data-testid='business-name'][normalize-space()='B2B Test Org 022']");
        this.valAbnNum = page.locator("//div[@data-testid='abn'][normalize-space()='65 714 394 898']");
        this.valNoOfLoc = page.locator("//div[@data-testid='location'][normalize-space()='6-10']");
        this.valNoOfEmp = page.locator("//div[@data-testid='employees'][normalize-space()='2-10']");


    }
    
    /**
     * Method to validate Business Details page for shopper/standalone user.
     */
    async validateBusinessDetailsPageShprStd(){
        await expect(this.btnAccount).toBeVisible();
        await this.btnAccount.click();
        await expect(this.businessDetailsTab).toBeVisible();
        await this.businessDetailsTab.click();
        await expect(this.businessDetailsHeader).toBeVisible();
        await expect(this.orgDetails).toBeVisible();
        await expect(this.editBusDetButton).toBeVisible();
        await this.editBusDetButton.click();

        await expect(this.industryType).toBeVisible();
        await this.industryType.click();
        await this.industryType.selectOption(dataset.IndustryType);

        await expect(this.updateDetailsButton).toBeVisible();
        await this.updateDetailsButton.click();
        await expect(this.orgUpdatedNotification).toBeVisible();

        await expect(this.orgUpdNotificationClose).toBeVisible();
        await this.orgUpdNotificationClose.click();
        await expect(this.valIndusType).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
      
    }

    /**
     * Method to validate Business Details page for Admin user.
     */
    async validateBusinessDetailsPageAdmin(){
        await expect(this.btnAccount).toBeVisible();
        await this.btnAccount.click();
        await expect(this.businessDetailsTab).toBeVisible();
        await this.businessDetailsTab.click();
        await expect(this.businessDetailsHeader).toBeVisible();
        await expect(this.orgDetails).toBeVisible();

        await expect(this.businessNameLbl).toBeVisible();
        await expect(this.abnLabel).toBeVisible();
        await expect(this.sizeText).toBeVisible();
        await expect(this.noOfLocTxt).toBeVisible();
        await expect(this.noOfEmpTxt).toBeVisible();


        await expect(this.editBusDetButton).toBeVisible();
        await this.editBusDetButton.click();

        await expect(this.busNameTxtBox).toBeEditable();
        await this.busNameTxtBox.clear();
        await expect(this.updateDetailsButton).toBeVisible();
        await this.updateDetailsButton.click();
        await expect(this.busNameHelper).toBeVisible();
        await this.busNameTxtBox.fill(dataset.BusinessName);

        await expect(this.abnTextBox).toBeEditable();
        await this.abnTextBox.clear();
        await this.abnTextBox.fill(dataset.InvAbnNumber);
        await expect(this.updateDetailsButton).toBeVisible();
        await this.updateDetailsButton.click();
        await expect(this.abnHelper).toBeVisible();
        await this.abnTextBox.clear();
        await this.abnTextBox.fill(dataset.AbnNumber);

        await expect(this.adminIndusType).toBeVisible();
        await this.adminIndusType.click();
        await this.adminIndusType.selectOption(dataset.IndustryType);

        await expect(this.noOfLocDropDown).toBeVisible();
        await this.noOfLocDropDown.click();
        await this.noOfLocDropDown.selectOption(dataset.NumberOfLoc);

        await expect(this.noOfEmpDropDown).toBeVisible();
        await this.noOfEmpDropDown.click();
        await this.noOfEmpDropDown.selectOption(dataset.NumberOfEmp);

        await expect(this.updateDetailsButton).toBeVisible();
        await this.updateDetailsButton.click();
        await expect(this.orgUpdatedNotification).toBeVisible();

        await expect(this.orgUpdNotificationClose).toBeVisible();
        await this.orgUpdNotificationClose.click();

        await expect(this.valBusName).toBeVisible();
        await expect(this.valAbnNum).toBeVisible();
        await expect(this.valIndusType).toBeVisible();
        await expect(this.valNoOfLoc).toBeVisible();
        await expect(this.valNoOfEmp).toBeVisible();

        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
      
    }
    

   }
