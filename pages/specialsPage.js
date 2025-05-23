import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");
const { HomePage } = require("../pages/homePage.js");

/**
 * Page objects for Specials page.
 */
exports.SpecialsPage = class SpecialsPage {

    constructor(page) {

        this.page = page;
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.categoryName = page.locator('//h1[@data-testid="product-cat-heading"]');
        this.specialsLink = page.locator("//*[@id='coles-targeting-header-container']/div[2]/div/div/ul/li[2]/a/span");
        
        this.specialsPromoBanner = page.locator("div[data-testid='promo-banner-citrus']");
        
        this.specialsCTAButton = page.locator("//a[@data-testid='cta-button']");
        this.applySortRecommended = page.locator("li[data-testid='recommendedDescending']");
        this.applySortBestseller = page.locator("li[data-testid='salesDescending']");
        this.applyFrequentlyPurchased = page.locator("//li[@data-testid='frequencyDescending']");
        this.sortDropdown = page.locator('div[data-testid="sort-select"]');
        this.productTile = page.locator('//*[@data-testid="product-tile"]');
        this.roundal = page.locator('//*[@data-testid="simple-fixed-price-specials"]');
        this.searchTerm = page.locator("//*[@id='search-specials-text-input']");
        this.searchSubmit = page.locator("//button[@data-testid='search-box-search-button-specials']");
        this.specialsSearchResultHeader = page.locator("//*[@id='coles-targeting-browse-content-container']/h2");
        this.specialsSearchBrandSelection = page.locator ("//*[@data-testid='brand']/..//input[@type='checkbox']").nth(0);
        this.applyButton = page.locator("//*[@id='drawer-footer-drawer']/div/div/button[2]/span");
        this.allSpecialsLink = page.locator("//*[@data-testid='navigation-container']/ul/li[1]/a/span/span[contains(text(),'All specials')]");
        this.searchNavigationLink = page.locator("//a[@data-testid='back-link']");
        this.aislePageHeading = page.locator("//h1[@data-testid='product-cat-heading']");
        this.specialsAisleCTA = page.locator("//*[@data-testid='promo-banner-citrus']//a[@data-testid='cta-button']");
        this.linkForBB = page.locator("//*[@id='coles-targeting-header-container']/div[2]/div/div/ul/li[3]/a/span");
        this.tobaccoBBBanner = page.locator("//div[@data-testid='tobacco-quitline-banner']");
        this.specialAndCataloguesCloseButton = page.locator('//button[@data-testid="drawer-close-button"]');
        this.multiListPopUp = page.locator("//div[@data-testid='popper-content']/child::div[2]/button");
        this.tobaccoAisle = page.locator("//div[@data-testid='navigation-list-scrollable']//a/span/span[text()='Tobacco']");
        
        this.special = page.locator("//span[text()='Specials']");
        this.specialsButton = page.locator("//button[@data-testid='Specials-filter-pill']");
        this.multiBuyFilter = page.locator("//div[@data-testid='specials-panel']//span[contains(text(),'Multi buy')]/..//input[@type='checkbox']");
        this.halfPriceFilter = page.locator("//div[@data-testid='specials-panel']//span[contains(text(),'Half price')]/..//input[@type='checkbox']");
        this.onlineOnlyFilter = page.locator("//div[@data-testid='specials-panel']//span[contains(text(),'Online only')]/..//input[@type='checkbox']");
    }


    async verifyCategoryHeaderName(expectedHeaderName){
        await this.loginPage.verifyInnerText(this.categoryName,expectedHeaderName);
        await this.loginPage.waitToCompleteAction(1000);
        if(await this.specialAndCataloguesCloseButton.isVisible()){
            await this.specialAndCataloguesCloseButton.click();
        }
    }


    async clickonSpecialsLink(){
        await expect(this.specialsLink).toBeVisible({timeout: 5000 });
        await this.specialsLink.click({timeout: 5000 });
        await this.allSpecialsLink.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(3000);
        await this.homePage.closePopup();   
         
    }

    async verifySpecialsPromoBannerWithCTA(){
       if(await this.specialsPromoBanner.last().isVisible() == true){
            console.log('Specials Banner available')
            await expect(this.specialsCTAButton.last()).toBeVisible();
        }
        else{
            console.log('Specials Banner is not available')
        }

    }

    async clickonBoughtBeforeLink(){
        await expect(this.linkForBB).toBeVisible({timeout: 5000 });
        await this.linkForBB.click({timeout: 5000 });
        await this.loginPage.waitToCompleteAction(3000);
        await this.homePage.closePopup();       
        if (await this.multiListPopUp.isVisible()) {
            await this.loginPage.waitToCompleteAction(5000);
            await this.multiListPopUp.click();
        }  
        await this.loginPage.waitToCompleteAction(3000);  
    }

    async tobaccoBannerOnBB(){
        if(await this.tobaccoBBBanner.last().isVisible() == true){
            await expect(this.tobaccoAisle).toBeVisible({timeout: 5000 });
            await this.tobaccoAisle.click({timeout: 60000 });
            await this.tobaccoBBBanner.toBeVisible({timeout: 5000 });
            console.log('Tobacco BB Banner is available')
            }
         else{
             console.log('Tobacco BB Banner is not available')
         } 
     }


    async verifySpecialsAisleBannerWithCTA(){     
        if(await this.specialsPromoBanner.last().isVisible() == true){
            console.log('Specials Aisle Banner available')
            await expect(this.specialsAisleCTA.last()).toBeVisible();
        }
        else{
            console.log('Specials Aisle Banner is not available')
        }
    }

   
    async sortRecommended(){
        await this.sortDropdown.click({timeout: 5000});
        await this.applySortRecommended.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.page).toHaveURL(new RegExp('sortBy=recommendedDescending'));
       }
    async sortBestSeller(){
        if (await this.multiListPopUp.isVisible()) {
            await this.loginPage.waitToCompleteAction(500);
            await this.multiListPopUp.click();
        }   
        await this.sortDropdown.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(5000);
        await this.applySortBestseller.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.page).toHaveURL(new RegExp('sortBy=salesDescending'));
       }
       
    async sortFrequentlyPurchased(){
        if (await this.multiListPopUp.isVisible()) {
            await this.loginPage.waitToCompleteAction(500);
            await this.multiListPopUp.click();
        }   
        await this.sortDropdown.click({timeout: 5000});
        await this.applyFrequentlyPurchased.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.page).toHaveURL(new RegExp('sortBy=frequencyDescending'));
    }
       
    async validateRoundalsCountWithProductTileCount() {
        const roundalCount = await this.roundal.count();
        const elementCount = await this.productTile.count();
        await this.page.waitForTimeout(5000);
        await expect(elementCount).toBeGreaterThanOrEqual(roundalCount);
      }
