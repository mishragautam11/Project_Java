const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage.js");

const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));
let colesOrderId;


exports.AccountPage = class AccountPage {
    
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
/**
 * All page locators are below:
 */

        this.accountBtn = page.locator("//*[@id='header-user']");
        this.ordersLink = page.locator("//div[@data-testid='account-dropdown']/ul/li[1]/a[1]");
        this.paymentOptionsLink = page.locator("//div[@data-testid='account-dropdown']/ul/li[8]/a");
        this.leftFlybuysLink = page.locator("//div[@data-testid = 'account-menu']/nav/a[2]");
        this.leftColesPlusLink = page.locator("//div[@data-testid = 'account-menu']/nav/a[3]");
        this.leftAddressesLink = page.locator("//div[@data-testid = 'account-menu']/nav/a[4]");
        this.leftYourDetailsLink = page.locator("//div[@data-testid = 'account-menu']/nav/a[5]");
        this.leftAccountSecurityLink = page.locator("//div[@data-testid = 'account-menu']/nav/a[6]");
        this.leftPreferencesLink = page.locator("//div[@data-testid = 'account-menu']/nav/a[7]");
        this.leftPaymentOptionsLink = page.locator("//div[@data-testid = 'account-menu']/nav/a[8]");
        this.leftOrdersLink = page.locator("//div[@data-testid = 'account-menu']/nav/a[1]");
        this.logoutBtn = page.locator("//div[@data-testid='account-dropdown']/div/div/button");
        this.flybuysHeadingText = page.locator("//div[@data-testid='flybuys']/div/h2");
        this.colesPlusHeadingText = page.locator("//div[@data-testid='account-content']/div/div/h2[1]");
        this.addressHeadingText = page.locator("//h2[@data-testid='addresses-heading']");
        this.yourDetailsHeadingText = page.locator("//h2[text()= 'Your details']");
        this.accountSecurityHeadingText = page.locator("(//div[@data-testid='account-content']/div/h2)[1]");
        this.preferencesHeading = page.locator("//div[@data-testid='account-content']/div/h2");
        this.orderHeadingText = page.locator("(//div[@data-testid='account-content']/div/div/h2)[1]");
        this.paymentOptionsHeadingText = page.locator("//div[@data-testid='account-content']/div/h2");
        this.addressesLink = page.locator("//div[@data-testid='account-dropdown']/ul/li[4]/a/span");
        this.addressTitle = page.locator('//div//h2[text()="Addresses"]');
        this.addressBtn = page.locator('//button[text()="Account"]');
        this.yourDetOption = page.locator("//span[text()= 'Your details']");
        this.changeForBusButton = page.locator("//span[text()= 'Change to Coles for Business']");
        this.changeForBusinessContent = page.locator("//div[@data-testid='b2c-conversion-flow']");
        this.businessNameField = page.locator("//input[@name='businessName']");
        this.abn = page.locator("//input[@name='abn']");
        this.industryTypeDropdown = page.locator("//select[@data-testid='organizationDetails-industry']");
        this.businessSubButton = page.locator("//span[text()= 'Submit']");
        this.businessConvSuccessMsg = page.locator("//p[text()= 'Your account has been changed to Coles for Business']");
        this.businessContinueBtn = page.locator("//span[text()= 'Continue']");
        this.acctButton = page.locator("//button[@data-testid='header-user']");
        this.activeOrdersTab = page.locator("//div[@data-testid='tab-navlist']/a[normalize-space()='Active orders']");
        this.addCardBtn = page.locator("//button[text()='Add card']");
        this.removeBtn = page.locator("//button[text()='Remove']");
        this.addCreditcardText = page.locator("(//div[@data-testid='card-payment']//div)[1]");
        this.areYouSureRemoveCardText = page.locator("//h1[text()='Are you sure you want to remove this card?']");
        this.removeCardBtn = page.locator("//span[text()='Remove card']");
        this.cardAddedSuccessText = page.locator("//div[text()='Your card has been saved']");
        this.cardRemovedSuccessText = page.locator("//div[text()='Card has been removed']");
        this.removedCardTextCloseBtn = page.locator("//div[text()='Card has been removed']//parent::div//following-sibling::button");
        this.addedCardTextCloseBtn = page.locator("//div[text()='Your card has been saved']//parent::div//following-sibling::button");
        this.keepBtn = page.locator("//span[text()='Keep']");
        this.closeDrawerBtn = page.locator("//button[@data-testid='close-button']"); 
        //card deatails locators
        this.cardNumber = page.locator('//*[@id="number"]');
        this.expiryMonth = page.locator('//*[@id="expiryMonth"]');
        this.expiryYear = page.locator('//*[@id="expiryYear"]');
        this.cvv = page.locator('//*[@id="securityCode"]');
        this.iFrameCCNumber = page.frameLocator('//iframe[@id="#card-number"]');
        this.iFrameCCV = page.frameLocator('//iframe[@id="#security-code"]');
        this.iFrameExpiryMonth = page.frameLocator('//iframe[@id="#expiry-month"]');
        this.iFrameExpiryYear = page.frameLocator('//iframe[@id="#expiry-year"]');
        this.saveBtn = page.locator("//button[@data-testid='save-button']");       
    }
