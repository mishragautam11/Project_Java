import exp from 'constants';
import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");
const { Pagination } = require("../pages/pagination.js");

/**
 * Page objects for Search Result page.
 */
exports.SearchResultPage = class SearchResultPage {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.paginationPage = new Pagination(page);
        this.searchResultHeader = page.locator(
            '//div[contains(@class,"coles-targeting-ProductHeadingHeadingContainer")]//h1');
        this.searchedFirstProduct = page.locator('//h2[@class = "LinesEllipsis  product__title"]');
        this.promoBanner = page.locator('div[data-testid="promo-banner-citrus"]');
        this.bannerCTAButton = page.locator('//a[@data-testid="cta-button"]');
        this.promoAEMBanner = page.locator('div[data-testid="promo-banner-aem"]');        
        this.promotedProduct = page.locator("//*[@data-testid='product-tile']//li[text()='Promoted']");
        this.singleTileProductCount = page.locator("section[data-testid='ad-tile-citrus']");
        this.singleTileAEMProductCount = page.locator("//section[@data-testid='ad-tile-aem']/*[not(ancestor::section[@data-testid='association-CONTENT_ASSOCIATION'])]/parent::section");
        this.allSpecialsFilter = page.locator('button[data-testid="Special-filter-pill"]');
        this.brandFilter = page.locator('button[data-testid="Brand-filter-pill"]');
        this.brandOptSelection = page.locator("//*[@data-testid='brand']//span[contains(text(),'COLES')]/..//input[@type='checkbox']");
        this.brandOptSelectionA = page.locator("//*[@data-testid='brand']//span[contains(text(),'Coles')]/..//input[@type='checkbox']");
        this.applyButton = page.locator("//*[@id='drawer-footer-drawer']/div/div/button[2]/span");
        this.clearAllButton = page.locator("//*[@id='drawer-footer-drawer']/div/div/button[1]/span");
        this.allFilter = page.locator('//button[@data-testid="All-filter-pill"]');
        this.sortDropDown = page.locator("//div[@data-testid='sort-select']");
        this.applySortLtoH = page.locator("//li[@data-testid='priceAscending']");
        this.applySortRelevance = page.locator("//li[@data-testid='relevance']");        
        this.applySortHtoL = page.locator("//li[@data-testid='priceDescending']");
        this.applySortLowestUnitPrice = page.locator("//li[@data-testid='unitPriceAscending']");
        this.searchResultFirstProduct = page.locator('(//h2[@class="LinesEllipsis  product__title"])[1]');
        this.searchNavigationLink = page.locator("//a[@data-testid='back-link']");
        this.promotedProductCCS = page.locator("//h3[text()='You might also like these']/following-sibling::div//*[@data-testid='product-tile']//li[text()='Promoted']");
        this.clickOnProductToNavigateToPDP = page.locator("//h2[@class='LinesEllipsis  product__title']").nth(0);
        this.productAssocViaPS = page.locator("//*[@data-testid='association-PRODUCT_ASSOCIATION']");
        this.productAssocHat = page.locator("//*[@data-testid='association-PRODUCT_ASSOCIATION']/div[1]/div");
        this.promotedAnchorOnPA = page.locator("//*[@data-testid='association-PRODUCT_ASSOCIATION']//*[@data-testid='left']//li[text()='Promoted']");
        this.promotedHeroOnPA = page.locator ("//*[@data-testid='association-PRODUCT_ASSOCIATION']//*[@data-testid='right']//li[text()='Promoted']");
        this.linkProduct = page.locator('(//*[@class="product__header"]/parent::div)[1]');
        this.contentAssoc = page.locator("//*[@data-testid='association-CONTENT_ASSOCIATION']");
        this.contentAssocHat = page.locator("//*[@data-testid='association-CONTENT_ASSOCIATION']/div[1]/div");
        this.promotedAnchorOnCA = page.locator("//*[@data-testid='association-CONTENT_ASSOCIATION']//*[@data-testid='left']//li[text()='Promoted']");
        this.singleTileOnCA = page.locator("//*[@data-testid='association-CONTENT_ASSOCIATION']//*[@data-testid='ad-tile-aem']");        
        this.shopSimilarBtn = page.locator('(//button[@data-testid="shop-alts-btn"])[1]');
        this.popupValidate = page.locator('//h1[@data-testid="modal-title"]');
        this.shopSimilarPopupAddBtn = page.locator("(//button[@data-testid='add-to-cart-button'])[1]");
        this.addedItemOnPopup = page.locator('(//span[@class="product__title"])[1]');
        this.continueShopingBtn= page.locator('//button[@data-testid="continue-shopping-button"]');
        this.trollyIcon= page.locator('//button[@data-testid="header-trolley-tablet-up"]');
        this.addedItemtoTrolly = page.locator('//a[@data-testid="product_in_trolley__title"]/child::span');
        this.shopSimilarErrorMessage = page.locator("//div[contains(@class,' shop-alternatives')]/div");
        this.allProductPrice = '//section[@data-testid="product_price"]/parent::div[@aria-hidden="false"]/descendant::span[@data-testid="product-pricing"]';
        this.allSpecialAppliedBtn = page.locator('//button[@data-testid="Special-filter-pill"]/child::span');
        this.appliedBrandBtn = page.locator('//button[@data-testid="ColesBrands-filter-pill"]/child::span');
        this.productTiles = '//div[@data-testid="product-hat"]/parent::section';
        this.productUnitPrice = '//section[@data-testid="product_price"]/parent::div[@aria-hidden="false"]/descendant::span/parent::div/following-sibling::div';
        this.brandPageBanner = page.locator("//*[@id='coles-targeting-brand-page']/div[@data-testid='cta-banner']");
        this.breadcrumb = page.locator("//div[@data-testid='brand-page']/div/ol[@data-testid='breadcrumbs']");
        this.bannerHeading = page.locator("//div[@data-testid='cta-banner']//div[@data-testid='banner-title']");
        this.bannerDescription = page.locator("//div[@data-testid='cta-banner']//div[@data-testid='description']");
        this.productCountOnBrandPage = page.locator("//div[@data-testid='brand-page']//*[@data-testid='product-tile']");   
        this.brandPageDesc = page.locator("//*[@data-testid='brand-page-desc']");
        this.brandPageDescWithTC = page.locator("//*[@data-testid='brand-page-desc']/child::a[@target='_blank']");
        this.brandPageVideo = page.locator("//*[@data-testid='brandpage-video-banner']");
        this.headingOnYoutube = page.locator("//*[@data-testid='brandpage-video-banner']/child::div/h2");
        this.descOnYoutube = page.locator("//*[@data-testid='brandpage-video-banner']/child::div[1]/div[1]");        
        this.youtubeTranscript = page.locator("//li[@data-testid='video-transcript']/h3");
        this.transcriptDesc = page.locator("//button[@id='video-transcript-label']//div[@data-testid='accordion-title']");
        this.citrusSingleTileCTA = page.locator("//div[@class='product__cta_section']/a/span");
        this.roundelOnBanner = page.locator("//div[@data-testid='promo-banner-aem']//span[@data-testid='fly-buys-10x-points']");
        this.roundelOnAEMST = page.locator("//section[@data-testid='ad-tile-aem']/*[not(ancestor::section[@data-testid='association-CONTENT_ASSOCIATION'])]/parent::section/child::div[1]//span[@data-testid='fly-buys-10x-points']");
        this.roundelOnAEMCA = page.locator("//*[@data-testid='association-CONTENT_ASSOCIATION']//*[@data-testid='ad-tile-aem']/child::div[1]//span[@data-testid='fly-buys-10x-points']");
        this.shoppableBanner = page.locator("//div[@data-testid='shoppable-banner']");
        this.bannerLogo = page.locator("//img[@data-testid='logo-image']");
        this.bannerPromotedLabel = page.locator("//div[@data-testid='shoppable-banner']//div[text()='Promoted']");
        this.carouselButton = page.locator("//button[@data-testid='button-next-slide']");
        this.autoCorrectedSearchHeading = page.locator("//h1[@data-testid='page-header'][contains(text(),'Did you mean')]");
        this.productLocator = '//li[contains(@data-testid,"promo-product-tile")]';
        this.iconLocator = '//span[contains(@data-testid, "specials")]';
        this.specialAndBBSelector = page.locator('//div[@data-testid="bb-tag"]/parent::div/preceding-sibling::div/child::span[@data-testid="simple-fixed-price-specials"]/following-sibling::a');
        this.bbOnlySelector = page.locator('//li[contains(@data-testid,"promo-product-tile")][.//div[@data-testid="bb-tag"] and not (.//span[contains(@data-testid, "specials")])]/descendant::a[@aria-hidden="true"]');
        this.specialsOnlySelector= '//li[contains(@data-testid,"promo-product-tile")] [.//span[contains(@data-testid, "specials")] and not (.//div[@data-testid="bb-tag"])]/descendant::a[@aria-hidden="true"]';
        this.noIconSelector =page.locator('//li[contains(@data-testid,"promo-product-tile")] [not(.//span[contains(@data-testid, "specials")]) and not (.//div[@data-testid="bb-tag"])]/descendant::a[@aria-hidden="true"]');
        this.allShopSimilarProduct ='//li[contains(@data-testid,"promo-product-tile")]//child::a[@aria-hidden="true"]';
        this.autoCorrectedSearchHeading = page.locator("//h1[@data-testid='page-header'][contains(text(),'Did you mean')]");
        this.dietaryFilter = page.locator("button[data-testid='Dietary-filter-pill']");
        this.dietaryOptSelection = page.locator("//*[@data-testid='dietary']//input[@type='checkbox']").nth(0);
        this.allergenFilter = page.locator("button[data-testid='Allergen-filter-pill']");
        this.allergenOptSelection = page.locator("//*[@data-testid='allergen']//input[@type='checkbox']").nth(0);           
        this.searchBar = page.locator("//input[@id='search-text-input']");
        this.skinnySearchBarBan = page.locator("//div[@data-testid='promo-banner' and @data-size='skinny']");
        this.searchBarTitle = page.locator("//h2[@data-testid='promo-banner-title']").nth(0);
        this.searchBarRoundel = page.locator("//div[@class='banner__secondary_hero']/span/span[1]");    
        this.searchBarDisclaimer = page.locator("//div[@data-testid='promo-banner-disclaimer']/span/p").nth(0);
        this.regularSearchBarBan = page.locator("//div[@data-testid='promo-banner' and @data-size='regular']").nth(0);
        this.searchBarBannerRedCTA = page.locator("//div[@data-testid='search-box-menu']//div[@data-theme='red']//a[@data-testid='cta-button']");
        this.searchBarBannerDarkCTA = page.locator("//div[@data-testid='search-box-menu']//div[@data-theme='dark']//a[@data-testid='cta-button']");
        this.searchBarBannerLightCTA = page.locator("//div[@data-testid='search-box-menu']//div[@data-theme='light']//a[@data-testid='cta-button']");
        this.promotedSku = page.locator("//*[@data-testid='product-tile']//ul/following-sibling::a");
    }

    async validateSearchResultHeading(expectedHeaderName){
        await this.loginPage.verifyInnerText(this.searchResultHeader,expectedHeaderName);
    }

    async clickToOpenProductDetailsPage() {
        console.info('Opening the first searched product');
        await expect(this.searchedFirstProduct.nth(0)).toBeVisible({timeout:60000});
        await this.searchedFirstProduct.nth(0).click({force:true});
    }

    async validateSearchResult(product){
        const text = await this.searchResultFirstProduct.textContent();
                if(text == product){
                    console.log('products displayed as per search key')
                    }
                else
                {
                this.assert.fail();
            }
    }
