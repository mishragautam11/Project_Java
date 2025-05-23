import { type } from 'os';
import { test, expect } from '../testFixtures/pageFixture';
//const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage.js");
const { HomePage } = require("../pages/homePage.js");

let product;

/**
 * Page objects for Lists Page.
 */
exports.ListPage = class ListPage {


    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.listHeader = page.locator('//h1');
        this.trolleyHeader = page.locator('//h2[@data-testid="drawer-heading"]');
        this.productTitle = page.locator('//div[@class="product__message-title_area"]//child::h2');
        this.productPricing = page.locator('//div[@class="product__cta_section"]//span[@data-testid="product-pricing"]');
        this.btnCreateList = page.locator('//button[@class="sc-8e7d0a17-0 bsxRkF coles-targeting-ButtonButton button"]');
        this.btnAddListToTrolly = page.locator('//div[@data-testid="list-header"]//button[@data-testid = "list-summary-price-add-list-to-trolley-button"]');
        this.listItemsInTrolley = page.locator('//div[contains(@class,"coles-targeting-ProductInTrolleyProductInfoWrapper")]//a[@class="product__link"]/span')
        this.listName = page.locator("//div[@data-testid='tiles-section']//h2");
        this.listTile = page.locator("//a[@aria-label='Visit list list']");
        this.quantityPicker = page.locator("//select[@data-testid='quantity-picker-select']");
        this.addButton = page.locator("//*[@data-testid='add-to-cart-button']");
        this.removeItem = page.locator("//*[@data-testid='remove-utils']");
        this.addToListTick = page.locator('//button[@data-testid = "list-button" and @data-icon = "tick"]');
        this.saveToListModal = page.locator('//h1[@data-testid="modal-title"]');
        this.goToListsButton = page.locator("//button//span[text()='Go to lists']");
        this.doneKeepShoppingBtn = page.locator("//span[text()='Done, keep shopping']");
        this.closeDialogSaveToList = page.locator("//button[@data-testid='close-button']");

        this.firstLitItemMenu = page.locator('(//button[@data-testid="burger-menu-anchor-button"])[1]');
        this.removeListItem = page.locator('//div[@data-testid="popper-content"]//span[text()="Remove list"]');
        this.verifyRemoveListItem = page.locator('//h1[@data-testid="modal-title"]');
        this.removeListBtn = page.locator('//div[@data-testid="modal-actions-container"]//button//span[text()="Remove list"]');
        this.saveToListBtnModal = page.locator('//div[starts-with(@data-testid,"list-tile")]//div[@data-testid="add-to-cart"]');
        this.saveToListNotification = page.locator("//div[@data-testid='list-add-notification-heading']");
        this.valueByDefault = page.locator("(//input[@data-testid='quantity-input' and @value='1'])[1]");
        this.createNewList = page.locator("//span[text()='Create new list']");
        this.listNameTextBox = page.locator("//div[@data-testid='list-name']/input");
        this.saveListBtn = page.locator("//button[@data-testid='save-button']");
        this.newListCreateMessage = page.locator("//div[@data-testid='notification']/div/div");
        this.cancelButton = page.locator("//button[@data-testid='cancel-button']");
        this.plusBtn = page.locator("//button[@data-testid='plus-btn']");
        this.minusBtn = page.locator("//button[@data-testid='minus-btn']");
        this.quantityChanger = page.locator("//input[@data-testid='quantity-input']");
        this.addToListButton = page.locator('//button[@data-testid = "list-button" and @data-icon = "list"]');
        this.logoColes = page.locator('//div[@data-testid="header-logo"]');
        this.productDetail = page.locator('//div[@data-testid="modal-description"]/div/p/span');
        this.totalNoOfLists = page.locator('//div[starts-with(@data-testid,"list-tile")]');
        this.allListItems = page.locator('//div[@class="product__message-title_area"]//h2');
        this.selectedProductDetail = page.locator('(//div[@class="product__message-title_area"]//div//h2)[1]');
        this.productNameInSaveModal = page.locator('//div[@data-testid="modal-description"]//div//p//span');
        this.noOfItemsInSaveModal = page.locator('(//div[starts-with(@data-testid,"list-tile")]//div//div)[1]');
        this.listHeading = page.locator('(//div//h2[contains(@class,"coles-ShoppingListTile-Title")])[1]');
        this.signUpHeader = page.locator('//h1[text()="Log in or sign up"]');
        this.selectProduct = page.locator('//div[@class="product__message-title_area"]//div//h2');
        this.cancelSignUp = page.locator('//span[text()="Cancel"]');
        this.allListsValues = page.locator('//input[@data-testid="quantity-input" and @value="1"]');
        this.dateOfBirth = page.locator("//input[@id='dob']");
        this.btnConfirmAge = page.locator("//button[@data-testid='confirm-age']");
        this.listBtn = page.locator("//button[@data-testid='header-shopping-lists']");
        this.productName = page.locator("//section[@data-testid='product-tile']//div//div//h2");
        this.dateOfBirth = page.locator("//input[@id='dob']");
        this.btnConfirmAge = page.locator("//button[@data-testid='confirm-age']");
        this.restrictedItemNotification = page.locator("//section[@data-testid='product-list-AgeRestriction']");
        this.cancelAgeNotification = page.locator("//span[text()='Cancel']");
        this.closeTrolley = page.locator("//button[@aria-label='Close dialog']");
        this.notAvailableErrorMessage = page.locator('//div[starts-with(text(),"You can replace them")]');
        this.createListBtn = page.locator("//span[text()='Create list']");
        this.createList = page.locator("//span[text()='Create']");
        this.quantityText = page.locator("//fieldset[@data-testid='quantity-utils']//div//label//span");
        this.addListToTrolleyBtn = page.locator('//button[@data-testid="shopping-list-tile-add-list-to-trolley-button"]');
        this.saveItemToSecondListBtn = page.locator('(//div[starts-with(@data-testid,"list-tile")])[2]//button[@data-testid="add-to-cart-button"]');
        this.listItemQuantity = page.locator('//input[@data-testid="quantity-input"]');
        this.btnTrolley = page.locator('//*[@data-testid="header-trolley-tablet-up"]');
        this.noItemInListText = page.locator('(//div[@data-testid="view-list-page"]//child::div[3]/div)[1]');
        this.dropDownForQuantityInList = page.locator('//select[@data-testid="quantity-picker-select"]');
        this.productPrice = page.locator('(//section[@data-testid="product_price"]/child::div//span)[2]');
        this.listEstimatedPrice = page.locator('//div[@data-testid="list-header"]//h6[@data-testid="estimated-total-number"]');
        this.addToListWithSaveOption = page.locator('(//span[@data-testid="badge-wrapper"]/ancestor::div[@class="product__cta_section"]//button[@data-testid="list-button"])[1]');
        this.firstSaveItemPriceInList = page.locator('(//span[@data-testid="badge-wrapper"]//parent::div//child::span[@data-testid="product-pricing"])[2]');
        this.secondSaveItemPriceInList = page.locator('(//span[@data-testid="badge-wrapper"]//parent::div//child::span[@data-testid="product-pricing"])[4]');
        this.addSavingItemBtn = page.locator('(//span[@data-testid="badge-wrapper"]/ancestor::div[@class="product__cta_section"]//div[@data-testid="add-to-cart"])[1]');
        this.inputQuantity = page.locator('//*[@data-testid="quantity-input"]');
        this.savingPriceItemFirstProduct = page.locator('(//div[@class="price"]//span[@data-testid="badge-wrapper"])[2]');
        this.savingPriceItemSecProduct = page.locator('(//div[@class="price"]//span[@data-testid="badge-wrapper"])[4]');
        this.totalSavingEstimatedPrice = page.locator('//div[@data-testid="list-header"]//child::div//span//section');
        this.quantityDropDowmForUnavailableItem = page.locator('//div[@data-testid="large-screen-currently-unavailable-prompt"]//parent::div//parent::div//div[@data-testid="product-lists-cta-wrapper"]//select');
        this.reviewItemScreen = page.locator('//h2[@data-testid="drawer-heading"]');
        this.unavailableProductAddToList = page.locator('//div[@data-testid="large-screen-currently-unavailable-prompt"]//parent::div//parent::div//div[@data-testid="product-lists-cta-wrapper"]//button[@data-icon="list"]');
        this.listBtnWithoutLogin = page.locator('//button[@data-testid="list-button"]');
        this.btnAddToList = page.locator('//button[@data-testid="list-button"]');
        this.btnList = page.locator('//button[@data-testid="header-shopping-lists"]');
        this.tobaccoList = page.locator('//h2[text()="My list"]/parent::div');
        this.tobaccoBanner= page.locator('//div[@data-testid="tobacco-quitline-banner"]');
        this.btnKeepShopping = page.locator('//span[contains(text(),"Done")]/parent::button');
        this.daysOfLifeMsg = page.locator('//span[@data-testid="product_tile_daysOfLife"]');
        this.inviteOtherPopUp = page.locator('//div[@data-testid="popper-content"]');
        this.closeInviteOtherPopup = page.locator('(//div[@data-testid="popper-content"]/parent::div/child::div//button)[2]');
    }

    async verifyAddedItemInListFromTrolley(expectedProductTitle, expectedProductPricing) {
        await this.loginPage.verifyInnerText(this.productTitle, expectedProductTitle);
        await this.loginPage.verifyInnerText(this.productPricing, expectedProductPricing);

    }

    async clickListItemHeader() {
        await this.listHeader.click();
    }

    async verifyTheListsPageDisplay() {
        const slowExpect = expect.configure({ timeout: 20000 });
        await slowExpect(this.loginPage.getByText('Your lists')).toBeVisible({ timeout: 30000 });
    }

    async verifyAddedListItemsToTrolley() {
        await this.page.locator('//div[starts-with(@data-testid,"shopping-list-tile-wrapper-trolley")]/a').nth(0).click().then(async () => {
            var allTextContents = await this.productTitle.nth(0).textContent();
            var myList = [];
            for (let i = 0; i < allTextContents.length; i++) {
                myList[i] = allTextContents[i];
            }
            var allinnerTextContents = await this.productTitle.allInnerTexts();
            console.info("All lists Items allinnerTextContents ", allinnerTextContents);
            await this.clickAddListToTrolleyButton();
            await expect(this.trolleyHeader).toBeVisible({ timeout: 120000 });
            await expect(this.listItemsInTrolley.nth(0)).toBeVisible({ timeout: 120000 });
            var allInnerTextOfListItemsInTrolley = await this.listItemsInTrolley.allInnerTexts();
            console.info("All lists Items allInnerTextOfListItemsInTrolley ", allInnerTextOfListItemsInTrolley);
            expect(allInnerTextOfListItemsInTrolley.sort()).toEqual(allinnerTextContents.sort());
        });
    }


    async clickProductItemFromList() {
        await this.productTitle.click();
    }

    async clickAddListToTrolleyButton() {
        await this.handleInviteOtherPopUp();
        await this.btnAddListToTrolly.click();
    }

    /**
     * Method to add excepmt product from list to card 999 items(b2b).
     */
    async addExcemptProductToCart() {
        await expect(this.listName).toContainText('list');
        await this.listTile.click();
        await this.homePage.addProductToTrolley('999');

    }

    /**
     * Method to remove product from list.
     */
    async removeItemFromList() {
        await expect(this.removeItem.nth(0)).toBeVisible({timeout:90000});
        await this.removeItem.nth(0).click({timeout:90000});

    }
    /**
     * Method to verify save to list modal in PDP 
     */

    async verifySaveToListModalInPdp() {
        await this.addButton.nth(0).locator('../../../../../..//h2').click();
        await expect((this.addToListButton).nth(0)).toBeVisible();
        await this.addToListButton.nth(0).click();
        await this.loginPage.waitToCompleteAction(2000);
        await this.addToListTick.nth(0).click();
        await expect(this.saveToListModal).toBeVisible();
        console.log("SaveToList modal is visible");
        await expect((this.saveToListBtnModal).nth(1)).toBeVisible();
        await this.saveToListBtnModal.nth(1).click();
        await expect(this.valueByDefault).toBeVisible();
        await this.loginPage.waitToCompleteAction(2000);
        expect(await this.saveToListNotification).toBeVisible();
        await expect(this.goToListsButton).toBeVisible();
        await expect(this.doneKeepShoppingBtn).toBeVisible();
        await this.closeDialogSaveToList.click();
        await this.logoColes.click();
    }
    /**
     * Method to create new list in Pdp.
     */
    async verifyCreateNewListInPdp() {
        let listName = "test121";
        await this.addButton.nth(0).locator('../../../../../..//h2').click();
        await expect((this.addToListButton).nth(0)).toBeVisible();
        await this.addToListButton.nth(0).click();
        await this.loginPage.waitToCompleteAction(2000);
        await this.addToListTick.nth(0).click();
        await this.createNewList.click();
        await expect(this.cancelButton).toBeVisible();
        await this.cancelButton.click();
        await this.saveListBtn.isHidden();
        await this.createNewList.click();
        await expect(this.listNameTextBox).toBeVisible();
        await this.listNameTextBox.click();
        await this.listNameTextBox.fill(listName);
        await this.saveListBtn.click();
        await expect(this.newListCreateMessage).toBeVisible();
        let newListText = await this.newListCreateMessage.innerText();
        let ActualListName = newListText.slice(17, 24);
        console.log(ActualListName);
        expect(ActualListName).toBe(listName);
        await this.closeDialogSaveToList.click();
        await this.logoColes.click();
    }
    /**
     * Method to check we are able to change quantity in save to list modal from list.
     */
    async verifyQuantityChangerInPdp() {
        await this.addToListButton.nth(1).click();
        await this.addToListButton.nth(2).click();
        await this.addButton.nth(0).locator('../../../../../..//h2').click();
        await expect((this.addToListButton).nth(0)).toBeVisible();
        await this.addToListButton.nth(0).click();
        await this.loginPage.waitToCompleteAction(2000);
        await this.addToListTick.nth(0).click();
        await expect(this.saveToListModal).toBeVisible();
        console.log("SaveToList modal is visible");
        await expect(this.plusBtn).toBeVisible();
        await this.plusBtn.click();
        const increasedQuantity = await this.quantityChanger.getAttribute('value');
        let increasedValue = parseInt(increasedQuantity);
        await expect(increasedValue).toEqual(2);
        await expect(this.minusBtn).toBeVisible();
        await this.minusBtn.click();
        const decreasedQuantity = await this.quantityChanger.getAttribute('value');
        let decreasedValue = parseInt(decreasedQuantity);
        await expect(decreasedValue).toEqual(1);
         product = await this.productDetail.innerText();
        console.log(product);

    }
    /**
     * Method to verify save to List modal in PCP .
     */
    async verifySaveToListModalInPcp() {
        await expect((this.addToListButton).nth(0)).toBeVisible();
        await this.addToListButton.nth(0).click();
        await this.loginPage.waitToCompleteAction(2000);
        await this.addToListTick.nth(0).click();
        await expect(this.saveToListModal).toBeVisible();
        console.log("SaveToList modal is visible");
        await expect(this.goToListsButton).toBeVisible();
        await expect(this.doneKeepShoppingBtn).toBeVisible();
        await this.closeDialogSaveToList.click();
        await this.logoColes.click();
    }
    /**
     * Method to verify item is removed from list.
     */
    async verifyItemRemovedInList() {
         await this.minusBtn.click();
         console.log(product);
        await this.closeDialogSaveToList.click();
        await this.chooseFirstList();
        await this.loginPage.waitToCompleteAction(3000);
        let items = await this.allListItems.allTextContents();
        console.log("All list items are :" ,items);
        var myList = [];
        for (let i = 0; i < items.length; i++) {
            myList[i] = items[i];
            if (myList[i] != product) {
                console.log("Product Name : " + myList[i]);
                console.log("Product not matched hence removed");
            } else {
                console.log("Product is present hence product is not removed");
            }
        }

    }
    /**
     * Method to veirfy item description from list.
     */
    async verifyItemDescriptionPdp() {
        await expect((this.addToListButton).nth(0)).toBeVisible();
        let product = await this.selectedProductDetail.innerText();
        console.log(product);
        await this.addToListButton.nth(0).click();
        await this.loginPage.waitToCompleteAction(2000);
        await this.addToListTick.nth(0).click();
        await expect(this.saveToListModal).toBeVisible();
        let productNameInModal = await this.productNameInSaveModal.innerText();
        console.log(productNameInModal);
        let noOfListItems = await this.noOfItemsInSaveModal.innerText();
        console.log("Total number of list Items are", noOfListItems);
        let totalLists = await this.totalNoOfLists.count();
        if (totalLists >= 1) {
            expect(product).toEqual(expect.stringMatching(productNameInModal));
        }
        else {
            console.log("List not available");
        }

    }
    /**
     * Method to verify Add To List Function without user login in PCP
     */
    async verifyAddToListWithoutLoginPcp() {
        await expect((this.addToListButton).nth(0)).toBeVisible();
        await this.addToListButton.nth(0).click();
        await expect(this.signUpHeader).toBeVisible();
        await this.cancelSignUp.click();
    }
    /**
     * Method to verify Add To List Function without user login in PDP
     */
    async verifyAddToListWithoutLoginPdp() {
        await this.selectProduct.first().click();
        await this.loginPage.waitToCompleteAction(2000);
        await expect(this.listBtnWithoutLogin).toBeVisible();
        await this.listBtnWithoutLogin.click({ force: true });
        await expect(this.signUpHeader).toBeVisible();
        await this.cancelSignUp.click();
        await this.logoColes.click();
    }
    /**
     * Method to verify quantity increased to 1 while added item to List  in Save To List Modal 
     */
    async verifyQuantityIncreased() {
        await expect(this.saveToListModal).toBeVisible();
        const increasedQuantity = await this.quantityChanger.first().getAttribute('value');
        let increasedValue = parseInt(increasedQuantity);
        if (increasedValue == 1) {
            await this.closeDialogSaveToList.click();
            await expect(this.addToListTick.first()).toBeVisible();
        }
    }
    /**
     * Method to verify tick component is working for item added in One list on PCP
     */
    async verifyTickComponentInPCPForOneList() {
        await this.addToListButton.first().click();
        await this.addToListTick.click();
        await this.verifyQuantityIncreased();
    }
    /**
 * Method to verify tick component is working for item added in One list on PDP
 */

    async verifyTickComponentInPDPForOneList() {
        await this.selectProduct.nth(1).click();
        await this.loginPage.waitToCompleteAction(1000);
        await this.addToListButton.click({ force: true });
        await this.addToListTick.click();
        await this.verifyQuantityIncreased();

    }
    /**
     * Method to verify verifying add to list tick is visible on PCP page  when added in more than 1 list
     */
    async verifyTickComponentForMoreThanOneListInPcp() {
        await expect(this.addToListTick.first()).toBeVisible();
        await this.addToListTick.first().click();
        await expect(this.allListsValues.first()).toBeVisible();
        await this.saveItemToSecondListBtn.click();
        await this.loginPage.waitToCompleteAction(500);
        console.log("Item added in another list");
        await this.closeDialogSaveToList.click();
        await expect(this.addToListTick.first()).toBeVisible();
    }

    /**
     * Method to verify verifying add to list tick is visible on PdP page  when added in more than 1 list
     */
    async verifyTickComponentForMoreThanOneListInPdp() {
        await this.selectProduct.first().click();
        await this.verifyTickComponentForMoreThanOneListInPcp();

    }
    /**
 * Method to add  product to list
 */
    async addRestrictedItemToList() {
        await expect(this.addToListButton.nth(1)).toBeVisible();
        await this.addToListButton.nth(1).click();
        await expect(this.saveToListNotification).toBeVisible();
        await this.loginPage.waitToCompleteAction(2000);
    }
    /**
 * Method to go to list button and choose first list
 */

    async chooseFirstList() {
        await this.handleInviteOtherPopUp();
        await this.listBtn.click();
        await this.loginPage.waitToCompleteAction(2000); 
        await this.listHeading.click({ force: true });
        await this.handleInviteOtherPopUp();
    }
    /**
 * Method to verify restricted item notofication while addidng list to trolley
 */
    async verifyRestrictedItemNotificationAddListToTrolley() {
        await this.chooseFirstList();
        await this.clickAddListToTrolleyButton();
        expect(await this.loginPage.getByText("You need to be of legal age to purchase restricted items. You’ll also need to show valid photo ID at pick up or delivery.").isVisible({ timeout: 30000 }));
        await this.cancelAgeNotification.click();
        await expect(this.restrictedItemNotification).toBeVisible();
        console.log("Restricted item notification verified");
        await this.closeTrolley.click();
    }
    /**
 * Method to enter date of birth
 */
    async enterDOBInAgeGate() {
        await this.dateOfBirth.fill("13022000");
        await this.btnConfirmAge.click();
    }
    /**
 * Method to verify added list items are present in trolley
 */


    async verifyAddedListItemsInTrolley() {
        await this.chooseFirstList();
        var allTextContents = await this.selectProduct.nth(0).textContent();
        var myList = [];
        for (let i = 0; i < allTextContents.length; i++) {
            myList[i] = allTextContents[i];
        }
        var allinnerTextContents = await this.selectProduct.allInnerTexts();
        console.info("All lists Items allinnerTextContents ", allinnerTextContents);
        await this.clickAddListToTrolleyButton();
        await this.enterDOBInAgeGate();
        await expect(this.trolleyHeader).toBeVisible({ timeout: 120000 });
        await expect(this.listItemsInTrolley.nth(0)).toBeVisible({ timeout: 120000 });
        var allInnerTextOfListItemsInTrolley = await this.listItemsInTrolley.allInnerTexts();
        console.info("All lists Items allInnerTextOfListItemsInTrolley ", allInnerTextOfListItemsInTrolley);
        expect(allInnerTextOfListItemsInTrolley.sort()).toEqual(allinnerTextContents.sort());
        await this.closeTrolley.click();
    }
    /**
 * Method to verify not available error message while adding currently unavailable product to trolley
 */
    async verifyNotAvailableErrorMessage() {
        if (await this.btnConfirmAge.isVisible()) {
            await this.enterDOBInAgeGate();
        }
        await this.loginPage.waitToCompleteAction(10000);
        await expect(this.notAvailableErrorMessage).toBeVisible();
        console.log("error message verified");
        await this.closeTrolley.click();

    }
    /**
 * Method to create  new list 
 */
    async creatingNewList() {
        let listName = "Test123";
        await this.listBtn.click();
        await this.loginPage.waitToCompleteAction(2000);

        await this.createListBtn.click();
        await this.listNameTextBox.click();
        await this.listNameTextBox.fill(listName);
        await this.createList.click();
        await this.logoColes.click();

    }