/**
 * Validation and Click on "Account" Link on Home Page:
 */
    async accountBtnCLick(){
        if (await this.accountBtn.isVisible()){
            await this.accountBtn.click();
        }
    }

    async addressesLinkCLick() {
        if (await this.addressesLink.isVisible()) {
            await this.addressesLink.click();
            await this.page.waitForTimeout(3000);
          
        }
    }
/** 
 * Validation of "Orders" Link on Account list and validation of "Order" Page:
 */
     
    async ordersLinkCheck(){
        if (await this.ordersLink.isVisible()){
            await this.ordersLink.click();
            await expect(this.orderHeadingText).toHaveText('Orders');
    }
}

/**
 *Validation of left side Page Link of "Flybuys" and validation of "Flybuys" Page:
 */
    
async leftFlybuysLinkCheck(){
    if (await this.leftFlybuysLink.isVisible()){
        await this.leftFlybuysLink.click();
        await expect(this.flybuysHeadingText).toHaveText('Flybuys');
       
    }
}

/** 
 * Validation of left side Page Link of "Coles Plus" and validation of "Coles Plus" Page:
 */
    

async leftColesPlusLinkCheck(){
    if (await this.leftColesPlusLink.isVisible()){
        await this.leftColesPlusLink.click();
        await expect (this.colesPlusHeadingText).toHaveText('Coles Plus');
    }
}

/** 
 * Validation of Left side Page link of "Addresses" and validation of "Addresses" Page:
 */
    

async leftAddressesLinkCheck(){
    if (await this.leftAddressesLink.isVisible()){
        await this.leftAddressesLink.click();
        await expect (this.addressHeadingText).toHaveText('Addresses');
    }
}

/**
 * Validation of Left side Page link of "Your Details" and validation of "Youe details" Page:
 */
async leftYourDetailsLinkCheck(){
    if (await this.leftYourDetailsLink.isVisible()){
        await this.leftYourDetailsLink.click();
        await expect(this.yourDetailsHeadingText).toHaveText("Your details");
    }
}

/**
 * Validation of Left side Page link of "Account Security" and validation of "Account Security" Page:
 */

async leftAccountSecurityLinkCheck(){
    if (await this.leftAccountSecurityLink.isVisible()){
        await this.leftAccountSecurityLink.click();
        await expect(this.accountSecurityHeadingText).toHaveText('Account security');
    }
}

/**
 * Validation of Left side Page link of "Preferences" and validation of "Preferences" Page:
 */


async leftPreferencesLinkCheck(){
    if (await this.leftPreferencesLink.isVisible()){
        await this.leftPreferencesLink.click();
        await expect(this.preferencesHeading).toHaveText('Preferences');
    }
}

/**
 * Validation of Left side Page link of "Payment Options" and validation of "Payment Options" Page:
 */


async verifyLeftPaymentOptionsLinkCheck(){
    if (await this.leftPaymentOptionsLink.isVisible()){
        await this.leftPaymentOptionsLink.click();
        await expect(this.paymentOptionsHeadingText).toHaveText('Payment options');
    
    }
}
async paymentOptionsLinkCheck(){
        await this.paymentOptionsLink.click();
        await expect(this.paymentOptionsHeadingText).toHaveText('Payment options');
        await this.page.waitForTimeout(5000);
        await this.removeCardCheck();
        await this.validateRemovedcardNotification();
        await this.addCardBtn.click();
}
async removeCardCheck(){
    if (await this.removeBtn.isVisible()){
        await this.removeBtn.click();
        await this.page.waitForTimeout(5000);
        if (await this.areYouSureRemoveCardText.isVisible()){
            await this.removeCardBtn.click();
            }
    }
}
async validateRemoveBtn(){
    if (await this.removeBtn.isVisible()){
        await this.removeBtn.click();
    }
}
async removeCardClick(){
    if (await this.areYouSureRemoveCardText.isVisible()){
        await this.removeCardBtn.click();
        }
}
/*Method for validation of popup massage "Payment card removed has removed" */
async validateRemovedcardNotification() {
    if(await this.cardRemovedSuccessText.isVisible()){
    await this.page.waitForTimeout(5000);
    await this.removedCardTextCloseBtn.click();
    }
}
/*Method for validation of popup massage "Payment card removed has removed" */
async validateAddeddcardNotification() {
   if(await this.cardAddedSuccessText.isVisible()){
    await this.addedCardTextCloseBtn.click();
   }
}
/*Method for validation of keep button */
async keepBtnClick(){
    await this.keepBtn.click();
}
/*Method for validation of 'X' button */
async closeDrawerBtnClick(){
    await this.closeDrawerBtn.click();
}

