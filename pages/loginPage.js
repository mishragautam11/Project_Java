import { test, expect } from '../testFixtures/pageFixture';
//const { expect } = require("@playwright/test");
const { assert } = require("console");

const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

/**
 * Page objects for Login page.
 */
exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        

        this.closePopUp = page.locator('//button[@aria-label="close popup"]');
        this.loginText  =page.locator('//h1[text()="Log in or sign up"]');
        this.btnLoginSignup = page.locator('//button[@data-testid="header-user"]');
        this.txtEmail = page.locator('xpath=//input[@id="email"]');
        this.btnContinueToPassword = page.locator('xpath=//button[@id="email-validator-continue"]');
        this.txtPassword = page.locator('xpath=//input[@id="password"]');
        this.reviewAndTrolleySubstitution = page.locator("(//span[@class='sc-68a19fdf-2 blzhZk coles-targeting-CheckoutStepperCheckoutStepIcon'])[2]");
        this.continueToYourDetails = page.locator("//button[@data-testid='complete-review-trolley-&-substitutions']");
       
      

        this.btnContinueToSignIn = page.locator('xpath=//button[@id="existing-user-login"]');
        this.btnCloseModal = page.locator('//*[@aria-label="close modal"]/span');
        this.lnkBoughtBefore = page.locator('//*[@data-testid="category-explorer-category"]').nth(0);
        this.b2cColesLogo=page.locator('//a[@aria-label="Coles Home"]');
        this.trolleyHeader = page.locator('//h2[@data-testid="drawer-heading"]');
        this.btnCloseTrolley = page.locator('//button[@data-testid="drawer-close-button"]');
        this.btnRemoveAllItems = page.locator('//button[@aria-label="Remove all items"]');
        this.ddnDeliveryMethod = page.locator('//div[@data-testid="shopping-method-dropdown-select"]');
        this.deliveryAddress = page.locator('//input[@placeholder="Start typing to add an address"]');
        this.btnSetAddress = page.locator('//button[.="Set address"]');
        this.btnJustBrowsing = page.locator('//button[@data-testid="just-browsing-button"]');
        this.btnContinueShopping = page.locator('//button[@data-testid="continue-shopping-button"]');
        this.logoColes = page.locator('//*[@data-testid="header-logo"]');
        this.shopCategoriesHeader = page.locator(
            "*[data-testid='header-link-shop-categories']"
        );
    
        this.boughtBefore = page.locator(
            "div[data-testid='header-bottom-wrapper']>ul>li:nth-child(2)>a"
        );
        this.specialsTab = page.locator("div[data-testid='header-bottom-wrapper']>ul>li:nth-child(3)>a");
    
        this.catalogueLink = page.locator("div[data-testid='header-bottom-wrapper']>ul>li:nth-child(2)>a");

        this.colesMagazinesLink = page.locator("*[data-testid*='coles-menu-desktop']>div:nth-child(2)>div>ul>li:nth-child(3)");

        //changes here
        this.shopProductsHeader = page.locator("(//*[@data-testid='header-bottom-nav-links']//span)[1]");
        this.headerBottomNavLinks = page.locator("//ul[@data-testid='header-bottom-nav-links']");
        this.specialsAndCatalogueOptionLinks = page.locator("//nav[contains(@class,'NavigationListNavigationContainer')]/ul");
        this.navigationList = page.locator("//div[@data-testid='navigation-list']");

        this.btnCloseDrawer = page.locator("//*[@data-testid='drawer-close-button']");
        this.boughtBeforeMessage =page.locator("*[data-testid*='bought-before-unauthenticated'] h2");
        this.heroBanner= page.locator("div[data-testid='hero-banner']");
        this.btnShoppingType = page.locator('//button[@data-testid="how-and-when-button"]');
        this.businessLogo = page.locator("//div[@data-testid='header-logo']/*[normalize-space()='Coles for Business Logo']");
        this.closeButton = page.locator("//button[@data-testid='drawer-close-button']");
        this.slotVisibility = page.locator("//div[text()='When suits you?']");
        this.slotConfirmPopUp = page.locator('//h1[text()="Confirm your time slot"]');
        this.closeSlotConfirmPopup = page.locator('//button[@data-testid="close-button"]');

        //DB refresh Locators(B2B)
        this.firstTimeLoginForm = page.locator("//*[@data-testid='first-time-login-form']");
	    this.mobileVerificationForm = page.locator("//*[@data-testid='mobile-verification-form']");
        this.noThanksLink = page.locator("//*[@data-testid='no-thanks-link']");
        this.continueButton = page.locator("//*[@data-testid='continue-button']");
        this.linkFlybuys = page.locator("//h1[text()='Link your Flybuys card']");
        this.linkFlybuysNo = page.locator("//a[text()='No thanks']");
        this.emailValidatorCta = page.locator("//button[@id='email-validator-continue']");
        this.btnAccount = page.locator('//button[@data-testid="header-user"]');
        this.logoutButton = page.locator("//span[normalize-space()='Log out']");
        this.closeDelPrefButton = page.locator("//button[@data-testid='close-button']");
        this.catalogue = page.locator('//a[@data-testid="category-link-/catalogues"]');
        this.slotDrawerPopup = page.locator('//div[text()="Your shop. Your way."]');
        this.accountInactiveText = page.locator("//p[text()='Your account is currently set to inactive.']");
        this.setDeliveryPreferancePopup = page.locator('//h1[@data-testid="modal-title"]');
        this.setShoppingMethodPopup = page.locator('//div[text()="Set shopping method"]');
        this.whenSuitsYouText = page.locator('//div[text()="When suits you?"]');
        this.btnCloseDialog = page.locator('//*[@aria-label="Close dialog"]');

        //slot expaired popUp locator
        this.yourDeliverySlotExpairedText = page.locator("//h1[text()='Your delivery slot expired']");
    }

    /**
     * Method to return locator based on the label / text name
     * @param {*} searchText - text using which locator is to be created.
     * @returns locator based on the the text provided
     */
    getByText(searchText) {
         const xpath = `//*[contains(text(),"${searchText}")]`;
        return this.page.locator(xpath);
    } 

    /**
     * Method to return locator based on the label / text name
     * @param {*} slotText - text using which locator is to be created.
     * @returns locator based on the the text provided
     */
    selectPDSlotbyText(slotText){
        const PDSlotType = `//*[contains(text(),'${slotText}')]/preceding::span[3]/input[1]`;
        return this.page.locator(PDSlotType).nth(0);
     
     }

    /**
     * Method to navigate to the application under test.
     */
    async navigateToCUSP() {
        await this.page.goto(process.env.URL);
        
    }

    /**
     * Method to validate Coles for Business Logo.
     */
    async validateBusinessLogo() {
        await expect(this.businessLogo).toBeVisible();
    }
    
    /**
     * Method to reload until Coles for Business Logo is visible.
     */
    async refreshUntilBusinessLogo() {
        await this.page.reload();
        await this.page.waitForTimeout(5000);
        while(await this.businessLogo.isVisible()== false){
            await this.page.reload();
            await this.page.waitForTimeout(6000);
        }
    }

    /**
     * Method to login the customer
     * @param {*} username  - User Name of the user
     * @param {*} password - Password of the user
     */
    async loginasCustomer(username, password) {
        if (await this.closePopUp.isVisible())
            await this.closePopUp.click();
        await expect(this.btnLoginSignup).toBeVisible();
        await this.page.waitForTimeout(5000);
        await this.btnLoginSignup.click();
        await this.txtEmail.fill(username);
        await this.btnContinueToPassword.click();
        await this.txtPassword.fill(password);
        await this.btnContinueToSignIn.click();
        await this.closeModalWindow();
        await expect(this.lnkBoughtBefore).toBeVisible({ timeout: 60000 });
        await this.closeModalWindow();
        await this.page.waitForTimeout(5000);
        if(await this.yourDeliverySlotExpairedText.isVisible() === true){
            await this.page.waitForTimeout(2000);
            await this.closeSlotConfirmPopup.click()
        }
        await this.page.waitForTimeout(5000);
        if(await this.slotVisibility.isVisible() === true) {
            await this.page.waitForTimeout(2000);
            await this.btnCloseDrawer.click()
        }
        await this.page.waitForTimeout(5000);
        if(await this.slotConfirmPopUp.isVisible() === true){
            await this.page.waitForTimeout(2000);
            await this.closeSlotConfirmPopup.click()
        }
        await this.page.waitForTimeout(5000);
        if(await this.whenSuitsYouText.isVisible() === true){
            await this.page.waitForTimeout(2000);
            await this.btnCloseDialog.click()
        }
        await this.page.waitForTimeout(5000);
        if(await this.slotDrawerPopup.isVisible() ){
            await this.page.waitForTimeout(2000);
            await this.btnCloseTrolley.click();
        }
        await this.page.waitForTimeout(5000);
        if(await this.setDeliveryPreferancePopup.isVisible() ){
            await this.page.waitForTimeout(2000);
            await this.closeSlotConfirmPopup.click();
        }
        await this.page.waitForTimeout(5000);
        if(await this.setShoppingMethodPopup.isVisible() ){
            await this.page.waitForTimeout(2000);
            await this.btnCloseTrolley.click();
        }
    }
     /*
    when click on when button it navigates to Login to cusp and set address

    */
    async loginAsCustomerForPickSlotFlow(username, password) {
        await this.waitToCompleteAction(2000);
        await expect(this.loginText).toBeVisible();
        await this.page.waitForTimeout(5000);
        await this.txtEmail.fill(username);
        await this.btnContinueToPassword.click();
        await this.txtPassword.fill(password);
        await this.btnContinueToSignIn.click();
    }
    /**
     * Close slot confirmation drawer
     */
    async closeSlotConfirmationPopUp(){
        await this.page.waitForTimeout(2000);
        if(await this.slotConfirmPopUp.isVisible() === true){
            await this.page.waitForTimeout(2000);
            await this.closeSlotConfirmPopup.click()
        }
        console.log("confirm slot drawer closed");
        await this.page.waitForTimeout(5000);
        if(await this.yourDeliverySlotExpairedText.isVisible() === true){
            await this.page.waitForTimeout(2000);
            await this.closeSlotConfirmPopup.click()
        }

    }

    /**
     * Close Set location Info Popup
     */
    async dismissSetLocationInfoPopup() {
        await this.page.waitForTimeout(9000);
        if (await this.closePopUp.isVisible())
        await this.closePopUp.click();
	}

    /**
     * Close the open modal window.
     */
    async closeModalWindow() {
        if (await this.btnCloseModal.isVisible({ timeout: 60000 })) {
            await this.btnCloseModal.click({timeout: 60000 });
        }
    }

    /**
     * Verify the display of Coles Logo (To validate successful navigation to home page.)
     */
	async verifyColesLogoIsVisible() {
		try {
            await expect(this.logoColes).toBeVisible();
			//verifyElementVisibilityCheckTrue(this.logoColes, "Coles logo");
		} catch (error) {
			console.log("Error: Coles logo is not visible");
		}
	}

    /**
     * Verify shop categories header tab visbility.
     */
    async verifyShopCategoriesHeaderTabVisibility() {
		try {
            await expect(this.shopCategoriesHeader).toBeVisible();
			//verifyElementVisibilityCheckTrue(this.logoColes, "Coles logo");
		} catch (error) {
			console.log("Error: Shop Categories Header is not visible");
		}
	}

    /***
     * Verify Bought Before tab visibility
     */
    async verifyBoughtBeforeTabVisibility() {
		try {
            await expect(this.boughtBefore).toBeVisible();
			//verifyElementVisibilityCheckTrue(this.logoColes, "Coles logo");
		} catch (error) {
			console.log("Error: Bought Before is not visible");
		}
	}

    /***
     * Verify Specials tab visibility
     */
    async verifySpecialsTabVisibility() {
		try {
            await expect(this.specialsTab).toBeVisible();
			//verifyElementVisibilityCheckTrue(this.logoColes, "Coles logo");
		} catch (error) {
			console.log("Error: Specials Tab is not visible");
		}
	}

    /***
     * Verify Catalogue link visibility
     */
    async verifyCatalogueLinkTabVisibility() {
		try {
            await expect(this.catalogueLink).toBeVisible();
			//verifyElementVisibilityCheckTrue(this.logoColes, "Coles logo");
		} catch (error) {
			console.log("Error: Catalogue Link Tab is not visible");
		}
	}

    /***
     * Verify footer section visibility
     */
    async verifyfooterSectionVisibility() {
		try {
            await expect(this.colesMagazinesLink).toBeVisible();
			//verifyElementVisibilityCheckTrue(this.logoColes, "Coles logo");
		} catch (error) {
			console.log("Error: Catalogue Link Tab is not visible");
		}
	}


     /**
     * This method is to check that selector is visible
	 * Paramerters - Selector and component that we are checking the visibility
     * @param {*} locator  - Locator
     * @param {*} stringVal  - Text to compare the text on locator
     */
	async verifyElementVisibilityCheckTrue(locator, stringVal) {
		try {
			await expect(locator).toBeVisible();
            console.log (stringVal + "is visible.");
		} catch (error) {
			console.log("Element is not visible" + stringVal);
		}
	}

   /**
    * Verify the Deawer Header
    */ 
   async verifyDrawerHeader(){
     await this.verifyInnerText(this.shopProductsHeader, 'Shop products');
   }

   /***
    * Close the Dialog by clicking on Close Icon
    */
   async closeDialogByCloseIcon(){
    await this.shopProductsHeader.click();
    await this.assertVisibilityAndClick(this.btnCloseDrawer);
   }

   /***
    * Verify message displayed in Bought Before 
    */
   async verifyMessageInBoughtBefore(){
    await this.verifyInnerText(this.boughtBeforeMessage,'You have no bought before items');

   }

   /**
    * Method to Link on Header bottom navigation
    * @param {*} headerName 
    */
   async openHeaderLink(headerName){
    await this.headerBottomNavLinks.getByText(headerName).click();
   }

   /**
    * Method to Link on Header bottom navigation
    * @param {*} SpecialsAndCatalogueOption 
    */

   async openLinkFromSpecialsAndCatalogue(SpecialsAndCatalogueOption){
    await this.specialsAndCatalogueOptionLinks.getByText(SpecialsAndCatalogueOption).click();
   }

   /**
    * Click the link by the name.
    * @param {*} linkName 
    */
   async openNavigationContainerLink(linkName){
    if(await this.navigationList.isVisible()===false){
        await this.openHeaderLink('More');
    }
    await this.navigationList.getByText(linkName).click();

   }

    /**
     * Method to set focus on the shopping method button
     */
    async setFocusOnSetShoppingMethodButton(){
        await this.btnShoppingType.click({force:true});
        // await this.btnShoppingType.click();
        if(await this.btnCloseDrawer.isVisible()){
            await this.btnCloseDrawer.click(); 
        }else{
            await this.btnShoppingType.click();
        }
     }
 
     /**
      * Validate the visibility of Hero banner
      */
     async verifyHeroBanner(){
        await expect(this.heroBanner.first()).toBeVisible();
     }

    /**
     * Method to assert that the specific locator displays the expcted text
     * @param {*} locator  - Locator 
     * @param {*} expectedValue - expected text that locator is supposed to display.
     */
    async verifyInnerText(locator, expectedValue){

        await expect(locator).toContainText(expectedValue,{timeout:80000});

    }

    /**
     * Method to asset the visiblity of the locator and click it.
     * @param {*} locator 
     */
    async assertVisibilityAndClick(locator){
        await expect(locator).toBeVisible({timeout:80000});
        await locator.click();
    }

    /***
     * Method to navigate to Catalogue page
     */
    async navigateToCataloguePage() {
        await this.catalogueLink.click();
    }

    /***
     * Method to navigate to home page.
     */
    async navigateToHomePage(){
        console.info('Click on Home page logo to navigate to Homepage.');
        await this.logoColes.click();
    }

    /***
     * Method to hard wait.
     */
    async waitToCompleteAction(seconds){
        await this.page.waitForTimeout(seconds);
    }

    /**
     * Method to login during DB refresh(B2B).
     * @param {*} username  - User Name of the user
     * @param {*} password - Password of the user
     */
    async dbRefreshloginB2b(username, password) {
        if (await this.closePopUp.isVisible())
            await this.closePopUp.click();
        await expect(this.btnLoginSignup).toBeVisible();
        await this.page.waitForTimeout(5000);
        await this.btnLoginSignup.click();

        await expect(this.txtEmail).toBeVisible();
        await this.txtEmail.fill(username);
        await expect(this.btnContinueToPassword).toBeVisible();
        await this.btnContinueToPassword.click();
        if (await this.firstTimeLoginForm.isVisible()) {
            await this.continueButton.click();
        }
        await this.page.waitForTimeout(2000);
        if(await this.emailValidatorCta.isVisible()){
            await this.emailValidatorCta.click();
        }
        await expect(this.txtPassword).toBeVisible();
        await this.txtPassword.fill(password);
        await this.btnContinueToSignIn.click();
        if (await this.mobileVerificationForm.isVisible()) {
            await this.noThanksLink.click();
        }
        await this.page.waitForTimeout(3000);
        if (await this.linkFlybuys.isVisible()) {
            await this.linkFlybuysNo.click();
        }
        await this.closeModalWindow();
        
    }
    //method for validate confirm your slot drawer before login
    async confirmSlotVsibility(){
        await this.page.waitForTimeout(5000);
        if(await this.slotConfirmPopUp.isVisible() === true){
            await this.page.waitForTimeout(2000);
            await this.closeSlotConfirmPopup.click()
        }
        console.log("confirm slot drawer closed")

    }

    /***
     * Method to close delivery preference.
     */
    async closeDeliveryPref(){
        await expect(this.closeDelPrefButton).toBeVisible();
        if(await this.closeDelPrefButton.isVisible() == true){
            await this.closeDelPrefButton.click();
            console.log("closed delivery Prefence Button!");
    }
        }
        
    
    /***
     * Method to DB Refresh Logout B2B.
     */
    async dbRefLogout(){
        await expect(this.btnAccount).toBeVisible();
        await this.btnAccount.click();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        console.log("logout successfull!");
    }

    /***
     * Method to validate account inactive text while login B2B.
     */
    async validateInactiveAccount(username,password){
        if (await this.closePopUp.isVisible())
            await this.closePopUp.click();
        await expect(this.btnLoginSignup).toBeVisible();
        await this.page.waitForTimeout(5000);
        await this.btnLoginSignup.click();
        await this.txtEmail.fill(username);
        await this.btnContinueToPassword.click();
        await this.txtPassword.fill(password);
        await this.btnContinueToSignIn.click();
        await expect(this.accountInactiveText).toBeVisible();
    }

    async navigateToCatalogue(){
        await this.catalogue.click();
    }

}
    
