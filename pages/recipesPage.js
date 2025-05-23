import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");

/**
 * Page objects for Recipes page.
 */
exports.RecipesPage = class RecipesPage {
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.recipeBreadcrumbText = page.locator("//span[contains(text(),'Recipes and inspiration')]");
        this.homePagemore=page.locator("//button[@data-testid='navigation-component-button']/span")
        this.recipeAndInspiration=page.locator("//nav[@data-testid='navigation-container']/descendant::span[contains(text(),'Recipes & inspiration')]");
        this.recipeIAHeader=page.locator("//a[@data-testid='desktop-menu-item']/span[contains(text(),'Recipes & inspiration')]");
        this.recipe=page.locator("//div[@data-testid='recipe-card-col']");
        this.closeDialogueBox=page.locator("//h1[@data-testid='modal-title']");
        this.closeDrawer=page.locator("//button[@data-testid='close-button']");
        this.servingSizeHeader=page.locator("//div[@data-testid='recipe-summary']/../div/div/ul/li/span[@data-testid='recipe-details-value']/span");
        this.dropDownDefaultServe=page.locator("//select[@data-testid='quantity-picker-select']/../span");
        this.dietaryLabel=page.locator("//div[@class='message']")
        this.shopIngredientsSection=page.locator("//h3[contains(text(),'Shop ingredients')]");
        this.productList=page.locator("//div[@class='qty-wrapper']/ancestor::div[@class='product__cta']/parent::div/header/div[@class='product__info']/a/span[@class='product__title']");
        this.ProductListPrice=page.locator("//div[@class='qty-wrapper']/ancestor::div[@class='product__cta']/parent::div/header/div[@class='product__info']/section[@data-testid='product_price']/div/span[@class='price__value']");
        this.chooseAlternative=page.locator("//div[@class='qty-wrapper']/ancestor::div[@class='product__cta']/parent::div/header/div[@class='product__info']/button[contains(text(),'Choose alternative')]");
        this.swapForText=page.locator("//div[@class='sc-1e42c78d-1 erdjkY']");
        this.modalPrimeProduct=page.locator("//div[@class='product-content']/div/a");
        this.modalPricePrimary=page.locator("//div[@class='product-content']/div/div[@class='alt-pricing--price']");
        this.modalDietaryLabel=page.locator("//div[@data-testid='modal-content-container']/div/div/div[@class='message']")
        this.swapProductButton=page.locator("//button[@data-testid='swap-product-button']");
        this.swapProduct=page.locator("//button[@data-testid='swap-product-button']/parent::div/parent::div/header/div[@class='product__info']/a/span");
        this.modalContinueShopping=page.locator("//div[@data-testid='modal-actions-container']/button/span");
        this.confirmSwap=page.locator("//div[@data-testid='modal-actions-container']/div/button/span");
        this.qtySelector=page.locator("//input[@data-testid='quantity-input']");
        this.goToTrolley=page.locator("//button[@data-testid='go-to-trolley']");
        this.trolleyCTA=page.locator("//button[@data-testid='header-trolley-tablet-up']/span/span");
        this.trolleyButton=page.locator("//button[@data-testid='header-trolley-tablet-up']");
        this.removeTrolley=page.locator("//button[@aria-label='Remove all items']");
        this.estimatedTotalValue=page.locator("//div[contains(text(),'Estimated total')]/following-sibling::div");
        this.removeAllCTA=page.locator("//div[@data-testid='remove-all']/button[@aria-label='Remove all items']");
        this.closeDialogue=page.locator("//section[@data-testid='trolley-drawer']/header/button[@aria-label='Close dialog']/span");
        this.trolleyDrawerPrice=page.locator("//div[@data-testid='trolley-price']/div");
        this.checkoutTrolley=page.locator("//button[@id='checkout-button-trolley']");
        this.missingProductsCheckout=page.locator("//button[@id='skip-products-content']");
        this.mobileNumberField=page.locator("//input[@id='mobile-phone']");
        this.currentlyUnavailbleList=page.locator("//div[contains(@class,'product__unavailable')]/div");
        this.costPerServePrice=page.locator("//div[contains(@class,'highlight-price')]");
        this.reviewDrawerCloseButton=page.locator("//button[@data-testid='drawer-close-button']");
        this.viewAllRecipes = page.locator("//a[text()='View all recipes']");
        this.liquorRecipe = page.locator("//div[contains(text(),'Drinks')]/parent::a");
        this.dateOfBirth = page.locator("//input[@id='dob']");
        this.btnConfirmAge = page.locator("//button[@data-testid='confirm-age']");
        this.restrictedProduct = page.locator("(//*[@data-testid='product-list-AgeRestriction']/descendant::span[@data-testid='product_add_list_to_trolley__title']/child::div)[1]");
        this.categoryAlcohol = page.locator('//a[contains(@href,"drinks/alcohol")]');
        this.recipePageHeader = page.locator('//h2[text()="Recipes & inspiration"]');
        this.closeRecipeButton = page.locator('//button[@data-testid="drawer-close-button"]');
        this.clickOnMore = page.locator("//span[text()='More']");
        this.clickOnRecipe = page.locator('//span[text()="Recipes & inspiration"]');
    }

    async locationCloseDrawer(){
        if(await this.closeDialogueBox.isVisible()===true){
            await this.closeDrawer.click();
        }
        
    }
   
    async navigateRecipePage(Meal,recipeNumber){
        await this.homePagemore.click()
        await this.recipeAndInspiration.click();
        await expect(this.recipeIAHeader).toBeEnabled();
        await this.recipeIAHeader.click();
        await this.page.keyboard.press('Escape');   
        await this.loginPage.getByText(Meal).click();
        await this.clearTrolley();
        await this.recipe.nth(recipeNumber).click();
    }

    async verifyShopIngredientsSection(){
        await this.shopIngredientsSection.scrollIntoViewIfNeeded();
        await expect(this.shopIngredientsSection).toBeVisible();
    }

    async verifyServeSize(){      
        const dropDownServeText=await this.dropDownDefaultServe.textContent();
        const serveSizeText=await this.servingSizeHeader.first().textContent();        
        expect(dropDownServeText).toContain(serveSizeText);
;    }

    async verifyDietaryLabel(message){
        const dietLabel=await this.dietaryLabel.textContent();
        expect(dietLabel).toEqual(message);
    }

    async verifyChooseAlternative(chooseAltLabel){
      
        const firstProductName=await this.productList.first().textContent();
        const firstProductPriceValue=await this.ProductListPrice.first().textContent();
        await expect(this.productList.first()).toBeEnabled({ timeout: 60000 });
        await this.chooseAlternative.first().click();
        const primaryProductTextModal=await this.modalPrimeProduct.textContent();
        const primaryProductPriceModal=await this.modalPricePrimary.textContent();
        expect(primaryProductTextModal).toEqual(firstProductName);
        expect(primaryProductPriceModal).toEqual(firstProductPriceValue);
        await this.verifyModalDietaryLabel(chooseAltLabel);
        expect(this.swapForText).toBeVisible();
        

    }

    async verifyChangeProductQty(){
        const maxQty=await this.qtySelector.nth(1).getAttribute('max')
        await this.qtySelector.nth(1).fill(maxQty);
        const maxqtyvalue=await this.qtySelector.nth(1).getAttribute('value');

        const minQty=await this.qtySelector.nth(2).getAttribute('min')
        const minvalue=await this.qtySelector.nth(2).getAttribute('value');

        await this.qtySelector.nth(2).fill(minQty);       
        await this.qtySelector.nth(3).fill("5");
        const estimatedTotal=await this.estimatedTotalValue.textContent();

    }
 
    async verifyAddToTrolley(addTrolleyMessage){
        const unavailableItems=await this.loginPage.getByText('Currently unavailable').count();
        expect (this.loginPage.getByText("Add all to trolley")).toBeVisible();
        
        const addToTrolleyCTA=await this.loginPage.getByText("Add all to trolley");
        await addToTrolleyCTA.click();
        expect(await this.loginPage.getByText(addTrolleyMessage).isVisible({timeout:30000}));
        if(await unavailableItems>0){
            await this.goToTrolley.click();
        }
        const cartValue=await this.trolleyDrawerPrice.textContent()
        const estimatedTotal=await this.estimatedTotalValue.textContent();
        expect(estimatedTotal).toEqual(cartValue);

    }

    async clearTrolley(){
        const TrolleyValue= await this.trolleyCTA.textContent();
        if(await TrolleyValue != "$0.00"){
            expect (await this.trolleyButton) .toBeEnabled({ timeout: 60000 })
            await this.trolleyButton.click();
            expect(await this.removeTrolley).toBeEnabled({ timeout: 60000 });
            await this.removeTrolley.click();
            expect (await this.removeAllCTA).toBeVisible({ timeout: 60000 });
            await this.removeAllCTA.click();
            await this.closeDialogue.click();
        }
    }

    async verifyModalDietaryLabel(message){
        const dietLabelModal=await this.modalDietaryLabel.textContent();
        expect(dietLabelModal).toEqual(message);
    }

    async verifySwappingProducts(){
        expect(await this.swapProduct.nth(0)).toBeVisible({ timeout: 60000 });
        const swappedproductText= await this.swapProduct.nth(0).textContent();
        await this.swapProductButton.nth(0).click();
        const primaryProduct=await this.modalPrimeProduct.textContent();
        expect(primaryProduct).toEqual(swappedproductText);
        expect(this.confirmSwap).toBeVisible({ timeout: 60000 });
        await this.confirmSwap.click({ timeout: 100000 });
        
    }

    async costPerServeCheck(){

        await this.currentlyUnavailbleList.nth(0).scrollIntoViewIfNeeded();
        await this.currentlyUnavailbleList.nth(0).waitFor();
        const unavailableCount=await this.currentlyUnavailbleList.count();
        const originalCostPerServe=await this.costPerServePrice.textContent();
        if(unavailableCount>0)
        {
            const productCount=await this.productList.count();
            for(let i=0;i<=productCount-1;i++)
            {
                const minQty=await this.qtySelector.nth(i).getAttribute('min')
                 await this.qtySelector.nth(i).fill(minQty);
                
            }

        }
        const addToTrolleyCTA=await this.loginPage.getByText("Add all to trolley");
        
        await addToTrolleyCTA.click();
        expect(await this.reviewDrawerCloseButton).toBeEnabled;
        await this.reviewDrawerCloseButton.click()
        await this.costPerServePrice.waitFor(10000);
        expect(await this.costPerServePrice.textContent()).not.toEqual(originalCostPerServe);

    }

    async navigateAllRecipePage() {
        await this.homePagemore.click()
        await this.recipeAndInspiration.click();
        await this.recipeAndInspiration.click();
        await this.page.keyboard.press('Escape');
    }

    async openLiquorRecipe(recipeNumber) {
        await this.viewAllRecipes.scrollIntoViewIfNeeded();
        await this.viewAllRecipes.click();
        await this.liquorRecipe.click();
        await this.categoryAlcohol.click();
        await this.recipe.nth(recipeNumber).click();
    }

    async verifyAgeGatePopUp() {
        await this.loginPage.getByText("Add all to trolley").click();
        expect(await this.loginPage.getByText("You need to be of legal age to purchase restricted items. You’ll also need to show valid photo ID at pick up or delivery.").isVisible({ timeout: 30000 }));
    }

    async enterDOBInAgeGate(){
        await this.dateOfBirth.fill("13022020");
        await this.btnConfirmAge.click();
    }

    async verifyAgeGateRestrictionMsg(){
        expect(await this.loginPage.getByText("You need to be over 18 to continue.").isVisible({ timeout: 30000 }));
        await this.loginPage.getByText("Cancel").click();
        expect(await this.loginPage.getByText("added everything except these items to your trolley").isVisible({timeout: 3000}));
    }
    async verifyLiquorNotAddedForAgeGate(){
        const ageGateProduct = this.restrictedProduct.innerText();
        await this.goToTrolley.click();
        expect(!(await this.loginPage.getByText(ageGateProduct).isVisible()));
    }
    async navigateToRecipePage(){
        await this.loginPage.waitToCompleteAction(2000);
        await this.clickOnMore.click();
        await this.loginPage.waitToCompleteAction(500);
        await this.clickOnRecipe.last().click();

    }
    async verifyRecipesBreadcrumbText(crumbName){
        await this.loginPage.verifyInnerText(this.recipePageHeader,crumbName);
        await this.loginPage.waitToCompleteAction(5000);
        await this.closeRecipeButton.click();
     }

}