/**  Method to add alternate items to trolley when the product is unavailable and alternate options are available
 * */
    async addShopSimilarItemToCart() {
            await this.shopSimilarBtn.click();
            expect(await this.popupValidate.innerText()).toEqual('Shop similar');
            await this.shopSimilarPopupAddBtn.click({timeout:6000});
            const initialvalue= await this.addedItemOnPopup.innerText();
            await this.continueShopingBtn.click({timeout:6000});
            await this.trollyIcon.click({timeout:6000});
            const addedvalue = await this.addedItemtoTrolly.innerText();
            expect (initialvalue).toEqual(addedvalue);
        }

        async clickToOpenShopSimilarModal(){
            if (await this.shopSimilarBtn.isVisible()) {
                await this.shopSimilarBtn.click();
               expect(await this.popupValidate.innerText()).toEqual('Shop similar')}
        }

        async validateShopSimilarRankingForUnauthorised(){
            const productElements = await this.page.$$(this.productLocator);
        
            const productsWithIcons = [];
            const productsWithoutIcons = [];
        
            for (const productElement of productElements) {
                const productId = await productElement.getAttribute('id');
                const iconPresent = await productElement.$(this.iconLocator) !== null;
        
                if (iconPresent) {
                    productsWithIcons.push(productId);
                } else {
                    productsWithoutIcons.push(productId);
                }
            }
        
            // Validate the order: products with icons should be listed before products without icons
            const totalProductCount = productElements.length;
            const countedProducts = productsWithIcons.length + productsWithoutIcons.length;
        
            if (totalProductCount !== countedProducts) {
                throw new Error('The total count of products with and without icons does not match the total product count.');
            }
        
            // Check if all products with icons come before any product without icons
            const allProductsInOrder = [...productsWithIcons, ...productsWithoutIcons];
            const allProductIds = [];
        
            for (const productElement of productElements) {
                allProductIds.push(await productElement.getAttribute('id'));
            }
        
            if (JSON.stringify(allProductIds) !== JSON.stringify(allProductsInOrder)) {
                throw new Error(`Products with icons are not ordered before products without icons. Order: ${allProductIds}`);
            }
        
            console.log('All products are correctly ordered with icons first, followed by those without icons.');
        
        
        }

       
