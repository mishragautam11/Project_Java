const { LoginPage } = require("./loginPage.js");
const { expect } = require("@playwright/test");

/**
 * Page objects for Recepies Page.
 */
exports.RecipesPage = class RecipesPage {
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.swaggleLink=page.locator("//a[@data-testid='Coles Swaggle']");
        this.giftCards=page.locator("//a[@data-testid='Coles Gift Cards']");
        this.footerBrandLinks=page.locator("//h2[contains(text(),'Explore our brands)]")
    }
    async FooterLink(){
       
        await this.closeDrawer.click()
        await this.homePagemore.click()
    }


    


    
}
