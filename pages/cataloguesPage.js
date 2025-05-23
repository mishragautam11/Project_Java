import { test, expect } from '../testFixtures/pageFixture';
//const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage.js");



/**
 * Page objects for Catalogues Page.
 */
exports.CataloguesPage = class CataloguesPage {

    constructor(page) {
        this.page=page;
        this.loginPage = new LoginPage(page);
        this.cataloguesHeader= page.locator('//h1[@data-testid="catalogues__header"]');
        this.closeButton = page.locator("//button[@data-testid='drawer-close-button']");
        this.thisWeekCatalogue = page.locator('//a[contains(@aria-label,"View this week")]');
        this.fruitCatalogue = page.locator('//a[@aria-label="Fruit & Vegetables"]');
        this.catalogueProduct = page.locator('(//li[@class="page16"]//child::a)[1]');
        this.addToListFromCatalogueBtn = page.locator('//span[@class="sf-addlist-icon"]');
        this.createNewListIconFromCatalogue = page.locator('//span[@class="sf-plus-icon"]');
        this.catalogueListNameTextBox = page.locator('//input[@id="sf-listname"]');
        this.saveCatalogueListBtn= page.locator('//button[@id="sf-create-list-save-button"]');
        this.deleteOrEditCatalogueListBtn= page.locator('//button[contains(@aria-label,"CatalogueList") and (@data-testid="burger-menu-anchor-button")]');
        this.deleteCatalogueListOption= page.locator('//button[contains(@aria-label,"Remove list CatalogueList")]');
        this.removeListPopUpBtn= page.locator("//span[contains(text(),'Remove list')]");
        this.addProductToCatalogueListBtn = page.locator("//h2[text()='CatalogueList']/parent::div/following-sibling::div/child::button");
        this.goToListBtn =page.locator("//a[text()='Go to lists']");
        this.catalogueProductInModal = page.locator("//div[contains(@id,'product-name')]");
        this.openCatalogueListLink = page.locator("//h2[text()='CatalogueList']/parent::div");
        this.btnLists = page.locator('//button[@data-testid="header-shopping-lists"]');
        this.btnAddToCart = page.locator('//div[@class="sf-variety-addtocart"]/child::button');
        this.btnClosePopUp = page.locator('//a[@title="Close"]');
        this.btnTrolley = page.locator('//button[@data-testid="header-trolley-tablet-up"]');
        this.productInCart = page.locator('//a[@data-testid="product_in_trolley__title"]/child::span');
        this.catalogueProductForAddToCart = page.locator('//div[@class="sf-variety-name"]');
    }


    async validateHeading(expectedHeaderName){
        await this.loginPage.waitToCompleteAction(1000);  
        await this.loginPage.verifyInnerText(this.cataloguesHeader,expectedHeaderName);
        await this.loginPage.waitToCompleteAction(1000);
        if (await this.closeButton.isVisible())
            await this.closeButton.click();   
    }

    async navigateToThisWeekCatalogue(){
        await this.loginPage.waitToCompleteAction(1000); 
        await this.thisWeekCatalogue.click();
        await this.fruitCatalogue.click();
    }

    async openTheCatalogueProduct(){
        await this.catalogueProduct.scrollIntoViewIfNeeded();
        await this.catalogueProduct.click();
    }

    async addToListFromCatalogue(){
         await this.addToListFromCatalogueBtn.click();
    }

    async createNewListFromCatalogueAndAddProductToList(CatalogueListName){
        await this.loginPage.waitToCompleteAction(1000);  
         await this.createNewListIconFromCatalogue.click();
         await this.catalogueListNameTextBox.fill(CatalogueListName);
         await this.saveCatalogueListBtn.click();
         await this.page.waitForTimeout(5000);
         await this.addProductToCatalogueListBtn.click();
         const productNameAddedToCatalogueList = await this.catalogueProductInModal.innerText();
         await this.goToListBtn.click();
         await this.loginPage.waitToCompleteAction(1000);  
         await this.openCatalogueListLink.click({ force: true });
         await this.loginPage.getByText(productNameAddedToCatalogueList).isVisible();
         console.info("Verified product in Catalogue list!");
    }

    async removeCatalogueList(){
        await this.btnLists.click();
        await this.page.waitForTimeout(5000);
        if (await this.deleteOrEditCatalogueListBtn.isVisible()){
            await this.loginPage.waitToCompleteAction(1000);  
         await this.deleteOrEditCatalogueListBtn.click();
         await this.deleteCatalogueListOption.click();
         await this.page.waitForTimeout(3000);
         await this.removeListPopUpBtn.click();
         await this.loginPage.waitToCompleteAction(1000);  
    }}

    async addProductToCartAndVerify(){
        await this.page.waitForTimeout(3000);
        await this.btnAddToCart.click();
        const productNameAddedToCart = (await this.catalogueProductForAddToCart.innerText()).split(" | ")[0];
        await this.btnClosePopUp.click();
        await this.btnTrolley.click();
        const productNameInCart = (await this.productInCart.innerText()).split(" | ")[0];
        await expect(productNameInCart).toEqual(productNameAddedToCart);

    }
}