/**
 * To verify Citrus Promo Banner existance
 */
    async verifyPromoBannerWithCTA(){
        if(await this.promoBanner.last().isVisible() == true){
            console.log('Citrus Banner available on this page')
            await expect(this.bannerCTAButton.last()).toBeVisible();
        }
        else{
            console.log('No Citrus Banner available on this page')
        }
    } 
/**
 * Click on Citrus Banner CTA to go to Citrus Brand page
 */
    async clickOnPromoBannerCTA(){
        if(await this.promoBanner.last().isVisible() == true){
            await expect(this.bannerCTAButton.last()).toBeVisible();
            console.log('Click on banner CTA to go to Brand page URL')
            await this.bannerCTAButton.click({timeout:6000});
            console.log('Verify Brand page URL');
            await expect(this.page).toHaveURL(new RegExp('/brand/'))
        }
    }
/**
 * Search baner banner URL with Theme coming from Adobe Target
 * @param {*} Banner  - Banner with different Themes
 */
    async searchBarBannerURLWithTheme(Banner){
        if(Banner == 'SkinnyWithRedTheme'){
            await this.page.goto("https://cusp-svt.coles.com.au/?at_preview_token=1VryGdJnbvIT3FZFrZSyyLHrKVrAr6egdq8sCr3Khs8&at_preview_index=1_2&at_preview_listed_activities_only=true");
        }
        else if(Banner == 'SkinnyWithDarkTheme'){
            await this.page.goto("https://cusp-svt.coles.com.au/?at_preview_token=1VryGdJnbvIT3FZFrZSyyLHrKVrAr6egdq8sCr3Khs8&at_preview_index=1_4&at_preview_listed_activities_only=true");
        }
        else if(Banner == 'RegularWithRedTheme'){
            await this.page.goto("https://cusp-svt.coles.com.au/?at_preview_token=1VryGdJnbvIT3FZFrZSyyLHrKVrAr6egdq8sCr3Khs8&at_preview_index=1_3&at_preview_listed_activities_only=true");
        }
        else if(Banner == 'SkinnyWithLightTheme'){
            await this.page.goto("https://cusp-svt.coles.com.au/?at_preview_token=1VryGdJnbvIT3FZFrZSyyLHrKVrAr6egdq8sCr3Khs8&at_preview_index=1_6&at_preview_listed_activities_only=true");
        }
        else{
            console.log('URL is not a valid');
        }
    }

