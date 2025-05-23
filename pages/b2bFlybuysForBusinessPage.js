import { test, expect } from '../testFixtures/pageFixture';

const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.B2bFlybuysForBusinessPage = class B2bFlybuysForBusinessPage {
    
    constructor(page) {
        this.page = page;

        this.flyForBusinessMenu = page.locator("//a[@identifier='business_flybuys']");
        this.flybuysForBusTitle = page.locator("//h2[normalize-space()='Flybuys for business']");
        this.flyForBusContent = page.locator("//p[normalize-space()='Set up how your business collects Flybuys points by:']");
        this.flySettingsTitle = page.locator("//h3[normalize-space()='Flybuys settings']");
        this.editButton = page.locator("//button[@aria-label='Edit']");
        this.flyPointText = page.locator("//p[normalize-space()='Select an option to collect Flybuys points']");
        this.flyDropDown = page.locator("//div[@data-testid='static-dropdown-select']");
        this.ownFlyOption = page.locator("//span[@data-testid='static-dropdown-label'][normalize-space()='Allow your shoppers to use their own Flybuys number']");
        this.ownFlyNotification = page.locator('//*[contains(text(),"Flybuys number will be used to collect points")]');
        this.closeNotificationButton = page.locator("//button[@aria-label='Close notification dialog']");
        this.valFlyIcon = page.locator("//*[@aria-labelledby='svgPaymentFlybuys']");
        this.sameFlyOption = page.locator("//span[@data-testid='static-dropdown-label'][normalize-space()='Use the same Flybuys number for all your shoppers']");
        this.flyNumTextBox = page.locator("//div[@data-testid='flybuys-input']/input");
        this.sameFlyNotification = page.locator("//div[@data-testid='notification']/div[normalize-space()='All your shoppers will use the Flybuys number set up by your business to collect points']");
        this.noFlyOption = page.locator('//*[contains(text(),"t allow Flybuys points to be collected")]');
        this.noFlyNotification = page.locator('//*[contains(text(),"t be collected when shopping for your business")]');
        this.saveButton = page.locator("//span[normalize-space()='Save']");
        this.cancelButton = page.locator("//span[normalize-space()='Cancel']"); 
        this.btnAccount = page.locator('//button[@data-testid="header-user"]');
        this.logoutButton = page.locator("//span[normalize-space()='Log out']");


    }
    
    /**
     * Method to validate Manage Flybuys page for Admin user.
     */
    async validateManageFlybuysAdmin(){
        await expect(this.btnAccount).toBeVisible();
        await this.btnAccount.click();
        await expect(this.flyForBusinessMenu).toBeVisible();
        await this.flyForBusinessMenu.click();
        await expect(this.flybuysForBusTitle).toBeVisible();
        await expect(this.flyForBusContent).toBeVisible();
        await expect(this.flySettingsTitle).toBeVisible();
       

        await expect(this.editButton).toBeVisible();
        await this.editButton.click();

        await expect(this.flyPointText).toBeVisible();
        await expect(this.flyDropDown).toBeVisible();
        await this.flyDropDown.click();
        await expect(this.ownFlyOption).toBeVisible();
        await this.ownFlyOption.click();

        await expect(this.cancelButton).toBeVisible();
        await expect(this.saveButton).toBeVisible();
        await this.saveButton.click();
        await expect(this.ownFlyNotification).toBeVisible();
        await expect(this.closeNotificationButton).toBeVisible();
        await this.closeNotificationButton.click();

        await expect(this.editButton).toBeVisible();
        await this.editButton.click();
        await expect(this.flyDropDown).toBeVisible();
        await this.flyDropDown.click();
        await expect(this.sameFlyOption).toBeVisible();
        await this.sameFlyOption.click();
        await expect(this.flyNumTextBox).toBeVisible();
        await this.flyNumTextBox.fill(dataset.FlybuyNumber);
        await expect(this.cancelButton).toBeVisible();
        await expect(this.saveButton).toBeVisible();
        await this.saveButton.click();
        await expect(this.sameFlyNotification).toBeVisible();
        await expect(this.closeNotificationButton).toBeVisible();
        await this.closeNotificationButton.click();
        await expect(this.valFlyIcon).toBeVisible();

        await expect(this.editButton).toBeVisible();
        await this.editButton.click();
        await expect(this.flyDropDown).toBeVisible();
        await this.flyDropDown.click();
        await expect(this.noFlyOption).toBeVisible();
        await this.noFlyOption.click();
        await expect(this.cancelButton).toBeVisible();
        await expect(this.saveButton).toBeVisible();
        await this.saveButton.click();
        await expect(this.noFlyNotification).toBeVisible();
        await expect(this.closeNotificationButton).toBeVisible();
        await this.closeNotificationButton.click();

        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
      
    }
    

   }
