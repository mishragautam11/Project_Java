import { test, expect } from '../testFixtures/pageFixture';

let liquorCount;
let tobaccoCount;

exports.B2bRestrictCategoriesPage = class B2bRestrictCategoriesPage {
    
    constructor(page) {
        this.page = page;

        this.btnAccount = page.locator('//button[@data-testid="header-user"]');
        this.logoutButton = page.locator("//span[normalize-space()='Log out']");
        this.restrictCategoriesTab = page.locator("//a[@identifier='restrict_categories']");
        this.restrictCatTitle = page.locator("//h2[normalize-space()='Restrict categories']");
        this.restrictContent = page.locator('//p[contains(text(),"Set up restricted categories,")]');
        this.filterByCategory = page.locator("//div[normalize-space()='Filter by category']");
        this.liquorButton = page.locator("//button[@aria-label='Liquor filter']");
        this.liquorRemoveButton = page.locator("//button[@aria-label='Liquor, remove filter']");
        this.tobaccoRemoveButton = page.locator("//button[@aria-label='Tobacco, remove filter']");
        this.tobaccoButton = page.locator("//button[normalize-space()='Tobacco']");
        this.updateRestButton = page.locator("//span[normalize-space()='Update restrictions']");
        this.cancelButton = page.locator("//span[normalize-space()='Cancel']");
        this.liquorAccordion = page.locator("//div[@data-testid='accordion-title'][contains(text(),'Liquor')]");
        this.tobaccoAccordion = page.locator("//div[@data-testid='accordion-title'][contains(text(),'Tobacco')]");
        this.liquorOptions = page.locator("//div[@aria-labelledby='liquor-label']/descendant::label[@data-testid='checkbox-item']");
        this.tobaccoOptions = page.locator("//div[@aria-labelledby='tobacco-label']/descendant::label[@data-testid='checkbox-item']");
        this.allLiquorChkBox = page.locator("//div[@aria-labelledby='liquor-label']/div/div/label/div/span");
        this.allTobaccoChkBox = page.locator("//div[@aria-labelledby='tobacco-label']/div/div/label/div/span");
        this.liquorResQty = page.locator("//li[@id='liquor-accordionGroup']//section[@class='badge-label']");
        this.tobaccoResQty = page.locator("//li[@id='tobacco-accordionGroup']//section[@class='badge-label']");
        this.yesUpdateResCta = page.locator("//button[normalize-space()='Yes, update restrictions']");
        this.resCategoryNoti = page.locator("//div[@data-testid='notification']//div[normalize-space()='Restricted category list has been updated']/div");
        this.closeNotiButton = page.locator("//button[@aria-label='Close notification dialog']");
        this.bakeryLabel = page.locator("//button[@id='bakery-label']");
        this.allBakeryChkBox = page.locator("//div[@aria-labelledby='bakery-label']/div/div/label/div/span");
        this.bakeryResQty = page.locator("//li[@id='bakery-accordionGroup']//section[@class='badge-label']");
        this.frozenLabel = page.locator("//button[@id='frozen-label']");
        this.allFrozenChkBox = page.locator("//div[@aria-labelledby='frozen-label']/div/div/label/div/span");
        this.frozenResQty = page.locator("//li[@id='frozen-accordionGroup']//section[@class='badge-label']");
        this.restrictedAmt = page.locator("//form//p");


    }
    
    /**
     * Method to validate Filter by Liquor checkbox.
     */
    async validateFilterByLiquorCheck(){
        await expect(this.btnAccount).toBeVisible();
        await this.btnAccount.click();

        await expect(this.restrictCategoriesTab).toBeVisible();
        await this.restrictCategoriesTab.click();
        await expect(this.restrictCatTitle).toBeVisible();
        await expect(this.restrictContent).toBeVisible();
        await expect(this.filterByCategory).toBeVisible();
        await expect(this.liquorButton).toBeVisible();
        await this.liquorButton.click();

        await expect(this.tobaccoButton.first()).not.toBeVisible();

        await expect(this.liquorAccordion).toBeVisible();
        liquorCount = await this.liquorOptions.count();
        console.log("count", liquorCount);

        await expect(this.allLiquorChkBox.first()).toBeVisible();
        if(await this.allLiquorChkBox.first().isChecked() == true){
            await this.allLiquorChkBox.first().click();
        }
        await this.allLiquorChkBox.first().check();
        for(let i=0;i<liquorCount;i++){
            await expect(this.allLiquorChkBox.nth(i)).toBeChecked();
            console.log("checked successfully:",i);

        }
        let liqQty = await this.liquorResQty.textContent();
        var values = liqQty.replace(/[^0-9]/g, '');
        var amountValue = parseInt(values);
        console.log("received liquor value:", amountValue);
        var expectedLiquorValue = liquorCount - 1;
        console.log("expected liquor value:", expectedLiquorValue);
        let status = false;
        if(amountValue === expectedLiquorValue){
            status = true;
            await expect(status).toBeTruthy(); 
        }
        else{
            await expect(status).toBeTruthy(); 
        }
        
        await expect(this.updateRestButton).toBeVisible();
        await expect(this.cancelButton).toBeVisible();
        await this.page.waitForTimeout(3000);
        await this.updateRestButton.click({ force: true });
        await this.validateUpdateResPopup();

      
    }

    /**
     * Method to validate update restriction popup.
     */
    async validateUpdateResPopup(){
        await expect(this.yesUpdateResCta).toBeVisible();
        await this.yesUpdateResCta.click();
        await expect(this.resCategoryNoti).toBeVisible();
        await expect(this.closeNotiButton).toBeVisible();
        await this.closeNotiButton.click();
      
    }

    /**
     * Method to validate Filter by Liquor uncheck checkbox.
     */
    async validateFilterByLiquorUnCheck(){
        await expect(this.allLiquorChkBox.first()).toBeVisible();
        await this.allLiquorChkBox.first().click();
        for(let i=0;i<liquorCount;i++){
            await expect(this.allLiquorChkBox.nth(i)).not.toBeChecked();
            console.log("unchecked successfully:",i)

        }
        
        await expect(this.updateRestButton).toBeVisible();
        await this.updateRestButton.click();
        await this.validateUpdateResPopup();

      
    }

    /**
     * Method to validate Filter by Liquor checkbox partial update.
     */
    async validateFilterByLiquorPartialCheck(){
        await expect(this.allLiquorChkBox.first()).toBeVisible();
        if(await this.allLiquorChkBox.first().isChecked() == true){
            await this.allLiquorChkBox.first().click();
        }

        
        for(let i=1;i<liquorCount-1;i++){
            await this.allLiquorChkBox.nth(i).check();
            await expect(this.allLiquorChkBox.nth(i)).toBeChecked();
            console.log("checked successfully:",i);

        }
        
        let liqQty = await this.liquorResQty.textContent();
        var values = liqQty.replace(/[^0-9]/g, '');
        var amountValue = parseInt(values);
        console.log("received liquor value:", amountValue);
        var expectedLiquorValue = liquorCount - 2;
        console.log("expected liquor value:", expectedLiquorValue);
        let status = false;
        if(amountValue === expectedLiquorValue){
            status = true;
            await expect(status).toBeTruthy(); 
        }
        else{
            await expect(status).toBeTruthy(); 
        }


        await expect(this.updateRestButton).toBeVisible();
        await this.updateRestButton.click();
        await this.validateUpdateResPopup();

        await expect(this.allLiquorChkBox.first()).toBeVisible();
        await this.allLiquorChkBox.first().click();
        await this.allLiquorChkBox.first().click();
        await expect(this.updateRestButton).toBeVisible();
        await this.page.waitForTimeout(3000);
        await this.updateRestButton.click();
        await this.validateUpdateResPopup();
        

        await expect(this.liquorRemoveButton).toBeVisible();
        await this.liquorRemoveButton.click();

      
    }

    /**
     * Method to validate Filter by Tobacco checkbox.
     */
    async validateFilterByTobaccoCheck(){
        await expect(this.tobaccoButton.first()).toBeVisible();
        await this.tobaccoButton.first().click();

        await expect(this.liquorButton).not.toBeVisible();

        await expect(this.tobaccoAccordion).toBeVisible();
        tobaccoCount = await this.tobaccoOptions.count();
        console.log("count", tobaccoCount);

        await expect(this.allTobaccoChkBox.first()).toBeVisible();
        if(await this.allTobaccoChkBox.first().isChecked() == true){
            await this.allTobaccoChkBox.first().click();
        }
        await this.allTobaccoChkBox.first().check();
        for(let i=0;i<tobaccoCount;i++){
            await expect(this.allTobaccoChkBox.nth(i)).toBeChecked();
            console.log("checked successfully:",i)

        }
        let liqQty = await this.tobaccoResQty.textContent();
        var values = liqQty.replace(/[^0-9]/g, '');
        var amountValue = parseInt(values);
        console.log("received liquor value:", amountValue);
        var expectedTobaccoValue = tobaccoCount - 1;
        console.log("expected liquor value:", expectedTobaccoValue);
        let status = false;
        if(amountValue === expectedTobaccoValue){
            status = true;
            await expect(status).toBeTruthy(); 
        }
        else{
            await expect(status).toBeTruthy(); 
        }
        
        await expect(this.updateRestButton).toBeVisible();
        await expect(this.cancelButton).toBeVisible();
        await this.page.waitForTimeout(3000);
        await this.updateRestButton.click();
        await this.validateUpdateResPopup();

      
    }

    /**
     * Method to validate Filter by Tobacco checkbox uncheck.
     */
    async validateFilterByTobaccoUnCheck(){
        await expect(this.allTobaccoChkBox.first()).toBeVisible();
        await this.allTobaccoChkBox.first().click();
        for(let i=0;i<tobaccoCount;i++){
            await expect(this.allTobaccoChkBox.nth(i)).not.toBeChecked();
            console.log("unchecked successfully:",i)

        }
        
        await expect(this.updateRestButton).toBeVisible();
        await this.updateRestButton.click();
        await this.validateUpdateResPopup();
        await expect(this.tobaccoRemoveButton).toBeVisible();
        await this.tobaccoRemoveButton.click();
      
    }

    async validateRestrictOtherCatCheck(){
        await expect(this.bakeryLabel).toBeVisible();
        await this.bakeryLabel.click();


        await expect(this.allBakeryChkBox.first()).toBeVisible();
        if(await this.allBakeryChkBox.first().isChecked() == true){
            await this.allBakeryChkBox.first().click();
        }
        for(let i=1;i<3;i++){
            await this.allBakeryChkBox.nth(i).check();
            await expect(this.allBakeryChkBox.nth(i)).toBeChecked();
            console.log("checked successfully:",i);

        }

        await expect(this.frozenLabel).toBeVisible();
        await this.frozenLabel.click();


        await expect(this.allFrozenChkBox.first()).toBeVisible();
        if(await this.allFrozenChkBox.first().isChecked() == true){
            await this.allFrozenChkBox.first().click();
        }
        for(let i=1;i<3;i++){
            await this.allFrozenChkBox.nth(i).check();
            await expect(this.allFrozenChkBox.nth(i)).toBeChecked();
            console.log("checked successfully:",i);

        }

        let resAmt = await this.restrictedAmt.textContent();
        console.log("resamt", resAmt);
        var values = resAmt.replace(/[^0-9]/g, '');
        var amountValue = parseInt(values);
        console.log("amount value",amountValue);
        var expectedValue = 4;
        console.log("exvalue",expectedValue);
        let status = false;
        if(amountValue === expectedValue){
            status = true;
            await expect(status).toBeTruthy(); 
        }
        else{
            await expect(status).toBeTruthy(); 
        }
        
        await expect(this.updateRestButton).toBeVisible();
        await this.updateRestButton.click();
        await this.validateUpdateResPopup();
      
    }
    
    /**
     * Method to validate Filter by other categories checkbox.
     */
    async validateRestrictOtherCatUnCheck(){
        await expect(this.allBakeryChkBox.first()).toBeVisible();
        await this.allBakeryChkBox.first().click();
        await this.allBakeryChkBox.first().click();
        let bakeryCount = this.allBakeryChkBox.count();
        for(let i=0;i<bakeryCount;i++){
            await expect(this.allBakeryChkBox.nth(i)).not.toBeChecked();
            console.log("unchecked successfully:",i)

        }
        
        await expect(this.allFrozenChkBox.first()).toBeVisible();
        await this.allFrozenChkBox.first().click();
        await this.allFrozenChkBox.first().click();
        let frozenCount = this.allBakeryChkBox.count();
        for(let i=0;i<frozenCount;i++){
            await expect(this.allFrozenChkBox.nth(i)).not.toBeChecked();
            console.log("unchecked successfully:",i)

        }

        await expect(this.updateRestButton).toBeVisible();
        await this.updateRestButton.click();
        await this.validateUpdateResPopup();

        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
             
    }

   }