/**
 * To verify Search bar banner
 */
    async skinnySearchBarBanner(){
        await this.searchBar.isVisible();
        await this.searchBar.click({timeout:5000});
        await expect(this.skinnySearchBarBan).toBeVisible({timeout:5000});
        console.log('Skinny Search bar banner is visible');
        if(await this.searchBarTitle.isVisible({timeout:5000})){
            const title = await this.searchBarTitle.textContent();
            console.log('Search bar banner title is-', title);
        }
        if(await this.searchBarRoundel.isVisible({timeout:5000})){
            const roundel = await this.searchBarRoundel.textContent();
            console.log('Search bar banner roundel is-', roundel);
        }
        if(await this.searchBarDisclaimer.isVisible({timeout:5000})){
            const disclaimer = await this.searchBarDisclaimer.textContent();
            console.log('Search bar banner disclaimer is-', disclaimer);
        }     
    }
/**
 * @param {*} bannerCTA - Search bar Banner with different Themes with CTA
 */
    async searchBarBannerWithCTA(bannerCTA){
        console.log('Verify the CTA colour on Skinny banner');
        if(bannerCTA == 'Red'){  
            await this.skinnySearchBarBan.isVisible();         
            expect(await this.searchBarBannerRedCTA).toBeVisible();
            console.log('Skinnay Banner has Red CTA');
        }
        else if(bannerCTA == 'Dark'){
            await this.skinnySearchBarBan.isVisible();         
            expect(await this.searchBarBannerDarkCTA).toBeVisible();
            console.log('Skinnay Banner has dark/black CTA');
        }
        else if(bannerCTA == 'Light'){
            await this.skinnySearchBarBan.isVisible();         
            expect(await this.searchBarBannerLightCTA).toBeVisible();
            console.log('Skinnay Banner has light/white CTA');
        }
        else{
            console.log('No CTA is available in skinny banner');
        }
    }
/**
 * Regular Search bar banner
 */
    async regularSearchBarBanner(){
        console.log('Naviagte to CUSP with regular banner segment');
        await this.searchBar.isVisible();
        await this.searchBar.click({timeout:5000});
        await expect(this.regularSearchBarBan).toBeVisible({timeout:5000});
        console.log('Regular Search bar banner is visible');
        if(await this.searchBarTitle.isVisible({timeout:5000})){
            const Title = await this.searchBarTitle.textContent();
            console.log('Search bar banner title is -', Title);
        }
        if(await this.searchBarRoundel.isVisible({timeout:5000})){
            const Roundel = await this.searchBarRoundel.textContent();
            console.log('Search bar banner roundel is -', Roundel);
        }
        if(await this.searchBarDisclaimer.isVisible({timeout:5000})){
            const Disclaimer = await this.searchBarDisclaimer.textContent();
            console.log('Search bar banner disclaimer is -', Disclaimer);
        }     
    }
/**
 * Verify Breadcrumb in Citrus Brand page
 */
    async breadcrumbOnBrandPage(){
        await expect(this.breadcrumb).toBeVisible(); 
        console.log('Breadcrumb available on this Brand page')  
        var breadcrumbName = await this.page.locator('//ol[@data-testid="breadcrumbs"]/li[2]').textContent();
        console.log('Breadcrumb name is -',breadcrumbName);

    }
/**
 * Verify banner in Citrus Brand page along with Heading & Description
 */
    async bannerOnBrandPage(){
        await expect(this.brandPageBanner).toBeVisible(); 
        console.log('Banner available on this Brand page') 

        if(await this.bannerHeading.isVisible() == true){
            var bannerText = await this.bannerHeading.textContent();
            console.log('Banner Heading is -',bannerText)
        }
        if(await this.bannerDescription.isVisible() == true){
            var description = await this.bannerDescription.textContent();
            console.log('Banner Description is -',description)
        } 
    }

