import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");
const { Pagination } = require("../pages/pagination.js");
const exp = require("constants");
let productname;
let pdptitle;


const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

/**
 * Page objects for Home Page.
 */
exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.paginationPage = new Pagination(page);
        this.confirmButton = page.locator("//button[@aria-describedby='confirmation-helper']");
        this.continueToCheckout = page.locator("//button[@id='skip-products-content']");

        this.btnTrolley = page.locator('//*[@data-testid="header-trolley-tablet-up"]');
        this.logoColes = page.locator('//div[@data-testid="header-logo"]');
        this.trolleyHeader = page.locator('//h2[@data-testid="drawer-heading"]');
        this.emptyCartShopAllButton = page.locator("//a[@data-testid='empty-trolley-shop-all-link']");
        this.btnCloseTrolley = page.locator('//*[@data-testid="trolley-drawer"]//button[@data-testid="drawer-close-button"]');
        this.btnLists = page.locator('//button[@data-testid="header-shopping-lists"]');
        this.editButton = page.locator('//button[@data-testid="edit-delivery-type"]');
        this.btnAccount = page.locator('//button[@data-testid="header-user"]');
        this.hdrAccount = page.locator("//h3[text()='Account']");
        this.searchResultHeader = page.locator('//div[@data-testid="search-results"]//h1');
        this.deliveryBtn = page.locator('//button[@data-testid="tab-delivery"]');
        this.myList = page.locator('//h2[text()="My list"]/parent::div');
        this.btnRemoveListItem = page.locator('(//*[@data-testid="remove-utils"])[1]');
        this.linkMagazine = page.locator('//a[@aria-label="Coles magazines"]');
        //Product Explorer
        this.productFruitsNVeg = page.locator('//span[text()="Fruit & Vegetables"]');
        this.productTitles = page.locator('//h2[@class = "LinesEllipsis  product__title"]');
        this.productMeatAndSeaFood = page.locator('//span[text()="Meat & Seafood"]');

        /** Added trolley items locators*/
        this.trolleyProductImg = page.locator('//img[@data-testid="product-image"]');
        // this.trolleyProductName = page.locator('//span[contains(@class,\'coles-targeting-ProductInTrolleyProductTitle product__title\')]');
        this.trolleyProductName = page.locator('//a[@data-testid="product_in_trolley__title"]');

        this.btnTrolleySaveToList = page.locator('//*[@data-testid="trolley-drawer-save-as-a-list"]');
        this.lnkNotificationSaveToList = page.locator('//div[@data-testid="notification"]//a');
        this.notificationMinOrder = page.locator('//*[@data-testid="mov-notification"]');
        this.ddTrolleyQuantityPicker = page.locator('//*[@data-testid="quantity-picker-select"]');
        this.ddTrolleyQuantityPickerList = page.locator('//div[@data-testid="product_in_trolley__image"]/following::*[@data-testid="quantity-picker-select"]');
        this.popupWelcomeBack = page.locator('//h2[@id = "drawer-heading"]');


        this.btnRemoveAllItems = page.locator('//button[@aria-label="Remove all items"]');
        this.btnCnfRemoveAllItems = page.locator('//button[@data-testid="remove-all-button"]')
        this.ddnDeliveryMethod = page.locator('//div[@data-testid="shopping-method-dropdown-select"]');

        this.btnSetAddress = page.locator('//button[.="Set address"]');
        this.btnJustBrowsing = page.locator('//button[@data-testid="just-browsing-button"]');
        this.btnContinueShopping = page.locator('//button[@data-testid="continue-shopping-button"]');
        this.editHdAddressButton = page.locator("//button[@data-testid='edit-delivery-type']");
        this.btnCloseshopingType = page.locator('//*[@data-testid="your-shop-your-way-close-button"]');
        this.btnCloseDeliveryPreference = page.locator("//button[@data-testid='close-button']");
        this.inputSearchSuburb = page.locator("//input[@data-testid='autocomplete-input']");

        this.pickSlotButton = page.locator("//button[@data-testid='cta-primary']/span[text()='Pick a slot']");
        this.deliverySelectorButton = page.locator("//button[@data-testid='how-and-when-button']");

        /** Shopping method related locators */

        this.editShoppingType = page.locator('//button[@data-testid="edit-delivery-type"]');
        this.btnShoppingType = page.locator('//button[@data-testid="delivery-selector-button"]');
        this.btnDeliverySelector = page.locator('//*[@id="delivery-selector-button"]');
        this.clickAndCollect = page.locator('//button[@data-testid="tab-collection"]');
        this.homeDelivery = page.locator('//button[@data-testid="tab-delivery"]');
        this.searchSuburb = page.locator('//input[@placeholder="Enter a postcode or suburb"]');
        this.slotSelectorButton = page.locator('//button[@data-testid="slot-selector-button"]');
        this.ccDay = page.locator('//*[@data-testid="date-select"]/div/div//div[2]/label');
        this.ccTimeSlot = page.locator('//*[text()="Free"]/preceding::span[3]/input[1]');
        this.btnHomeDeliveryDay = page.locator('//*[@data-testid="date-select"]/div/div//div[2]');
        this.rdoHomeDeliveryTimeSlot = page.locator('//*[contains(text(),"Free")]/preceding::span[3]/input[1]');
        this.nextWeekWindow = page.locator("//a[@id='select-a-delivery-week-label-1']//span[text()='Next week']");

        this.continueShoppingButton = page.locator('div[data-testid="submit-window-wrapper"] button');
        this.addButton = page.locator('//*[@data-testid="add-to-cart-button"]');
        this.addToListButton = page.locator('//button[@data-testid = "list-button" and @data-icon = "list"]');
        this.inputQuantity = page.locator('//*[@data-testid="quantity-input"]');
        this.lnkBoughtBefore = page.locator('//*[@data-testid="category-explorer-category"]').nth(0);
        this.searchTxt = page.locator('id=search-text-input');
        this.txtCardNumber = page.locator('id=number');

        this.searchOption = page.locator('id=react-select-search-box-option-0');
        this.btnCloseDialog = page.locator('//*[@aria-label="Close dialog"]');
        this.btnCloseModal = page.locator('//*[@aria-label="close modal"]');
        this.btnCloseDrawer = page.locator('//*[@aria-label="Close dialog"]');
        this.btnCloseDialogConfirmTime = page.locator('//*[@aria-label="close dialog Confirm your time slot"]');
        this.shoppingTypeContainer = page.locator('div[id="mui-2"]');
        this.selectOptionAddress = page.locator('street-address-autocomplete');
        this.searchButtonOnSearchWindow = page.locator('(//button[@data-testid="search-box-search-button"])[2]');
        // Shop Products and Aisles
        this.lnkShoppingProducts = page.locator('//a[@data-testid="header-link-shop-categories"]');
        this.txtProductCategoryHeader = page.locator('//h1[@data-testid="product-cat-heading"]');
        this.sortSelectButton = page.locator("//div[@data-testid='sort-select']");

        this.closeFormButton = page.locator("//button[@data-aut='button-close']");
        this.productTittle = page.locator("//h2[@class='LinesEllipsis  product__title']");
        this.productTittleOnPDP = page.locator("//h1[@class='LinesEllipsis  product__title']");
        this.searchedFirstProduct = page.locator('//h2[@class = "LinesEllipsis  product__title"]');
        this.priceHighToLowOption = page.locator("//ul[@role='listbox']//li[normalize-space()='Price (High to low)']");

        this.timeSlot = page.locator('(//h3[text()="Overnight"]/parent::div/following-sibling::div//span//input)');
        this.pdTimeSlot = page.locator("(//section[text()='Same day']/ancestor::fieldset//div[@data-testid='slot-select-item']//span//input)[1]");
        this.partnerDriverslot = page.locator("(//section[text()='Partner driver']/parent::span/../../../../../../..//span//input)[2]");
        this.trolleyproductPrice = page.locator('//section[@data-testid="trolley-drawer"]//span[@data-testid="product-pricing"]');
        this.deliveryAndSlotSelectBtn = page.locator('//button[@data-testid="how-and-when-button"]');
        this.deliveryAddressField = page.locator('//input[@id="street-address-autocomplete"]');
        this.deliveryAddress = page.locator('//button[@data-testid="delivery-selector-button"]');
        this.clickAndCollectBtn = page.locator('//button[@data-testid="tab-collection"]');
        this.clickAndCollectAddressField = page.locator('//input[@id="suburb-postcode-autocomplete"]');
        this.ccLocationSelect = page.locator('//h3/parent::div//div//label');
        this.ccSetLocationBtn = page.locator('//span[text()="Set location"]');
        this.addHYCToCart = page.locator("//div[@data-testid='HYF-product-tiles']//li[text()='Promoted']/ancestor::div[2]/following-sibling::div//div[@data-testid='add-to-cart']");
        this.inputHYCQuantity = page.locator("//div[@data-testid='HYF-product-tiles']//*[@data-testid='quantity-input']");
        this.promotedProduct = page.locator("//*[@data-testid='HYF-product-tiles']//li[text()='Promoted']");
        this.shopProductCategory = page.locator('//ul[contains(@class,"NavigationListNavigationWrapper")]');
        this.shopProducCatLevelTwo = page.locator('(//ul[contains(@class,"NavigationListNavigationWrapper")])[2]');
        this.complexPromo = page.locator("//h1[@data-testid='modal-title']");
        this.complexPromoContToCheckout = page.locator("//button[@data-testid='modal-continue-shopping-button']");
        this.addPromotedSKUToCart = page.locator("//*[@data-testid='product-tile']//li[text()='Promoted']/ancestor::div[2]/following-sibling::div//div[@data-testid='add-to-cart']");
        this.addQuantity = page.locator("//*[@data-testid='product-tile']//li[text()='Promoted']/ancestor::div[2]/following-sibling::div//div[@data-testid='add-to-cart']//*[@data-testid='quantity-input']");
        this.addShoppableSKUToCart = page.locator("//div[@data-testid='shoppable-banner']//div[@data-testid='add-to-cart']");
        this.shoppableSKU = page.locator("//div[@data-testid='shoppable-banner']//div//span[@class='product__title']");

        this.btnClosePopup = page.locator("//button[@aria-label='close popup']");

        //b2b
        this.verifyLogoutToCont = page.locator("//h2[normalize-space()='Log out to continue']");
        this.verifyInviteCancelled = page.locator("//h2[normalize-space()='Your invitation has been cancelled']");
        this.requestMoreLink = page.locator('//div[@data-testid="add-to-cart"]/ancestor::div[@class="product__cta_section"]//*[text()="Request more"]');
        this.lessthanbutton = page.locator("//button[text()='Less than 200']");
        this.morethanButton = page.locator("//button[text()='More than 200']");
        this.lessThanDrawerContent = page.locator("//h3[text()='Raise your item limits for online orders']");
        this.orderFrequency = page.locator('//select[@data-testid="b2b-bulkorder-under200-frequency"]');
        this.orderFreqSelect = page.locator('//select[@data-testid="b2b-bulkorder-under200-frequency"]/option[@value="One off/ad hoc"]');
        this.listOfProducts = page.locator("//textarea[@id='b2b-bulkorder-under200-comment']");
        this.lessThanCheckbox = page.locator("//input[@type='checkbox']");
        this.lessThanSubmitButton = page.locator("//button[@data-testid='b2b-bulkorder-under200-submit-btn']");
        this.lessThanSucMsg = page.locator('//h2[contains(text(), "received your request")]');
        this.bulkOrderFormButton = page.locator("//a[@data-testid='b2b-bulkorder-morethan200-button']");
        this.trolleytotalPrice = page.locator('//section[@data-testid="trolley-drawer"]//div[@data-testid="trolley-price"]//div');
        this.productHealthNBeauty = page.locator('//span[text()="Health & Beauty"]');
        this.productNotification = page.locator("//div[@data-testid='notification']");
        this.pdDeliveryText = page.locator("//*[@id='confirmation-helper']");
        this.rapidRadioButton = page.locator("(//section[text()='Rapid']/parent::span/../../../../../../..//span//input)[1]");

        //accounts menu
        this.lnkColesPlus = page.locator("//a[@identifier='coles_plus']");
        this.ordersBtn = page.locator("//a[@href='/account/orders']");


        // Partner delivery slots locators 
        this.btnTodaySlot = page.locator('//*[@data-testid="date-select-item-0-day"]')
        this.btnTomorrowSlot = page.locator('//*[@data-testid="date-select-item-1-day"]')
        this.samedayDropDown = page.locator("//*[@id='shopping-method-menu-item-1']");
        this.futuredateDropdown = page.locator("//*[@id='shopping-method-menu-item-0']");
        this.ccDropDown = page.locator("//*[@id='shopping-method-menu-item-2']");
        this.btnSetLocation = page.locator('//*[@data-testid="cta-secondary"]');

        this.attendedSameDaySlot = page.locator("//span[contains(text(), 'Up to 70 items')]//preceding-sibling::span//section[contains(text(), 'Same day')]//ancestor::span[contains(@class,'MuiTypography-root')]//preceding-sibling::span");
        this.attendedFutureDaySlot = page.locator("//span[contains(text(), 'Up to 70 items')]//preceding-sibling::span//section[contains(text(), 'Partner driver')]//ancestor::span[contains(@class,'MuiTypography-root')]//preceding-sibling::span");

        //logout
        this.accountButton = page.locator("//button[normalize-space()='Account']");
        this.logoutButton = page.locator("//span[normalize-space()='Log out']");

        //Category Cross Sell
        this.categoryCrossSellSection = page.locator("//h3[text()='You might also like these']");
        this.ccsSku = page.locator("//h3[text()='You might also like these']/following-sibling::div//*[@data-testid='unit']//h2");
        this.promotedCCSProductaddButton = page.locator("//h3[text()='You might also like these']/following-sibling::div//*[@data-testid='product-tile']//li[text()='Promoted']/ancestor::div[2]/following-sibling::div//div[@data-testid='add-to-cart']");

        //search Product
        this.firstProductName = page.locator('(//button[@data-testid="add-to-cart-button"]//ancestor::section/child::div/following-sibling::div//header//div//h2)[1]');
        this.firstProductPrice = page.locator('(//button[@data-testid="add-to-cart-button"]//ancestor::section/child::div/following-sibling::div/following-sibling::div//span[@data-testid="product-pricing"])[1]');

        this.shopProducts = page.locator('//span[text()="Shop products"]');
        this.searchButtonSuggDropdown = page.locator("//button[@data-testid='search-box-search-button']").nth(1);

        //account
        this.accountBtn = page.locator("//button[contains(text(),'Account')]");
        this.accountFlyBuyOption = page.locator("//span[text()='Flybuys']")
        this.closeExpiredSlotBtn = page.locator('//button[@aria-label="close dialog Your delivery slot expired"]');
        // Set shopping method notification box and drawer

        this.deliveryAddressContent = page.locator('//div//span[text()="Delivery "]');
        this.whenBtn = page.locator('//span[text()="When"]');
        this.setLocationBtn = page.locator('//button[@data-testid="delivery-selector-button"]');
        //popUP drawer locators
        this.whenSuitsYouText = page.locator('//div[text()="Your shop. Your way."]');
        this.closeWhenSuitsYouDrawer = page.locator('//button[@data-testid="drawer-close-button"]/child::span');
        this.loginOrSignUpTitle = page.locator('//h1[text()="Log in or sign up"]');


        this.viewOrderBtn = page.locator('(//div[@aria-labelledby="orders-label-1"]//child::li/descendant::button[@data-testid="order-details-button"])[1]');
        this.reorderItemsBtn = page.locator('//button[@data-testid="reorder-items-btn"]');
        this.pastOrdersBtn = page.locator("//a[text()=' Past orders']");
        this.pastOrderProd = page.locator('//span[@data-testid="product_in_trolley__title"]');
        this.productInTrolley = page.locator('//a[@data-testid="product_in_trolley__title"]');
        this.searchDropdown = page.locator('//input[@id="search-text-input"]');
        this.productSuggestion = '(//div[@class="product__info"])';
        this.firstLitItemMenu = page.locator('(//button[@data-testid="burger-menu-anchor-button"])[1]');
        this.removeListItem = page.locator('//div[@data-testid="popper-content"]//span[text()="Remove list"]');
        this.verifyRemoveListItem = page.locator('//h1[@data-testid="modal-title"]');
        this.removeListBtn = page.locator('//div[@data-testid="modal-actions-container"]//button//span[text()="Remove list"]');

        this.autoCorrectedSearchHeading = page.locator("//h1[@data-testid='page-header'][contains(text(),'Did you mean')]");
        this.autoSearchTermSubmit = page.locator("//div[contains(@class,'search-box-select__indicators mui-style')]/button[@type='submit']");
        //For Restricted Item
        this.restrictedItemTimeSlot = page.locator('(//h3[text()="Evening"]/parent::div/following-sibling::div//span//input)');
        //For Saving Item, Single SKU, multi SKU
        this.addSavingItemBtn = page.locator('(//span[@data-testid="badge-wrapper"]/ancestor::div[@class="product__cta_section"]//div[@data-testid="add-to-cart"])[1]');
        this.addSingleSKUitemBtn = page.locator('(//div[@data-testid="offers"]/ancestor::section//div[@data-testid="product-tile-cta-content"]/child::div//div[@data-testid="add-to-cart"])[1]');
        this.clickOnMultiSKUbtn = page.locator('(//div[@data-testid="offers"]//child::span//button[@data-testid="complex-promotion-link"])[2]');
        this.title = page.locator('//h1[@data-testid="modal-title"]');
        this.addMultiSKUitemBtn = page.locator('(//ul[@data-testid="promo-product-tiles"]//child::div[@data-testid="add-to-cart"])[1]');
        this.multiSKUproductQuantity = page.locator('//ul[@data-testid="promo-product-tiles"]//child::div[@data-testid="add-to-cart"]//input[@data-testid="quantity-input"]');
        this.multiSKUmodalContinueShoppingBtn = page.locator('//div/child::div[@data-testid="modal-actions-container"]//button[@data-testid="modal-continue-shopping-button"]');
        //Trolley 
        this.firstTrolleyProductPrice = page.locator('(//div[@data-testid="drawer-body-trolley-drawer"]//child::section//div//span)[1]');
        this.secondTrolleyProductPrice = page.locator('(//div[@data-testid="drawer-body-trolley-drawer"]//child::section//div//span)[2]');
        this.freeDeliveryNotificationTxt = page.locator('//div[@data-testid="free-delivery-notification"]');
        this.deliveryFeeFreeTxt = page.locator('//div[@data-testid="delivery-fee-wrapper"]//p[text()="Free"]');
        this.deliveryFeeTxt = page.locator('//div[@data-testid="delivery-fee-wrapper"]//p[text()="$8.00"]');
        this.subTotalButton = page.locator('//div[@data-testid="trolley-price-details"]/button');
        this.totalProductQuantityIndicator = page.locator('//div//child::div[text()="6"]');
        this.firstTrolleyProductQuantity = page.locator('(//select[@data-testid="quantity-picker-select"])[1]');
        this.secondTrolleyProductQuantity = page.locator('(//select[@data-testid="quantity-picker-select"])[2]');
        this.quantityText = page.locator("//fieldset[@data-testid='quantity-utils']//div//label//span");
        this.whenButtonTxt = page.locator('//button[@data-testid="how-and-when-button"]//span//child::div//child::div[text()="When"]');
        this.trolleyProductImage = page.locator('//div[@data-testid="product_in_trolley__image"]//img');
        this.trolleySavePill = page.locator('//div[@data-testid="product_in_trolley__image"]//ancestor::ul//span[@data-testid="badge-wrapper"]');
        this.removeTrolleyProduct = page.locator('//div[@data-testid="remove-utils"]//button');
        this.productDetailsTxt = page.locator('//h2[text()="Product details"]');
        this.bbOnlyProductSuggestion = '//div[@data-testid="bb-tag"]/following-sibling::a/child::span';
        this.specialsOnlyProductSuggestion = page.locator('//div[@class="price__was"]/parent::div/parent::section/preceding-sibling::a/child::span');
        this.allSearchSuggestionsProduct = '//ul[@data-testid="related-product-tiles"]/descendant::span[@class="product__title"]';
        this.complexPromoModal = page.locator('(//div[contains(@class,"ModalHeader")])[1]');
        this.complexModalTitles = page.locator('(//button[@data-testid="minus-btn"])[2]/ancestor::div[@class="product__cta"]/preceding-sibling::header//child::span[@class="product__title"]');
        this.addToCartBtn = page.locator('(//button[@data-testid="add-to-cart-button"])[1]');
        this.tobaccoBanner = page.locator('//div[@data-testid="tobacco-quitline-banner"]');
        this.daysOfLifeMsg = page.locator('//span[@data-testid="product_tile_daysOfLife"]');
        this.subTotalPrice = page.locator('//div[@data-testid="trolley-price"]//div');
        this.savePrice = page.locator('//div[@data-testid="trolley-price-details"]//section');
        this.trolleyHeaderPrice = page.locator('//button[@data-testid="header-trolley-tablet-up"]//span//span');
        this.itemSavedPrice = page.locator('//div[@data-testid="product_in_trolley__image"]//following-sibling::section//div//span[@data-testid="badge-wrapper"]');
        this.totalSavedPrice = page.locator('//div[@data-testid="trolley-price-details"]//span//section');
        this.halfPriceProduct = page.locator('//*[contains(@class,"is-half-price")]//parent::span[@data-testid="simple-fixed-price-specials"]//ancestor::section[@data-testid="product-tile"]//child::div[@class="product__cta_section"]//button[@data-testid="add-to-cart-button"]');
        this.specialProduct = page.locator('//*[contains(text(),"SPECIAL")]//parent::span[@data-testid="simple-fixed-price-specials"]//ancestor::section[@data-testid="product-tile"]//child::div[@class="product__cta_section"]//button[@data-testid="add-to-cart-button"]');
        this.morningSlot = page.locator('//span[text()="7:00am to 9:00am"]');
        this.unAvailableProductRemoveBtn = page.locator('//P[@data-testid="product_in_trolley__validation_desc"]//following-sibling::div//button[text()="Remove"]');
        
        //All product (The Product that we cann add to the trolley)
        this.productDetails = page.locator('//button[@data-testid="add-to-cart-button"]//ancestor::section/child::div/following-sibling::div//header//div//h2');
        this.verifyProductDetailsText = page.locator('//div[@data-testid="section-header"]//h2[text()="Product details"]');
        this.individualProductPrice = page.locator('//span[@data-testid="pricing"]');
        this.retailLimit  = page.locator('//p[@data-testid="retail-limit"]');
    }


    async closeModalWindow() {
        if (await this.btnCloseModal.isVisible()) {
            await this.btnCloseModal.click({ force: true });
        }
    }

    /**
     * Close Confirm time for click and collect Modal
     */
    async closeConfirmTimeModel() {
        if (await this.btnCloseDialogConfirmTime.isVisible()) {
            await this.btnCloseDialogConfirmTime.click({ force: true });
        }
    }

    async removeAllTrolleyItemsAtOnce() {
        console.log('Click on Trolley button to open it.');
        await this.btnTrolley.click({ timeout: 9000 });
        console.log('Entering empty icon');
        await this.loginPage.waitToCompleteAction(8000);
        if (await this.btnRemoveAllItems.isVisible()) {
            await this.btnRemoveAllItems.scrollIntoViewIfNeeded();
            await this.btnRemoveAllItems.click({ force: true });
            await this.btnCnfRemoveAllItems.click({ force: true });
            await this.loginPage.waitToCompleteAction(8000);
            if (expect(await this.loginPage.getByText('Your trolley is empty')).toBeVisible({ timeout: 6000 })) {
                await this.btnCloseTrolley.click({ timeout: 5000 });
            }
        }
        await this.loginPage.waitToCompleteAction(8000);
        if (await this.btnCloseTrolley.isVisible()) {
            await this.btnCloseTrolley.click();
        }

    }

    async setShoppingMethodAsHomeDelivery() {
        await this.closeDraWer();
        await this.closeModalWindow();
        await this.closeModalWindowDel();
        await expect(this.btnDeliverySelector).toBeVisible();
        await this.btnDeliverySelector.click({ force: true });
        await this.page.waitForTimeout(5000);
        if (await this.btnDeliverySelector.isVisible()) {
            await this.btnDeliverySelector.click({ force: true });
        }
        await expect(this.ddnDeliveryMethod).toBeVisible();
        await this.ddnDeliveryMethod.click();
        //await expect(this.page.locator('span', { hasText: 'Delivery' })).toBeVisible();
        await this.page.locator('span', { hasText: 'Delivery' }).last().click();
        await this.closeModalWindow();
    }

    async setShoppingMethodAsClickAndCollect(userCreation = 'existing') {
        await this.closeDraWer();
        await this.closeModalWindow();
        await this.closeModalWindowDel();
        await expect(this.btnDeliverySelector).toBeVisible();
        await this.btnDeliverySelector.click({ force: true });
        await this.page.waitForTimeout(5000);
        if (await this.btnDeliverySelector.isVisible()) {
            await this.btnDeliverySelector.click({ force: true });
        }
        await expect(this.ddnDeliveryMethod).toBeVisible();
        await this.ddnDeliveryMethod.click();
        await this.page.locator('span', { hasText: 'Click & Collect' }).last().click();

        if (userCreation === 'existing') {
            await this.editHdAddressButton.isVisible()
            await this.editHdAddressButton.click();
        }
        await this.closeModalWindow();
    }

    async setHomeDeliveryAddress(userCategory = "existing", searchTerm = '10 Shetland Street, Endeavour Hills VIC 3802', location = '10 Shetland Street, Endeavour Hills VIC 3802', userType = 'b2c') {
        if (await this.btnJustBrowsing.isVisible()) {
            await this.btnJustBrowsing.click();
        }
        if (await this.btnContinueShopping.isVisible()) {
            await this.btnContinueShopping.click();
        }
        await this.deliveryAndSlotSelectBtn.click();
        if (userCategory != "newUser") {
            await this.editButton.click();
        }
        await this.deliveryBtn.click();
        await this.deliveryAddressField.isVisible({ timeout: 180000 });
        await this.deliveryAddressField.click();
        await this.deliveryAddressField.fill(searchTerm);
        if (userCategory === 'DOL') {
            await this.loginPage.getByText(location).nth(0).click();
        }
        else {
            await this.loginPage.getByText(location).click();
        }
        if (userType === 'b2c') {
            await this.btnSetAddress.scrollIntoViewIfNeeded();
            await this.btnSetAddress.click();
        }
    }

    async selectHomeDeliverySlot(userType = 'b2c', slotType = 'nonPd') {
        await this.closeModalWindow();
        if (userType != 'b2c') {
            await this.pickSlotButton.scrollIntoViewIfNeeded();
            await expect(this.pickSlotButton).toBeVisible();
            await this.pickSlotButton.click();

            if (slotType == 'nonPd') {
                //selecting next week slot
                await this.page.waitForTimeout(6000);
                await expect(this.nextWeekWindow.last()).toBeVisible();
                await this.nextWeekWindow.last().click();
            }

        }
        else {
            await this.deliveryAndSlotSelectBtn.click();
        }
        await this.page.waitForTimeout(3000);
        await expect(this.ccDay.last()).toBeVisible();
        await this.ccDay.last().click({ force: true });
        //await this.ccTimeSlot.nth(0).click();
        if (slotType != 'nonPd') {
            await expect(this.partnerDriverslot).toBeVisible();
            await this.partnerDriverslot.click();
            await expect(this.pdDeliveryText).toBeVisible();
        }
        else {
            await this.page.waitForTimeout(3000);
            await this.timeSlot.last().click({ force: true });
        }
        console.log("Click on the time range");
        await expect(this.confirmButton.last()).toBeVisible();
        await this.confirmButton.last().click({ force: true });
        console.log("book the slot");
        await this.loginPage.waitToCompleteAction(5000);
        if (await this.loginPage.getByText('Continue shopping').isVisible()) {
            await expect(this.loginPage.getByText('Continue shopping')).toBeEnabled({ timeout: 10000 });
            await this.loginPage.getByText('Continue shopping').click();
        }
        await this.loginPage.waitToCompleteAction(5000);
        if (await this.loginPage.getByText('Checkout').isVisible()) {
            await expect(this.loginPage.getByText('Checkout')).toBeEnabled({ timeout: 10000 });
            await this.loginPage.getByText('Checkout').click();
        }

    }

    /**
     * Select Partner delivery slot from DSS page
     */
    async selectPDDeliverySlot(UserCategory, searchTerm, location, slotType, orderType, DeliveryType) {
        if (await this.btnJustBrowsing.isVisible()) {
            await this.btnJustBrowsing.click();
        }
        if (await this.btnContinueShopping.isVisible()) {
            await this.btnContinueShopping.click();
        }
        await this.deliveryAndSlotSelectBtn.click();
        if (UserCategory != "newUser") {
            await this.editButton.click();
        }
        if (orderType == 'CC') {
            await this.clickAndCollect.click();
            await this.clickAndCollectAddressField.isVisible({ timeout: 180000 });
            await this.clickAndCollectAddressField.click();
            await this.selectStoreLocation(dataset.ClickAndCollectTypeSab, dataset.ClickAndCollectSelectSab, dataset.ClickAndCollectStoreSab);
        }
        else {
            await this.deliveryBtn.click();
            await this.deliveryAddressField.isVisible({ timeout: 180000 });
            await this.deliveryAddressField.click();
            await this.deliveryAddressField.fill(searchTerm);
            await this.loginPage.getByText(location).click();
        }
        if (orderType != 'CC') {
            await this.btnSetAddress.scrollIntoViewIfNeeded();
            await this.btnSetAddress.click();
        }
        await this.page.waitForTimeout(6000);
        await this.deliveryAndSlotSelectBtn.click();

        if (slotType == 'Same day' || slotType == 'Rapid') {
            if (DeliveryType == 'AttendedSameDay') {
                console.log("Clicking on Same day attended slot...");
                if (await this.ddnDeliveryMethod.isVisible() == true) {
                    await this.page.waitForTimeout(2000);
                    await this.samedayDropDown.isVisible({ timeout: 180000 });
                    await this.samedayDropDown.click({ force: true });
                    await this.attendedSameDaySlot.first().click();
                }
                await this.btnTodaySlot.click();
                await this.attendedSameDaySlot.first().click();
            }
            if (DeliveryType != 'AttendedSameDay') {
                console.log(("Clicking on Unattended") + " " + (slotType) + " " + "slot...");
                if (await this.ddnDeliveryMethod.isVisible() == true) {
                    await this.page.waitForTimeout(2000);
                    await this.samedayDropDown.isVisible({ timeout: 180000 });
                    await this.samedayDropDown.click();
                    await this.loginPage.selectPDSlotbyText(slotType).click();
                }
                await this.btnTodaySlot.click();
                await this.loginPage.selectPDSlotbyText(slotType).click();
            }
        }
        if (slotType == 'Partner driver') {
            if (DeliveryType == 'AttendedSameDay') {
                console.log("Clicking on future date attended slot..");
                if (await this.ddnDeliveryMethod.isVisible() == true) {
                    await this.page.waitForTimeout(2000);
                    await this.futuredateDropdown.isVisible({ timeout: 180000 });
                    await this.futuredateDropdown.click({ force: true });
                    await this.attendedFutureDaySlot.first().click();
                }
                await this.btnTomorrowSlot.click();
                await this.attendedFutureDaySlot.first().click();
            }
            if (DeliveryType != 'AttendedSameDay') {
                console.log("Clicking on Unattended future date slot...");
                if (await this.ddnDeliveryMethod.isVisible() == true) {
                    await this.page.waitForTimeout(2000);
                    await this.futuredateDropdown.isVisible({ timeout: 180000 });
                    await this.futuredateDropdown.click();
                    await this.loginPage.selectPDSlotbyText(slotType).click();
                }
                await this.btnTomorrowSlot.click();
                await this.loginPage.selectPDSlotbyText(slotType).click();
            }
        }
        if (slotType == 'CCRapid') {
            console.log("Clicking on Rapid Click & Collect slot...");
            if (await this.ddnDeliveryMethod.isVisible() == true) {
                await this.page.waitForTimeout(2000);
                await this.ccDropDown.isVisible({ timeout: 180000 });
                await this.ccDropDown.click();
                await this.loginPage.selectPDSlotbyText("Rapid").click();
            }
            await this.btnTodaySlot.click();
            await this.loginPage.selectPDSlotbyText("Rapid").click();
        }
        await expect(this.loginPage.getByText('Confirm')).toBeEnabled({ timeout: 60000 });
        await this.loginPage.getByText('Confirm').click();
        await this.loginPage.getByText('Continue shopping').click({ timeout: 60000 });
    }


    async closeDraWer() {
        await this.page.waitForTimeout(3000);
        if (await this.btnCloseDrawer.isVisible()) {
            await this.btnCloseDrawer.click();
        }
    }

    /**
     * Method to close receipes popup.
     */
    async closePopup() {
        if (await this.btnClosePopup.isVisible()) {
            await this.btnClosePopup.click();
        }
    }
    async setShoppingMethod(shoppingTypeHDorCC) {
        let locator;
        let assertionLocator;
        if (shoppingTypeHDorCC === 'CC') {
            locator = this.clickAndCollect;
            assertionLocator = this.deliveryAndSlotSelectBtn;

        } else {
            locator = this.homeDelivery;
            assertionLocator = this.deliveryAndSlotSelectBtn;

        }
        await expect(assertionLocator).toBeVisible();
        await this.selectShoppingType(locator);
    }

    async selectShoppingType(shoppingType) {
        await expect(this.lnkBoughtBefore).toBeEnabled();
        await this.closeDraWer();
        await this.closeModalWindow();
        await this.closeConfirmTimeModel();
        await this.closeModalWindow();
        console.log('Close shopping type button is enabled ? : ', await this.btnCloseshopingType.isVisible());

        if (await this.shoppingTypeContainer.isVisible()) {
            await expect(this.editShoppingType).toBeEnabled({ timeout: 20000 })
            await this.editShoppingType.hover();
            await this.editShoppingType.click({ force: true });
            await shoppingType.click();
        }
        else if (await shoppingType.isVisible()) {
            await shoppingType.click();
        }
    }

    async selectStoreLocation(searchTerm, location, storeName) {
        const waStore = ['Riverto', 'Riverton, WA 6148', 'Coles Riverton'];
        const nswStore = ['West Albury', 'West Albury, NSW 2640', 'Coles Albury'];
        await this.closeModalWindow();
        await this.inputSearchSuburb.fill(searchTerm);
        await this.loginPage.getByText(location).click();
        await this.loginPage.getByText(storeName).nth(0).click();
        await this.loginPage.getByText('Set location').click();
    }

    async selectCCSlot() {
        await this.closeModalWindow();
        await this.deliveryAndSlotSelectBtn.click();
        await this.ccDay.click();
        await this.ccTimeSlot.nth(0).click();
        await this.loginPage.getByText('Confirm').click();
        await this.loginPage.getByText('Continue').click();
    }

    async closeModalWindowDel() {
        if (await this.btnCloseDeliveryPreference.isVisible()) {
            await this.btnCloseDeliveryPreference.click();
        }
    }

    async openSearchBar() {
        await this.searchTxt.clear();
        await this.searchTxt.click();

    }

    async searchProduct(product = 'Redwin') {
        await this.searchTxt.clear();
        await this.searchTxt.fill(product);
        var expectedProductHeader = 'Results for "' + await this.searchOption.textContent() + '"';
        console.log("expectedProductHeader -- ", expectedProductHeader);
        await this.searchOption.click();
        await expect(this.searchResultHeader).toBeVisible({ timeout: 90000 });
        await this.searchResultHeader.isVisible({ timeout: 90000 });
        await this.loginPage.waitToCompleteAction(3000);
        await this.closePopup();

    }
    /**
     * Search for autocorrected search term
     * @param {*} SearchTerm - Auto corrected search term
     */
    async autoCorrectedSearchTerm(searchTerm) {
        await this.searchTxt.clear();
        await this.searchTxt.fill(searchTerm);
        console.log("SearchTerm entered is -", searchTerm);
        var expectedHeader = 'Did you mean "' + await this.searchOption.textContent() + '"?';
        console.log("expectedProductHeader -- ", expectedHeader);
        await this.searchOption.click();
        await expect(this.page.locator('//p[@data-testid="alternative-result-message"]/a[text()="' + searchTerm + '"]')).toBeVisible();
        await this.loginPage.waitToCompleteAction(5000);
        await this.closePopup();
    }

    /** Method to search product without validating suggestions */

    async searchProductWithoutSuggestions(product) {
        await this.searchTxt.clear();
        await this.searchTxt.fill(product);
        await this.searchButtonOnSearchWindow.click();
        await this.loginPage.waitToCompleteAction(4000);
        await this.page.keyboard.press('Escape');
        await expect(this.searchResultHeader).toBeVisible({ timeout: 90000 });
        await this.searchResultHeader.isVisible({ timeout: 90000 });
        await this.loginPage.waitToCompleteAction(3000);
        await this.closePopup();

    }
    /**
        * Method to add product to trolley from Product details page & HYC
        * @param {} quantity - Amount of product to be added
        * @param {} productCategoryType - By defualt it is set to pdp, pass hyc or other specific type while calling.
    */
    async addProductToTrolley(quantity, productCategoryType = "pdp") {
        if (productCategoryType === "hyc") {
            expect(await this.addHYCToCart.nth(0)).toBeVisible({ timeout: 90000 });
            await this.addHYCToCart.nth(0).click({ timeout: 60000 });
            await this.inputHYCQuantity.nth(0).fill(quantity);
            console.log('Adding quantity of Product to trolley for HYC -: ', quantity);
            await this.loginPage.waitToCompleteAction(60000);
            if (await this.complexPromo.isVisible() === true) {
                console.log('ComplexPromo window is visible and click on ContinueToCheckout');
                await this.complexPromoContToCheckout.click({ timeout: 90000 });
            }
        }
        else {
            console.log('Adding quantity of Product to trolley -: ', quantity);
            expect(await this.addButton.nth(0)).toBeVisible({ timeout: 90000 });
            await this.addButton.nth(0).click({ timeout: 90000 });
            await this.inputQuantity.nth(0).fill(quantity);
        }

    }

    /**
     * Adding Promoted product to cart
     */
    async addingPromotedProductToCart(quantity) {
        await this.addPromotedSKUToCart.first().isVisible();
        await this.addPromotedSKUToCart.nth(0).click({ timeout: 60000 });
        await this.addQuantity.nth(0).fill(quantity);
        if (await this.complexPromo.isVisible() === true) {
            console.log('ComplexPromo window is visible and click on ContinueToCheckout');
            await this.complexPromoContToCheckout.click({ timeout: 90000 });
        }
    }

    /**
     * Adding Shoppable product to cart
     */
    async addingShoppableProductToCart(quantity) {
        await this.removeAllTrolleyItemsAtOnce();
        if (await this.addShoppableSKUToCart.nth(1).isVisible() == true) {
            await this.addShoppableSKUToCart.nth(1).click({ timeout: 5000 });
        }
        await this.page.waitForTimeout(5000);
        await this.addShoppableSKUToCart.nth(0).isVisible();
        await this.addShoppableSKUToCart.nth(0).click({ timeout: 5000 });
        await this.inputQuantity.nth(0).fill(quantity);
        await this.clickToOpenTrolley();
        await this.verifyTrolleyProductsDetails(await this.shoppableSKU.nth(0).innerText());
        await this.closeTrolley();
        await this.removeAllTrolleyItemsAtOnce();
    }

    /**
     * Adding CCS Promoted Product to trolley from L2
     */

    async addCCSPromotedProductToTrolley() {
        expect(await this.promotedCCSProductaddButton.nth(0)).toBeVisible({ timeout: 90000 });
        await this.promotedCCSProductaddButton.nth(0).click({ timeout: 90000 });
        console.log('Adding CCS Promoted Product to trolley via L2');
    }


    async addProductFromPdpToTrolley(quantity) {
        console.log('Adding quantity of Product to trolley -: ', quantity);
        expect(await this.addButton.nth(0)).toBeVisible({ timeout: 90000 });
        await this.addButton.nth(0).click({ timeout: 90000 });
        await this.inputQuantity.nth(0).fill(quantity);
    }

    async addProductToList() {
        expect(await this.addToListButton.nth(0)).toBeVisible({ timeout: 120000 });
        await this.addToListButton.nth(0).click();
    }

    /**
        * Finalising cart items from HYC and regular trolley
        * @param {} includeHyc - Optional Parameter, to be consider as Yes when calling for HYC or other
        * @param {} quantity - Number of the products to add to trolley
     */
    async finaliseCartItems(includeHyc = "No", quantity = 0, flag = "false") {
        console.log('Step - Finalize the cart items and navigate to checkout page.');
        if (await this.trolleyHeader.last().isVisible() == false) {
            await this.btnTrolley.click();
        }
        await this.loginPage.getByText('Checkout').click();
        await this.loginPage.waitToCompleteAction(8000);
        if (flag === true) {
            console.log("Verify the missing item pop up is visible or not..!!");
            await expect(this.loginPage.getByText('Missing anything?')).toBeVisible();
        }
        if (includeHyc == "Yes") {
            await expect(this.trolleyHeader.last()).toBeVisible();
            console.log('HYC section is visible');
            await expect(this.promotedProduct.first()).toBeEnabled();
            var count = await (this.promotedProduct).count();
            await expect(count).toBeLessThanOrEqual(8);
            console.log('Total promoted product count is', count);
            await this.addProductToTrolley(quantity, 'hyc');

        }
        console.log('Clicking on ContinueToCheckout to place Order');
        await this.loginPage.waitToCompleteAction(15000);
        if (await this.loginPage.getByText('Continue to checkout').isVisible() === true) {
            console.log("Click on the Continue to checkout button..!!");
            await this.loginPage.getByText('Continue to checkout').scrollIntoViewIfNeeded();
            await this.loginPage.getByText('Continue to checkout').click({ timeout: 15000 });

        }
    }

    async clickToOpenTrolley() {
        console.log('Clicking on Trolley to open it.');
        expect(await this.btnTrolley).toBeVisible({ timeout: 120000 });
        await this.btnTrolley.click({ timeout: 60000 });
    }

    async verifyTrolleyProductsDetails(expectedTrolleyProductName, expectedTrolleyProductPrice = null) {
        await expect(this.trolleyHeader).toBeVisible({ timeout: 300000 }).then(async () => {
            await this.trolleyHeader.textContent().then(async (trolleyText) => {
                if (await trolleyText != "Trolley") {
                    console.log("Inside Trolley and verify product details");
                    console.log("trollyproductprice : ", typeof (this.trolleyproductPrice.nth(0)));
                    await this.loginPage.verifyInnerText(this.trolleyProductName.nth(0), expectedTrolleyProductName);
                    if (expectedTrolleyProductPrice != null) {

                        await this.loginPage.verifyInnerText(this.trolleyproductPrice, expectedTrolleyProductPrice);
                    }
                }
                console.log('Trolley is empty, cannot verify products.');
            });
        });
    }

    async verifyTrolleyItemSavedToList() {
        console.info('Save trolly Items to list and verify notification and then navigate to list. ');
        await this.btnTrolleySaveToList.click();
        // await expect(this.lnkNotificationSaveToList).toBeVisible();
        await this.lnkNotificationSaveToList.click({ timeout: 90000 });
        await this.loginPage.waitToCompleteAction(5000);

    }

    async clickListsButton() {
        await expect(this.btnLists).toBeVisible();
        await this.btnLists.click();
    }

    async clickProductExplorerFruitsNVeg() {
        await this.productFruitsNVeg.click({ timeout: 60000 });
    }

    async getFirstProductTitle() {
        var prodTitle = await this.addButton.nth(0).locator('../../../../../..//h2').textContent();
        console.info('Product Title: ', prodTitle);
        return prodTitle;
    }

    async clickShoppingProductsLink() {
        await this.lnkShoppingProducts.click();
    }

    async navigateToProductFromAisle(category, item) {
        await this.page.locator('//div[@id="categories-navlist"]//a//span[text()="' + category + '"]').click();
        console.info('Catagory Selected is', category);
        await this.page.locator('//div[@id="sub-categories-navlist"]//a//span[text()="' + item + '"]').click();
        console.info('CatagoryL2 Selected is', item);
        await expect(this.txtProductCategoryHeader).toBeVisible({ timeout: 90000 }).then(async () => {
            let breadCrumb = item.replace(/\bAll\b\s*/, '');
            await expect(this.txtProductCategoryHeader).toHaveText(breadCrumb);
        });
    }
    /**
    * To open Category Level 2 & 3
    * @param {*} category - Category name of Level 2 & 3
    */
    async navigateToAisleL2L3(category) {
        console.info('Catagory Selected is', category);
        await this.page.locator('//div[@data-testid="navigation-list-scrollable"]//a/span/span[text()="' + category + '"]').click();

    }

    async sortHighToLowFilter() {
        await this.sortSelectButton.scrollIntoViewIfNeeded();
        await expect(this.sortSelectButton).toBeVisible();
        await this.sortSelectButton.click();
        await expect(this.priceHighToLowOption).toBeVisible();
        await this.priceHighToLowOption.click();
        await expect(this.page).toHaveURL(/priceDescending/, { timeout: 50000 });

    }

    async validateDisplayOfMinOrderNotification() {
        console.log('Step - Verify min order Notification');
        expect(this.notificationMinOrder.isVisible()).toBeTruthy();

    }

    async verifyIsCheckoutButtonDisabled() {
        console.log('Step - Verify Checkout button is disabled.');
        await expect(this.loginPage.getByText('Checkout')).toBeDisabled({ timeout: 180000 });
    }

    async verifyIsCheckoutButtonEnabled() {
        console.log('Step - Verify that checkout button is enabled.');
        await expect(this.loginPage.getByText('Checkout')).toBeEnabled({ timeout: 180000 });
    }

    async selectQuantityInTrolley(quantity) {
        console.log('Step - Select/Change quantity in trolley');
        await this.ddTrolleyQuantityPicker.selectOption(quantity);
    }

    async verifySelectedQuantityInTrolley(quantity, pageType = 'list') {
        console.log('Step - Verify selected quantity in trolley');
        console.log('quantity', quantity);
        if (pageType == 'list') {
            await expect(this.ddTrolleyQuantityPickerList).toHaveValue(quantity);
        }
        else {
            await expect(this.ddTrolleyQuantityPicker).toHaveValue(quantity);
        }

    }

    async verifyTrolleyQualifiesMinOrderValue() {
        expect(this.trolleyproductPrice).toBeGreaterThanOrEqual('$50.00');
        await this.verifyIsCheckoutButtonEnabled();
    }

    async logOutCustomer(userFlow = 'b2c') {
        if (await this.closeFormButton.isVisible({ timeout: 60000 })) {
            await this.closeFormButton.click();
        }
        await this.btnAccount.isVisible({ timeout: 120000 });
        await this.btnAccount.click();

        if (userFlow === 'b2bInviteShopper') {
            await expect(this.logoutButton).toBeVisible();
            await this.logoutButton.click();
            console.log("Logout!");
        }
        else {
            await this.loginPage.getByText('Log out').isVisible({ timeout: 120000 });
            await this.loginPage.getByText('Log out').click();
            console.log("Logout!");
            await this.page.waitForTimeout(8000);
        }

    }

    async closeTrolley() {
        console.info("Closing Trolley!");
        expect(await this.btnCloseTrolley).toBeVisible({ timeout: 90000 });
        await this.btnCloseTrolley.scrollIntoViewIfNeeded();
        await this.btnCloseTrolley.click({ force: true, timeout: 60000 });
    }

    async addandVerifyItemsinTrolley(productAdd, quantity) {
        await this.searchProduct(productAdd);
        const productname = await this.getFirstProductTitle();
        await this.addProductToTrolley(quantity);
        await this.clickToOpenTrolley()
        await this.verifyProductisaddedtothetrolley(productname)
        await this.closeTrolley()
    }

    async addAndVerifyItemsInTrolleyWithoutSearch(quantity) {
        const productName = await this.getFirstProductTitle();
        await this.addProductToTrolley(quantity);
        await this.clickToOpenTrolley()
        await this.verifyProductisaddedtothetrolley(productName)
        await this.closeTrolley()
    }

    async addAndVerifyItemInComplexPromoModal(productAdd) {
        await this.searchProductWithoutSuggestions(productAdd);
        const productName = await this.getFirstProductTitle();
        await this.searchedFirstProduct.nth(0).click();
        await this.addToCartBtn.click();
        await this.complexPromoModal.isVisible({ timeout: 120000 });
        await this.verifyProductIsInModal(productName);


    }

    async addProductToViewComplexModal() {
        await this.addToCartBtn.click();
    }

    async verifyProductIsInModal(productName) {
        const name = await this.complexModalTitles.innerText();
        await expect(name).toEqual(productName);

    }

    async verifyProductisaddedtothetrolley(headingname) {
        await expect(this.page.locator("(//span[contains(text(),'" + headingname + "')])[1]")).toBeVisible();

    }

    async addandVerifyPdpItemsinTrolley(productAdd, quantity) {
        await this.searchProduct(productAdd);
        const productname = await this.getFirstProductTitle();
        await this.addButton.nth(0).locator('../../../../../..//h2').click();
        await this.addProductToTrolley(quantity);
        await this.clickToOpenTrolley()
        await this.verifyProductisaddedtothetrolley(productname)
        await this.closeTrolley()

    }

    async addAndVerifyProductExplorerFruitsNVeg(quantity) {

        await this.productFruitsNVeg.click({ timeout: 60000 });
        const productname = await this.getFirstProductTitle();
        await this.addProductToTrolley(quantity);
        await this.clickToOpenTrolley()
        await this.verifyProductisaddedtothetrolley(productname)
        await this.closeTrolley()
    }

    async setClickAndCollectAddress(UserCategory = "existing", searchTerm = 'Elsternwick', location = 'Elsternwick, VIC 3185', userType = 'b2c') {
        if (await this.btnJustBrowsing.isVisible()) {
            await this.btnJustBrowsing.click();
        }
        if (await this.btnContinueShopping.isVisible()) {
            await this.btnContinueShopping.click();
        }
        await this.deliveryAndSlotSelectBtn.click();
        if (UserCategory != "newUser") {
            await this.editButton.click();
        }
        await this.clickAndCollectBtn.click();
        await this.clickAndCollectAddressField.isVisible({ timeout: 180000 });
        await this.clickAndCollectAddressField.click();
        await this.clickAndCollectAddressField.fill(searchTerm);
        await this.loginPage.getByText(location).click();
        await this.ccLocationSelect.first().click();
        if (userType === 'b2c') {
            await this.ccSetLocationBtn.scrollIntoViewIfNeeded();
            await this.ccSetLocationBtn.click();
        }
    }

    async openProductCategoryPageFromShopProduct(categoryName) {
        await this.shopProductCategory.getByText(categoryName).click();
    }

    async openLevelTwoCategoryPage(categoryName) {
        await this.shopProducCatLevelTwo.getByText(categoryName).click();
    }

    /**
     * Method to add product to list from PDP page.
     * @param {*} productAdd Product name to add in list.
     */
    async addProductToListFromPdp(productAdd) {
        await this.searchProduct(productAdd);
        const productname = await this.getFirstProductTitle();
        await this.addButton.nth(0).locator('../../../../../..//h2').click();
        await expect((this.addToListButton).nth(0)).toBeVisible();
        await this.addToListButton.nth(0).click();
    }

    async addAndVerifyProductToList(page) {
        let productname = "";
        if (page == 'PCP') {
            productname = await this.searchedFirstProduct.nth(0).innerText();
        }
        else if (page == 'PDP') {
            productname = await this.productTittleOnPDP.innerText();
        }
        await expect((this.addToListButton).nth(0)).toBeVisible();
        await this.addToListButton.nth(0).click();
        console.info("Added product to list!");
        await this.verifyProductInList(productname);
    }

    async verifyProductInList(productname) {
        await this.clickListsButton();
        await this.myList.click({ force: true });
        await this.loginPage.getByText(productname).isVisible();
        console.info("Verified product in list!");
    }

    async removeAllListItemsAtOnce() {
        await this.clickListsButton();
        await this.page.keyboard.press('Escape');
        await this.myList.click({ force: true });
        await this.page.waitForTimeout(9000);
        while (await this.btnRemoveListItem.isVisible()) {
            await this.page.waitForTimeout(3000);
            await this.btnRemoveListItem.click({ force: true });
            await this.page.waitForTimeout(6000);
        }
        await this.logoColes.click();
    }

    async addToCartAndVerifyProductsFromPDP(quantity) {
        const productName = await this.productTittleOnPDP.innerText();
        await this.addProductToTrolley(quantity);
        await this.clickToOpenTrolley();
        await this.verifyProductisaddedtothetrolley(productName);
        await this.closeTrolley();
    }

    async navigateToMagazine() {
        await this.linkMagazine.click();
    }
    /**
     * Validate the total trolley amount to check if it is greater than 150$ for
     * B2B Validate Pending Approval Scenario
     */

    async validateTotalTrolleyAmount() {
        console.log('Get trolley amount');
        console.log(await this.trolleytotalPrice.innerText());
        var totaltrolleyamnt = JSON.stringify(await this.trolleytotalPrice.innerText());
        var values = totaltrolleyamnt.replace(/[^0-9]/g, '');
        var amountValue = parseInt(values);
        amountValue = Math.floor(amountValue / 100);
        console.log('Amount Value', amountValue);
        if (amountValue >= 150) {
            console.log('Trolley Amount is greater than $150');
        }
        else {
            console.log('Trolley Amount is less than $150');
            console.log('Add More Items to the trolley');
            await this.closeTrolley()
            await this.loginPage.navigateToHomePage();
            await this.addAndVerifyProductExplorerFruitsNVeg('12');
            await this.clickToOpenTrolley();
            await this.validateTotalTrolleyAmount();
        }
    }


    async categoryCrossSell() {
        let ccsSection = false;
        for (let i = 0; i < 6; i++) {
            if (await this.categoryCrossSellSection.isVisible() == true) {
                await this.categoryCrossSellSection.scrollIntoViewIfNeeded();
                await (this.ccsSku.first()).isVisible({ timeout: 8000 });
                const crossSellSKU = await (this.ccsSku.first()).textContent();
                console.log('First CCS SKUs is-', crossSellSKU);
                await this.loginPage.waitToCompleteAction(5000);
                ccsSection = true;
                console.log('CCS SKUs are available');
                break;
            }
            else {
                await this.page.reload();
            }
        }
        if (ccsSection == false) {
            console.log("CCS Section is not available");
        }
    }

    /**
     * Verify unique skus are present in category cross sell
     */
    async verifyUniqueCCsSku() {
        const ccsList = [];
        const isRepeating = false;
        await this.ccsSku.nth(0).scrollIntoViewIfNeeded();
        let j = 0;
        if (await this.categoryCrossSellSection.isVisible() == true) {
            while (j < 6) {
                console.log("Page " + (j + 1) + ":");
                for (let i = 0; i < 5; i++) {
                    if (await this.ccsSku.nth(i).isVisible() == true) {
                        if (!ccsList.includes(await this.ccsSku.nth(i).textContent())) {
                            console.log(await this.ccsSku.nth(i).textContent());
                            ccsList[ccsList.length] = await this.ccsSku.nth(i).textContent();
                        }
                        else {
                            isRepeating = true;
                            break;
                        }
                    }
                    else {
                        if (i == 0) {
                            console.log('No CCS SKus available on this page');
                        }
                        break;
                    }
                }
                await expect(isRepeating).toBeFalsy();
                if (await this.paginationPage.paginationComponent.isVisible() == true) {
                    await this.paginationPage.paginationComponent.scrollIntoViewIfNeeded();
                    if (await this.paginationPage.paginationToEnd.getByText(j + 2).nth(0).isVisible() == true) {
                        await this.paginationPage.paginationToEnd.getByText(j + 2).nth(0).click();
                        await this.loginPage.waitToCompleteAction(5000);
                        j++;
                    }
                    else {
                        break;
                    }
                }
                else {
                    console.log("No pagination available");
                    break;
                }
                if (isRepeating == true) {
                    console.log('CCs Skus are not unique');
                    break;
                }
            }

            console.log("CCS Section has unique SKUs");
        }
        else {
            console.log("CCS Section is not available");
        }
    }


    //Method to go to Coles Plus dashboard/accounts page
    async goToColesPlus() {
        await this.btnAccount.click();
        await this.lnkColesPlus.click();
    }

    async getProduct(productName) {
        await this.searchTxt.clear();
        await this.searchTxt.fill(productName);

        var expectedProductHeader = 'Results for "' + await this.searchOption.textContent() + '"';
        console.log("expectedProductHeader -- ", expectedProductHeader);
        await this.searchOption.click();
        await expect(this.searchResultHeader).toBeVisible({ timeout: 90000 });
        await this.loginPage.waitToCompleteAction(3000);
        await this.closePopup();
        if (await this.addButton.nth(0).isVisible()) {
            var expectedFirstProduct = await this.firstProductName.textContent();
            console.log("Expected First Product is : " + expectedFirstProduct);
            var expectedFirstProductPrice = await this.firstProductPrice.textContent();
            console.log("Expected First Product Price is : " + expectedFirstProductPrice);
            console.log(typeof (expectedFirstProductPrice));
            await this.logoColes.click();
            return [expectedFirstProduct, expectedFirstProductPrice];
        }
    }
    async getAisleProduct(category, item) {
        await this.shopProducts.click();
        await this.page.locator('//div[@id="categories-navlist"]//a//span[text()="' + category + '"]').click();
        await this.page.locator('//div[@id="sub-categories-navlist"]//a//span[text()="' + item + '"]').click();
        await expect(this.txtProductCategoryHeader).toBeVisible({ timeout: 90000 }).then(async () => {
            let breadCrumb = item.replace(/\bAll\b\s*/, '');
            await expect(this.txtProductCategoryHeader).toHaveText(breadCrumb);
        });
        if (await this.addButton.nth(0).isVisible()) {
            var expectedFirstProduct = await this.firstProductName.textContent();
            console.log("Expected First Product is : " + expectedFirstProduct);
            var expectedFirstProductPrice = await this.firstProductPrice.textContent();
            console.log("Expected First Product Price is : " + expectedFirstProductPrice);
            await this.logoColes.click();
            return [expectedFirstProduct, expectedFirstProductPrice];
        }
    }
    /**
     * Method to validate invite is cancelled message when shopper tries to accept the invite(B2B).
     */
    async validateInviteCancelledMessage() {
        await expect(this.verifyInviteCancelled).toBeVisible();
    }

    /**
     * Method to validate request More link(B2B).
     */
    async validateRequestMoreLink() {
        await expect(this.requestMoreLink).toBeVisible();
        await this.requestMoreLink.click();
    }
    /**
     * Method to validate less than 200 form(B2B).
     */
    async validateLessThanForm() {
        await expect(this.lessthanbutton).toBeVisible();
        await this.lessthanbutton.click();
        await expect(this.lessThanDrawerContent).toBeVisible();
        await expect(this.orderFrequency).toBeVisible();
        await this.orderFrequency.click();
        await this.orderFrequency.selectOption('Weekly');
        await expect(this.listOfProducts).toBeEditable();
        await this.listOfProducts.fill("milk");
        await expect(this.lessThanCheckbox).toBeVisible();
        await this.lessThanCheckbox.click();
        await expect(this.lessThanSubmitButton).toBeEnabled();
        await this.lessThanSubmitButton.click();
        await expect(this.lessThanSucMsg).toBeVisible();
        await expect(this.btnContinueShopping).toBeVisible();
        await this.btnContinueShopping.click();
    }


    /**
     * Method to select more than 200 form option in the drawer(B2B).
     */
    async selectMoreThanForm() {
        await expect(this.morethanButton).toBeVisible();
        await this.morethanButton.click();

    }
    /**
     * Method to click on bulk ordre form in more than 200 form in the drawer(B2B).
     */
    async navigateToBulkOrderForm() {
        await expect(this.bulkOrderFormButton).toBeVisible();
        await this.bulkOrderFormButton.click();

    }



    //Method to go to Coles homepage by clicking on logo
    async goToHomePage() {
        await this.logoColes.click();
        await this.page.waitForURL('https://*.coles.com.au/');
    }

    //Method to navigate to Coles Plus Saver Landing page
    async goToColesPlusSaverLandingPage() {
        const currentUrl = await this.page.url();
        console.log("currenturl is " + currentUrl);
        await this.page.goto(currentUrl + dataset.urlColesPlusSaverLanding);
    }

    async closeExpiredSlotPopUp() {
        if (await this.closeExpiredSlotBtn.isVisible({ timeout: 90000 })) {
            await this.closeExpiredSlotBtn.click();
        }
    }
    //method to land on Delivery by default and set home delivery address
    async setToLandByDefaultHomeDelivery(searchTerm = '1-3 Burwood Highway, Burwood VIC 3125', location = '1-3 Burwood Highway, Burwood VIC 3125') {
        await this.loginPage.waitToCompleteAction(4000);
        await this.deliveryAddress.click();
        await this.deliveryBtn.click();
        await this.deliveryAddressField.isVisible({ timeout: 180000 });
        await this.deliveryAddressField.click();
        await this.deliveryAddressField.fill(searchTerm);
        await this.loginPage.getByText(location).click();
        if (searchTerm === location) {
            await this.btnSetAddress.scrollIntoViewIfNeeded();
            await this.btnSetAddress.click();
        }
        await this.loginPage.waitToCompleteAction(2000);
        await expect(this.page.getByText('Burwood'), 'Burwood address is setted').toBeVisible();
        await this.loginPage.waitToCompleteAction(2000);
        await this.whenBtn.click();
        await expect(this.loginOrSignUpTitle).toBeVisible();
    }
    /*check page is landing on delivery by default */
    /* set Homedelivery address '5 Leach Avenue, Riverton WA 6148'*/
    async setHomeDeliveryAddressAsUnAthenticatedUser(searchTerm = '5 Leach Avenue, Riverton WA 6148', location = '5 Leach Avenue, Riverton WA 6148') {
        await this.loginPage.waitToCompleteAction(8000);
        await this.deliveryAddress.click();
        await this.deliveryBtn.click();
        await this.deliveryAddressField.isVisible({ timeout: 10000 });
        await this.deliveryAddressField.click();
        await this.deliveryAddressField.fill(searchTerm);
        await this.loginPage.getByText(location).click();
        if (searchTerm === location) {
            await this.btnSetAddress.scrollIntoViewIfNeeded();
            await this.btnSetAddress.click();
        }
        await this.loginPage.waitToCompleteAction(2000);
        await expect(this.page.getByText('Riverton'), 'Riverton address is setted').toBeVisible();
    }
    /* Close when suits you drawer */
    async closePopUpwindow() {
        await this.page.waitForTimeout(5000);
        expect(this.whenSuitsYouText).toBeVisible({ timeout: 60000 });
        await this.closeWhenSuitsYouDrawer.click();
    }


    async navigateToOrdersPage() {
        await this.btnAccount.click();
        await this.ordersBtn.click();
    }

    async reorderAndVerifyCart() {
        await this.pastOrdersBtn.click();
        await this.viewOrderBtn.click();
        const pastOrderedProduct = await this.pastOrderProd.textContent();
        await this.reorderItemsBtn.click();
        await this.btnTrolley.click();
        const productNameInCart = await this.productInTrolley.textContent();
        await expect(pastOrderedProduct).toEqual(productNameInCart);
    }

    async openSearchDropdown() {
        await this.searchDropdown.click();
    }

    async validateSearchSuggestionRanking() {
        const searchSuggestionElements = await this.page.$$(this.productSuggestion);
        for (let i = 1; i <= searchSuggestionElements.length; i++) {
            let searchProdSuggestion = this.productSuggestion + '[' + i + ']';
            const text = await this.page.$$(searchProdSuggestion).innerText();
            const prodSuggestion = await this.page.$eval(searchProdSuggestion, (element) => {
                return element.querySelector('div[data-testid]') == null;
            });
            if (prodSuggestion) {
                await this.page.$$(searchProdSuggestion).click();
            }
        }
    }

    async setPartnerDeliveryAddress(UserCategory = "existing", searchTerm = '10 Shetland Street, Endeavour Hills VIC 3802', location = '10 Shetland Street, Endeavour Hills VIC 3802', userType = 'b2c') {
        if (await this.btnJustBrowsing.isVisible()) {
            await this.btnJustBrowsing.click();
        }

        if (await this.btnContinueShopping.isVisible()) {
            await this.btnContinueShopping.click();
        }

        await this.deliveryAndSlotSelectBtn.click();
        if (UserCategory != "newUser") {
            await this.editButton.click();
        }
        await this.deliveryBtn.click();
        await this.deliveryAddressField.isVisible({ timeout: 180000 });
        await this.deliveryAddressField.click();
        await this.deliveryAddressField.fill(searchTerm);
        await this.loginPage.getByText(location).click();
        if (userType === 'b2c') {
            await this.btnSetAddress.scrollIntoViewIfNeeded();
            await this.btnSetAddress.click();

        }
    }

    async selectPartnerDeliverySlot() {
        await this.deliveryAndSlotSelectBtn.click();
        await this.btnHomeDeliveryDay.click({ timeout: 60000 });
        console.log("Wait for Partner Deliver Badge to be visible");
        console.log("Click on the Partner Deliver time range");
        await this.partnerDriverslot.click();
        await expect(this.confirmButton).toBeVisible();
        await this.confirmButton.click();
        console.log("book the slot");
        await expect(this.loginPage.getByText('Continue shopping')).toBeEnabled({ timeout: 180000 });
        await this.loginPage.getByText('Continue shopping').click();
    }

    async closeDraWer() {
        if (await this.btnCloseDrawer.isVisible()) {
            await this.btnCloseDrawer.click();
        }
    }

    async selectRapidCCSlot() {
        await this.deliveryAndSlotSelectBtn.click();
        console.log("Click on the Rapid time range");
        await this.rapidRadioButton.click();
        await expect(this.confirmButton).toBeVisible();
        await this.confirmButton.click();
        await expect(this.continueShoppingButton).toBeVisible();
        await expect(this.loginPage.getByText('Continue shopping')).toBeEnabled({ timeout: 180000 });
        await this.loginPage.getByText('Continue shopping').click();
    }

    async closeDraWer() {
        if (await this.btnCloseDrawer.isVisible()) {
            await this.btnCloseDrawer.click();
        }
    }
    async clickAccountButton() {
        if (await this.accountBtn.isVisible({ timeout: 4000 })) {
            await this.accountBtn.click();
            await this.loginPage.waitToCompleteAction(1000);
            await this.accountFlyBuyOption.click();
        } else {
            console.log("Account button is not visible");
        }
    }
    async removeFirstListItem() {
        await this.loginPage.waitToCompleteAction(500);
        await this.btnLists.click();
        await expect(this.page).toHaveURL(/lists/, { timeout: 5000 });
        await this.loginPage.waitToCompleteAction(2000);
        await this.firstLitItemMenu.click();
        await this.loginPage.waitToCompleteAction(1000);
        if (await this.removeListItem.isVisible()) {
            await this.loginPage.waitToCompleteAction(1000);
            await this.removeListItem.click();
            expect(await this.verifyRemoveListItem).toBeVisible();
            await this.removeListBtn.click();
        }
        await this.loginPage.waitToCompleteAction(5000);
        await this.logoColes.click();
        await this.loginPage.waitToCompleteAction(15000);
    }

    async reloadPage() {
        await this.page.reload({ waitUntil: 'load' });
    }
    async selectTimeSlotForRestrictedItem() {
        await this.deliveryAndSlotSelectBtn.click();
        await this.ccDay.click();
        await this.restrictedItemTimeSlot.first().click();
        console.log("Click on the time range");
        await expect(this.confirmButton).toBeVisible();
        await this.confirmButton.click();
        console.log("book the slot");
        await expect(this.loginPage.getByText('Continue shopping')).toBeEnabled({ timeout: 180000 });
        await this.loginPage.getByText('Continue shopping').click();
    }

    async validateSearchSuggestedProductsType() {
        const expectedOrder = [];
        const bbOnlyProducts = await this.page.$$(this.bbOnlyProductSuggestion);
        for (const bbOnlyProduct of bbOnlyProducts) {
            const bbOnlyProductName = await bbOnlyProduct.innerText();
            expectedOrder.push(bbOnlyProductName);
        }

        const specialsOnlyProduct = await this.specialsOnlyProductSuggestion.innerText();
        expectedOrder.push(specialsOnlyProduct);

        const allProducts = await this.page.$$(this.allSearchSuggestionsProduct);
        const productArray = [];
        for (const allProduct of allProducts) {
            const product = await allProduct.innerText();
            productArray.push(product);
        }

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



    async validateTobaccoBannerIsPresentOnPCP() {
        await expect(this.tobaccoBanner).toBeVisible();
    }

    async validateDaysOfLifeMsgOnPCP() {
        await expect(this.daysOfLifeMsg.nth(0)).toBeVisible();
    }





    async addSavingItemProduct(product = 'Redwin', productType, quantity) {
        await this.searchTxt.clear();
        await this.searchTxt.fill(product);
        await this.searchOption.click();
        await this.loginPage.waitToCompleteAction(5000);
        await this.closePopup();
        if (productType == "save") {
            await this.addSavingItemBtn.click();
            await this.inputQuantity.nth(0).fill(quantity);
        }
        if (productType == "buy2For") {
            await this.addSingleSKUitemBtn.click();
            await this.inputQuantity.nth(0).fill(quantity);
        }
        if (productType == "pickany2") {
            await this.clickOnMultiSKUbtn.click();
            expect(await this.title).toBeVisible({ timeout: 3000 });
            await this.loginPage.waitToCompleteAction(2000);
            await this.addMultiSKUitemBtn.click();
            await this.multiSKUproductQuantity.fill(quantity);
            await this.multiSKUmodalContinueShoppingBtn.click();
        }
        if (productType == "halfPrice") {
            await this.halfPriceProduct.first().click();
            await this.inputQuantity.nth(0).fill(quantity);
        }
        if (productType == "specials") {
            await this.specialProduct.first().click();
            await this.inputQuantity.nth(0).fill(quantity);
        }
    }
    async getTrolleyProductPrice() {
        console.log("Dynamically take the trolley product price..!!");
        var expectedFirstTrolleyProductPrice = await this.firstTrolleyProductPrice.textContent();
        console.log("First Trolley Product Price : ", expectedFirstTrolleyProductPrice);
        var expectedSecondTrolleyProductPrice = await this.secondTrolleyProductPrice.textContent();
        console.log("Second Trolley Product Price : ", expectedSecondTrolleyProductPrice);
        return [expectedFirstTrolleyProductPrice, expectedSecondTrolleyProductPrice];
    }
    async verifyTrolleyProductPrice(expectedTotalPrice) {
        if (expectedTotalPrice >= "$200" && expectedTotalPrice < "$250") {
            expect(await this.freeDeliveryNotificationTxt).toBeVisible();
            console.log("successfully verify the free Delivery Notification..!!");
        } else if (expectedTotalPrice > "$250") {
            await this.subTotalButton.click();
            console.log("The Price is above 250$ ", expectedTotalPrice);
            await this.loginPage.waitToCompleteAction(8000);
            expect(await this.deliveryFeeFreeTxt).toBeVisible();
        } else if (expectedTotalPrice < "$200") {
            console.log("The Price is below $200 :", expectedTotalPrice);
            await this.subTotalButton.click();
            await this.loginPage.waitToCompleteAction(8000);
            expect(await this.deliveryFeeTxt).toBeVisible();
        } else {
            console.log("Something went wrong..!!");
        }
    }
    async verifyTrolleyProductQuantity(expectedTrolleyProductQuantity) {
        await this.loginPage.waitToCompleteAction(2000);
        await this.loginPage.verifyInnerText(this.quantityText, expectedTrolleyProductQuantity);
        await this.loginPage.waitToCompleteAction(1000);
        await this.loginPage.verifyInnerText(this.trolleyHeader, expectedTrolleyProductQuantity);
        await this.closeTrolley();
        console.log("successfully close the trolley..!!");
        await this.loginPage.waitToCompleteAction(3000);
        await this.loginPage.verifyInnerText(this.totalProductQuantityIndicator, expectedTrolleyProductQuantity);
    }
    async whenButtonTextVisibility() {
        await this.loginPage.waitToCompleteAction(1000);
        expect(await this.whenButtonTxt).toBeVisible();
    }
    async verifyTrolleyItem(expectedTrolleyProductQuantity, itemType) {
        await this.loginPage.waitToCompleteAction(3000);
        expect(await this.trolleyProductImage).toBeVisible();
        expect(await this.trolleyProductName).toBeVisible();
        await this.loginPage.waitToCompleteAction(2000);
        await this.loginPage.verifyInnerText(this.quantityText, expectedTrolleyProductQuantity);
        expect(await this.trolleyproductPrice).toBeVisible();
        if (itemType == "save") {
            await this.loginPage.waitToCompleteAction(2000);
            expect(await this.trolleySavePill).toBeVisible();
        }
        await this.loginPage.waitToCompleteAction(1000);
        expect(await this.removeTrolleyProduct).toBeVisible();
        await this.trolleyProductName.click();
        await this.loginPage.waitToCompleteAction(3000);
        expect(await this.productDetailsTxt).toBeVisible();
        await this.logoColes.click();
        await this.loginPage.waitToCompleteAction(5000);
        await this.clickToOpenTrolley();
        await this.loginPage.waitToCompleteAction(3000);
        await this.trolleyProductImage.click();
        await this.loginPage.waitToCompleteAction(2000);
        expect(await this.productDetailsTxt).toBeVisible();
    }
    async getSavingProductPriceFromTrolley(productType) {
        await this.loginPage.waitToCompleteAction(3000);
        var expectedFirstSavedProductPrice = await this.trolleyproductPrice.first().textContent();
        console.log("SubTotal Price is (First) : ", expectedFirstSavedProductPrice);
        var expectedSecondSavedProductPrice = await this.trolleyproductPrice.last().textContent();
        console.log("SubTotal Price is (Second) : ", expectedSecondSavedProductPrice);
        var expectedFirstSavedPrice = await this.itemSavedPrice.first().textContent();
        console.log("Item saved price is: ", expectedFirstSavedPrice);
        var expectedSecondSavedPrice = await this.itemSavedPrice.last().textContent();
        console.log("Item saved price is: ", expectedSecondSavedPrice);
        if (productType == "subTotal") {
            return [expectedFirstSavedProductPrice, expectedSecondSavedProductPrice];
        }
        if (productType == "save") {
            return [expectedFirstSavedPrice, expectedSecondSavedPrice];
        }
        if (productType == "removeFirstProduct") {
            return [expectedFirstSavedProductPrice, expectedFirstSavedPrice];
        }
    }
    async verifySubTotalPrice(priceLocation, expectedTotalPrice, expectedTotalSavedPrice) {
        if (priceLocation == "bottom") {
            await this.loginPage.verifyInnerText(this.subTotalPrice, expectedTotalPrice);
            console.log("successfully verified price..!!");
            expect(await this.totalSavedPrice).toHaveText(expectedTotalSavedPrice);
        }
        if (priceLocation == "top") {
            await this.loginPage.verifyInnerText(this.trolleyHeaderPrice, expectedTotalPrice);
            console.log("successfully verified price..!!");
        }
        if (priceLocation == "trolleyBottom") {
            await this.loginPage.verifyInnerText(this.subTotalPrice, expectedTotalPrice);
        }
    }
    async removeFirstItemInTrolley() {
        await this.removeTrolleyProduct.first().click();
        await this.loginPage.waitToCompleteAction(3000);
    }

    async slotSelectFromTrolley() {
        await this.clickToOpenTrolley();
        await this.loginPage.waitToCompleteAction(3000);
        await this.slotSelectorButton.click();
        await this.page.waitForTimeout(3000);
        await expect(this.ccDay.last()).toBeVisible();
        await this.ccDay.last().click({ force: true });
        await this.page.waitForTimeout(3000);
        await this.timeSlot.last().click({ force: true });
        console.log("Click on the time range");
        await expect(this.confirmButton.last()).toBeVisible();
        await this.confirmButton.last().click({ force: true });
        console.log("book the slot");
        await this.loginPage.waitToCompleteAction(8000);
        if (await this.loginPage.getByText('Continue shopping').isVisible()) {
            await expect(this.loginPage.getByText('Continue shopping')).toBeEnabled({ timeout: 10000 });
            await this.loginPage.getByText('Continue shopping').click();
        }
    }

    async getProductTotalPriceFromTrolley() {
        await this.loginPage.waitToCompleteAction(3000);
        var expectedTotalTrolleyPrice = await this.subTotalPrice.textContent();
        console.log("SubTotal Price is (First) : ", expectedTotalTrolleyPrice);
        return [expectedTotalTrolleyPrice];
    }
    async removeUnAvailabeProductFromTrolley() {
        await this.loginPage.waitToCompleteAction(2000);
        if (await this.unAvailableProductRemoveBtn.isVisible()) {
            await this.loginPage.waitToCompleteAction(1000);
            await this.unAvailableProductRemoveBtn.click();
        }
    }
    async clickProductExplorerMeatAndSeaFood() {
        await this.productMeatAndSeaFood.click({ timeout: 60000 });
    }
    async verifyProductAndAddToTrolley() {
        let productCategoryDetails = await this.productDetails.allInnerTexts();
        console.log(productCategoryDetails);
        let countOfAllProducts = await this.productDetails.count();
        let sum = 0;
        for (let i = 0; i <= countOfAllProducts; i++) {
            await this.productDetails.nth(i).click();
            await this.loginPage.waitToCompleteAction(4000);
            await expect(this.verifyProductDetailsText).toBeVisible();
            let price = await this.individualProductPrice.textContent();
            let limit = await this.retailLimit.textContent();
            let productRetailLimit = await limit.slice(13,);
            let productPrice = (((price.slice(1,))*(limit.slice(13,))).toFixed(2)).toString();
            let productTotalPrice = parseFloat(productPrice);
            sum = productTotalPrice + sum;
            console.log("Sum : "+sum);
            if(sum <= 50){
                await this.addButton.first().click();
                await this.inputQuantity.nth(0).fill(productRetailLimit);
                await this.loginPage.waitToCompleteAction(2000);
                await this.productFruitsNVeg.click();          
            }else if(sum >= 50){
                await this.addButton.first().click();
                await this.inputQuantity.nth(0).fill(productRetailLimit);
                await this.loginPage.waitToCompleteAction(2000);
                break;
            }else{
                console.log(sum);
            }
            continue;   
        }
    }
}