/** 
 * Validation of Left side Page link of "Orders" and validation of "Orders" Page:
 */

async leftOrdersLinkCheck(){
       if (await this.leftOrdersLink.isVisible()){
        await this.leftOrdersLink.click();
        await expect(this.orderHeadingText).toHaveText('Orders');
    }
}

/**
 * Validation of "Log out" button.
 */


    async logoutBtnCLick(){
          if(await this.logoutBtn.isVisible()){
           await this.logoutBtn.click();
    
        }
    
    }
    /*Method for verify address from the address list*/
    async verifyAddress(){
        await this.addressBtn.click();
        await this.addressesLinkCLick();
        await this.loginPage.waitToCompleteAction(2000);
        await expect(this.addressTitle).toBeVisible({ timeout: 60000 });
        await expect(this.page.getByText('Riverton, WA, 6148'), 'Riverton address is added to the address list').toBeVisible();
        
        
    }
    /*Method for verify address is updated correctly or not*/
    async verifyDeliveryAddressAfterPickingSlot(){
        await this.loginPage.waitToCompleteAction(2000);
        await expect(this.page.getByText('Endeavour Hills'), 'Endeavour Hills address is updated correctly').toBeVisible();
        
        
}
/** 
 * Validation of B2C to B2B conversion:
 */

async b2cToB2bConversion(){
    await expect(this.acctButton).toBeVisible();
    await this.acctButton.click();
    await expect(this.yourDetOption).toBeVisible();
    await this.yourDetOption.click();
    await expect(this.changeForBusinessContent).toBeVisible();
    await expect(this.changeForBusButton).toBeVisible();
    await this.changeForBusButton.click();
    await expect(this.businessNameField).toBeEditable();
    await this.businessNameField.fill(dataset.IndustryType);
    await expect(this.abn).toBeEditable();
    await expect(this.industryTypeDropdown).toBeVisible();
    await this.industryTypeDropdown.click();
    await this.industryTypeDropdown.selectOption(dataset.IndustryType);
    await expect(this.businessSubButton).toBeVisible();
    await this.businessSubButton.click();
    await expect(this.businessConvSuccessMsg).toBeVisible();
    await expect(this.businessContinueBtn).toBeVisible();
    await this.businessContinueBtn.click();

    }

/**
 *Validation of Rapid badge and Rapid modify/cancel message on Active orders page for a Rapid order. 
 */

async verifyRapidCancelMessage(placedOrderId){
    await this.page.waitForTimeout(5000);
    await expect(this.activeOrdersTab).toBeVisible();
    await this.activeOrdersTab.click();
    colesOrderId = "//div[@id='orders-tab-0']//div[text()='"+placedOrderId+"']";
    await this.page.keyboard.press("PageUp");
    await expect(this.page.locator(colesOrderId)).toBeVisible();
    let rapidtag = "//div[@id='orders-tab-0']//div[text()='"+placedOrderId+"']//ancestor::li[1]/div//span[@data-testid='badge-wrapper']";
    await expect (this.page.locator(rapidtag)).toBeVisible();
    console.log(`Rapid badge is displayed for an order ${placedOrderId} on active orders page.`);
    let rapidOrderModifyMessage= "//div[text()='"+placedOrderId+"']//ancestor::li[1]/div//span[text()= 'Rapid delivery orders cannot be modified or cancelled.']";
    await expect (this.page.locator(rapidOrderModifyMessage)).toBeVisible();
    console.log(`Rapid delivery orders cannot be modified or cancelled message is displayed for an order ${placedOrderId}.`);
}
async addCreditOrDebitCardDetails(cardNumber, expirymonth, expiryyear, cvv){
    await this.iFrameCCNumber.locator(this.cardNumber).fill(cardNumber);           
    await this.iFrameExpiryMonth.locator(this.expiryMonth).selectOption(expirymonth);
    await this.iFrameExpiryYear.locator(this.expiryYear).selectOption(expiryyear);
    await this.iFrameCCV.locator(this.cvv).fill(cvv);
    await this.saveBtn.click();
    await this.page.waitForTimeout(5000);
}
}
