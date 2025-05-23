const { expect } = require("@playwright/test");
const exp = require("constants");
const { setDefaultAutoSelectFamilyAttemptTimeout } = require("net");
const { SourceTextModule } = require("vm");

let currentAge;
exports.YourDetailsPage = class YourDetailsPage {
    constructor(page) {
        this.page = page;
        this.loginPage = page;

        /*
        All page locators are below:
         */

        this.yourDetailsLink = page.locator("//div[@data-testid='account-dropdown']/ul/li[5]/a/span")
        this.headingText = page.locator("//h2[text()= 'Your details']")
        this.subHeadingText = page.locator("//h3[@data-testid='section-header']")
        this.editLink = page.locator("//h3[@data-testid='section-header']/following-sibling::*")
        this.firstName = page.locator("//*[@id='first-name']")
        this.secondName = page.locator("//*[@id='last-name']")
        this.dobDay = page.locator("//*[@id='day']")
        this.dobMonth = page.locator("//*[@id='month']")
        this.dobYear = page.locator("//*[@id='year']")
        this.updatedDialog = page.locator("//div[@data-testid = 'notification']")
        this.updatedDialogClose = page.locator("//div[@data-testid = 'notification']/button")
        this.mobileNumberEdit = page.locator("//a[contains(text(),'Edit')]")
        this.mobileNumberTextBox = page.locator("//input[@id='mobile-number']")
        this.editPage = page.locator("//h1[contains(text(),'Edit my phone number')]")
        this.mobileNumberVerifyMobileNumberButton = page.locator("//button[@data-testid='save-button']")
        this.mobileNumberCancelButton = page.locator("//a[contains(text(),'Cancel')]")
        this.returnToShopButton = page.locator("//button[@data-testid='small-back-button']")
        this.myColesCardNumberLink = page.locator("//button[contains(text(),'Link')]")
        this.myColesCardNumberTextBox = page.locator("//input[@id='my-coles-card-number']")
        this.myColesCardNumberErrorMsg = page.locator("//h1[@data-testid = 'modal-title']")
        this.saveButton = page.locator("//form//button[@type='submit']")
        this.cancelBtn = page.locator("//form[@data-testid = 'mycoles-card-number-edit-form']/div/div[2]/button[2]")
        this.cancelButtonDialog = page.locator("//button[@data-testid = 'close-button']")
        this.tryAgainDialog = page.locator("//div[@data-testid = 'modal-actions-container']/button")
        this.dob = page.locator("//div[@data-testid='day-of-birth']");
        this.saveToListNotification = page.locator("//div[@data-testid='list-add-notification-heading']");
        this.accountBtn = page.locator("//*[@id='header-user']");
        this.yourDetailsNotification = page.locator("//div[text()='Personal details updated']");
        this.closeNotification = page.locator('//div[@data-testid="notification"]//child::button');
    }

    /*
    Validation of "Your Details" page:
    */

    async yourDetailsLinkClick() {
        if (await this.yourDetailsLink.isVisible()) {
            await this.yourDetailsLink.click();

        }
    }


    /* 
       Validation of "Your details" page heading:
    */

    async headingVisibility() {

        await expect(await this.headingText).toHaveText("Your details")
        await this.page.waitForTimeout(5000)

    }
    /*
      Validation of "Your details" page heading:
     */

    async subHeadingVisibility() {

        await expect(await this.subHeadingText).toHaveText("Personal")

        await this.page.waitForTimeout(5000)

    }

    /*
       Validation of "Your Details" page content:
    */

    async elementVisibility() {
        await expect(await this.page.getByText('Given name')).toBeVisible();
        await expect(await this.page.getByText('Family name')).toBeVisible()
        await expect(await this.page.getByText('Date of birth')).toBeVisible()
        if (await this.editLink.isVisible()) {
            await this.editLink.click();

        }
    }
    /*
    Validation of filling or edit personal information on Your details page...
    */
    /**
     * 
     * @param {*} GivenName 
     * @param {*} FamilyName 
     * @param {*} Day 
     * @param {*} Month 
     * @param {*} Year 
     */
    async personalInfo(GivenName, FamilyName, Day, Month, Year) {

        await this.firstName.isVisible();
        await this.firstName.click();
        await this.firstName.fill(GivenName);
        await this.page.waitForTimeout(2000);
        await this.secondName.isVisible();
        await this.secondName.click();
        await this.secondName.fill(FamilyName);
        await this.page.waitForTimeout(5000)
        await this.dobDay.isVisible();
        await this.dobDay.click();
        await this.dobDay.fill(Day);
        await this.dobMonth.isVisible();
        await this.dobMonth.click();
        await this.dobMonth.fill(Month);
        await this.dobYear.isVisible();
        await this.dobYear.click();
        await this.dobYear.fill(Year);
        await this.page.waitForTimeout(2000)
        await this.saveButton.isVisible()
        await this.saveButton.click()
        await this.page.waitForTimeout(2000)
        await expect(this.updatedDialog).toHaveText('Personal details updated')
        await this.updatedDialogClose.click()
        await this.page.waitForTimeout(3000)
    }

    /*
        Validation of "Contact Information" on "Your Details" page:
    */

    async contactInfo() {

        await expect(this.page.locator("//h3[text()='Contact']")).toHaveText('Contact')
        await expect(await this.page.getByText('Email')).toBeVisible();
        await expect(await this.page.getByText('Mobile number')).toBeVisible();
        await expect(await this.page.getByText('mycoles card number')).toBeVisible();

    }

    /**
     * Validation of "Mobile Number Edit Link" on "Your Details" page:
     */

    async mobileNumberEditClick(MobileNumber) {
        await this.mobileNumberEdit.click();
        await expect(this.editPage).toHaveText('Edit my phone number')
        await expect(await this.page.getByText('You will be sent a one time code via SMS to keep your account secure.')).toBeVisible();
        await this.returnToShopButton.click();
        await this.mobileNumberEdit.click();
        await this.mobileNumberTextBox.isVisible();
        await this.mobileNumberTextBox.click();
        await this.mobileNumberTextBox.fill(MobileNumber);
        await this.mobileNumberVerifyMobileNumberButton.isVisible();
        await this.mobileNumberCancelButton.click();


    }

    /** 
     * Validation of "My Coles Card Number" on "Your Details" page:
     */

    async myColesCardNumberLinkClick(RightCardNumber, WrongCardNumber) {
        await this.myColesCardNumberLink.click();
        await this.myColesCardNumberTextBox.isVisible();
        await this.myColesCardNumberTextBox.click();
        await this.myColesCardNumberTextBox.fill(RightCardNumber);
        await this.saveButton.click();
        await expect(this.myColesCardNumberErrorMsg).toHaveText('Something went wrong');
        await expect(await this.page.getByText('Your mycoles card number could not be set. Please try again.')).toBeVisible();
        await this.cancelButtonDialog.click();
        await this.saveButton.click();
        await this.tryAgainDialog.click();
        await this.cancelBtn.click();

    }
    /* Printing out the current Age of User in Years according to the your details page dob input
    */

    async fetchingDob() {
        const birthDate = await this.dob.textContent();
        const year = birthDate.split('/')[2];
        const currentDate = new Date();
        currentAge = currentDate.getFullYear() - year;
        console.log("Your Age is " + currentAge);
    }

    /* Verifying Age Gate Modal appearance for restricted items
    */
    async ageGateModalVerification() {
        if (currentAge < 18) {
            expect(await this.loginPage.getByText("You need to be of legal age to purchase restricted items. You’ll also need to show valid photo ID at pick up or delivery.").isVisible({ timeout: 5000 }));
        }
        else {
            expect(await this.saveToListNotification).toBeVisible();
        }
    }
    async enterDob(day,month,year) {
        await this.dobDay.click();
        await this.dobDay.fill(day);
        await this.dobMonth.click();
        await this.dobMonth.fill(month);
        await this.dobYear.click();
        await this.dobYear.fill(year);
        await this.saveButton.click();
        await expect(this.updatedDialog).toHaveText('Personal details updated');
        

    }
    async yourDetailsEdit(){
        await this.accountBtn.click();
        await this.yourDetailsLink.click();
        await this.editLink.click();
    }
    async yourDetailsNotificationClose(){
        if(await this.yourDetailsNotification.isVisible({timeout : 2000})){
            await this.closeNotification.click();
        }
    }


}









