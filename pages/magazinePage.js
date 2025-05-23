import { test, expect } from '../testFixtures/pageFixture';
const exp = require("constants");
const { LoginPage } = require("../pages/loginPage.js");

exports.MagazinePage = class MagazinePage {

  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.productTile = page.locator('//*[@data-testid="product-tile"]');
    this.magazineText = page.locator("//h2[text()='Coles magazine']/parent::div");
    this.magazineImage = page.locator('(//a[@class="sf-thumbs-tile-image"])[1]');
  }

  async validateMagazinePage(){
    await this.page.waitForTimeout(6000);
    expect(await this.magazineText).toBeVisible({timeout:9000});
    expect(await this.magazineImage).toBeVisible({timeout:9000});
  }
}