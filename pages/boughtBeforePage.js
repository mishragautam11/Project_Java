import { test, expect } from '../testFixtures/pageFixture.js';
const { LoginPage } = require("./loginPage.js");
const { HomePage } = require("./homePage.js");
 
exports.BoughtBeforePage = class BoughtBeforePage {
 
    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.flybuysHeading = page.getByRole('heading', { name: 'Flybuys' });
        this.unlinkButton = page.locator("//button[@data-testid='unlink-button']");
        this.noBoughtBeforeItemHeading = page.locator("//div[@data-testid='bought-before-no-results']/h2");
        this.startShoppingbutton = page.locator("//span[text()='Start shopping']");
        this.shopProductsHeading = page.getByRole('heading', { name: 'Shop products' });
        this.allCatagoriesList = page.locator("//div[@data-testid='content-container']/ul/li");
        this.boughBeforeHeading = page.getByTestId('product-cat-heading');
        this.bbPopup = page.getByLabel('close popup');
        this.bbMessageWhenNoItems = page.locator("//div[@data-testid='bought-before-page']/h1");
        this.clickBBitem = page.locator("//h2[@class='LinesEllipsis  product__title']");
        this.addProductToCart = page.locator("//button[@data-testid='add-to-cart-button']");
        this.trolleyDrawer = page.locator('//*[@data-testid="header-trolley-tablet-up"]');
        this.removefirstaddedProduct = page.locator("//button[text()='Remove']");
        this.continueShoppingButton = page.locator("//span[text()='Continue shopping']");
        this.boughtBeforePDPPage = page.locator("//li[@class='product__top_messaging__item']/button");
        this.productDetailsPage = page.locator("//h2[text()='Product details']");
        this.productPricing = page.locator("//span[@data-testid='pricing']");
        this.addToTrolleyBtn = page.locator('//button[@data-testid="add-to-cart-button"]');
        this.currentlyUnavailablePage = page.locator("//div[text()='Currently unavailable']");
        this.shopSimilarPage = page.locator("//button[@data-testid='shop-alts-btn']");
        this.currentlyUnavailableItem = page.locator("//div[@data-testid='currently-unavailable-prompt']");
        this.nextPage = page.locator("//button[@aria-label='Go to next page']");
        this.previousBtn = page.locator("//button[@aria-label='Go to previous page']");
        this.multiListPopUp = page.locator("//button[@aria-label='close popup']");
        this.boughtBefore = page.locator("(//a[@data-testid='nav-link'])[1]");
        this.noBoughtBeforeItemText = page.locator("//h2[text()='You have no bought before items']");
        //FilterandSortFunctionality
        this.applyFilter = page.locator("//button[@data-testid='filters-apply-all']");
        this.allFilter = page.locator("//button[@data-testid='All-filter-pill']");
        this.filterCategoryList = page.locator("//div[@data-testid='drawer-body-drawer']//ul//li//h3//div//div");
        this.colesLogo = page.locator("//div[@data-testid='header-logo']");
        this.closeFilterDrawer = page.locator("//button[@data-testid='drawer-close-button']");
        this.filterText = page.locator("//span[text()='Filters']");
        this.searchBbText = page.locator("(//input[@placeholder='Search Bought before'])[2]");
        this.sortDropDown = page.locator("//div[@data-testid='sort-select']");
        this.applySortBestseller = page.locator("//li[@data-testid='salesDescending']");
        this.applyFrequentlyPurchased = page.locator("//li[@data-testid='frequencyDescending']");
        this.applyLowestUnitPrice = page.locator("//li[@data-testid='unitPriceAscending']");
        this.applyPriceLtoH = page.locator("//li[@data-testid='priceAscending']");
        this.applyPriceHtoL = page.locator("//li[@data-testid='priceDescending']");
        this.colesBrandFilter = page.locator("//button[@data-testid='ColesBrands-filter-pill']");
        this.closeFilter = page.locator("//span[@aria-label='close']");
        this.secondBBItem = page.locator('(//section[@data-testid="product-tile"]//ancestor::h2)[2]');
        this.allSpecialsCheckbox = page.locator("//label[@data-testid='checkbox-specials']");
        this.specialTagItemProduct = page.locator("(//div[@data-testid='product-hat'])[3]");
        this.clearAllBtn = page.locator("//button[@data-testid='filters-clear-all']");
        this.bbPricing = page.locator("//span[@data-testid='product-pricing']");
        this.allProductPrice = page.locator('//div[@data-testid="small-screen-pricing"]//section[@data-testid="product_price"]//div[@class="price"]//span[@data-testid="product-pricing"]');
        //Add To List & Save To List
        this.addToListButton = page.locator('//button[@data-testid = "list-button" and @data-icon = "list"]');
        this.addToListTick = page.locator('//button[@data-testid = "list-button" and @data-icon = "tick"]');
        this.saveToListModal = page.locator('//h1[@data-testid="modal-title"]');
        this.goToListsButton = page.locator("//button//span[text()='Go to lists']");
        this.doneKeepShoppingBtn = page.locator("//span[text()='Done, keep shopping']");
        this.closeDialogSaveToList= page.locator("//button[@data-testid='close-button']");
        this.logoColes = page.locator('//div[@data-testid="header-logo"]');
        this.specialItem = page.locator('//div[@data-testid="specials-product-tiles"]/child::div');
        this.yourListHeading = page.locator("//div//h1[text()='Your lists']");
        this.addToListBtn = page.locator("//button[@data-testid='list-button']");
        this.currentlyUnavailableProduct = page.locator("//div[@data-testid='currently-unavailable-prompt']");
 
 
        this.rightCumbNavigationSign = page.locator('//span[@data-testid="separator"]');
        this.differentCategories = page.locator('//nav[@data-testid="navigation-container"]//li//a');
        this.l2CategoryHeaderNameText = page.locator('//h1[@data-testid="product-cat-heading"]');
        this.totalProductsHeader = page.locator('//header[@class="product__header"]');
        this.backToBoughtBeforeLink = page.locator('//a[@data-testid="back-link"]');
        this.boughtBeforeSearhOption = page.locator('//input[@name="search-bought-before-text-input"]');
        this.searchBtn = page.locator('//button[@data-testid="search-box-search-button-bought-before"]');
        this.noBbItemInSearch = page.locator('//div[@data-testid="search-in-pages-results-empty"]');
        this.shopProductLink = page.locator('//a[@aria-label="back to Shop products"]');
        this.selectMultipleCTA = page.locator('//button[@data-testid="multi-select-items-button"]');
        this.selectAllCheckBox = page.locator('//input[@name="multi-select-select-all"]');
        this.addToTrolleyBtn = page.locator('//button[@data-testid="add-to-cart-button"]');
        this.totalProductsInMultiItem = page.locator('//span[@data-testid="multi-select-product-title"]');
        this.imageOfProduct = page.locator('//div[@data-testid="modal-content-container"]//img[@data-testid="product-image"]');
        this.axddProduct = page.locator('//select[@data-testid="quantity-picker-select"]');
        this.alreadyInTrolleyText = page.locator("//span[text()='Already in trolley']");
        this.notAvailableText = page.locator("//span[text()='Not available at this location']");
        this.itemsSelectText = page.locator('//div[@data-testid="modal-actions-container"]//child::div/div');
        this.viewMoreBtn = page.locator('//button[@aria-label="View more items"]');
        this.addToTrolleyMultiSelectCTA = page.locator('//div[@data-testid="modal-actions-container"]//button[@data-testid="add-to-cart-button"]');
        this.noNeverMindBtn = page.locator('//button[@data-testid="error-secondary-button"]');
        this.checkBoxForAvailableItem = page.locator('//div[@data-testid="modal-content-container"]//span[@data-testid="product-pricing"]//ancestor::label[@data-testid = "checkbox-item"]');
        this.quantityPicker = page.locator("//select[@data-testid='quantity-picker-select']");
        this.checkBoxForQuantityChangedProduct = page.locator('//select[@data-testid="quantity-picker-select"]/ancestor::div[@data-testid="multi-select-product-detail-wrapper"]/parent::span/preceding-sibling::div');
        this.firstCategoryPicker = page.locator('(//nav[@data-testid="navigation-container"]//li//a//span//span)[1]');
        this.shopProductBB = page.locator('//a[@aria-label="back to Shop products"]');
        this.unavailableCheckbox = page.locator("//span[text()='Not available at this location']/ancestor::label[@data-testid='checkbox-item']//span//input");
        this.unavailableItemShopSimilar = page.locator("//span[text()='Not available at this location']/parent::div/following-sibling::div//button");
        this.shopSimilarButton = page.locator("//span[text()='Not available at this location']/parent::div/following-sibling::div//div//div");
        this.noSimilarItem = page.locator("//span[text()='Not available at this location']/parent::div/following-sibling::div");
        this.individualCheckBoxes = page.locator('//input[@name="multi-select-select-single"]');
        this.shopSimilar = page.locator('//div[@data-testid="modal-content-container"]//button[@data-testid="shop-alts-btn"]');
        this.limitItemText = page.locator('//div[text()="100 items selected"]');
        this.limitReached = page.locator('//span[text()="Limit reached"]');
        this.dropCheck = page.locator('//fieldset[@data-testid="quantity-utils"]/descendant::span');
        this.selectDownDown = page.locator('//a[@data-testid="nav-link"]//span[text()="Down Down"]');
        this.oldPriceAndDate = page.locator('//div[@data-testid="modal-content-container"]//div[@class="price__was"]');
        this.pricePerUnit = page.locator('//div[@data-testid="modal-content-container"]//div[@class="price__calculation_method"]');
        this.addItemsToTrolleyText = page.locator("//h2[text()='Add items to trolley?']");
        this.selectMultipleModal = page.locator('//div[@id="modal-title"]//h1[text()="Select multiple items"]');
        this.backBtnSelectModal = page.locator('//button[@aria-label="Back"]');
        this.stillWantText = page.locator("//h2[text()='Add items to trolley?']//following-sibling::p");
        this.yesAddItemText = page.locator('//button[@data-testid="error-button"]//span');
        this.trolleyHeader = page.locator('//div[@data-testid="trolley-header"]');
        this.multiSelect = page.locator('//button[@data-testid="multi-select-items-button"]');
        this.dropDown = page.locator('//div//select[@data-testid="quantity-picker-select"]');
       
        // locator for promo code
        this.complexPromoCode = page.locator('//span[@data-testid="complex-promotion-link"]');
        this.complexPromoLabel = page.locator('//span[@data-testid="complex-promotion-link"]/ancestor::span//span[@data-testid="multi-select-product-title"]');
        this.complexPromoDropDown = page.locator('//span[@data-testid="complex-promotion-link"]/ancestor::span//fieldset[@data-testid="quantity-utils"]//span');
        this.complexPromoCheckBox = page.locator('//span[@data-testid="complex-promotion-link"]/ancestor::label[@data-testid="checkbox-item"]/descendant::input[@type="checkbox"]');
        this.complexPromoPrice = page.locator('//span[@data-testid="complex-promotion-link"]/ancestor::label[@data-testid="checkbox-item"]/descendant::span[@data-testid="product-pricing"]');
        this.complexPromoImage = page.locator('//span[@data-testid="complex-promotion-link"]/ancestor::label[@data-testid="checkbox-item"]/descendant::div[@data-testid="multi-select-product-image"]');
        this.multipleItemListCross = page.locator('//button[@data-testid="close-button"]');
        this.complexPromoItemSelected = page.locator('//div[@data-testid="modal-actions-container"]');
        this.items = page.locator('//div[@data-testid="multi-select-single-item-wrapper"]');
        this.itemCheckBox = page.locator('//div[@data-testid="multi-select-single-item-wrapper"]/descendant::input[@type="checkbox"]');
        this.outOfStockWrapper = page.locator('//span[text()="Item is out of stock"]/ancestor::div[@data-testid="multi-select-product-detail-wrapper"]');
        this.outOfStockCheckBox = page.locator('//span[text()="Item is out of stock"]/ancestor::label[@data-testid="checkbox-item"]/descendant::div//input[@type="checkbox"]');
        this.outOfStockDropDownClass = page.locator('//fieldset[@data-testid="quantity-utils"]');
        this.homeBtn = page.locator('//span[text()="Home"]');
        this.similarItemText = page.locator('//ul[@data-testid="shop-alternatives-tiles"]//descendant::div[text()="Choose a similar item"]');
        this.similarItemFirst = page.locator('//ul[@data-testid="shop-alternatives-tiles"]//descendant::li[1]');
        this.similarItemFirstButton = page.locator('//ul[@data-testid="shop-alternatives-tiles"]//descendant::li[1]//button[@data-testid="add-to-cart-button"]');
        this.similarItemTrolleyVerify =  page.locator('//ul[@data-testid="shop-alternatives-tiles"]//descendant::li[1]//div[@role="status"]//div[text()="Added to trolley"]');
        this.similarItemContinueShopping = page.locator('//button[@data-testid="continue-shopping-button"]');
        this.itemFromCPM = page.locator('//button[@data-testid="complex-promotion-link"]');
        this.addItemFromCPM = page.locator('//button[@data-testid="complex-promotion-link"]//ancestor::section//descendant::button[@data-testid="add-to-cart-button"]');
        this.itemFromCPMTitle = page.locator('//button[@data-testid="complex-promotion-link"]//ancestor::section//descendant::h2');
        this.itemFromCPMPopUp = page.locator('//button[@data-testid="close-button"]');
        this.btnCloseTrolley = page.locator('//*[@data-testid="trolley-drawer"]//button[@data-testid="drawer-close-button"]');
        this.closeItemList = page.getByTestId('close-button');    }
 
    //go to home page from bought before page
    async goToHomePage(){
        await this.homeBtn.click();
        await this.loginPage.waitToCompleteAction(2000);
    }
    // click on trolley
    async clickTrolleyDrawer() {
        await this.trolleyDrawer.click();
    }
    // remove first added product from list
    async removeTheAddedproduct() {
        if (this.removefirstaddedProduct.isVisible({ timeout: 5000 })) {
            await this.removefirstaddedProduct.first().click();
        }
    }
    // verify heading
    async verifyNoItemsAvailableHeading() {
        expect(this.noBoughtBeforeItemHeading).toBeVisible({ timeout: 20000 });
    }
    // click on start shopping button
    async clickStartShoppingButton() {
        if (this.startShoppingbutton.isVisible()) {
            await this.startShoppingbutton.click();
        }
    }
    // verify heading
    async verifyAllHeadingsOnStartShoppingPage() {
        await expect(this.shopProductsHeading).toBeVisible({ timeout: 8000 });
 
    }
 
    async allCatagorylist() {
        return await this.allCatagoriesList.allTextContents();
    }
    /**
     * Verify Bought Before page heading.
    */
    async verifyBoughtBeforeHeading(BBheading) {
        const header = await this.boughBeforeHeading.innerText();
        expect(header).toBe(BBheading);
    }
    /**
    * Verify Bought Before page heading when there is no BB Item.
    */
    async verifyBBHeadingWhenNoItem(BBheading) {
        const header = await this.bbMessageWhenNoItems.innerText();
        expect(header).toBe(BBheading);
    }
    /**
     * Handle multi tool kit popup.
    */
    async boughBeforePopup() {
        if (await this.BBPopup.isVisible({ timeout: 8000 })) {
            await this.BBPopup.click();
        }
    }
    /**
     * clicking on shopping button of bb page.
    */
    async continueShoppingPoPUp() {
        if (await this.continueShoppingButton.isVisible({ timeout: 5000 })) {
            await this.continueShoppingButton.click();
        }
    }
    /**
     * Verify Bought Before Item in Trolley.
    */
    async clickAndVerifyBoughBeforeItemsAddedToTrolley(num) {
        await this.homePage.clickBoughtbeforeTab();
        await this.verifyBoughtBeforeHeading("Bought before");
        await this.boughBeforePopup();
        const BBitem = await this.clickBBitem.nth(num).textContent();
        console.log(BBitem);
        await this.addProductToCart.nth(num).click();
        await this.continueShoppingPoPUp();
        await this.clickTrolleyDrawer();
        await this.page.waitForTimeout(10000);
        expect(this.page.locator("(//span[contains(text(),'" + BBitem.substring(0, 20) + "')])[1]")).toBeHidden({ timeout: 12000 });
        await this.homePage.closeTrolleyDrawer();
    }
    /**
     * Verify Bought Before page .
    */
    async verifyNoBoughtBeforeItemHeading() {
        this.loginPage.waitToCompleteAction(3000);
        const nobbhead = await this.noBoughtBeforeItemHeading.innerText();
        expect(nobbhead).toContain("You have no bought before items");
    }
    /**
     * Verify All Categories present in start shopping product link.
    */
    async verifyAllCatagoriesonStartShoppingProductLink() {
        await this.clickStartShoppingButton();
        await this.verifyAllHeadingsOnStartShoppingPage();
        const allCatagories = await this.allCatagorylist();
        console.log(allCatagories);
    }
    /**
     * Choose Bought Before Item which is present in first index.
    */
    async chooseBBItem() {
        if (await this.clickBBitem.nth(0).isVisible({ timeout: 40000 })) {
            await this.clickBBitem.nth(0).click();
        }
    }
    /**
     * Verify and check availability of Bought Before page product.
    */
    async bbVerifyProductAvailabilty() {
        await this.loginPage.waitToCompleteAction(8000);
        if (await this.addToTrolleyBtn.isVisible() === true) {
            await this.addToTrolleyBtn.click();
        }
        await this.loginPage.waitToCompleteAction(8000);
        if (await this.currentlyUnavailableItem.isVisible() === true) {
            await this.shopSimilarPage.click();
        }
    }
    /**
     * Verify Bought Before page heading.
    */
    async verifyBBAnnoatation() {
        const header = await this.boughtBeforePDPPage.innerText()
        expect(header).toBe('Bought before');
    }
    /**
     * Verify that user successfully landed on  pdp page.
    */
    async verifyLandedOnPdpPage() {
        expect(await this.productDetailsPage.isVisible({ timeout: 10000 }));
    }
    /**
     * Verify Pagination Arrow.
    */
    async verifyNextPageArrow() {
        expect(await this.nextPage.toBeEnabled({ timeout: 10000 }))
        expect(await this.previousBtn.toBeDisabled());
    }
    /**
     * Click on  Bought Before and handle the multi list popup..
    */
    async clickOnBoughtBefore() {
        await this.boughtBefore.click();
        await this.loginPage.waitToCompleteAction(7000);
        if (await this.multiListPopUp.isVisible()) {
            await this.loginPage.waitToCompleteAction(500);
            await this.multiListPopUp.click();
        }
    }
    /***
    * Verify Bought Before tab visibility
    */
    async verifyBoughtBeforeTabVisibility() {
        try {
            await expect(this.boughtBefore).toBeVisible();
        } catch (error) {
            console.log("Error: Bought Before is not visible");
        }
    }
    /**
     * Verify Filter visibility.
    */
    async clickonAllFilteGroupAndVerify() {
        await this.allFilter.click();
        const allFilterList = await this.filterCategoryList.allTextContents();
        console.log(allFilterList);
        if (await this.filterText.isVisible()) {
            await this.closeFilterDrawer.click();
        }
    }
    /**
     * Verify BB Text Visiblity.
    */
    async verifySearchBBTextVisibility() {
        if (await this.searchBbText.isVisible()) {
            console.log("Search Bought Before Text is Visible");
        }
    }
    /**
     * click on sort by best seller button to check functionality.
    */
    async sortBestSeller() {
        await this.sortDropDown.click({ timeout: 60000 });
        await this.applySortBestseller.click({ timeout: 60000 });
        await expect(this.page).toHaveURL(new RegExp('sortBy=salesDescending$'));
    }
    /**
     * click on sort by frequent purchased button to check functionality.
    */
    async sortFrequentlyPurchased() {
        await this.sortDropDown.click({ timeout: 60000 });
        await this.applyFrequentlyPurchased.click({ timeout: 60000 });
        await expect(this.page).toHaveURL(new RegExp('sortBy=frequencyDescending$'));
    }
    /**
     * click on sort by Lowest Unit Price button to check functionality.
    */
    async sortLowestUnitPrice() {
        await this.sortDropDown.click({ timeout: 60000 });
        await this.applyLowestUnitPrice.click({ timeout: 60000 });
        await expect(this.page).toHaveURL(new RegExp('sortBy=unitPriceAscending$'));
    }
    /**
     * click on sort by Low to High to check functionality.
    */
    async sortPriceLtoH() {
        await this.sortDropDown.click({ timeout: 60000 });
        await this.applyPriceLtoH.click({ timeout: 60000 });
        await expect(this.page).toHaveURL(new RegExp('sortBy=priceAscending$'));
    }
    /**
     * click on sort by High to Low button to check functionality.
    */
    async sortPriceHtoL() {
        await this.sortDropDown.click({ timeout: 60000 });
        await this.applyPriceHtoL.click({ timeout: 60000 });
        await this.loginPage.waitToCompleteAction(5000);
    }
    /**
     * verify coles brand filter functionality.
    */
    async verifyColesBrandFilter() {
        await this.colesBrandFilter.scrollIntoViewIfNeeded();
        if (await this.colesBrandFilter.isVisible()) {
            await this.loginPage.waitToCompleteAction(2000);
            await this.colesBrandFilter.dblclick();
        }
        await this.loginPage.waitToCompleteAction(1000);
        await this.secondBBItem.scrollIntoViewIfNeeded();
        if (await this.secondBBItem.isVisible({ timeout: 40000 })) {
            await expect(this.secondBBItem).toContainText('Coles');
        }
        await this.loginPage.waitToCompleteAction(1000);
        await this.closeFilter.click();
        await this.loginPage.waitToCompleteAction(4000);
    }
    /**
     * verify coles special filter functionality
    */
    async verifyColesSpecials() {
        await this.allFilter.scrollIntoViewIfNeeded();
        await this.allFilter.click({ timeout: 40000 });
        await this.loginPage.waitToCompleteAction(3000);
        if (await this.allSpecialsCheckbox.isVisible()) {
            await this.allSpecialsCheckbox.click();
            await expect(this.allSpecialsCheckbox).toBeChecked();
        }
        await this.applyFilter.click();
        await this.loginPage.waitToCompleteAction(3000);
        await this.specialTagItemProduct.scrollIntoViewIfNeeded();
        await expect(this.specialTagItemProduct).toHaveText("Special");
        await this.loginPage.waitToCompleteAction(1000);
    }
    /**
     * verify clear all button functionality.
    */
    async verifyClearAllFunctionality() {
        await this.loginPage.waitToCompleteAction(3000);
        await this.allFilter.click({ timeout: 2000 });
        await expect(this.allSpecialsCheckbox).toBeChecked();
        await this.clearAllBtn.click();
        await this.loginPage.waitToCompleteAction(3000);
        if (await this.allSpecialsCheckbox.isChecked()) {
            console.log("Clear button is not working");
        }
        else {
            console.log("Clear all button is working fine");
        }
    }
    /**
     * verify that all filter are visible or not after click on all filter button.
    */
    async clickonAllFilterGroupAndVerify() {
        await this.allFilter.click();
        const allFilterList = await this.filterCategoryList.allTextContents();
        console.log(allFilterList);
        if (await this.filterText.isVisible()) {
            await this.closeFilterDrawer.click();
        }
    }
    /**
     * verify that all filter button is not visible while there are no BB Items.
    */
    async noBoughtBeforeItemsPill() {
        if (await this.allFilter.isVisible() === false) {
            await expect(this.noBoughtBeforeItemText).toBeVisible();
            console.log("There are no bb items");
            await this.loginPage.waitToCompleteAction(2000);
            await this.colesLogo.click();
        }
    }
    /**
     * verify all filter group are collapsed by default.
    */
    async verifyFilterGroupsCollapsed(flag = true) {
        if (flag == true) {
            await expect(this.applyFilter).toBeVisible();
        }
        else {
            if (await this.applyFilter.isVisible() === false)
                console.log("Apply button is not visible");
        }
    }
    //verifying functionality of Low to high sorting
    async verifyPricingListLToH() {
        const pricingList = await this.bbPricing.allTextContents();
        console.log(pricingList);
        for (let i = 0; i < pricingList.length - 1; i++) {
            const s1 = pricingList[i];
            const s2 = pricingList[i + 1];
            if ((s1 < s2) || (s1 == s2)) {
                console.log("Order low to high is working", pricingList[i]);
            } else {
                console.log("Order low to high is not working", pricingList[i]);
            }
        }
    }
    //verifying functionality of high to low sorting
    async verifyPricingListHToL() {
        const pricingList = await this.bbPricing.allTextContents();
        console.log(pricingList);
        for (let i = 0; i < pricingList.length - 1; i++) {
            const s1 = pricingList[i];
            const s2 = pricingList[i + 1];
            if (s1 > s2) {
                console.log("Order high to low is working", pricingList[i]);
            } else if (s1 == s2) {
                console.log("The price of both the product is same..!!", pricingList[i])
            } else {
                console.log("Functionality is not working properly..!!");
            }
        }
    }
 
    /* Verifying Save to List modal gets appear while clicking on Add To List Option on bought before Page
    and  verying the functionality of close button, done,keep shopping button and go to Lists button
    */
 
    async verifySaveToListModalInBb(){
        await expect(this.addToListButton.first()).toBeVisible();
        await this.addToListButton.first().click();
        await this.loginPage.waitToCompleteAction(2000);
        await this.addToListTick.first().click();
        await expect(this.saveToListModal).toBeVisible();
        console.log("SaveToList modal is visible");
        await expect(this.goToListsButton).toBeVisible();
        await expect(this.closeDialogSaveToList).toBeVisible();
        await this.closeDialogSaveToList.click();
        await expect(this.addToListTick.first()).toBeVisible();
        await this.addToListTick.first().click();
        await expect(this.doneKeepShoppingBtn).toBeVisible();
        await this.doneKeepShoppingBtn.click();
        await expect(this.addToListTick.first()).toBeVisible();
        await this.addToListTick.first().click();
        await this.goToListsButton.click();
        await expect(this.yourListHeading).toBeVisible();
        await this.logoColes.click();
 
    }
    /* Verifying Save to List modal gets appear while clicking on Add To List Option on specials  Page
    and  verying the visibilty of close button, done,keep shopping button and go to Lists button
    */
    async verifySaveToListModalInSpecials(){
        await this.addToListButton.first().click();
        await this.loginPage.waitToCompleteAction(2000);
        await this.addToListTick.first().click();
        await expect(this.saveToListModal).toBeVisible();
        console.log("SaveToList modal is visible");
        await expect(this.goToListsButton).toBeVisible();
        await expect(this.doneKeepShoppingBtn).toBeVisible();
        await this.closeDialogSaveToList.click();
        await this.logoColes.click();  
    }
    // select second bb item
    async chooseSecondBBItem(){
        await this.secondBBItem.click();
        await this.loginPage.waitToCompleteAction(2000);
        await expect(this.currentlyUnavailableProduct).toBeVisible();
        await this.addToListBtn.click();
    }
     /*
     Method to verify Right CumbNaviation Sign is visible
    */
     async verifyRightCumbNaviationSign(){
        expect(await this.rightCumbNavigationSign).toBeVisible();
    }
    /*Method to navigate to Level 2 and 3 category
    */
    async movetoL2Category(){
        var firstCategoryName = await this.firstCategoryPicker.innerText();
        await this.firstCategoryPicker.click();
        var categoryName = await this.differentCategories.first().getAttribute('aria-label');
        console.log("We have moved to "  , categoryName);
        await this.loginPage.waitToCompleteAction(500);
        return firstCategoryName;
    }
    //move the category
    async moveToL3Category(){
        var l3CategoryName = await this.firstCategoryPicker.innerText();
        console.log("we have moved to l2 category");
        await this.loginPage.waitToCompleteAction(2000);
        await this.firstCategoryPicker.click();
        console.log("we have moved to l3 category");
        return l3CategoryName;      
    }
    //Method to verify  Level 2 and 3 category name and no. of tems present in it
    async verifyL2AndL3CategoryHeaderName(ActualHeader){
     await this.loginPage.waitToCompleteAction(2000);
     var L2CategoryName = await this.l2CategoryHeaderNameText.innerText();
     expect(L2CategoryName).toBe(ActualHeader);
     console.log("Heading matched successfully");
     let totalNoOfItems = await this.totalProductsHeader.count();
     console.log("Total number of items visible on this page for" +  L2CategoryName +  " are" ,  totalNoOfItems);
    }
    //Method to verify bought before back navigation is visible ,working and navigating to next category
    async verifyBackLinkFunctionality(){
        expect(await this.backToBoughtBeforeLink).toBeVisible();
        console.log("Back to bought before link is visible");
        await this.backToBoughtBeforeLink.click();
        expect(await this.shopProductBB).toBeVisible();
        await this.firstCategoryPicker.click();
       
    }
   
    //Method to give input in bought before search option
    async boughtBeforeSearchItem(productName){
       await this.boughtBeforeSearhOption.fill(productName);
       await this.searchBtn.click();
    }
    //Method to verify no bb item present  
    async verifySearchInResultEmptyBBPage(){
        expect (await this.noBbItemInSearch).toBeVisible();
    }
    // veify multiselect CTA and check select all checkbox
    async verifyMultipleSelectCTA(){
        expect (await this.selectMultipleCTA).toBeVisible();
        await this.selectMultipleCTA.click();
        await this.selectAllCheckBox.click();
        await expect(this.selectAllCheckBox).toBeChecked();
        console.log("select all checkbox is checked");
    }
    // verify multi select to be hidden
    async verifyMultipleSelectHidden(){
        expect(await this.selectMultipleCTA).toBeHidden();
       
    }
    // add 2 items to trolley
    async clickAddToTrolley(){
        await this.addToTrolleyBtn.first().click();
        await this.addToTrolleyBtn.nth(1).click();
        console.log("both items are added into the trolley");
    }
    //verify name and image of 12 items to be visible and display name of products
    async verifyTotalItemsNameandImageInMultiList(){
        let totalNoOfItems = await this.totalProductsInMultiItem.count();
        let totalItemsVisible = parseInt(totalNoOfItems);
        expect(totalItemsVisible).toEqual(12);
        console.log("Total number of items without clicking view more are ",totalItemsVisible);
        let totalImages = await this.imageOfProduct.count();
        expect(totalNoOfItems).toEqual(totalImages);
        console.log("Images are present for all the sku");
        let nameOfProducts = await this.totalProductsInMultiItem.allTextContents();
        console.log(nameOfProducts);
    }
    //verify name and image of itmes in down down
    async downDownVerifyTotalItemsNameandImageInMultiList(){
        let totalNoOfItems = await this.totalProductsInMultiItem.count();
        let totalItemsVisible = parseInt(totalNoOfItems);
        console.log("Total number of items without clicking view more are ",totalItemsVisible);
        let totalImages = await this.imageOfProduct.count();
        expect(totalNoOfItems).toEqual(totalImages);
        console.log("Images are present for all the sku");
        let nameOfProducts = await this.totalProductsInMultiItem.allTextContents();
        console.log(nameOfProducts);
       
    }
 
   
    /*  verify already in trolley text for items added to trolley
    verify items selected text is visible
    verfying count of items added in trolley are equal to the no. of items added in the trolley
    view more btn  and add to trolley btn is visible or not
    */
    async addToTrolleyItemandUnavailableText(){
        await expect(this.alreadyInTrolleyText.first()).toBeVisible();
        await expect(this.itemsSelectText).toBeVisible();
        let alreadyInTrolleyItems = await this.alreadyInTrolleyText.count();
        console.log("total number of items already in trolley  are " ,alreadyInTrolleyItems);
        let countOfItemAddedInTrolley = parseInt(alreadyInTrolleyItems);
        expect(countOfItemAddedInTrolley).toEqual(2);
        var unavailableText = await this.notAvailableText.count();
        console.log("total number of unavailable items are " ,unavailableText);
        await expect(this.viewMoreBtn).toBeVisible();
        console.log("View More Btn is visible")
        await expect(this.addToTrolleyMultiSelectCTA).toBeVisible();
        console.log("Add To Trolley Btn is Visible");
    }
    //verify item limit reached after 100 items
    async verifyItemLimitReachedText(){
       while(await this.limitItemText.isVisible()==false){
        await this.viewMoreBtn.click();
       }
        console.log("100 items selected");
        expect(await this.limitReached).toBeVisible();
        console.log("Item limit is reached");
        await this.closeDialogSaveToList.click();
        await this.noNeverMindBtn.click();
        await this.logoColes.click();
        await this.loginPage.waitToCompleteAction(3000);
   
    }
    //verify all checkbox are unchecked
    async verifyAllCheckBoxUnchecked(){
        await this.selectMultipleCTA.click();
        const is_Checked = await this.selectAllCheckBox.isChecked();  //ischecked -> uncheck
        await expect(is_Checked).toBe(false);
        console.log("Select all checkbox is unchecked")
        const skuCheckbox = await (this.checkBoxForAvailableItem.first()).isChecked();
        console.log("Select checkbox for availalbe item is unchecked")
        expect(skuCheckbox).toBe(false);
    }
    //verify add to trolley to be hidden
    async verifyButtonVisibleWhenUnchecked(){
        await expect(this.itemsSelectText).toBeHidden();
        await expect(this.addToTrolleyMultiSelectCTA).toBeHidden();
        await expect(this.viewMoreBtn).toBeVisible();
    }
    //Method to change quantity of SKU in Multiple CTA AND verify checkbox is checked  
    async changeQuantityMultipleCTA(){
        await this.quantityPicker.first().selectOption({ value: '2' });
        console.log("Quantity is changed to 2 successfully");
        await expect(this.checkBoxForQuantityChangedProduct.first()).toBeChecked();
        console.log("checkbox is checked for sku after changing quantity");  
        await this.quantityPicker.first().selectOption({ value: '1' });
    }
    //verify unavailable check box
    async verifyUnavailableCheckbox(){
        expect (await this.unavailableCheckbox.first()).toBeDisabled();
        console.log(" unavailable checkbox is disabled");
    }
    /*verifying unavailable product to be present in bb list ,shop similar is visible
      verify either similar item added or no similar item
      verify 5 items selected
    */
    async verifyShopSimilarForUnavailableItem(){
        let i=0;
        while(await this.unavailableItemShopSimilar.nth(i).isVisible() == true ) {
            await this.unavailableItemShopSimilar.nth(i).click();
            await this.loginPage.waitToCompleteAction(2000);
            if( await this.shopSimilarButton.nth(i).isVisible() == true ) // shop similar button is no similar item text
            {
                console.log("No similar item is verified");
                i++;
            }
            else
            {
                await expect(this.similarItemText).toBeVisible();
                await expect(this.similarItemFirst).toBeVisible();
                await this.similarItemFirstButton.click();
                await expect(this.similarItemTrolleyVerify).toBeVisible();
                console.log('similar item added to trolley');
                await this.similarItemContinueShopping.click();
                await expect(this.selectMultipleModal).toBeVisible();
                console.log('back to bb list');
                break;
            }
        }
        await expect(this.itemsSelectText).toContainText("5 items selected ");
        console.log("5 items got selected successfully");
       
    }
    /*
    check for complex promocode
    verify label and price to be visible
    selct item and 1 item selected and add to trolley visible
    */
    async complexPromoOffers()
    {
        await this.selectMultipleCTA.click();
        while(await this.complexPromoCode.first().isVisible() == false)
            {
                await this.viewMoreBtn.click();
            }
        await expect(await this.complexPromoCode.first()).toBeVisible();
        console.log('1 SKU item is visible');
        await expect(await this.complexPromoLabel.first()).toBeVisible();
        console.log(await this.complexPromoLabel.first().textContent());
        await expect(await this.complexPromoDropDown.first()).toContainText('1 item');
        await this.complexPromoCheckBox.first().check();
        console.log('checkbox next to complex promo selected');
        await expect(await this.complexPromoPrice.first()).toBeVisible();
        console.log(await this.complexPromoPrice.first().textContent());
        await expect(await this.complexPromoImage.first()).toBeVisible();
        await expect(await this.complexPromoItemSelected.first()).toBeVisible();
        await expect(await this.complexPromoItemSelected.first()).toContainText('1 item selected');
        console.log('1 item selected is visible');
        await expect(this.viewMoreBtn).toBeVisible();
        console.log("View More Btn is visible")
        await expect(this.addToTrolleyMultiSelectCTA).toBeVisible();
        console.log("Add To Trolley Btn is Visible");
        await this.page.waitForTimeout(2000);
       
    }
    // selecting 5 SKUs and verify 5 item selected and ad to trolley
    async selectingInitialFiveSku(){
        await this.selectMultipleCTA.click();
        await this.selectAllCheckBox.click();
        await this.page.waitForTimeout(2000);
        await this.selectAllCheckBox.click();
        const is_Checked = await this.selectAllCheckBox.isChecked();  
        await expect(is_Checked).toBe(false);
        console.log("Select all checkbox is unchecked")
        for(let i=1;i<=5;i++){
                await this.checkBoxForQuantityChangedProduct.nth(i).click();
                console.log("selecting Sku", i);
   
            }
            await expect(this.itemsSelectText).toContainText("5 items selected ");
            console.log("5 items got selected successfully");
            await expect(this.addToTrolleyMultiSelectCTA).toBeVisible();
            await expect(this.viewMoreBtn).toBeVisible();
       
    }
    // verify checkbox to be checked for availabel itmes
    async verifyCheckBoxCheckedForAvailableItem(){
        await expect(this.checkBoxForQuantityChangedProduct.first()).toBeChecked();
    }
    // verify checkbox to be unchecked for available items
    async verifyCheckBoxUncheckedForAvailableItem(){
        const checkBox =await(this.checkBoxForQuantityChangedProduct.first()).isChecked();
        expect(checkBox).toBe(false);
       
    }
    // check for default quantity to be 1 item in drop down
    async defaultQuantity() {
            let noOfItems = await this.dropDown.count();
            console.log(noOfItems);
            for(let i=0; i<noOfItems; i++){
                await expect(this.dropCheck.nth(i)).toContainText('1 item');
            }
   
    }
    // select drop down
    async selectDownDownOption(){
        await this.selectDownDown.click();
        await this.loginPage.waitToCompleteAction(5000);
         var L2CategoryName = await this.l2CategoryHeaderNameText.innerText();
        expect(L2CategoryName).toBe('Down Down');  
    }
    // verify select all checkbox to be checked by default after selecting all individual checkboxes
    async checkBoxAllIndividualyAndVerifyUnitPrice(){
        await this.selectMultipleCTA.click();
        var totalCheckbox = await this.checkBoxForQuantityChangedProduct.count();
        for(let i=0;i<totalCheckbox;i++){
            await this.checkBoxForQuantityChangedProduct.nth(i).click();
            expect(await this.pricePerUnit.nth(i)).toBeVisible();
            console.log(i);
        }
        console.log("All Price Per Unit are visible");
        expect(await this.selectAllCheckBox).toBeChecked();
        console.log("All checkboxes got checked");
    }
    /*verify previous price and date for items
      verify x items selected and add to trolley button
    */
   
    async verifyPreviousPriceAndDate(){
        await expect(this.oldPriceAndDate.first()).toBeVisible();
        var previousPriceAndDate = await this.oldPriceAndDate.allTextContents();
        console.log(previousPriceAndDate);
        console.log("Old Price is visible");
        expect(await this.itemsSelectText).toBeVisible();
        console.log("X items added text verified");
        expect (await this.addToTrolleyMultiSelectCTA).toBeVisible();
        console.log("Add to trolley btn visible");
   
    }
   
    // close multiple item window for bb page
    async closeSelectMultipleWindow(actionType = "Yes,additems" ){
        await this.closeDialogSaveToList.click();
        if(actionType="Yes,additems"){
            await this.yesAddItemText.click();
            await expect(this.trolleyHeader).toContainText("6 items");
            console.log("selected items got added in trolley")
        }
        else{
            if(await this.addItemsToTrolleyText.isVisible()){
                await this.noNeverMindBtn.click();
                expect(await this.selectMultipleModal).toBeHidden();
        console.log("Back to bought before Page");
            }
        }
 
    }
    // close multiple item window for down down page list
    async closeDownDownMultipleWindow(actionType = "Yes,additems"){
        await this.closeDialogSaveToList.click();
        expect(await this.addItemsToTrolleyText).toBeVisible();
        expect(await this.backBtnSelectModal).toBeVisible();
        expect(await this.selectMultipleModal).toBeVisible();
        expect (await this.closeDialogSaveToList).toBeVisible();
        expect(await this.addItemsToTrolleyText).toBeVisible();
        expect(await this.stillWantText).toBeVisible();
        expect(await this.noNeverMindBtn).toBeVisible();
        expect(await this.yesAddItemText).toBeVisible();
        await this.backBtnSelectModal.click();
        expect(await this.itemsSelectText).toBeVisible();
        await this.closeSelectMultipleWindow(actionType = "Yes,additems");
    }
    //click on view more
    async listViewMore()
    {
        while( await this.viewMoreBtn.isVisible() == true )
        {
            await this.viewMoreBtn.click();
        }
 
    }
    // close multiple item list
    async closeMultipleItemList()
    {
        await this.multipleItemListCross.click();
        if( await this.noNeverMindBtn.isVisible() == true)
        {
            await this.noNeverMindBtn.click();
        }
        await expect(await this.viewMoreBtn).not.toBeVisible();
        console.log('pass');
 
    }
    //verify checkbox and quantity picker for out of stock items
    async hiddenOutOfStock()
    {
        await expect(await this.outOfStockWrapper.first()).toBeVisible();
        await expect(await this.outOfStockCheckBox.first()).toBeHidden();
        await expect(await this.outOfStockDropDownClass.first()).toBeVisible();
        await expect(await this.outOfStockWrapper.first().locator(this.outOfStockDropDownClass)).not.toBeAttached();
        console.log("pass");
 
    }
    // add product to trolley from complex promo modal
    async addComplexPromoItem(){
        await expect (this.itemFromCPM.nth(1)).toBeVisible();
        console.log('product is visible');
        await expect(this.addItemFromCPM).toBeVisible();
        const itemTitle = await this.itemFromCPMTitle.textContent() ;
        console.log('item name : ', itemTitle);
        const titleSubString = itemTitle.substring(0,10);
        await this.addItemFromCPM.click();
        console.log('item added to trolley ');
        await this.itemFromCPMPopUp.click();
        await this.homePage.clickToOpenTrolley()
        await this.homePage.verifyProductisaddedtothetrolley(titleSubString)
        await this.homePage.closeTrolley()
        console.log('item verified in trolley');
 
    }
    // open multiple item list then select and add all items in trolley and then verify items added in trolley
    async addToItemTrolleyAndVerify(){
        await expect (await this.selectMultipleCTA).toBeVisible();
        await this.selectMultipleCTA.click();
        await this.listViewMore();
        console.log('all items visible');
        await this.selectAllCheckBox.click();
        await expect(this.selectAllCheckBox).toBeChecked();
        console.log('all items selected');
        await expect(this.itemsSelectText).toBeVisible();
        const totalItems = await this.itemsSelectText.textContent();
        const itemQuantity = totalItems.substring(0,6);
        console.log('number of items - ', itemQuantity);
        await expect(this.addToTrolleyMultiSelectCTA).toBeVisible();
        await this.addToTrolleyMultiSelectCTA.click();
        await this.loginPage.waitToCompleteAction(5000);  
        await expect(this.trolleyHeader).toBeVisible();
        await expect(this.trolleyHeader).toContainText(itemQuantity);
        console.log('items added in trolley');
        await expect(this.btnCloseTrolley).toBeVisible();
        await this.btnCloseTrolley.click();
 
    }
}