/**
 * Verify Products count in Brand page
 */
    async countOfProductsOnBrandPage(){
        await expect(this.productCountOnBrandPage.last()).toBeVisible();
        console.log('Products are available under Brand page')
        var productCount = await this.productCountOnBrandPage.count();
        await expect(productCount).toBeLessThanOrEqual(50);
        console.log('Total products under Brand page is',productCount)
    }
/**
 * Verify Brand Page ContentText
 */
    async brandPageContentText(){
        await expect(this.brandPageDesc).toBeVisible(); 
        console.log('Brand page Content Text is available') 
        if(await this.brandPageDescWithTC.isVisible() == true){
            console.log('Brand Page has T&C in the Content Text')
        }
        else{
            console.log('Brand Page doesnot have T&C in the Content Text')
        }
    }
/**
 * Verify Youtube section in Brand Page
 */
    async brandPageYoutubeVideo(){
        if(await this.brandPageVideo.isVisible() == true){
            await expect(this.brandPageVideo).toBeVisible(); 
            console.log('Brand page has Youtube video');
            if(await this.headingOnYoutube.isVisible() == true){
                var youtubeHeading = await this.headingOnYoutube.textContent();
                console.log('Youtube Heading on Brand page is -',youtubeHeading)
                var youtubeDescription = await this.descOnYoutube.textContent();
                console.log('Youtube Description on Brand page is -',youtubeDescription)
                if(await this.youtubeTranscript.isVisible() == true){
                    await this.youtubeTranscript.click({timeout:6000});
                    var youtubeTranscriptDesc = await this.transcriptDesc.textContent();
                    console.log('Youtube Transcript Description on Brand page is -',youtubeTranscriptDesc)

                }
                
            }
        }
    }
   


/**
 * To verify AEM Promo Banner existance
 */
    async verifyAEMPromoBannerWithCTA(){
        if(await this.promoAEMBanner.last().isVisible() == true){
            console.log('AEM Banner available on this page')
            await expect(this.bannerCTAButton.last()).toBeVisible();
        }
        else{
            console.log('No AEM Banner available on this page')
        }
    }

/**
 * To verify AEM Promo Banner with 'Flybuys10xPoints' roundel
 */
    async verifyAEMPromoBannerWithRoundel(){
        if(await this.promoAEMBanner.last().isVisible() == true){
            await this.roundelOnBanner.isVisible();
            console.log('AEM Banner available with Flybuys10xPoints roundel')
        }
        else{
            console.log('No AEM Banner available with roundel')
        }
    }
/**
 * To verify promoted products
 */
    async verifyPromotedProductAndCount() {
        if(await this.promotedProduct.last().isVisible() == true){
            console.log('Promoted products are available on this page')
            let count = await (this.promotedProduct).count();
            await expect(count).toBeLessThanOrEqual(10);
            console.log('Total promoted product count is',count)
        }
        else{
            console.log('Promoted products are not available on this page')
        }

    }

/**
 * To verify unique promoted sku on pagination
 */
    async verifyUniquePromotedSkuOnPagination() {
        if(await this.promotedProduct.last().isVisible() == true){
            const promotedList=[];
            const isRepeating=false;    
            let j=0;
            while(j<6){
                console.log("Page "+(j+1)+":");
                for(let i=0; i<10; i++){
                    if(await this.promotedSku.nth(i).isVisible() == true){
                        if(!promotedList.includes(await this.promotedSku.nth(i).textContent())){
                            console.log(await this.promotedSku.nth(i).textContent());
                            promotedList[promotedList.length]=await this.promotedSku.nth(i).textContent();
                        }
                        else {
                            isRepeating=true;
                            break;
                        }
                    }
                    else{    
                        if(i==0){
                            console.log('Promoted products are not available on this page'); 
                        }
                        break;
                    }
                }
                await expect(isRepeating).toBeFalsy();
                if(await this.paginationPage.paginationComponent.isVisible() == true){
                    await this.paginationPage.paginationComponent.scrollIntoViewIfNeeded();
                    await this.loginPage.waitToCompleteAction(5000);
                    if(await this.paginationPage.paginationToEnd.getByText(j+2).nth(0).isVisible() == true){
                        await this.paginationPage.paginationToEnd.getByText(j+2).nth(0).click();
                        await this.loginPage.waitToCompleteAction(5000);
                        j++;
                    }
                    else{
                        break;
                    }
                }
                else{
                    console.log("No pagination available");
                    break;
                }
                if(isRepeating==true){
                    console.log('Promoted products are not unique');
                    break;
                }  
            }           
        }    
    }
/**
 * To verify CCS promoted products in L2
 */
    async maxCCSPromotedProductCount() {
        await expect(this.promotedProductCCS.first()).toBeVisible();
        let count = await (this.promotedProductCCS).count();
        await expect(count).toBeLessThanOrEqual(5);
        console.log('Total CCS promoted product count is -',count)

  }

