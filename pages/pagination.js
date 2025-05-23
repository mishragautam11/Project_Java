import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");
const { assert } = require("console");

exports.Pagination = class Pagination {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.paginationComponent = page.locator("//nav[@data-testid='pagination']");
        this.paginationNum = page.locator("//nav[@data-testid='pagination']//*[@id='pagination-button-page-2']");
        this.paginationSelected = page.locator('//*[@id="pagination-button-page-2" and @aria-current="true"]');
        this.nextButton = page.locator('//button[@id="pagination-button-next"]');
        this.previousButton = page.locator('//button[@aria-label="Go to previous page"]');
        this.listOfPagination = page.locator("//nav[@data-testid='pagination']//ul//li");
        this.paginationToEnd = page.locator("//nav[@data-testid='pagination']//a//button[@tabindex='0']");
    }

/**
 * To naviagte to bottom of the page to view pagination section
 */
    async verifyPaginationExistsAndClicked(){
       if(await this.paginationComponent.isVisible() == true){
            await this.paginationComponent.scrollIntoViewIfNeeded();
            console.log('Pagination section is visible');
            await this.paginationNum.click();
            await expect(this.paginationSelected).toBeVisible();
        }
        else {
            console.log('Pagination section is not visible');
        }         
          
        }

    /**
     * To naviagte to bottom of the page to view pagination section
     */
    async verifyPaginationExists() {
        await this.paginationComponent.isVisible();
        await this.paginationComponent.scrollIntoViewIfNeeded();
        console.log('Pagination section is visible');

    }
    /**
     * Click on page2 from pagination
     */
    async clickOnPagination() {
        await this.paginationNum.click();
        await expect(this.paginationSelected).toBeVisible();
    }
    /**
     * Handle Bought Before Page Pagination
     */

    async verifyPaginationForward() {
        const paginationCount = await this.listOfPagination.count();
        console.log(paginationCount)
        if (paginationCount == 2) {
            console.log("There is only 1 page available for bb items");
        }
        console.log(`Found ${paginationCount} pagination elements.`);
        await expect(this.nextButton).toBeEnabled();
        await expect(this.previousButton).toBeDisabled();
        for (let i = 2; i <= paginationCount - 1; i++) {
            const pageLinks = await this.listOfPagination.nth(i);
            await this.loginPage.waitToCompleteAction(8000);
            await pageLinks.click({ timeout: 7000 });
        }
    }
    async VerifyPaginationBackward() {
        const paginationCount = await this.listOfPagination.count();
        console.log(`Found ${paginationCount} pagination elements.`);
        for (let i = paginationCount - 2; i >= 2; i--) {
            const pageLinks = await this.listOfPagination.nth(i);
            await this.loginPage.waitToCompleteAction(8000);
            await pageLinks.click({ timeout: 7000 });
            console.log("Pagination is working fine");
        }
    }
}


