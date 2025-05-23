import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");
/**
 * Page objects for AEM Components Page.
 */
exports.AemComponentPage = class AemComponentPage {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.categoryExplorerContainer = page.locator("//div[contains(@data-testid,'category-explorer')]");
    this.categoryExplorer = "//a[@data-testid='category-explorer-category']";
    this.catExplorerTile = "(//a[@data-testid='category-explorer-category']/child::span)";
    this.colesLogo = page.locator('//div[@data-testid="header-logo"]');
    this.categoryExplorerComp = page.locator('//div[@data-testid="category-explorer"]//child::ul');
    this.contentCardDesc = ('//div[@data-testid="section-header"]//child::h2');
    this.contentCardComp = ('//a[contains(@data-testid,"content-card-container")]');
    this.contentCardImage = ('//a[contains(@data-testid,"content-card-container")]//child::img');
    this.promoBanner = page.locator("//div[@data-testid='promo-banner']");
    this.promoBannerBackgroundImg = page.locator("//div[@data-testid='promo-banner-image' ]");
    this.promoBannerTitle = page.locator("//h2[@data-testid='promo-banner-title']");
    this.promoBannerImg = page.locator("//div[@data-testid='promo-banner-image']/child::img");
    this.promoCTAButtonLink = page.locator("//a[@data-testid='cta-button']");
    this.promoBannerPara = page.locator("//div[@data-testid='promo-banner-disclaimer']/child::span");
    this.promoCTAButtonlabel = page.locator("//a[@data-testid='cta-button']/child::span");

  }

  async verifyCategoryExplorerPresence() {
    expect(await this.categoryExplorerContainer.last()).toBeVisible();

  }

  async verifyCategoryExplorerCategoriesCount() {
    expect(await this.categoryExplorerContainer.last()).toBeVisible();
    const categoryElements = await this.page.$$(this.categoryExplorer);
    const categoryCount = categoryElements.length;
    console.info("categories count is ", categoryCount);

  }

  async validateExplorerCategories(category) {
    const categoryElements = await this.page.$$(this.catExplorerTile);
    const actualCategories = [];
    for (const element of categoryElements) {
      actualCategories.push(await element.textContent());
    }
    console.info("actual categories are", actualCategories);
    expect(await category.includes(actualCategories));
  }


  async validateCategoryExplorerLinks(categoryExplorerCategory, categoryExplorerLink) {
    for (let i = 0; i < categoryExplorerCategory.length; i++) {
      await this.categoryExplorerComp.getByText(categoryExplorerCategory[i]).click();
      const currentUrl = await this.page.url();
      expect(await currentUrl.includes(categoryExplorerLink[i]));
      await this.page.keyboard.press('Escape');
      await this.colesLogo.click();
    }
  }

    async validateContentCardVisibilityAndHeading(){
        const contentCardComponents =await this.page.$$(this.contentCardComp);
        for (let i=0; i<contentCardComponents.length; i++){
            for (const contentCardComponent of contentCardComponents){
                const elementText = await contentCardComponent.textContent();
                expect(elementText).not.toBeNull();
            }
        }
    }

    async validateContentCardContainerDesc(){
        const contentCardDescritions =await this.page.$$(this.contentCardDesc);
        for (let i=0; i<contentCardDescritions.length; i++){
            for (const contentCardDescrition of contentCardDescritions){
                const elementText = await contentCardDescrition.textContent();
                expect(elementText).not.toBeNull();
            }
        }
    }

    async verifyTileImageVisibility(){
        const tileCount =await this.page.$$(this.contentCardComp);
        const imgCount = await this.page.$$(this.contentCardImage);
        expect(imgCount.length).toEqual(tileCount.length);
        for (let i=0; i<imgCount.length; i++){
            for (const image of imgCount){
                const imageSrc = imgCount.getAttribute('src')
                expect(imageSrc).not.toBeNull();
            }
        }
    }


  async verifyPromoBannerPresence() {

    await this.promoBanner.scrollIntoViewIfNeeded({ timeout: 60000 });
    expect(await this.promoBanner.last()).toBeVisible();


  }


  async verifyPromoTitle() {
    await this.promoBanner.scrollIntoViewIfNeeded({ timeout: 60000 });
    const Promotitle = await this.promoBannerTitle.innerText();
    await expect(Promotitle).not.toBeNull();

  }

  async verifyPromoBackgroundImage() {
    await this.promoBanner.scrollIntoViewIfNeeded({ timeout: 60000 });
    const promoBannerBackgrndImg = await this.page.$eval('.banner__background_image', promoBannerImg => promoBannerImg.getAttribute('src'));
    await expect(promoBannerBackgrndImg).not.toBeNull();
  }

  async verifyPromoDisclaimer() {
    await this.promoBanner.scrollIntoViewIfNeeded({ timeout: 60000 });
    const Promodisclaimer = await this.promoBannerPara.innerText();
    await expect(Promodisclaimer).not.toBeNull();

  }

  async verifyPromoCTA() {
    await this.promoBanner.scrollIntoViewIfNeeded({ timeout: 60000 });
    const PromoctaText = await this.promoCTAButtonlabel.innerText();
    await expect(PromoctaText).not.toBeNull();

  }

  async clickOnPromoCTA() {
    await (this.promoCTAButtonLink.first()).isVisible();
    await this.promoCTAButtonLink.first().click({ timeout: 60000 });
    await expect(this.page).toHaveURL(new RegExp('/ways-to-shop/membership/coles-plus'));

  }

}