/**
   * To verify Promoted Anchor SKUs(left) on PA
*/
    async promotedAnchorSKUOnPA() {
        if(await this.promotedAnchorOnPA.first().isVisible() == false){
            console.log('No avialbility of promoted anchor SKUs on PA')
        }
        else{
            let count = await (this.promotedAnchorOnPA).count();
            console.log('Total promoted anchor SKUs count on PA is -',count)
        }
}

/**
 * To verify Promoted Hero SKUs(left) on PA
 */
    async promotedHeroSKUOnPA() {
       if(await this.promotedHeroOnPA.first().isVisible() == false){
                console.log('No avialbility of promoted Hero SKUs on PA')
        }
        else{
            let count = await (this.promotedHeroOnPA).count();
            console.log('Total promoted Hero SKUs count on PA is -',count)
        }
}

/**
  * To verify PAs in page
 */
    async productAssociationViaPS(){
        if(await this.productAssocViaPS.first().isVisible() == true)
        {   let count = await (this.productAssocViaPS).count();
            console.log('Total Product Assaciations in this page are -',count);
            await expect(this.productAssocHat.first()).toHaveText('Goes well together');
            console.log('Product Associations has - Goes well together - hat')
        }
        else{
            console.log('Page doesnot have Product Associations')
        }
}

/**
 * To verify CAs in page and right side Tile is ST sourced from AEM
 */
    async contentAssociation(){
        if(await this.contentAssoc.first().isVisible() == true)
        {   let count = await (this.contentAssoc).count();
            console.log('Total Content Associations in this page are -',count);
            await expect(this.contentAssocHat.first()).toHaveText('Goes well together');
            let singleTilesCA = await (this.singleTileOnCA).count();
            await this.loginPage.waitToCompleteAction(5000);
            console.log('Total AEM STs count on CA is -',singleTilesCA)
        }
        else{
            console.log('Page doesnot have Content Assaciations')
        }

    }
/**
 * To verify AEM Content Association with 'Flybuys10xPoints' roundel
 */
    async roundelOnAEMContentAss(){
        if(await this.contentAssoc.first().isVisible() == true){
            await (this.roundelOnAEMCA.first()).isVisible();
            console.log('AEM CA available with Flybuys10xPoints roundel')
        }
        else{
            console.log('No AEM CA available with roundel')
        }

    }

/**
 * To verify Count of Promoted Anchor SKUs on CA
 */
    async promotedAnchorSKUOnCA() {
        if(await this.promotedAnchorOnCA.first().isVisible() == false){
            console.log('No avialbility of promoted anchor SKUs on CA')
        }
        else{
            let count = await (this.promotedAnchorOnCA).count();
            console.log('Total promoted anchor SKUs count on CA is -',count)
        }
    }

/**
 * To verify Citrus Single Tile count in page 
 */
    async verifyMaxSinglTileCount() {
        await (this.singleTileProductCount.last()).isVisible();
        let count = await (this.singleTileProductCount).count();  
        expect(count).toBeLessThanOrEqual(5);  
        console.log('Total Single Tiles count is',count);
   }
 /**
  * To verify STs count when brand filter applied
  */  
    async singlTileCountOnBrandFilter(singleTiles) {
        if(singleTiles === "Citrus"){
            const countST = await (this.singleTileProductCount).count();  
            await expect(countST).toEqual(0);  
            await this.loginPage.waitToCompleteAction(5000);
            console.log('Citrus Single Tiles count is -',countST);
            console.log('No Citrus Single Tiles are displayed when filter applied');
                        
        }
        else{
            const countAEMST = await (this.singleTileAEMProductCount).count();
            await expect(countAEMST).toEqual(0);  
            await this.loginPage.waitToCompleteAction(5000);
            console.log('AEM Single Tiles count is -',countAEMST);
            console.log('No AEM Single Tiles are displayed when filter applied');
        }  
    }          

/**
 * Clicking on Citrus ST CTA 
 */
    async clickOnCitrusSinglTileCTA() {
        await (this.singleTileProductCount.first()).isVisible();
        await this.citrusSingleTileCTA.first().click({ timeout: 5000 });    
             
    }

/**
 * To verify AEM Single Tile count in page
 */
    async verifyMaxAEMSinglTileCount() {
        await (this.singleTileAEMProductCount.last()).isVisible();
        let count = await (this.singleTileAEMProductCount).count();
        expect(count).toBeLessThanOrEqual(5);  
        console.log('Total Single Tiles count is',count);
     }

/**
 * To verify AEM single Tile with 'Flybuys10xPoints' roundel
 */
async roundelOnAEMSinglTile() {
    if(await (this.singleTileAEMProductCount.first().isVisible()) == true){
        await expect(this.singleTileAEMProductCount.first()).toBeVisible();
        await (this.roundelOnAEMST.first()).isVisible();
        console.log('AEM Single Tile as Flybuys10xPoints roundel')
        }
    else{
        console.log('AEM Single Tile doesnot have Flybuys10xPoints roundel')
    }
 }

/**
 * Apply Specials Filter
 */
    async clickAllSpecialsFilters() {
        await this.allSpecialsFilter.isVisible({ timeout: 5000 });
        await this.allSpecialsFilter.click({timeout: 5000 });   
  }
