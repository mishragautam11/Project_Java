import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");

/**
 * Page objects for Recipes page.
 */
exports.RecipeSearchPage = class RecipeSearchPage {
    constructor(page){
        
        this.page = page;
        this.loginPage = new LoginPage(page);

        this.globalSearchXpath=page.locator("//input[contains(@id,'search-text-input')]");
        this.tabs=page.locator("//a[contains(@id,'search-tabs-label')]");
        this.searchButton=page.locator("//div[contains(@class,'search-box-select__indicators')]/button[@data-testid='search-box-search-button']")
        this.searchTxt = page.locator('id=search-text-input');
        this.complianceXPath=page.locator("//div[@data-testid='cost-per-serve-compliance-message']");
        this.noOfRecipeCards=page.locator("//div[@data-testid='recipe-search-card-col']/child::div/child::a");
        this.costPerServeXpath=page.locator("//div[contains(@class,'ContentCardCostPerServe')]/div[@class='cps-amount']");
        this.perServeXpath=page.locator("//div[contains(@class,'ContentCardCostPerServe')]/div[@class='cps-label']");
        this.perServeTooltipXpath=page.locator("//button[@data-testid='recipe-tile-cost-per-serve-info']")
        this.resultCount=page.locator("//div[@data-testid='number-of-results-text']");
        this.pageNavigation=page.locator("//button[@id='pagination-button-next']");
        this.recipePageHref=page.locator("//div[contains(@data-testid,'content-card-container')]/a");
        this.costPerServeFilterXpath=page.locator("//button[@aria-label='filter by Cost per serve']");
        this.costPerServeFilterList=page.locator("//div[@aria-labelledby='cost-per-serve']/div[@data-testid='radio-button']/label/span/input[@type='radio']");
        this.applyFilterXpath=page.locator("//button[@aria-label='Apply settings']");
        this.clearAllFilterXPath=page.locator("//button[@aria-label='Clear all']");
        this.allFilterXpath=page.locator("//button[@aria-label='filter by All filters']");
        this.cookTimeFilterXpath=page.locator("//button[@aria-label='filter by Cook time']");
        this.cookTimeFilterList=page.locator("//div[@aria-labelledby='cook-time']/div[@data-testid='radio-button']/label/span/input[@type='radio']");
        this.cookTimeContentCard=page.locator("//ul[@data-testid='tile-recipe-info']/li[2]");
        this.shoutOutClosePopup=page.locator("//div[@data-testid='popper-content']/div/button[@aria-label='close popup']");
        this.shoutOutRecipe=page.locator("//button[@data-testid='explore-delicious-recipes-link']");
        this.allFilterCloseCTA=page.locator("//button[@data-testid='drawer-close-button']");
        this.zeroResultsHeaderXpath=page.locator("//h2[@data-testid='meal-type-categories-title']");
        this.zeroResultsBrowse=page.locator("//h2[@class='by-category']");
        this.closeDialogueBox=page.locator("//button[@aria-label='close dialog Confirm your time slot']");
        this.closeDrawer=page.locator("//button[@data-testid='close-button']");
        this.costPerServeResults=page.locator("//div[@data-testid='number-of-results-text']");
        this.sortBybtn=page.locator("//div[@data-testid='sort-select']/div");
        this.sortBycookTimeasc=page.locator("//ul[@role='listbox']/li[@data-testid='cooking-time_asc']");
        this.sortBycookTimedsc=page.locator("//ul[@role='listbox']/li[@data-testid='cooking-time_desc']");
        this.sortByCostperserveasc=page.locator("//ul[@role='listbox']/li[@data-testid='consumption-portion-price_asc']");
        this.sortByCostperservedsc=page.locator("//ul[@role='listbox']/li[@data-testid='consumption-portion-price_desc']");
        this.cookTimeField=page.locator("//ul[@data-testid='tile-recipe-info']/li[2]");
        this.dietaryCTA=page.locator("//button[@aria-label='filter by Dietary']");
        this.ingredientsCTA=page.locator("//button[@aria-label='filter by Ingredients']")
        this.dietaryCheckbox=page.locator("//input[@type='checkbox']");
        this.dietaryLabel=page.locator("//label[@data-testid='checkbox-item']/span");
        this.resultsNumber=page.locator("//div[@data-testid='number-of-results-text']");
        this.dairyIng=page.locator("//li[@id='tags_ingredients_dairy']");
        this.deliIng=page.locator("//li[@id='tags_ingredients_deli']");
        this.frozenIng=page.locator("//li[@id='tags_ingredients_frozen']");
        this.fruitIng=page.locator("//li[@id='tags_ingredients_fruit']");
        this.pantryIng=page.locator("//li[@id='tags_ingredients_pantry']");
        this.proteinIng=page.locator("//li[@id='tags_ingredients_protein']");
        this.vegIng=page.locator("//li[@id='tags_ingredients_vegetables']");
        this.dairyCheckbox=page.locator("//label[@data-testid='checkbox-item']/span[contains(text(),'Yoghurt')]/parent::label/div/span/input[@type='checkbox']");
        this.pantryCheckbox=page.locator("//label[@data-testid='checkbox-item']/span[contains(text(),'Rice')]/parent::label/div/span/input[@type='checkbox']")
        this.vegetableCheckbox=page.locator("//label[@data-testid='checkbox-item']/span[contains(text(),'Broccoli')]/parent::label/div/span/input[@type='checkbox']")
        this.productsTab=page.locator("//div[@data-testid='tab-navlist']/a[contains(text(),'Products')]");
        this.searchCloseButton=page.locator("//button[@aria-label='Close search results']");
        this.subsequentSearchButton=page.locator("//button[@data-testid='search-box-search-button']");
    }

    async locationCloseDrawer(){
        
        if(await this.closeDialogueBox.isVisible()===true){
            await this.closeDrawer.click();
        }
        
    }

    async recipeSearchText(searchTextValue,complianceMsg){
        await this.locationCloseDrawer();
        await this.searchTxt.clear();
        await this.searchTxt.fill(searchTextValue);
        await this.searchButton.isEnabled({timeout:90000});
        await this.searchButton.click();
        await this.shoutOutPopUpClose();
        const tabBooleanCount=await this.tabs.count();
        expect(tabBooleanCount).toEqual(2);
        const tabBoolean=await this.tabs.nth(1).getAttribute("aria-selected");
        expect(tabBoolean).toEqual("true")
        expect(await this.tabs.nth(1).innerText()).toEqual("Recipes");
        

    }
       
    async complianceText(complianceMsg){
        await this.locationCloseDrawer();
        await this.loginPage.getByText(complianceMsg).waitFor("state:visible")
        await this.loginPage.getByText(complianceMsg).scrollIntoViewIfNeeded();
    }
       
    async globalSearchText(){
        await this.locationCloseDrawer();
        await this.searchTxt.clear();

    }

    async verifyRecipeContentCard(toolTipComplianceMsg){
        await this.locationCloseDrawer();
        const recipesCountPerPage=await this.noOfRecipeCards.count();
        for(let i=0;i<=recipesCountPerPage-1;i++){
            var costPerServeValue=await this.verifyCostPerServe(i);
            expect(costPerServeValue).toBeGreaterThan(0.00);
            await this.verifyPerServe(i);
            await this.verifyPerServeComplianceMsg(i,toolTipComplianceMsg);
                
        }
    }

    async pagination(){

        await this.locationCloseDrawer();
        if(await this.pageNavigation.isEnabled()){
            await this.pageNavigation.scrollIntoViewIfNeeded();
            await this.pageNavigation.click();
        }

    }

    async verifyCostPerServe(counter){
        
        await this.locationCloseDrawer();
        const costperServe=await this.costPerServeXpath.nth(counter).innerText();
        var costPerServeSplit=costperServe.split("$");
        var costPerServeValue=parseFloat(costPerServeSplit[1]);
        return costPerServeValue;
       
    }
        
    async verifyPerServe(counter){

        await this.locationCloseDrawer();
        const perServeText=await this.perServeXpath.nth(counter).innerText();
        expect(await perServeText).toEqual("Per serve");

    }

    async verifyPerServeComplianceMsg(counter,toolTipComplianceMsg){

        await this.locationCloseDrawer();
        await this.perServeTooltipXpath.nth(counter).waitFor("state:visible");
        await this.perServeTooltipXpath.nth(counter).click();
        const toolTipMsg=await this.perServeTooltipXpath.nth(counter).getAttribute("aria-label");
        expect(toolTipMsg).toEqual(toolTipComplianceMsg);

    }

    async navigateToRecipePage(){
        
        await this.locationCloseDrawer();
        await this.page.waitForTimeout(9000);
        const recipeHref= await this.recipePageHref.nth(0).getAttribute("href");
        await this.noOfRecipeCards.nth(0).click();
        await this.page.waitForTimeout(6000);
        const navigationUrl=await this.page.url();
        expect(navigationUrl).toEqual(recipeHref);

    }
    
    async costPerServeFilter(){
       
        for(let j=0;j<=4;j++){
            await this.locationCloseDrawer(); 
            await this.costPerServeFilterXpath.click();
            await this.costPerServeFilterList.nth(j).click();
            const costPerserveFilterValue=await this.costPerServeFilterList.nth(j).getAttribute("value");
            await this.filterApply();
            await this.allFilterXpath.waitFor("state:visible");
            await this.allFilterXpath.click();
            await this.allFilterCloseCTA.click();
            await this.noOfRecipeCards.nth(1).waitFor("state:visible");
            const recipesCountPerPage=await this.noOfRecipeCards.count();
            expect(recipesCountPerPage).not.toEqual(0);
                for(let i=0;i<=recipesCountPerPage-1;i++){
                    var costPerServeValues=await this.verifyCostPerServe(i);
                    expect(costPerServeValues).toBeLessThanOrEqual(parseFloat(costPerserveFilterValue));

                }
            
            await this.allFilterOptions();
        }

        
    }

    async cookTimeFilter(counter){

        await this.locationCloseDrawer();
        await this.cookTimeFilterXpath.click();
        await this.cookTimeFilterList.nth(counter).click();
        const cookTimeValue=await this.cookTimeFilterList.nth(counter).getAttribute("value");
        await this.filterApply();
        await this.noOfRecipeCards.nth(1).waitFor("state:visible");
        const recipesCountPerPage=await this.noOfRecipeCards.count();
        expect(recipesCountPerPage).not.toEqual(0)
       

    }


    async allFilterOptions(){

       await this.locationCloseDrawer();
       await this.allFilterXpath.waitFor("state:visible");
       await this.allFilterXpath.click();
       await this.clearAllFilter();
       await this.allFilterClose();

    }

    async verifyZeroResults(zeroResultsHeaderText,browseByMealTypeText){

        await this.locationCloseDrawer();
        await this.costPerServeFilterXpath.click();
        await this.costPerServeFilterList.nth(4).click();
        await this.filterApply();
        const zeroResultsText=await this.zeroResultsHeaderXpath.innerText();
        expect(zeroResultsText).toEqual(zeroResultsHeaderText);
        const browseByMealType=await this.zeroResultsBrowse.innerText();
        expect(browseByMealType).toEqual(browseByMealTypeText);

    }

    async sortByFilterClosestMatch(){
        const sortByDefaultValue=await this.sortBybtn.innerText();
        expect(sortByDefaultValue).toEqual("Sort by: Closest match");
        
    }

    async sortByFilterCookTimeLowtoHigh(){
        const recipesCountPerPage=await this.noOfRecipeCards.count();
        await this.sortBybtn.click();
        await this.sortBycookTimeasc.click();
        const sortByDefaultValue=await this.sortBybtn.innerText();
        expect(sortByDefaultValue).toEqual("Sort by: Cook time (Low to high)");
        await this.allFilterXpath.waitFor("state:visible");
        await this.allFilterXpath.click();
        await this.allFilterCloseCTA.click();
        expect(await this.noOfRecipeCards.nth(3)).toBeVisible({timeout:5000});
        
        
            
    }
        
    
    async sortByFilterCookTimeHightoLow(){
        const recipesCountPerPage=await this.noOfRecipeCards.count();
        await this.sortBybtn.click();
        await this.sortBycookTimedsc.click();
        const sortByDefaultValue=await this.sortBybtn.innerText();
        expect(sortByDefaultValue).toEqual("Sort by: Cook time (High to low)");
        await this.allFilterXpath.waitFor("state:visible");
        await this.allFilterXpath.click();
        await this.allFilterCloseCTA.click();
        await this.noOfRecipeCards.nth(1).waitFor({state:"visible"});
        expect(await this.noOfRecipeCards.nth(1)).toBeVisible({timeout:5000});
        
            
    }

    async sortByFilterCostPerServeHighToLow(){
        const recipesCountPerPage=await this.noOfRecipeCards.count();
        await this.sortBybtn.click();
        await this.sortByCostperservedsc.click();
        const sortByDefaultValue=await this.sortBybtn.innerText();
        expect(sortByDefaultValue).toEqual("Sort by: Cost per serve (High to low)");
        await this.allFilterXpath.waitFor("state:visible");
        await this.allFilterXpath.click();
        await this.allFilterCloseCTA.click();
        const countSortRcp=await this.noOfRecipeCards.count();
        expect(recipesCountPerPage).toEqual(countSortRcp);  
            
    }

    async sortByFilterCostPerServeLowToHigh(){
        const recipesCountPerPage=await this.noOfRecipeCards.count();
        await this.sortBybtn.click();
        await this.sortByCostperserveasc.click();
        const sortByDefaultValue=await this.sortBybtn.innerText();
        expect(sortByDefaultValue).toEqual("Sort by: Cost per serve (Low to high)");
        await this.allFilterXpath.waitFor("state:visible");
        await this.allFilterXpath.click();
        await this.allFilterCloseCTA.click();
        await this.page.waitForTimeout(10000);
        expect(await this.noOfRecipeCards.nth(0)).toBeVisible({timeout:5000});
        const countSortRcp=await this.noOfRecipeCards.count();
        expect(recipesCountPerPage).toEqual(countSortRcp);  
            
    }

    async dietaryFilter(){
        await this.dietaryCTA.click();
        var counter=await this.dietaryLabel.count();
        expect(counter).toEqual(25);
        for(let i=0; i<=counter-1;i++){
            var dietaryLabelTxt=await this.dietaryLabel.nth(i).innerText();
            if(dietaryLabelTxt=="Egg free" | dietaryLabelTxt=="Over 4 serves veg or fruit"){
                await this.dietaryCheckbox.nth(i).click();
            }
        }
        await this.filterApply();
        await this.allFilterXpath.waitFor("state:visible");
        await this.allFilterXpath.click();
        await this.allFilterCloseCTA.click();
        await this.ingredientsCTA.click();
        await this.allFilterClose();
        await this.noOfRecipeCards.nth(2).waitFor({state:"visible"});
        expect(await this.noOfRecipeCards.nth(2)).toBeVisible({timeout:5000});
    }

    async shoutOutPopUpClose(){

        await this.locationCloseDrawer();
        await this.shoutOutClosePopup.click();
        

    }

    async ingredientFilter(){

        await this.ingredientsCTA.click();
        await this.dairyIng.click();
        await this.dairyCheckbox.click();
        await this.deliIng.click();
        await this.frozenIng.click();
        await this.fruitIng.click();
        await this.pantryIng.click();
        await this.pantryCheckbox.click();
        await this.proteinIng.click();
        await this.vegIng.click()
        await this.vegetableCheckbox.click();
        await this.filterApply();
        await this.noOfRecipeCards.nth(0).waitFor({state:"visible"});
        expect(await this.noOfRecipeCards.nth(0)).toBeVisible({timeout:5000});
       

    }

    async shoutOutExploreRecipes(searchTextValue){
        await this.searchTxt.clear();
        await this.searchTxt.fill(searchTextValue);
        await this.searchButton.isEnabled({timeout:90000});
        await this.searchButton.click();
        await this.locationCloseDrawer();
        await this.shoutOutRecipe.click();
    }

    async recipeBaseKeywordSearch(searchTerm){
      
        for(let i=0;i<=3;i++){
            if(i==0){
                await this.searchTxt.clear();
                await this.searchTxt.fill(searchTerm[i]);
                await this.searchButton.isEnabled({timeout:90000});
                await this.searchButton.click();
                await this.shoutOutPopUpClose();
                await this.Productstabverify();
            }
            else{
                await this.searchTxt.clear();
                await this.searchTxt.fill(searchTerm[i]);
                await this.searchCloseButton.click();
                await this.subsequentSearchButton.isEnabled({timeout:40000});
                await this.subsequentSearchButton.click();
                await this.Productstabverify();
            }
            
        
        }
        console.info("verfied multiple RecipeBase Keyword search")
    }

    async Productstabverify(){
        
        var booleanValue=await this.productsTab.getAttribute("aria-selected")
        expect(booleanValue).toEqual("true");

    }



    async filterApply(){

        await this.locationCloseDrawer();
        await this.applyFilterXpath.click();
    }

    async clearAllFilter(){

        await this.locationCloseDrawer();
        await this.clearAllFilterXPath.click();
    }

    async allFilterClose(){

        await this.locationCloseDrawer();
        await this.allFilterCloseCTA.click();
    }
}