/**
  * @param {*} product 
 */
      async specialsSearchProduct(product) {
        expect(await this.searchTerm.fill(product));
        var expectedProductHeader = 'Results for "' + product + '"';
        console.log("expectedProductHeader -- ", expectedProductHeader);
        await this.searchSubmit.click(); 
        await this.loginPage.waitToCompleteAction(3000);       
        await expect(this.specialsSearchResultHeader).toBeVisible({timeout:5000});
        await this.specialsSearchResultHeader.isVisible({timeout:5000});
        
    }

/**
   * Specials Search Brand filter selection
*/
    async specialsSearchBrandSelect() {
        await this.specialsSearchBrandSelection.isVisible({ timeout: 5000 });
        await this.specialsSearchBrandSelection.first().click({timeout: 5000 });
        await this.applyButton.click({timeout: 5000 });  
    }
/**
    * Navigate to Specials categoriry L1 
 */ 
    async navigateToAislesFromSpecials(category) {
        console.log('Catgory selected is -',category)
        await this.page.locator('//div[@data-testid="navigation-list-scrollable"]//a/span/span[text()="'+category+'"]').click();
        await expect(this.searchNavigationLink).toBeVisible({timeout:5000}).then(async() => {
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.aislePageHeading).toBeVisible({timeout:5000});
    });
}
    async goToSpecials(){
        await expect(this.special).toBeVisible({timeout: 5000 });
        await this.special.click({timeout: 5000 });
}
/**
 * Apply Complex Promo filter - Multibuy applied
 */
    async multiBuyFilterSelection() {
        await this.specialsButton.isVisible({ timeout: 5000 });
        await this.loginPage.waitToCompleteAction(5000);
        await this.specialsButton.click();
        if(await this.multiBuyFilter.isVisible({ timeout: 5000 })){
            await this.multiBuyFilter.click();
            console.log('Multibuy filter is visible and selected');
        }else{
            console.log('Multibuy filter is not visible');
        }
        await this.applyButton.click();       
        await this.loginPage.waitToCompleteAction(5000);
    }

/**
 * Apply Complex Promo filter - HalfPrice applied
 */
    async halfPriceFilterSelection(){
        await this.specialsButton.isVisible({ timeout: 5000 });
        await this.loginPage.waitToCompleteAction(5000);
        await this.specialsButton.click();
        if(await this.halfPriceFilter.isVisible({ timeout: 5000 })){
            await this.halfPriceFilter.click();
            console.log('HalfPrice filter is visible and selected');
        }else{
            console.log('HalfPrice filter is not visible');
        }
        await this.applyButton.click(); 
        await this.loginPage.waitToCompleteAction(5000);
        
    }
/**
 * Apply Complex Promo filter - OnlineOnly applied
 */
    async onlineOnlyFilterSelection(){
        await this.specialsButton.isVisible({ timeout: 5000 });
        await this.loginPage.waitToCompleteAction(5000);
        await this.specialsButton.click();
        if(await this.onlineOnlyFilter.isVisible({ timeout: 5000 })){
            await this.onlineOnlyFilter.click();
            console.log('Online Only filter is visible and selected');
        }else{
            console.log('Online Only filter is not visible');
        }
        await this.applyButton.click(); 
        await this.loginPage.waitToCompleteAction(5000);
        
    }

}