/**
   * Apply Brand Filter
   */
    async clickBrandFilter() {
        await this.brandFilter.isVisible({ timeout: 5000 });
        await this.brandFilter.click({timeout: 8000 });  
        await this.loginPage.waitToCompleteAction(5000);      
    }
/**
  * Brand Option selection
 */    
    async brandOptionSelection() {        
        if(this.brandOptSelectionA.isVisible({timeout: 5000 })){
            if (await this.brandOptSelectionA.isChecked() === false) {
                await this.brandOptSelectionA.setChecked(true);
            }
        }   
        else if(this.brandOptSelection.isVisible({timeout: 5000 })){
            if (await this.brandOptSelection.isChecked() === false) {
                await this.brandOptSelection.setChecked(true);
            }
        }
            await this.applyButton.click();
            await this.loginPage.waitToCompleteAction(5000);
    }                
 /**
  * To clear all filters
  */   
   async clickOnClearAllButton() {
        await this.allFilter.isVisible({timeout: 5000 });
        await this.allFilter.click({timeout: 6000 });
        await this.clearAllButton.click({timeout: 5000 });
        await this.applyButton.click({timeout: 5000 });
   }
/**
 * Apply Sort L-H
 */  
   async sortLtoH(){
        await this.sortDropDown.click({timeout: 5000});
        await this.applySortLtoH.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.page).toHaveURL(new RegExp('sortBy=priceAscending'));
   }
/**
 * Apply sort ClosestMatch
 */
    async sortRelevance(){
        await this.sortDropDown.click({timeout: 5000});
        await this.applySortRelevance.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.page).toHaveURL(new RegExp('sortBy=relevance$'));
   }
/**
 * Apply sort H-L
 */
   async sortHtoL(){
        await this.sortDropDown.click({timeout: 5000});
        await this.applySortHtoL.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.page).toHaveURL(new RegExp('sortBy=priceDescending$'));
   }

   async validatesortHtoL(){
    const productPrices = await this.page.$$(this.allProductPrice);
      for (let i = 1; i < productPrices.length; i++) {
        const currentProductPrice = parseFloat((await productPrices[i].innerText()).slice(1));
        const previousProductPrice = parseFloat((await productPrices[i-1].innerText()).slice(1));
        await expect(previousProductPrice).toBeGreaterThanOrEqual(currentProductPrice);
      }
   }
   
/**
 * Apply sort Lowest Unit Price
 */
   async sortLowestUnitPrice(){
        await this.sortDropDown.click({timeout: 5000});
        await this.applySortLowestUnitPrice.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.page).toHaveURL(new RegExp('sortBy=unitPriceAscending$'));
   }

   async openProductFromSearchResult(){
    await this.linkProduct.click();
   }

/**
 * To Click on Category Levels L1,L2,L3 via Product Search
 * @param {*} category - Product Search Aisle Levels
 */
    async navigateToAislesFromSearch(category) {
        console.log('Category selected is-', category)
        await this.page.locator('//div[@data-testid="navigation-list-scrollable"]//a/span/span[text()="'+category+'"]').click();
        await expect(this.searchNavigationLink).toBeVisible({timeout:5000}).then(async() => {
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.page).toHaveURL(/categoryName/,{timeout:5000});
        });
    }
