import { test, expect } from '../testFixtures/pageFixture';
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.B2bOverviewPage = class B2bOverviewPage {
    
    constructor(page) {
        this.page = page;
        //Overview page locators
        this.overviewTab = page.locator("//span[text()='Overview']");
        this.manageShopperOver = page.locator("//h4[text()='Manage shoppers']")
        this.paymentOptionsOver = page.locator("//h4[text()='Payment options']")
        this.businessDetailsOver = page.locator("//h4[text()='Business details']")
        this.emailLink = page.locator("//a[text()='adminhelp@coles.com.au']");
        this.numOfLoc = page.locator("//div[text()='Number of locations']/following-sibling::div[text()='6-10']");
        this.numOfEmp = page.locator("//div[text()='Number of employees']/following-sibling::div[text()='11-50']");
        this.numOfLocText = page.locator("//div[text()='Number of locations']");
        this.numOfEmpText = page.locator("//div[text()='Number of employees']");

        this.inviteShopperButton = page.locator("//span[text()='Invite shopper']");
        this.paymentOptions = page.locator("//h3[text()='Saved payment method']");
        this.businessDetails = page.locator("//h2[text()='Business details']");     
        this.accountButton = page.getByTestId('header-user');
        //standalone overview page locators
        this.customiseText = page.locator("//h4[@data-testid='task-card-title-Customise-your-account']");
        this.customiseButton = page.locator("//button[@data-testid='task-card-cta-Customise-your-account']");
        this.addToolButton = page.locator("//div[@data-testid='segmentation-flow']/button/span");
        this.manageShoppersText = page.locator("//h2[text()='Manage shoppers']");

    }

    /**
     * Method to navigate to account page(B2B).
     */
    async navigateToAccountPage(){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.isVisible();
        await this.accountButton.click();
    }
    /**
     * Method to click on overview tab(B2B).
     */
    async overviewTabClick(){
        await this.overviewTab.scrollIntoViewIfNeeded();
        await expect(this.overviewTab).toBeVisible();
        await this.overviewTab.click();
    }


    /**
     * Method to verify the contents of overview page(B2B).
     * @param {*} busiName Business name of B2B user.
     * @param {*} industryType Industry Type of B2B user.
     */
    async verifyOverviewPageAdmin(busiName,industryType){
        await this.overviewTabClick();
        const xpath ="//h2[contains(text(),'"+busiName+"')]";
        console.log("busName",busiName);
        await expect(this.page.locator(xpath)).toContainText(busiName);

        await expect(this.manageShopperOver).toBeVisible();
        await this.manageShopperOver.click();
        await expect(this.inviteShopperButton).toBeVisible();

        await this.overviewTabClick();
        await expect(this.paymentOptionsOver).toBeVisible();
        await this.paymentOptionsOver.click();
        await expect(this.paymentOptions).toBeVisible();

        await this.overviewTabClick();
        await this.businessDetailsOver.scrollIntoViewIfNeeded();
        await expect(this.businessDetailsOver).toBeVisible();
        await this.businessDetailsOver.click();
        await expect(this.businessDetails).toBeVisible();
        await this.overviewTabClick();
        await this.businessDetailsOver.scrollIntoViewIfNeeded();
        const busName ="//div[text()='Registered business name']/following-sibling::div[text()='"+busiName+"']";
        await expect(this.page.locator(busName)).toContainText(busiName);
        const indusType ="//div[text()='Industry']/following-sibling::div[text()='"+industryType+"']";
        await expect(this.page.locator(indusType)).toContainText(industryType);
        await expect(this.numOfLoc).toBeVisible();
        await expect(this.numOfEmp).toBeVisible();

        await this.emailLink.scrollIntoViewIfNeeded();
        await expect(this.emailLink).toBeVisible();
        
    }

    /**
     * Method to verify the contents of overview page standalone user(B2B).
     * @param {*} busiName Business name of B2B user.
     * @param {*} industryType Industry Type of B2B user.
     */
    async verifyOverviewPageStandalone(busiName,industryType){
        await this.overviewTabClick();
        const xpath ="//h2[contains(text(),'"+busiName+"')]";
        console.log("busName",busiName);
        await expect(this.page.locator(xpath)).toContainText(busiName);

        //Please dont remove this line
        //await expect(this.customiseText).toBeVisible();
        //await expect(this.customiseButton).toBeVisible();

        await this.manageShopperOver.scrollIntoViewIfNeeded();
        await expect(this.manageShopperOver).toBeVisible();
        await this.manageShopperOver.click();
        await expect(this.manageShoppersText).toBeVisible();
        await expect(this.addToolButton).toBeVisible();
        


        await this.overviewTabClick();
        await expect(this.paymentOptionsOver).toBeVisible();
        await this.paymentOptionsOver.click();
        await expect(this.paymentOptions).toBeVisible();

        await this.overviewTabClick();
        await this.businessDetailsOver.scrollIntoViewIfNeeded();
        await expect(this.businessDetailsOver).toBeVisible();
        await this.businessDetailsOver.click();
        await expect(this.businessDetails).toBeVisible();

        await this.overviewTabClick();
        await this.businessDetailsOver.scrollIntoViewIfNeeded();
        const busName ="//div[text()='Registered business name']/following-sibling::div[text()='"+busiName+"']";
        await expect(this.page.locator(busName)).toContainText(busiName);
        const indusType ="//div[text()='Industry']/following-sibling::div[text()='"+industryType+"']";
        await expect(this.page.locator(indusType)).toContainText(industryType);
        await expect(this.numOfLocText).toBeVisible();
        await expect(this.numOfEmpText).toBeVisible();

        await this.emailLink.scrollIntoViewIfNeeded();
        await expect(this.emailLink).toBeVisible();
        
    }




   }
