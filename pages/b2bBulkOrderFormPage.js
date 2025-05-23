import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.B2bBulkOrderFormPage = class B2bBulkOrderFormPage {
    
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);

        this.bulkOrderHeader = page.locator("//h2[@data-testid='cdc-form-banner-title']");
        this.howManyItemsBulk = page.locator("//select[@data-testid='b2b-bulkorder-over200-quantity']");
        this.productNameForBulk = page.locator("//textarea[@data-testid='area-b2b-bulkorder-over200-name-1']");
        this.quantityForBulk = page.locator("//input[@id='b2b-bulkorder-over200-quantity-1']");
        this.inputSearchSuburb = page.locator("//input[@id='suburb-postcode-autocomplete']");
        this.preferredDate = page.locator("//input[@name='date input']");
        this.bulkOrderSubmitButton = page.locator("//button[@data-testid='b2b-bulkorder-over200-submit-btn']");
        this.moreThanSuccessMsg = page.locator('//h2[contains(text(),"Bulk order submitted")]');
        this.btnAccount = page.locator('//button[@data-testid="header-user"]');
        this.logoutButton = page.locator("//span[normalize-space()='Log out']");
        this.bulkOrderFormButton = page.locator("//a[@data-testid='b2b-bulkorder-morethan200-button']");
        

    }
    
    /**
     * Method to send an invite to new shopper from manage shopper page.
     * @param {*} userEmail The new shopper email Id to send invite.
     */
    async validateMoreThanForm(searchTerm, location){
        await expect(this.howManyItemsBulk).toBeVisible();
        await this.howManyItemsBulk.click();
        await this.howManyItemsBulk.selectOption('1');
        await this.productNameForBulk.scrollIntoViewIfNeeded();
        await expect(this.productNameForBulk).toBeEditable();
        await this.productNameForBulk.fill(dataset.ExcemptProduct2Name);
        await expect(this.quantityForBulk).toBeEditable();
        await this.quantityForBulk.fill('500');
        await this.inputSearchSuburb.scrollIntoViewIfNeeded();
        await expect(this.inputSearchSuburb).toBeEditable();
        await this.inputSearchSuburb.fill(searchTerm);
        await this.loginPage.getByText(location).click();
        await this.dateForBulkOrder();
        await this.bulkOrderSubmitButton.scrollIntoViewIfNeeded();
        await expect(this.bulkOrderSubmitButton).toBeEnabled();
        await this.bulkOrderSubmitButton.click();
        await this.page.waitForTimeout(3000);
        await expect(this.moreThanSuccessMsg).toBeVisible();
        await expect(this.btnAccount).toBeVisible();
        await this.btnAccount.click();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
      
    }

    /**
     * Method to format date for future business orders(B2B).
     */
    async dateForBulkOrder(){
        var today = new Date();
        var yyyy = today.getFullYear();
        var mm = today.getMonth() + 2; 
        var dd = today.getDate(); 
        for(var i=1; i< 10 ;i++){
            if(dd == i){
                dd = ("0"+ dd).slice(-2);
            }
            
        }  
        for(var j=1; j< 10 ;j++){
            if(mm == j){
                mm = ("0"+ mm).slice(-2);
            }
            
        }
        if(mm == 12){
            mm = 1;
            yyyy = today.getFullYear() +1;

        }
        if(dd > 28){
            dd = 10;

        }
        const formattedToday = dd + '/' + mm + '/' + yyyy;
        console.log("formatted date", formattedToday);
        await expect(this.preferredDate).toBeEditable();
        await this.preferredDate.fill(formattedToday);
      
    }

    /**
     * Method to click on bulk order form in more than 200 form in the drawer(B2B).
     */
    async navigateToBulkOrderForm() {
        await expect(this.bulkOrderFormButton).toBeVisible();
        await this.bulkOrderFormButton.click();
                
    }

   }