/**
 * Click on any Instock product to naviagte to PDP page
 */
    async clickOnInStockProductToNavigateToPDP(){
        await this.clickOnProductToNavigateToPDP.isVisible({timeout: 5000});
        await this.clickOnProductToNavigateToPDP.click({timeout: 5000});
        await this.loginPage.waitToCompleteAction(5000);
        await expect(this.page).toHaveURL(/product/,{timeout:5000});
   }

    async validateShopSimilarErrorMessage() {
        await this.shopSimilarBtn.click();
        const errormessage = await this.shopSimilarErrorMessage.innerText();
        expect(errormessage).toEqual('No similar items');
    }

    async validateSpecialFilterApplied(){
        await this.allSpecialAppliedBtn.isVisible({timeout: 5000});
    }
    
    async validateBrandFilterApplied(){
        await this.appliedBrandBtn.isVisible({timeout: 5000});
    }

    async validateBrandFilterResult(brandNameText) {
        const productElements = await this.page.$$(this.productTiles);
        for (let i = 1; i < productElements.length; i++) {
        const brandName = await productElements[i].innerText();
        expect(brandName.includes(brandNameText));
        }
        console.log('All products have the same brand name.');
    }

    async validatesortLtoH(){
        const productPrices = await this.page.$$(this.allProductPrice);
        for (let i = 1; i < productPrices.length; i++) {
            const currentProductPrice = parseFloat((await productPrices[i].innerText()).slice(1));
            const previousProductPrice = parseFloat((await productPrices[i-1].innerText()).slice(1));
            await expect(previousProductPrice).toBeLessThanOrEqual(currentProductPrice);
        }
    }

    async validateLowestUnitPriceSort(){
        const productUnitPrice = await this.page.$$(this.productUnitPrice);
        for (let i = 1; i < productUnitPrice.length; i++) {
            const currentProductUnitPrice = parseFloat((await productUnitPrice[i].innerText()).slice(1));
            const previousProductUnitPrice = parseFloat((await productUnitPrice[i-1].innerText()).slice(1));

            await expect(previousProductUnitPrice).toBeLessThanOrEqual(currentProductUnitPrice);
        }
    }



    async validateShopSimilarRankingForAuthorised(){
        const expectedOrder = [];
        // Get the product elements
        const specialAndBBProducts = await this.specialAndBBSelector.getAttribute('aria-label');
        expectedOrder.push(specialAndBBProducts);
        const bbOnlyProducts = await this.bbOnlySelector.getAttribute('aria-label');
        expectedOrder.push(bbOnlyProducts);
        const specialsOnlyProducts = await this.page.$$(this.specialsOnlySelector);
        // const specialsOnlyProductsArray = [];
        for(const specialsOnlyProduct of specialsOnlyProducts){
            const specialOnlyProductName = await specialsOnlyProduct.getAttribute('aria-label');
            expectedOrder.push(specialOnlyProductName);
        }
        const noIconProducts = await this.noIconSelector.getAttribute('aria-label');
        expectedOrder.push(noIconProducts);

        // Combine all products in the expected order
        // const expectedOrder = [
        //   ...specialAndBBProducts,
        //   ...bbOnlyProducts,
        //   ...specialsOnlyProductsArray,
        //   ...noIconProducts,
        // ];

        // Get all product elements from the page
        const allProducts = await this.page.$$(this.allShopSimilarProduct);
        const productArray = [];
        for(const allProduct of allProducts){
            const product = await allProduct.getAttribute('aria-label');
            productArray.push(product);
        }

        // Validate the order
        let isValidOrder = true;
        for (let i = 0; i < expectedOrder.length; i++) {
            if (productArray[i] !== expectedOrder[i]) {
                isValidOrder = false;
                console.error(`Product at index ${i} is not in the expected order.`);
                break;
            }
        }

        if (isValidOrder) {
            console.log('Products are in the correct order.');
            } else {
            console.error('Products are NOT in the correct order.');
        }
   }
/**
 * Apply Dietary filter
 */
    async dietaryOptionSelection() {
        await this.dietaryFilter.isVisible({ timeout: 5000 });
        await this.dietaryFilter.click({timeout: 5000 });  
        await this.loginPage.waitToCompleteAction(5000);   
        await this.dietaryOptSelection.isVisible() 
        await this.dietaryOptSelection.first().click({timeout: 5000 });
        await this.loginPage.waitToCompleteAction(5000);
        await this.applyButton.click();
        await this.loginPage.waitToCompleteAction(5000);   
    }
/**
 * Apply Allergen filter
 */
    async allergenOptionSelection() {
        await this.allergenFilter.isVisible({ timeout: 5000 });
        await this.allergenFilter.click({timeout: 5000 });  
        await this.loginPage.waitToCompleteAction(5000);   
        await this.allergenOptSelection.isVisible() 
        await this.allergenOptSelection.first().click({timeout: 5000 });
        await this.loginPage.waitToCompleteAction(5000);
        await this.applyButton.click();
        await this.loginPage.waitToCompleteAction(5000);   
    }
/**
 * Banner on Complex Promo filters
 */
    async complexPromoBanner(Banner){
        if(Banner === 'AEM'){
            if(await this.promoAEMBanner.last().isVisible() == true){
                console.log('AEM Banner available on this page')
                await expect(this.bannerCTAButton.last()).toBeVisible();
            }
            else{
                console.log('No AEM Banner available on this page')
            }
        } 
        else if(Banner === 'Citrus'){
            if(await this.promoBanner.last().isVisible() == true){
                console.log('Citrus Banner available on this page')
                await expect(this.bannerCTAButton.last()).toBeVisible();
            }
            else{
                console.log('No Citrus Banner available on this page')
            }
        }
}


   
/**
 * To verify Shoppable Banner existance
 */
    async verifyShoppableBannerWithLogoAndCTA(){
        if(await this.shoppableBanner.last().isVisible() == true){
            console.log('Shoppable Banner available on this page')
            await expect(this.bannerCTAButton.last()).toBeVisible();
            await expect(this.bannerLogo.last()).toBeVisible();
            await expect(this.bannerPromotedLabel.first()).toBeVisible();
        }
        else{
            console.log("No shoppable banner available here")
        }
    } 

/**
 * Click on Shoppable Banner CTA
 */
async clickOnShoppableBannerCTA(){
    if(await this.shoppableBanner.last().isVisible() == true){
        if(await this.carouselButton.last().isVisible()== true){
            await this.carouselButton.click({timeout:6000});
        }
        await expect(this.bannerCTAButton.last()).toBeVisible();      
        console.log('Click on banner CTA to go to other page')
        await this.bannerCTAButton.last().click({timeout:6000});
        console.log('Verify new page URL');
        await expect(this.page).toHaveURL(new RegExp('pid'));
    }
}

}