const { expect } = require("@playwright/test");
const { LoginPage } = require("./loginPage.js");

const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.B2bGetStartedPage = class B2bGetStartedPage {
    
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.signupForFreeButton = page.locator("//a[@data-testid='hero-btn-primary']");
        this.dialogCloseButton = page.locator('//button[@aria-label="close popup"]');
        this.expertSupportButton = page.locator("(//span[normalize-space()='Get expert support'])[1]");
        this.fullName = page.locator("//input[@id='b2b-gs-full-name']");
        this.jobTitle = page.locator("//input[@id='b2b-gs-job-role']");
        this.phoneNumber = page.locator("//input[@id='b2b-gs-phone']");
        this.workEmailAddress = page.locator("//input[@id='b2b-gs-email']");
        this.registeredBusinessName = page.locator("//input[@id='b2b-gs-org-name']");
        this.stateTerritory = page.locator("#b2b-gs-state");
        this.selectVicState = page.locator("//li[@data-value='VIC']");
        this.submitButton = page.locator("//span[normalize-space()='Submit']");
        this.thankYouMessage = page.locator("//h1[normalize-space()='Thanks for getting in touch!']");
        
    }
    
    async navigateToColesBusiness() {
        await this.page.goto(dataset.urlB2bGetStartedSVT);
        
    }

    async signupForFreeButtonClick(){
        await this.page.waitForTimeout(3000);
        if(await this.dialogCloseButton.isVisible() == true){
            await this.dialogCloseButton.click();
        }
        await this.signupForFreeButton.isVisible();
        await this.signupForFreeButton.click();
    }

    async expertSupportButtonClick(){
        await this.page.waitForTimeout(3000);
        if(await this.dialogCloseButton.isVisible()){
            await this.dialogCloseButton.click();
        }
        
        await this.expertSupportButton.scrollIntoViewIfNeeded()
        await this.expertSupportButton.isVisible();
        await this.expertSupportButton.click();
    }

    async expertSupportFormFill(formName, formJobTitle, formPhone, formEmail, formBusinessName){
        
        await this.fullName.scrollIntoViewIfNeeded();
        await this.fullName.isVisible();
        await this.fullName.fill(formName);

        await this.jobTitle.scrollIntoViewIfNeeded();
        await this.jobTitle.isVisible();
        await this.jobTitle.fill(formJobTitle);

        await this.phoneNumber.scrollIntoViewIfNeeded();
        await this.phoneNumber.isVisible();
        await this.phoneNumber.fill(formPhone);

        await this.workEmailAddress.scrollIntoViewIfNeeded();
        await this.workEmailAddress.isVisible();
        await this.workEmailAddress.fill(formEmail);

        await this.registeredBusinessName.scrollIntoViewIfNeeded();
        await this.registeredBusinessName.isVisible();
        await this.registeredBusinessName.fill(formBusinessName);
        
        await this.stateTerritory.scrollIntoViewIfNeeded();
        await this.stateTerritory.isVisible();
        await this.stateTerritory.click();

        await this.selectVicState.isVisible(); 
        await this.selectVicState.click(); 
        
        await this.submitButton.scrollIntoViewIfNeeded();
        await this.submitButton.isVisible();
        await this.submitButton.click();

        await expect(this.thankYouMessage).toBeVisible();

    }
    
   }
