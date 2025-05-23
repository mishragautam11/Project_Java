import { test, expect } from '../testFixtures/pageFixture';
const { LoginPage } = require("../pages/loginPage.js");


/**
 * Page objects for Checkout Page.[Starlord]
 */
exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.btnTrolley = page.locator('//*[@data-testid="header-trolley-tablet-up"]');
        this.reviewAndTrolleySubstitution = page.locator("(//span[@data-testid='step-2-label']");
        this.continueToYourDetails = page.locator("//button[@data-testid='complete-review-trolley-&-substitutions']");
        this.changeSubsitutions = page.locator("//button[normalize-space()='Change substitutions']");
        this.allowSubstitutionsCheckBox = page.locator('//div/parent::label[@data-testid="checkbox-item"]//div//span//input');
        this.placeOrderButton = page.locator("//button[@data-testid='place-order-button']");
        this.editButton = page.locator("//button[@data-testid='inspect-step-2']");
        this.quantityEditButton = page.locator('//button[@data-testid="inspect-step-2"]//span[text()="Edit"]');
        this.closedStepContent = page.locator('//button[text() = "Change substitutions"]');
        this.quantityPicker = page.locator('(//select[@data-testid="quantity-picker-select"])');
        this.continueShopping = page.locator('(//button[@data-testid="continue-shopping"])[1]');
        this.returnToTrolley = page.locator('//span[text()="Return to trolley"]');
        this.changeAddressBtn = page.locator('//button[text()="Change delivery address"]');
        this.changeAddressHyperLinkCC = page.locator('//button[text()="Change Click & Collect location"]');
        this.changeDeliverySlot = page.locator('//button[text()="Change delivery slot"]');
        this.changeClickAndCollectSlot = page.locator('//button[text()="Change Click & Collect slot"]');
        this.changeDeliveryType = page.locator('//button[text()="Change delivery type"]');
        this.deliveryAddressPopupClose = page.locator('//button[@data-testid="drawer-close-button"]');
        this.deliveryAddressHeader = page.locator('//h2[@data-testid="drawer-heading"]');
        this.slotHeader = page.locator('//h2[@data-testid="drawer-heading"]//div');
        this.trollyCloseButton = page.locator('//button[@data-testid="drawer-close-button"]');
        this.changeButton = page.locator('//button[@aria-label="Change your details"]');
        this.givenName = page.locator('//input[@id="first-name"]');
        this.familyName = page.locator('//input[@id="last-name"]');
        this.email = page.locator('//input[@id="email"]');
        this.completeDetailsButton = page.locator('//button[@data-testid="complete-contact-details"]');
        this.unattendedDelivery = page.locator('//h3[text()="Unattended delivery"]');
        this.continuetoPayment = page.locator('//span[text()="Continue to payment"]');
        this.clickOnTrolley = page.locator('//button[@data-testid="header-trolley-tablet-up"]');
        this.userDetails = page.locator('//h2[text()="Check your details"]');
        this.updateUserDetails = page.locator('//button[@data-testid="inspect-step-3"]');
        this.editUserDetailButton = page.locator('//button[@aria-label = "Edit your details"]');
        this.rapidBadgeStep1 = page.locator('//section[text() = "Rapid"]');
        this.partnerDeliveryBadge = page.locator('//section[text() = "Partner driver"]');
        this.disabledUnattendedDeliveryOption = page.locator('//div[@data-testid="delivery-options"]');
        this.restrictedGlobalSubstituteCheckbox = page.locator('//label[@data-testid="checkbox-item"]//div//span//input[@type="checkbox"]');
        //SVT locators for credit card
        //this.iFrameCCNumber = page.frameLocator('//*[@title="enter your card number"]');
        //this.iFrameCCV = page.frameLocator('//iframe[@title="three digit CCV security code"]');
        //this.iFrameExpiryMonth = page.frameLocator('//iframe[@title="expiry month"]');
        //this.iFrameExpiryYear = page.frameLocator('//iframe[@title="four digit expiry year"]');

        this.cardNumber = page.locator('//*[@id="number"]');
        this.expiryMonth = page.locator('//*[@id="expiryMonth"]');
        this.expiryYear = page.locator('//*[@id="expiryYear"]');
        this.cvv = page.locator('//*[@id="securityCode"]');
        this.btnPlaceOrder = page.locator("*[data-testid='place-order-button']");
        this.editPayemntMethod = page.locator('//*[@aria-label="Edit payment method"]');
        this.orderConfirmation = page.locator('//*[@data-testid="order-date"]');
        this.paymentConatiner = page.locator('*[id="radio-select-group-region-card"]');

        //SIT locators for credit card
        this.iFrameCCNumber = page.frameLocator('//iframe[@id="#card-number"]');
        this.iFrameCCV = page.frameLocator('//iframe[@id="#security-code"]');
        this.iFrameExpiryMonth = page.frameLocator('//iframe[@id="#expiry-month"]');
        this.iFrameExpiryYear = page.frameLocator('//iframe[@id="#expiry-year"]');
        this.rdoBaggageOption = page.locator('//div[contains(@data-testid,"card-radio-button-bagging-options")][1]');
        this.rdoBaggageOptionPaperBag = page.locator('//*[@data-testid="card-radio-button-bagging-options-16"]');
        this.rdoBaggageOptionNoBag = page.locator('//*[@data-testid="card-radio-button-bagging-options-1"]');
        this.rdoBaggageOptionSab = page.locator('//*[@data-testid="card-radio-button-bagging-options-32"]');
        this.paperBagSupportingDes=page.locator('//*[@id="bagging-option-description-16"]');
        this.swapSupportingDes=page.locator('//*[@id="bagging-option-description-32"]');
        this.trymeBadge=page.locator('//*[contains(text(),"Try me")]')

        this.continueToTrollySubButton = page.locator("//button[@aria-label='Continue to order summary']");
        this.deliveryText = page.locator("//h2[contains(text(),'Delivery,')]");
        this.clickAndCollectText = page.locator("//h2[contains(text(),'Click & Collect,')]");
        this.sapOrderLimitCloseButton = page.locator("//button[@data-testid='close-button']");
        this.continueShoppingLink = page.locator("//*[name()='polyline'][@stroke='currentColor']/preceding::button");
        this.sapModalMessage = page.locator("//h1[@data-testid='modal-title']");
        this.allowSubText = page.locator("//div/parent::div[@data-testid='step-2-content']//label[@data-testid='checkbox-item']");
        this.unattendedDeliveryDescriptionText = page.locator("//h3[text()='Unattended delivery']");
        this.packingPref = page.locator("//*[@data-testid='step-1-content']//div[10]");
        this.packingPrefCC = page.locator("//*[@data-testid='step-1-content']//div[6]");
        this.baggingOrderSummary = page.locator('//tr[@data-testid="line-item-bagging"]');
        this.orderId = page.locator("//div[@data-testid='order-date']/div");
        this.sabReturnReminder = page.locator("//div[@class='sc-de42142a-0 fmgXgC']");
        this.removeLink = page.locator('//button[contains(@data-testid,"promocode-remove")]');
        this.promoCodeInput = page.locator('//input[@id="promotion-code"]');
        this.applyPromoBtn = page.locator('//button[@data-testid="promocode-apply-button"]');
        this.substitutionItem = page.locator('//div//span[text()="Allow substitution"]');
        this.itemOneSubstitution = page.locator('(//div//span[text()="Allow substitution"])[1]');
        this.itemTwoSubstitution = page.locator('(//div//span[text()="Allow substitution"])[2]');
        this.itemThreeSubstitution = page.locator('(//div//span[text()="Allow substitution"])[3]');

        this.autoAppliedPromo = page.locator("//*[text() = 'FREE Delivery when you spend $250']");
        this.orderSummaryDiscount = page.locator("//*[text() = 'Discount']");
        this.editButtonOne = page.locator("(//span[@aria-hidden='false'][contains(.,'Edit')])[1]");
        this.unattendedDelivery = page.locator("(//input[contains(@type,'radio')])[2]");
        this.signForDelivery = page.locator("(//input[contains(@type,'radio')])[1]");
        this.closeButton = page.locator("//button[contains(@aria-label,'close dialog Some items in your trolley require you to sign for your order')]");
        this.cancelButton = page.locator("//button[contains(.,'Cancel')]");
        this.removeItems = page.locator("//button[contains(.,'Remove items')]");
        this.unattendedDeliveryOption = page.locator("//h3[contains(.,'Unattended delivery')]");
        this.clickUnattendedDelivery = page.locator("(//input[contains(@type,'radio')])[2]");
        this.reviewItemLink = page.locator("//button[contains(.,'Review items')]");
        this.backtoTrolley = page.locator(" //span[@aria-hidden='false'][contains(.,'Back to trolley')]");
        this.changePackingPreference = page.locator("//button[contains(.,'Change packing preference')]");
        this.noBags = page.locator("//input[@aria-describedby='bagging-option-description-1']");
        this.paperBags = page.locator("//input[contains(@aria-describedby,'bagging-option-description-16')]");
        this.orderSummaryPackingFee = page.locator("//td[contains(.,'Packing fee')]");
        this.trolleySubstitutionsButton = page.locator("//button[contains(.,'Continue to trolley & substitutions')]");
        this.continueShoppingButton = page.locator("(//button[contains(.,'Continue shopping')])[1]");
        this.returnToTrolleyButton = page.locator("//button[contains(.,'Return to trolley')]");
        this.signForDeliveryTxt = page.locator('//div//h3[text()="Sign for delivery"]');
        this.addMoreItemTxt = page.locator('//div//h1[@data-testid="modal-title"]');
        this.backToTrolleyBtn = page.locator('//button/parent::div//span[text()="Back to trolley"]');
        this.undoChangesBtn = page.locator('//button[@data-testid="undo-change-button"]//span');
        this.paymentEditBtn = page.locator('//span[text()="Edit"]//parent::button[@data-testid="inspect-step-4"]');
        this.differentCardBtn = page.locator('//div[@data-testid="card-payment-saved"]//child::button');
        this.firstProductPrice = page.locator('(//div[@class="price"]//parent::section//span)[1]')
        this.secondProductPrice = page.locator('(//div[@class="price"]//parent::section//span)[2]');
        this.totalPriceInTrolley = page.locator('(//tr[@data-testid="line-item-your-trolley"]//td)[2]');
        this.subTotalInSummary = page.locator('//tr[@data-testid="line-item-total"]//td[2]');
        this.placeOrderButton = page.locator('//button[@data-testid="place-order-button"]');
        this.trolleyAndSubstitutionBtn = page.locator('//button//span[text()="Continue to trolley & substitutions"]');
        this.savingProductPriceTxt = page.locator('(//div[@class="price"]//parent::section//span)[3]');
        this.totalPriceWithGST = page.locator('//tr[@data-testid="line-item-total"]//td[2]');
        this.linkCustomerAgreement = page.locator('//*[text()="Customer Agreement"]');
        this.avicciDiscountText = page.locator('//span[@data-testid="promocode-Coles Plus Saver October 10% off discount"]');
        this.avicciDiscountButton = page.locator('//*[text()="Apply discount"]');
        this.avicciDiscountApplied = page.locator('//*[text()="Your 10% discount will be applied. Final savings on invoice."]');
        this.avicciDiscountRemove = page.locator('//*[@data-testid="promocode-remove-COLES PLUS SAVER OCTOBER DISCOUNT"]');
        this.singleSKUStep2PriceVerify = page.locator('//*[@data-testid = "product-pricing"]');
    }



    async checkoutHomeDeliveryOrder() {
        const masterCardDetails = ["5555555555000018", "01", "2039", "100"];

        await this.btnTrolley.click();
        await expect(this.loginPage.getByText('Checkout')).toBeEnabled({ timeout: 60000 });
        await this.loginPage.getByText('Checkout').click();

        await expect(this.loginPage.getByText('Continue to checkout')).toBeEnabled({ timeout: 60000 });
        await this.loginPage.getByText('Continue to checkout').click();

        if (await this.loginPage.getByText('Continue to trolley & substitutions').isVisible() === true) {
            await expect(this.loginPage.getByText('Continue to trolley & substitutions')).toBeEnabled({ timeout: 60000 });
            await this.loginPage.getByText('Continue to trolley & substitutions').click();
        }

        if (await this.loginPage.getByText('Continue to your details').isVisible() === true) {
            await expect(this.loginPage.getByText('Continue to your details')).toBeEnabled({ timeout: 60000 });
            await this.loginPage.getByText('Continue to your details').click();
        }
        await this.enterCardDetails();
        await expect(this.loginPage.getByText('Continue to review order summary')).toHaveCount(0);
        await this.btnPlaceOrder.waitFor();
        await this.btnPlaceOrder.click();
        await this.page.waitForTimeout(80000);
        await expect(this.orderConfirmation).toBeEnabled({ timeout: 80000 });
    }

    /**
     * Method to checkout for a given UserType
     * @param {*} userType  - default value to parameter is existing for an existing user login,
     * send "newUser" when the script is creating a new user and performing the steps.
     */

    async checkout(userType = "existing", b2bUserCategory = "nonSapLimit", orderNumber = 'b2c',cardNumber,expirymonth,expiryyear,cvv) {
        await expect(this.page).toHaveURL(/checkout/, { timeout: 50000 });
        await this.confirmCheckoutProcess(userType,cardNumber, expirymonth, expiryyear, cvv);

        await this.page.keyboard.press("PageUp");
        await this.page.keyboard.press("PageUp");
        await this.page.waitForTimeout(5000);
        await expect(this.continueShoppingLink).toBeVisible();
        if (await this.page.locator("//div[@id='card-radio-button-delivery-options-1']").isVisible()) {
            await this.rdoBaggageOption.scrollIntoViewIfNeeded();
            await this.rdoBaggageOption.click();
            await this.loginPage.getByText('Continue to trolley & substitutions').click();
            await this.page.keyboard.press("PageDown");
            await this.page.waitForTimeout(3000);
        }
        if (await this.rdoBaggageOption.isVisible()) {
            await this.rdoBaggageOption.click();
            await this.loginPage.getByText('Continue to trolley & substitutions').click();
            await this.page.keyboard.press("PageDown");
        }
        await expect(this.btnPlaceOrder).toBeEnabled();
        await expect(this.btnPlaceOrder).toHaveCSS("background-color", "rgb(224, 26, 34)");
        await this.btnPlaceOrder.click();
        console.log("submitting order");
        await this.loginPage.waitToCompleteAction(3000);
        const iframe = await this.page.frameLocator('//iframe[@id="challengeFrame"]');
        if (await iframe.locator("//input[@id='acssubmit']").isVisible()) {
            await iframe.locator("//input[@id='acssubmit']").click({ timeout: 8000 });
            console.log("clicking on payment auth popup")
        }


        //Close feedback form
        if (b2bUserCategory != "nonSapLimit") {
            await this.validateSapOverlimit();
        }
        else {
            const iframeFeedback = await this.page.frameLocator('//iframe[@title= "Feedback Survey"]');
            await this.loginPage.waitToCompleteAction(15000);
            if (await iframeFeedback.locator('//button[@name="close"]').isVisible()) {
                await iframeFeedback.locator('//button[@name="close"]').click({ timeout: 8000 });
                console.log("Feedback survey");
            }
        }
        //capture order id from order confirmation page.
        if (orderNumber != 'b2c') {
            let orderId = await this.orderId.textContent();
            console.log("order id", orderId);
            return orderId;
        }
    }

    async confirmCheckoutProcess(userType,cardNumber, expirymonth, expiryyear, cvv) {
        let count = 1;
        let color = await this.getBackgroundColor(this.btnPlaceOrder);
        await this.enterCardDetails(userType,cardNumber, expirymonth, expiryyear, cvv);
        while (color === 'rgba(0, 0, 0, 0)' && count < 13) {
            await this.clickTheLocatorIfVisible(await this.continueToTrollySubButton);
            await this.clickTheLocatorIfVisible(await this.loginPage.getByText('Continue to your details'));
            await this.clickTheLocatorIfVisible(await this.loginPage.getByText('Continue to review order summary'));
            color = await this.getBackgroundColor(this.btnPlaceOrder);
            console.log("bg for placeorder button", color);
            count++;

        }

    }

    async getBackgroundColor(locator) {
        return await locator.evaluate((element) =>
            window.getComputedStyle(element).getPropertyValue('background-color'),
        );

    }


    async enterCardDetails(userType,cardNumber, expirymonth, expiryyear, cvv) {
        if (userType != "existing") {
            await expect(this.loginPage.getByText('Debit/credit card')).toBeVisible();
        }
        else {
            await this.loginPage.waitToCompleteAction(2000);
            await this.loginPage.getByText('Choose a payment method').isVisible();
        }
        if (await this.loginPage.getByText('Debit/credit card').isVisible()) {
            await this.loginPage.getByText('Debit/credit card').scrollIntoViewIfNeeded();
            await this.loginPage.waitToCompleteAction(5000);
            await this.iFrameCCNumber.locator(this.cardNumber).fill(cardNumber);           
            await this.iFrameExpiryMonth.locator(this.expiryMonth).selectOption(expirymonth);
            await this.iFrameExpiryYear.locator(this.expiryYear).selectOption(expiryyear);
            await this.iFrameCCV.locator(this.cvv).fill(cvv);
            await expect(this.loginPage.getByText('Continue to review order summary')).toBeEnabled();
            await this.loginPage.waitToCompleteAction(5000);
            await this.loginPage.getByText('Continue to review order summary').click();
        }

    }

    async clickTheLocatorIfVisible(locator) {
        if (await locator.isVisible()) {
            if (await locator.getAttribute('aria-hidden') == 'false') {
                await locator.click();
                await locator.waitFor({ state: "hidden" });
            }
        }

    }

    async clickTheLocatorIfEnabled(locator) {
        if (await locator.isEnabled())
            await locator.click();
    }

    async applySubstitution(userType = "existing") {

        if (userType != "existing") {
            await expect(this.loginPage.getByText('Continue to your details')).toBeVisible();
        }
        await this.page.waitForTimeout(4000);
        if (await this.continueToYourDetails.isVisible({ timeout: 120000 })) {
            await this.loginPage.waitToCompleteAction(2000);
            await this.continueToYourDetails.click();
        }
        await this.page.waitForTimeout(3000);
        await this.changeSubsitutions.click();
        console.log('Changing substitution choice.');
        await expect(this.allowSubText).toBeVisible({ timeout: 90000 });
        if (await this.allowSubstitutionsCheckBox.isVisible({ timeout: 90000 })) {
            if (await this.allowSubstitutionsCheckBox.isChecked() === false) {
                await this.allowSubstitutionsCheckBox.setChecked(true);
                await this.continueToYourDetails.scrollIntoViewIfNeeded({ timeout: 90000 });
                await this.loginPage.waitToCompleteAction(2000);
                if (await this.continueToYourDetails.isVisible()) {
                    await this.continueToYourDetails.click();
                }
            }
            else {
                await this.continueToYourDetails.scrollIntoViewIfNeeded();
                await this.continueToYourDetails.isVisible({ timeout: 120000 })
                await this.continueToYourDetails.waitFor({ timeout: 120000 });
                await this.loginPage.waitToCompleteAction(2000);
                if (await this.continueToYourDetails.isVisible()) {
                    await this.continueToYourDetails.click();
                }
            }
        }

    }

    async setBaggingPreference(baggagePreference = "clickAndCollect", bagging) {
        if (baggagePreference != "clickAndCollect") {
            await expect(this.deliveryText).toBeVisible({ timeout: 180000 });
        }
        else {
            await expect(this.clickAndCollectText).toBeVisible({ timeout: 180000 });
        }
        if (await this.loginPage.getByText('Continue to trolley & substitutions').isHidden() === true) {
            await this.loginPage.getByText('Change packing preference').click();
        }
        if (bagging == "paperBags") {
            await expect(this.rdoBaggageOptionPaperBag).toBeVisible();
            await this.rdoBaggageOptionPaperBag.isVisible({ timeout: 120000 });
            await this.rdoBaggageOptionPaperBag.click();
            await expect(this.paperBagSupportingDes.getByText('Now packed for you in shorter 100% recycled bags that carry the same weight as our standard paper bags while reducing product breakage')).toBeVisible();

        }
        else if (bagging == "saB") {
            await expect(this.rdoBaggageOptionSab).toBeVisible();
            await this.rdoBaggageOptionSab.isVisible({ timeout: 120000 });
            await this.rdoBaggageOptionSab.click();
            await expect(this.swapSupportingDes.getByText('Get your order in a reusable Swap-a-box for $2.00 per order at check out. Earn a $2.00 credit when you return the boxes to us.')).toBeVisible();
        } else {
            await expect(this.rdoBaggageOption).toBeVisible();
            await this.rdoBaggageOption.isVisible({ timeout: 120000 });
            await this.rdoBaggageOption.click();
        }
        await this.loginPage.getByText('Continue to trolley & substitutions').scrollIntoViewIfNeeded();
        await expect(this.loginPage.getByText('Continue to trolley & substitutions')).toBeVisible();
        await this.loginPage.waitToCompleteAction(2000);
        await this.loginPage.getByText("Continue to trolley & substitutions").click();
    }

    async validateSapAccountSummary() {
        await expect(this.loginPage.getByText("Coles for Business Credit Account")).toBeVisible();
        await expect(this.loginPage.getByText("Account number 0005029577")).toBeVisible();
    }

    async validateSapOverlimit() {
        await expect(this.sapModalMessage).toBeVisible();
        await expect(this.sapModalMessage).toHaveText("This order exceeds your credit account limit");
        await expect(this.sapOrderLimitCloseButton).toBeVisible();
        await this.sapOrderLimitCloseButton.click();
        await expect(this.continueShoppingLink).toBeVisible();
        await this.continueShoppingLink.click();
        await expect(this.loginPage.getByText('Return to trolley')).toBeVisible();
        await this.loginPage.getByText('Return to trolley').click();
    }

    /**
     * For CC bagging Preference handle
    */
    async setBaggingPreferenceCC() {
        await this.CCbaggingPreferenceBtn.click();
        await this.loginPage.getByText('Continue to trolley & substitutions').click();
    }

    /**
     * For B2B Shopper account to validate Pending approval
     */
    async validatePendingApproval() {
        console.log('Validate if the order showing pending approval from Admin if the order amount is greater than $100');
        await expect(this.loginPage.getByText('Your order is pending approval by your admin')).toBeVisible({ timeout: 100000 });
    }

    /**
     * For validating the bagging preference and its price in order summary
     */
    async validateBaggingOrderSummary(serviceType1) {
        await this.page.waitForTimeout(30000);

        await this.baggingOrderSummary.isVisible();
        var baggingSummary = await this.baggingOrderSummary.textContent()
        var orderSummaryBagAmount = baggingSummary.split('$');
        if (serviceType1 == "homeDelivery") {
            var baggingSection1 = await this.packingPref.textContent()

        } else if (serviceType1 == "clickaAndCollect") {
            var baggingSection1 = await this.packingPrefCC.textContent()
        }

        if (orderSummaryBagAmount[0] === 'Packing fee'&& orderSummaryBagAmount[1] === '1.50') {

            console.log("The selected bagging preference ", baggingSection1, " is updated in order summary, with price : ", orderSummaryBagAmount[1]);

        }else if(orderSummaryBagAmount[0] === 'Swap-a-box'&& orderSummaryBagAmount[1] === '2.00') 
            {

            console.log("The selected bagging preference ", baggingSection1, " is updated in order summary, with price : ", orderSummaryBagAmount[1]);
        }
    }

    /**
     * For validating the return reminder for swap-a-box in order confirmation page for CC orders
     */
    async validateSabReturnReminder() {
        let baggingSummary = await this.baggingOrderSummary.textContent({ timeout: 60000 })
        console.log(baggingSummary);
        if (baggingSummary === "Swap-a-box$2.00") {
            await this.sabReturnReminder.isVisible()
            console.log("The return reminder for swap-a-box is displayed")
        }
    }


    /**
  * For New user verifying step-2 should get opened and able to modify the quantity
  */

    async quantityModification() {
        const changeQuantity = ["5"];
        await expect(this.loginPage.getByText('Review trolley & substitution')).toBeVisible({ timeout: 10000 });

        console.log('Step-2 Review trolly & Substitution is closed')
        await this.page.waitForTimeout(500);
        if (await this.quantityEditButton.isVisible()) {
            await this.quantityEditButton.click();
            await this.page.waitForTimeout(1000);
            const quantity = await this.quantityPicker.selectOption(changeQuantity[0]);
            console.log('Quantiy Increased- ' + quantity)
            await this.loginPage.getByText('Continue to your details').click();
        }
        else {
            const quantity = await this.quantityPicker.selectOption(changeQuantity[0]);
            console.log('Quantiy Increased- ' + quantity)
            await this.loginPage.getByText('Continue to your details').click();
        }

    }
    /**
   * For Existing user navingated back to trolly 
   */
    async backTotrolley() {
        await this.loginPage.waitToCompleteAction(4000);
        await this.continueShopping.click();
        await this.loginPage.waitToCompleteAction(4000);
        await this.returnToTrolley.click();
        await this.loginPage.waitToCompleteAction(4000);
        await this.trollyCloseButton.click();
    }

    /**
   * For Existing user address change through hyperlink on step-1  
   */
    async changeAddress(userType = 'cc') {
        if (userType != 'cc') {
            await this.changeAddressBtn.click();
            await expect(this.page).toHaveURL(/browse/, { timeout: 15000 });
            await expect(this.deliveryAddressHeader).toBeVisible();
            await this.deliveryAddressPopupClose.click();
            await this.clickOnTrolley.click();
        }
        if (userType == 'cc') {
            await this.changeAddressHyperLinkCC.click();
            await expect(this.page).toHaveURL(/browse/, { timeout: 15000 });
            await expect(this.deliveryAddressHeader).toBeVisible();
            await this.deliveryAddressPopupClose.click();
            await this.clickOnTrolley.click();
        }

    }

    /**
   * For Existing user change slot through hyperlink on step-1  
   */
    async changeSlot(userType = 'cc') {
        if (userType != 'cc') {
            await this.changeDeliverySlot.click();
            await expect(this.page).toHaveURL(/browse/, { timeout: 15000 });
            await expect(this.slotHeader).toBeVisible();
            await this.deliveryAddressPopupClose.click();
            await this.clickOnTrolley.click();
        }
        if (userType == 'cc') {
            await this.changeClickAndCollectSlot.click();
            await expect(this.page).toHaveURL(/browse/, { timeout: 15000 });
            await expect(this.slotHeader).toBeVisible();
            await this.deliveryAddressPopupClose.click();
            await this.clickOnTrolley.click();
        }
    }

    /**
    * For Existing user change Delivery type through hyperlink on step-1  
    */

    async changeDelivery() {
        await this.changeDeliveryType.click();
        await expect(this.page).toHaveURL(/checkout/, { timeout: 15000 });
        if (await this.unattendedDelivery.isChecked() === true) {
            console.log("Unattended delivery type is selecte by default");
            await expect(this.unattendedDeliveryDescriptionText).toBeVisible();
        }
        else {
            await this.unattendedDelivery.click();
            await expect(this.unattendedDelivery).toBeChecked();
            if (await this.loginPage.getByText('Continue to trolley & substitutions').isVisible() === true) {
                await expect(this.loginPage.getByText('Continue to trolley & substitutions')).toBeEnabled({ timeout: 15000 });
                await this.loginPage.getByText('Continue to trolley & substitutions').click();
            }
            
        }
    }

    /**  For Existing/New user to verify that able to modify
    step-3 for HD and if shopping type is CC then user not able to modify details.*/
    async checkDetails(shoppingType = "hd") {
        if (shoppingType === "cc") {
            
            await this.updateUserDetails.click();
            console.log(" User not able to modify the details")
            await this.continuetoPayment.click();
        }
        if (shoppingType != "cc") {
            await expect(this.userDetails).toBeVisible();
            await this.updateUserDetails.click();
            await this.changeButton.click();
        }
    }


    /**  For Existing user modify step-3  for HD */

    async changeUserDetails(userGivenName, userFamilyName, userEmail) {
        await this.givenName.fill(userGivenName);
        await this.familyName.fill(userFamilyName);
        await this.email.fill(userEmail);
        await this.completeDetailsButton.click()

    }

    async applyAndValidatePromotion(promocode) {
        if (await this.removeLink.isVisible()) {
            await this.removeLink.click();
        }
        await this.promoCodeInput.fill(promocode);
        await this.applyPromoBtn.click();
        await expect(this.loginPage.getByText('Applied promotions')).toBeVisible();
    }

    /**
    * For validating Partner Delivery tag and fee on checkout page  
    */
    async validateDeliveryTypeAndFee(slotType, orderType, DeliveryType) {
        if (orderType != 'CC') {
            if (slotType == 'Same day' || slotType == 'Partner driver') {
                await expect(this.page).toHaveURL(/checkout/, { timeout: 15000 });
                await this.changeDeliveryType.scrollIntoViewIfNeeded();
                await this.changeDeliveryType.click();
                if (DeliveryType == 'AttendedSameDay') {
                    await expect(this.signForDelivery).toBeEnabled();
                    console.log("Sign for delivery type is enabled by default for restricted items");
                }
                else {
                    await expect(this.unattendedDelivery).toBeEnabled();
                    await expect(this.unattendedDeliveryDescriptionText).toBeVisible();
                    console.log("Unattended delivery option is selected by default.");
                }
                await expect(this.loginPage.getByText('Continue to trolley & substitutions')).toBeEnabled({ timeout: 15000 });
                await this.loginPage.getByText('Continue to trolley & substitutions').click();
                console.log(`Validate ${slotType} tag for PD ${slotType} order on Checkout order summary page`);
                await expect(this.loginPage.getByText(slotType).first()).toBeVisible({ timeout: 8000 });
                await this.page.waitForTimeout(500);
                console.log(`Validate delivery fee for PD ${slotType} order on Checkout order summary page`);
                await expect(this.loginPage.getByText('$11.00')).toBeVisible({ timeout: 8000 });
            }
            if (slotType == 'Rapid') {
                console.log(`Validate ${slotType} tag for PD ${slotType} order on Checkout order summary page`);
                await expect(this.loginPage.getByText(slotType).first()).toBeVisible({ timeout: 8000 });
                console.log(`Validate delivery fee for PD ${slotType} order on Checkout order summary page`);
                await expect(this.loginPage.getByText('$15.00')).toBeVisible({ timeout: 8000 });
            }
        }
        else {
            console.log(`Validate Click & Collect tag for CC ${slotType} order on Checkout order summary page`);
            await expect(this.clickAndCollectText).toBeVisible({ timeout: 20000 });
            console.log(`Validate ${slotType} tag for CC ${slotType} order on Checkout order summary page`);
            await expect(this.loginPage.getByText(slotType).first()).toBeVisible({ timeout: 15000 });
            console.log(`Validate Click And Collect fee for CC${slotType} order on Checkout order summary page`);
            await expect(this.loginPage.getByText('$5.00')).toBeVisible({ timeout: 15000 });
            if (await this.loginPage.getByText('Continue to trolley & substitutions').isVisible() === true) {
                await expect(this.loginPage.getByText('Continue to trolley & substitutions')).toBeEnabled({ timeout: 15000 });
                await this.loginPage.getByText('Continue to trolley & substitutions').click();
            }
        }
    }

    //*** Validate Partner delivery tag and delivery fee on order summary page */
    async OrderSummaryDeliveryTypeAndFee(slotType, orderType) {
        if (slotType == 'Same day') {
            console.log(`Validate ${slotType} tag for PD ${slotType} order on Order summary page`);
            await expect(this.loginPage.getByText(slotType).last()).toBeVisible({ timeout: 8000 });
            console.log(`Validate delivery fee for PD ${slotType} order on Order summary page`);
            await expect(this.loginPage.getByText('$11.00')).toBeVisible({ timeout: 8000 });
        }
        if (slotType == 'Partner driver') {
            console.log(`Validate ${slotType} tag for PD ${slotType} order on Order summary page`);
            await expect(this.loginPage.getByText(slotType)).toBeVisible({ timeout: 8000 });
            console.log(`Validate delivery fee for PD ${slotType} order on Order summary page`);
            await expect(this.loginPage.getByText('$11.00')).toBeVisible({ timeout: 8000 });
        }
        if (slotType == 'Rapid') {
            console.log(`Validate ${slotType} tag for PD ${slotType} order on Order summary page`);
            await expect(this.loginPage.getByText(slotType).first()).toBeVisible({ timeout: 8000 });
            console.log(`Validate delivery fee for PD ${slotType} order on Order summary page`);
            await expect(this.loginPage.getByText('$15.00')).toBeVisible({ timeout: 8000 });
        }
        if (slotType == 'CCRapid') {
            console.log(`Validate ${orderType} tag for CC ${orderType} order on Order summary page`);
            await expect(this.loginPage.getByText(orderType).first()).toBeVisible({ timeout: 8000 });
            console.log(`Validate delivery fee for CC ${orderType} order on Order summary page`);
            await expect(this.loginPage.getByText('$5.00')).toBeVisible({ timeout: 8000 });
        }
        
    }


    /**  This method will Substitution checkbox is not visible in step 2 for restricted items */
    async restrictedItemVerification() {
        await expect(this.loginPage.getByText('Review trolley & substitutions')).toBeVisible({ timeout: 10000 });
        console.log('Step-2 Review trolly & Substitution is closed');
        if (await this.quantityEditButton.isVisible() === true) {
            await this.quantityEditButton.click();
            console.log('Substitution Checkbox is not available for restricted items');
            await this.restrictedGlobalSubstituteCheckbox.isChecked({}==false);
            await this.loginPage.getByText('Continue to your details').click();
        }
    }

    /**  This method will verify Unattended delivery option is disabled in step 1 for restricted items */

    async deliveryTypeVerification() {
        await this.changeDeliveryType.click();
        await expect(this.page).toHaveURL(/checkout/, { timeout: 15000 });
        if (await expect(this.disabledUnattendedDeliveryOption).toBeEnabled() === false) {
            console.log("Unattended delivery type is disabled by default for restricted items")
            await expect(this.loginPage.getByText('Continue to trolley & substitutions')).toBeEnabled({ timeout: 15000 });
            await this.loginPage.getByText('Continue to trolley & substitutions').click();
        }

    }
    
    /**  This method will verify Partner delivery badge in step 1 */

    async partnerDeliveryBadgeStep1() {
        await this.partnerDeliveryBadge.isVisible();
        console.log("Partner Delivery Badge is visible")
       
    }
    

    /**  This method will verify Rapid delivery badge in step 1 */
    async rapidCCBadgeStep1() {
        await this.rapidBadgeStep1.isVisible();
        console.log("Rapid Badge is visible in step 1")
       
    }
    
    /** This method will verify if Global substitution is checked then all item level Substitutions are checked 
    and also text with total quantity displayed is correct after step 2 is closed */
    async globalSubstitutionOptIn() {
        console.log('Clicking on chage substitution link in step 2')
        await this.changeSubsitutions.click();
        console.log('Verify Global Substitution is checked');
        expect(await this.allowSubText).toBeVisible({ timeout: 5000 });
        if (await this.allowSubstitutionsCheckBox.isVisible({ timeout: 10000 })) {
            if (await this.allowSubstitutionsCheckBox.isChecked() === false) {
                await this.allowSubstitutionsCheckBox.setChecked(true);
            }
        
            console.log('Verify item level Substitution is also checked');
            console.log("Global substitution is checked");
            await this.allowSubstitutionsCheckBox.isChecked();
            console.log("Item level substitutions are checked");
            await this.itemOneSubstitution.isChecked();
            await this.itemTwoSubstitution.isChecked();
            await this.itemThreeSubstitution.isChecked();
            await this.continueToYourDetails.scrollIntoViewIfNeeded({ timeout: 90000 });
            await this.loginPage.waitToCompleteAction(2000);
            if (await this.continueToYourDetails.isVisible()) {
                await this.continueToYourDetails.click(3000);
                console.log("Verify text on closed step 2 is correct");
           
            }
        }
    }
      
    
    /** This method will verify if Global substitution is unchecked then all item level Substitutions are unchecked 
    and also text with total quantity displayed is correct after step 2 is closed */
    async globalSubstitutionOptOut() {
        console.log('Clicking on chage substitution link in step 2')
        await this.changeSubsitutions.click();
        console.log('Verify Global Substitution is unchecked');
        await expect(this.allowSubText).toBeVisible({ timeout: 90000 });
        if (await this.allowSubstitutionsCheckBox.isVisible({ timeout: 90000 })) {
            if (await this.allowSubstitutionsCheckBox.isChecked() === true) {
                await this.allowSubstitutionsCheckBox.setChecked(false);
            }
        
            console.log('Verify item level Substitution is also unchecked');
            console.log("Item level substitutions are also unchecked");
            await this.itemOneSubstitution.isChecked() == (false);
            await this.itemTwoSubstitution.isChecked() == (false);
            await this.itemThreeSubstitution.isChecked() == (false);
            await this.continueToYourDetails.scrollIntoViewIfNeeded({ timeout: 90000 });
            await this.loginPage.waitToCompleteAction(2000);
            if (await this.continueToYourDetails.isVisible()) {
                await this.continueToYourDetails.click(3000);
                console.log("Verify text on closed step 2 is correct");
           

            }
        }
    }
      
    /** This method will verify if Global substitution is unchecked then all item level Substitutions are unchecked 
    and also text with total quantity displayed is correct after step 2 is closed */
    async itemLevelSubstitutionOptIn() {
        console.log('Clicking on chage substitution link in step 2')
        await this.changeSubsitutions.click();
        console.log('Verify Global Substitution is unchecked');
        await expect(this.allowSubText).toBeVisible({ timeout: 90000 });
        if (await this.allowSubstitutionsCheckBox.isVisible({ timeout: 90000 })) {
            if (await this.allowSubstitutionsCheckBox.isChecked() === true) {
                await this.allowSubstitutionsCheckBox.setChecked(false);
        
            }
            
            console.log('Tick checkbox for one item level substitution');
            await this.itemOneSubstitution.setChecked(true);
            await this.itemTwoSubstitution.isChecked() == (false);
            await this.itemThreeSubstitution.isChecked() == (false);
            await this.allowSubstitutionsCheckBox.isChecked() === (true);
            
            await this.continueToYourDetails.scrollIntoViewIfNeeded({ timeout: 90000 });
            await this.loginPage.waitToCompleteAction(2000);
            if (await this.continueToYourDetails.isVisible()) {
                await this.continueToYourDetails.click(3000);
                console.log("Verify text on closed step 2 is correct");
            
            }
        }
    }
         
    async autoAppliedPromoCheckout() {
        const changeQuantity = ["5"];
        console.log("Verify Autoapplied Promocode is visible");
        await this.autoAppliedPromo.isVisible(2000);
        console.log("Verify Order Summary Discount field is visible");
        await this.orderSummaryDiscount.isVisible(2000)
        console.log("Now edit step 2 and decrease quntity");
        await this.quantityEditButton.click();
        await this.page.waitForTimeout(5000);
        const quantity = await this.quantityPicker.selectOption(changeQuantity[0]);
        console.log('Quantiy decreased- ' + quantity)
        console.log("Save changes in step 2");
        await this.loginPage.getByText('Continue to your details').click();
        await this.page.waitForTimeout(2000);
        console.log("Verify Autoappied coupon with free delivery is removed");
        await this.autoAppliedPromo.isVisible() == (false);
    }
        
    async manuallyApplyPromocode() {
        console.log("Enter Promocode");
        await this.promoCodeInput.fill('E2EAUTO5PERCENTAGE');
        console.log("Click on Apply Button");
        await this.applyPromoBtn.click();
        await this.page.waitForTimeout(2000);
        console.log("Applied promotion is visible");
        await expect(this.loginPage.getByText('Applied promotions')).toBeVisible();
        console.log("Discount is added");
        await this.orderSummaryDiscount.isVisible(8000);
        console.log("Remove coupon");
        await this.removeLink.click();
        console.log("Discount field is removed from order summary");
        await this.orderSummaryDiscount.isVisible() == (false);
        

    }
    async clickEditButton() {
        await this.loginPage.waitToCompleteAction(2000);
        await this.editButtonOne.click();
        await this.loginPage.waitToCompleteAction(500);
        expect(await this.signForDeliveryTxt).toBeVisible({ timeout: 60000 });
        await this.signForDelivery.click();
        await this.loginPage.waitToCompleteAction(500);
        expect(await this.unattendedDeliveryOption).toBeEnabled() == (false);
    }
    async checkReviewFunctionality() {
        await this.reviewItemLink.click();
        await this.loginPage.waitToCompleteAction(500);
        await this.closeButton.click();
        await this.loginPage.waitToCompleteAction(500);
        await this.reviewItemLink.click();
        await this.loginPage.waitToCompleteAction(500);
        await this.cancelButton.click();
        await this.loginPage.waitToCompleteAction(500);
        await this.reviewItemLink.click();
        await this.removeItems.click();
        await this.loginPage.waitToCompleteAction(5000);
        if (await this.addMoreItemTxt.isVisible()) {
            await this.loginPage.waitToCompleteAction(1000);
            await this.backToTrolleyBtn.click();
        } else {
            expect(await this.unattendedDeliveryOption).toBeEnabled();
            await this.unattendedDeliveryOption.click();
            await this.trolleySubstitutionsButton.click();
            await this.loginPage.waitToCompleteAction(1000);
        }
    }
    async clickBacktoTrolley() {
        await this.backtoTrolley.click();
    }
        
    async clickTrolleySubstitutionsButton() {
        await this.trolleySubstitutionsButton.click();
    }
    async clickChangePackingPreference() {
        await this.changePackingPreference.click();
    }
       
    async clickPaperBags() {
        await this.paperBags.click();
    }

    async clickNoBags() {
        await this.noBags.click();
    }
        
    
    async isPackingFeeVisible() {

        return await this.orderSummaryPackingFee.isVisible();
        
    }
    

    // Method to handle Paper Bags option scenario
    async handlePaperBagsOption() {
        await this.loginPage.waitToCompleteAction(30000);
        if (await this.trolleyAndSubstitutionBtn.isVisible()) {
            this.trolleyAndSubstitutionBtn.click();
            await this.loginPage.waitToCompleteAction(1000);
        }
        await this.changePackingPreference.click();
        await this.paperBags.click();
        await this.trolleySubstitutionsButton.click();
        await this.page.waitForTimeout(2000); // Wait for the page to update
        const packingFeeVisible = await this.isPackingFeeVisible();
        console.log(`Packing fee visibility (Paper Bags): ${packingFeeVisible}`);
        if (packingFeeVisible) {
            console.log("Packing fee is visible, as expected for Paper Bags option.");
        }
    }

    // Method to handle No Bags option scenario
    async handleNoBagsOption() {
        await this.clickChangePackingPreference();
        await this.noBags.click();
        await this.clickTrolleySubstitutionsButton();
        await this.page.waitForTimeout(2000); // Wait for the page to update
        const packingFeeVisible = await this.isPackingFeeVisible();
        console.log(`Packing fee visibility (No Bags): ${packingFeeVisible}`);
        if (!packingFeeVisible) {
            console.log("Packing fee is not visible, as expected for No Bags option.");
        }
    }

    //Verifying Undo button functionality in step 2
    async undoChanges() {
        const changeQuantity = ["5"];
        await expect(this.loginPage.getByText('Review trolley & substitution')).toBeVisible({ timeout: 10000 });

        console.log('Step-2 Review trolly & Substitution is closed')
        await this.page.waitForTimeout(500);
        if (await this.quantityEditButton.isVisible()) {
            await this.quantityEditButton.click();
            await this.page.waitForTimeout(1000);
            const quantity = await this.quantityPicker.selectOption(changeQuantity[0]);
            console.log('Quantiy Increased- ' + quantity);
            await this.undoChangesBtn.click();
            await this.page.waitForTimeout(3000);
            await this.loginPage.getByText('Continue to your details').click();
        }
        else {
            const quantity = await this.quantityPicker.selectOption(changeQuantity[0]);
            console.log('Quantiy Increased- ' + quantity);
            await this.undoChangesBtn.click();
            await this.page.waitForTimeout(3000);
            await this.loginPage.getByText('Continue to your details').click();
        }
    }
    async verifyProductTotalPrice(itemType) {
        console.log("price verification start..!!");
        await this.loginPage.waitToCompleteAction(2000);
        await this.quantityEditButton.click();
        await this.loginPage.waitToCompleteAction(1000);
        var expectedFirstProductPrice = await this.firstProductPrice.textContent();
        console.log("Expected First Product is : " + expectedFirstProductPrice);
        if (itemType == "save") {
            var expectedSavingProductPrice = await this.savingProductPriceTxt.textContent();
            console.log("Expected Saving Product Price : ", expectedSavingProductPrice);
            console.log(typeof (expectedFirstProductPrice));
            console.log(typeof (expectedSavingProductPrice));
            return [expectedFirstProductPrice, expectedSavingProductPrice];
        } 
        else if(itemType == "simple") {
            var expectedSecondProductPrice = await this.secondProductPrice.textContent();
            console.log("Expected First Product Price is : " + expectedSecondProductPrice);
            console.log(typeof (expectedFirstProductPrice));
            console.log(typeof (expectedSecondProductPrice));
            return [expectedFirstProductPrice, expectedSecondProductPrice];
        }else{
            return [expectedFirstProductPrice];
        }
    }
    async verifyProductDetails(expectedTotalPrice) {
        await this.loginPage.verifyInnerText(this.totalPriceInTrolley, expectedTotalPrice);
        console.log("successfully verified price..!!");
    }
    async useAnotherCardForPayment() {
        await this.loginPage.waitToCompleteAction(15000);
        if (await this.paymentEditBtn.isVisible()) {
            await this.paymentEditBtn.click();
            await this.differentCardBtn.click();
            await this.loginPage.waitToCompleteAction(3500);
        }
    }
    async placeOrder() {
        await this.loginPage.waitToCompleteAction(8000);
        await this.placeOrderButton.click();
        console.log("submitting order");
        await this.loginPage.waitToCompleteAction(3000);
        const iframe = await this.page.frameLocator('//iframe[@id="challengeFrame"]');
        if (await iframe.locator("//input[@id='acssubmit']").isVisible()) {
            await iframe.locator("//input[@id='acssubmit']").click({ timeout: 8000 });
            console.log("clicking on payment auth popup")
        }
        const iframeFeedback = await this.page.frameLocator('//iframe[@title= "Feedback Survey"]');
        await this.loginPage.waitToCompleteAction(15000);
        if (await iframeFeedback.locator('//button[@name="close"]').isVisible()) {
            await this.loginPage.waitToCompleteAction(5000);
            await iframeFeedback.locator('//button[@name="close"]').click({ timeout: 8000 });
            console.log("Feedback survey");
        }
    }

    async getTotalPriceWithGST(){
        var expectedTotalPriceWithGST = await this.totalPriceWithGST.textContent();
        console.log("Expected First Product Price is : " + expectedTotalPriceWithGST);
        console.log(typeof (expectedTotalPriceWithGST));
        return [expectedTotalPriceWithGST];
    }


    /**
         * verify the checkout page url.
         */
    async verifyCheckoutPage(){
        await expect(this.page).toHaveURL(new RegExp('checkout'));
        await this.loginPage.waitToCompleteAction(5000);
    }    

    async verifyAvicciDiscount(){
        await this.avicciDiscountText.isVisible();
        console.log("Avicci Discount coupon is visible")
        await this.avicciDiscountButton.click();
        console.log("Click to apply Avicci Discount coupon")
        await this.avicciDiscountApplied.isVisible();
        console.log("Avicci Discount coupon is applied")
        await this.avicciDiscountRemove.click();
        console.log("Avicci Discount coupon is removed")
        await this.avicciDiscountButton.click();
        console.log("Avicci Discount coupon is applied again")

    }

    async customerAgreementLink(){
        await this.linkCustomerAgreement.isVisible();
        await this.linkCustomerAgreement.click();
    }

}



