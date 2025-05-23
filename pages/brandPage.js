import { test, expect } from '../testFixtures/pageFixture';
const exp = require("constants");
const { LoginPage } = require("../pages/loginPage.js");
const { assert } = require("console");

exports.BrandPage = class BrandPage {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.brandLink = page.locator('//a[@data-testid="brand-link"]');
    this.brandPageHeader = page.locator('//div[@data-testid="brands-page"]//child::h1');
    this.productTiles = '//div[@data-testid="product-hat"]/parent::section';
    this.tobaccoBanner= page.locator('//div[@data-testid="tobacco-quitline-banner"]');
    this.daysOfLifeMsg = page.locator('//span[@data-testid="product_tile_daysOfLife"]');
  }

  async openBrandPageAndValidate() {
      const brandLinkText = await this.brandLink.textContent();
      await this.brandLink.click();
      const brandPageHeaderText = await this.brandPageHeader.textContent();
      expect(brandLinkText).toEqual(brandPageHeaderText);
      const productElements = await this.page.$$(this.productTiles);
      for (let i = 1; i < productElements.length; i++) {
        const brandName = await productElements[i].innerText();
        expect(brandName.includes(brandLinkText));
      }
      console.log('All products have the same brand name.');
    }

    async validateTobaccoBannerIsPresentOnBrandPage(){
      await this.brandLink.click();
      await expect(this.tobaccoBanner).toBeVisible({timeout:3000});
    }

    async validateDaysOfLifeMsgOnBrandPage(){
      await this.brandLink.click();
      await expect(this.daysOfLifeMsg.nth(0)).toBeVisible({timeout:6000});
    }
}

