import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");

/**
 * Page objects for IA Header.
 */
exports.IAHeaderPage = class IAHeaderPage {
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.headerFlyoutHeading = page.locator('//h2[@id="drawer-heading"]');
        this.recipeInspirationFlyout = ('(//a[@data-testid="desktop-menu-item"]/span)[1]');
        this.helpFlyout = ('//a[@data-testid="desktop-menu-item"]/span[1]');
        this.waysToShopFlyout=('//a[@data-testid="desktop-menu-item"]/span[1]');
        this.closeDialogue = page.locator('//button[@data-testid="drawer-close-button"]');
        this.recipeFlyoutTab = page.locator('//*[@data-testid="navigation-container"]/child::ul');
        this.helpFlyoutTab=page.locator('//*[@data-testid="navigation-container"]/child::ul');
        this.waysToShopFlyoutTab=page.locator('//*[@data-testid="navigation-container"]/child::ul');
        this.colesLogo = page.locator('//div[@data-testid="header-logo"]');
        this.allRecipes = page.locator('//a[@aria-label="View all recipes"]');
        this.btnRecipe = page.locator('//span[text()="Recipes"]');
        this.recipesFlyout = ('//a[@data-testid="subcategory-link-second-level"]/child::span');
        this.allRecipesFlyout = page.locator('//a[@data-testid="subcategory-link-second-level"]/parent::li/parent::ul');
        this.recipeTips ='//a[@data-testid="subcategory-link-second-level"]';
        this.recipeTipsIdeas=page.locator('//a[@aria-label="View recipe tips"]');
        this.btnRecipeTips = page.locator('//span[text()="Recipe tips & ideas"]');
        this.linkDietary=page.locator('//a[@aria-label="View dietary"]');
        this.linkAllergen = page.locator('//a[@aria-label="View dietary & allergen information"]');
        this.waysToShopHeader=page.locator("//h2[@data-testid='drawer-heading']");
        this.waysToShopFlyoutElements= page.locator('//a[@data-testid="desktop-menu-item"]/span/span');
        this.colesplusMembership=page.locator('//div[@data-testid="fitToGrid-container"]/div/div//ol/li[3]/span');
    }

    async validateTheFlyoutIsDisplayed(flyoutName){
        const flyoutText = await this.headerFlyoutHeading.textContent();
        expect(flyoutText).toEqual(flyoutName);
        expect(await this.closeDialogue.isVisible({timeout: 3000}));
    }

    async validateFlyoutElements(flyout){
        let flyoutElements;
        if(flyout.includes('Recipes & inspiration')){
            flyoutElements = await this.page.$$(this.recipeInspirationFlyout);
        }
        else if(flyout.includes('All Recipes')){
            flyoutElements = await this.page.$$(this.recipesFlyout);
        }
        else if(flyout.includes('Recipe tips')){
            flyoutElements = await this.page.$$(this.recipeTips);
        }
        else if(flyout.includes('Help Centre')){
            flyoutElements=await this.page.$$(this.helpFlyout);
        }
        else if(flyout.includes('Delivery')){
            flyoutElements =await this.page.$$(this.waysToShopFlyout);
        }
        for (const flyoutElement of flyoutElements){
            const elementName = await flyoutElement.textContent();
            expect(await flyout.includes(elementName));
        }
        console.info('opened the flyout and verified name');
    }

    async validateFlyoutLink(flyoutElements, flyoutElementLink){
        for (let i=0; i<flyoutElements.length; i++){
            if(flyoutElements[i]=='Recipes'){
                await this.openAllRecipeFlyout();
                await this.allRecipes.click();
            }
            else if(flyoutElements.includes('Recipe tips')){
                await this.openRecipeTipsFlyout();
                await this.allRecipesFlyout.getByText(flyoutElements[i]).click();
            }
            else if(flyoutElements.includes('All Recipes')){
                await this.openAllRecipeFlyout();
                if(flyoutElements[i]=='Dietary'){
                    await this.linkDietary.click();
                }
                else if(flyoutElements[i]=='Dietary & allergen information'){
                    await this.linkAllergen.click();
                }
                else{
                await this.allRecipesFlyout.getByText(flyoutElements[i]).click();
                }
            }
            else if(flyoutElements[i]=='Recipe tips & ideas'){
                await this.openRecipeTipsFlyout();
                await this.recipeTipsIdeas.click();
            }
            else if(flyoutElements.includes('Recipes & inspiration')){
                await this.recipeFlyoutTab.getByText(flyoutElements[i]).click();
            }
            else if(flyoutElements.includes('Help Centre')){
                await this.helpFlyoutTab.getByText(flyoutElements[i]).click();
            }
            else if(flyoutElements.includes('Delivery')){
                await this.waysToShopFlyoutTab.getByText(flyoutElements[i]).click();
            }
            const currentUrl = await this.page.url();
            expect(currentUrl.includes(flyoutElementLink[i]));
            await this.page.keyboard.press('Escape');
            await this.colesLogo.click();
            if(flyoutElements.includes('Help Centre')){
                await this.loginPage.openHeaderLink('Help');
            }
            
            else if(flyoutElements.includes('Delivery')){
                await this.loginPage.openHeaderLink('Ways to shop');
            }
            else{
                await this.loginPage.openHeaderLink('Recipes & inspiration');
                }

        }
        console.info('verified the flyout element links');
    }

    async openAllRecipeFlyout(){
        await this.btnRecipe.click();
    }

    async openRecipeTipsFlyout(){
        await this.allRecipesFlyout.click();
    }

    async openRecipeTipsFlyout(){
        await this.btnRecipeTips.click();
    }

    async validateColesPlusL1Category(colesPlusText){
        await this.page.waitForTimeout(9000);
        var waysToShopHeaderText= await this.waysToShopHeader.textContent();
        expect(waysToShopHeaderText).toEqual("Ways to shop");
        const listOfElementsCount= await this.waysToShopFlyoutElements.count();
        expect(listOfElementsCount).toEqual(6);
        console.info("verified the count of ways to shop fyout categories");
        const colesPlusValue=await this.waysToShopFlyoutElements.nth(5).textContent();
        expect(colesPlusValue).toEqual(colesPlusText);
            

    }
        
    async validateColesPlusLink(colesPlusLink){
        await this.waysToShopFlyoutElements.nth(5).click();
        await this.page.waitForTimeout(9000);
        const currentUrl = await this.page.url();
        expect(currentUrl.includes(colesPlusLink));
        await this.page.keyboard.press('Escape');
        var colesplusAccordian=await this.colesplusMembership.textContent();
        expect(colesplusAccordian).toEqual("Membership");

    }
}