/**
 * Method to add item to list and increase quantity in save to list modal
 */
    async increaseQuantityOfProduct() {
        await this.addButton.nth(0).locator('../../../../../..//h2').click();
        await this.addToListButton.nth(0).click();
        await this.loginPage.waitToCompleteAction(1000);
        await this.addToListTick.nth(0).click();
        let quantity = "2";
        await this.inputQuantity.nth(0).fill(quantity);
        await this.closeDialogSaveToList.click();

    }
    /**
 * Method to add same list in trolley and verifying the quanity gets doubled in trollley 
 */
    async verifyQuantityInTrolleyGetsDoubled() {
        await this.chooseFirstList();
        await this.clickAddListToTrolleyButton();
        await this.loginPage.waitToCompleteAction(2000);
        expect(await this.quantityText.first()).toContainText("2 items");
        await this.closeTrolley.click();
        await this.chooseFirstList();
        await this.clickAddListToTrolleyButton();
        await this.loginPage.waitToCompleteAction(2000);
        expect(await this.quantityText.first()).toContainText("4 items");
        console.log("List got added again successfully");
        await this.closeTrolley.click();
    }
    /**
 * Method to add first product to list
 */
    async addFirstProductToList() {
        expect(await this.addToListButton.first()).toBeVisible();
        await this.addToListButton.first().click();
    }
    /**
 * Method to verify tick component is working for item added in One list on PDP
 */
    async clickOnFirstAddToTrolleyBtnInList() {
        await this.listBtn.click({ force: true });
        await this.loginPage.waitToCompleteAction(2000);
        await this.addListToTrolleyBtn.first().click();
    }
    /**
* Method to verify the quantity of first item in the list
*/
    async verifyQuantityInListForFirstItem() {
        if (await this.inputQuantity.isVisible()) {
        const quantityOfItem = await this.listItemQuantity.getAttribute('value');
        let increasedValue = parseInt(quantityOfItem);
        await expect(increasedValue).toEqual(3);
        }
        if(await this.quantityDropDowmForUnavailableItem.isVisible())
            await this.dropDownForQuantityInList.first().selectOption({ value: '3' });
        
        }
    /**
* Method to verify the quantity of item in the trolley
*/
    async verifyQuantityInTrolley() {
        console.log('Clicking on Trolley to open it.');
        expect(await this.btnTrolley).toBeVisible({ timeout: 120000 });
        await this.btnTrolley.click({ timeout: 60000 });
        expect(await this.quantityText.first()).toContainText("3 items");
        await this.closeTrolley.click();
    }
    /**
* Method to verify the item is removed from the list
*/
    async verifyNoItemInList() {
        expect(await this.noItemInListText).toContainText("0");
        console.log("Product is removed hence list is empty");
    }
    /** 
    *Changing quantity of a product in list detail page
    */
    async quantityChangeInListDetailPage() {
        await this.loginPage.waitToCompleteAction(3000);
        if (await this.inputQuantity.isVisible()) {
            await this.plusBtn.click();
            const quantityOfItem = await this.listItemQuantity.getAttribute('value');
            let increasedValue = parseInt(quantityOfItem);
            await expect(increasedValue).toEqual(4);
        }
         if(await this.quantityDropDowmForUnavailableItem.isVisible())
            await this.dropDownForQuantityInList.first().selectOption({ value: '4' });
        
        }
    
    /** 
    *Method to return product total price in form of array presented in list 
    */
    async verifyProductTotalPriceInList() {
        let listTotalPrice = await this.productPrice.textContent();
        console.log(listTotalPrice);
        return ([listTotalPrice]);
    }
    /** 
    *Method to add 2 different products in the list with specified quantity  
    */
    async addToListAndIncreaseQuantity() {
        let quantity = "4";
        await this.addFirstProductToList();
        await this.addToListTick.first().click();
        await this.inputQuantity.first().fill(quantity);
        await this.doneKeepShoppingBtn.click();
        await this.addToListButton.nth(1).click();
        await this.addToListTick.nth(1).click();
        await this.inputQuantity.nth(0).fill(quantity);
        await this.doneKeepShoppingBtn.click();
    }
    /** 
    *Method to return product prices in form of array presented in list  and update list is
     used as a parameter for 2 conditions i.e, when we are removing one item and else part is for
     when both the items are present in the list 
    */
    async getListProductPrice(updateList) {
        var firstProductInList = await this.firstSaveItemPriceInList.textContent();
        console.log(firstProductInList);
        if (updateList == "removeOneItem") {
            return [firstProductInList];
        } else {
            var secondProductInList = await this.secondSaveItemPriceInList.textContent();
            console.log(secondProductInList);
            return [firstProductInList, secondProductInList];
        }
    }
    /** 
    *Method to verify Total estimated Product Price for Saving discount as well as 
    without saving total Price  
    */

    async verifyProductPrice(userType = "withoutSave", expectedProductTotalPrice) {
        if (userType == "save") {
            await this.loginPage.verifyInnerText(this.totalSavingEstimatedPrice, expectedProductTotalPrice);
            console.log("estimated saving total price successfully verified..!!");
        }
        if (userType == "withoutSave") {
            await this.loginPage.verifyInnerText(this.listEstimatedPrice, expectedProductTotalPrice);
            console.log("successfully verified..!!");
        }
    }

    /** 
    *Method to get saving amount in the form of array for the products in the list and itemType is
    used as parameter to choose between singlt item and else part is for 2 items. 
    */

    async getSavingPriceOfItemInList(itemType) {
        var savingAmountForFirstItem = await this.savingPriceItemFirstProduct.textContent();
        console.log(savingAmountForFirstItem);
        if (itemType == "singleItem") {
            return [savingAmountForFirstItem];
        }
        else {
            var savingAmountForSecondtItem = await this.savingPriceItemSecProduct.textContent();
            console.log(savingAmountForSecondtItem);
            return [savingAmountForFirstItem, savingAmountForSecondtItem];
        }
 

    }
    /** 
    *Method to update the quantity to 1 from list dropdown   
    */
    async updatingQuantityFromListDropdown() {
        await this.dropDownForQuantityInList.first().scrollIntoViewIfNeeded();
        await this.dropDownForQuantityInList.first().selectOption({ value: '1' });
    }
    /** 
    *Method to verify review items screen in trolley
    */
    async verifyReviewItemScreen(){
        expect(await this.reviewItemScreen.first()).toBeVisible();
        console.log("Review item screen is visible");
    }
    /** 
    *Method to add currently unavailable prdouct to trolley
    */
    async currentlyUnavailableProductAddToList(){
        await this.unavailableProductAddToList.first().click();
        expect(await this.saveToListNotification).toBeVisible();
    }


    async validateTobaccoBannerIsPresentOnListPage(){
        await this.btnAddToList.nth(0).click();
        await this.btnList.click({force: true});
        await this.tobaccoList.click({force: true});
        await expect(this.tobaccoBanner).toBeVisible({timeout:12000});
    }

    async validateDaysOfLifeMsgOnListPage(){
        await this.btnAddToList.nth(1).click();
        await this.btnList.click({force: true});
        await this.tobaccoList.click({force: true});
        await expect(this.daysOfLifeMsg.nth(0)).toBeVisible({timeout:3000});
    }
    async handleInviteOtherPopUp(){
        await this.loginPage.waitToCompleteAction(2000);
        if(await this.inviteOtherPopUp.isVisible()){
            await this.loginPage.waitToCompleteAction(2000);
            await this.closeInviteOtherPopup.click();
        }
    }
}