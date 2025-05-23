import { test, expect } from '../testFixtures/pageFixture';


exports.ColesAccountBarCodePage = class ColesAccountBarCodePage {
    constructor(page) {
        this.page = page;

    /**
     * All page locators are below:
     */
        this.colesAccountBarcodeLink = page.locator("//div[@data-testid='account-dropdown']/ul/li[9]/a/span");
        this.colesBarCodeTitle= page.locator("h2.coles-targeting-StylesAccountStylesAccountSectionTitle");
        this.barcodeTile = page.locator("[data-testid = 'barcode-tile']");
    }

    /** 
     * Validation of "Coles Account BarCode" page:
     */

    async colesAccountBarCodePageLinkCLick(){
        if (await this.colesAccountBarcodeLink.isVisible()){
            await this.colesAccountBarcodeLink.click();
            await this.page.waitForTimeout(5000)
            
        }
    }

    async verifyColesBarCodeTitle(){
        expect(await this.colesBarCodeTitle).toBeVisible();
        expect(await this.colesBarCodeTitle.textContent()).toEqual("Coles barcode");
    }

    async verifyBarcodeVisibility()
    {
        expect(this.barcodeTile).toBeVisible();
    }
        
}
