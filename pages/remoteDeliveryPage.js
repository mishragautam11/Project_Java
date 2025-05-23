import { test, expect } from '../testFixtures/pageFixture';
/* Page objects for Remote Delivery.
*/
exports.RemoteDeliveryPage = class RemoteDeliveryPage {
    constructor(page) {
        this.page = page;

        this.toastMessagContainer = page.locator("//div[@data-testid='remote-delivery-warning']");
        this.remoteDeliveryOrdersName = page.locator("//div[@data-testid='remote-delivery-warning']/div/div[@class='name']");
        this.remoteDeliveryOrdersMessage = page.locator("//div[@data-testid='message-content']");
        this.selectRemoteDeliveryMethod = page.locator("//div[@id='card-radio-button-remoteProviderCardRadio-0']");
        this.selectSlot = page.locator("//div[@data-testid='slot-select-item']");
        this.slotSelectorButton = page.locator('//button[@data-testid="how-and-when-button"]');
        this.remoteDeliveryPickASlotButton = page.locator('//button[@data-testid="set-slot-button"]');
        this.remoteDeliveryDSSDrawerTitle = page.locator('//h2[@id="drawer-heading"]/div');
        this.remoteDeliverySlotConfirmationHeader = page.locator('//header[contains(@class,"coles-targeting-SlotConfirmationHeading")]');
    }



    async verifyRemoteDeliveryToastMessageDisplay(expectedMessage) {
        if (await this.toastMessagContainer.isVisible()) {
            console.info('Verify Toast message');
            await expect(await this.remoteDeliveryOrdersMessage.textContent()).toEqual(expectedMessage);
        }
    }

    async selectRemoteDeliveryMethodOption() {
        expect(this.selectRemoteDeliveryMethod).toBeVisible({ timeout: 60000 });
        console.info('Select RD method / slot address');
        await this.selectRemoteDeliveryMethod.click();
    }

    async selectRemoteDeliverySlot() {
        console.log('Select RD slot');
        await this.selectSlot.first().click();
        await this.page.getByText('Confirm').click();
        
    }

    async clickRemoteDeliveryPickASlotButton() {
        console.log('Click on Remote a delivery drawer Pick a Slot button.');
        await this.remoteDeliveryPickASlotButton.click();
    }

    async verifyRemoteDeliveryDSSDrawerDisplay() {
        console.log('Verify the display of Remote delivery DSS drawer.');
        await this.slotSelectorButton.click();
        expect(await this.remoteDeliveryDSSDrawerTitle.textContent()).toEqual("You're in a remote delivery area");
    }

    async verifyRemoteDeliveryConfirmationHeaderDisplay() {
       console.log("Verify the display of RD confirmation header: ", await this.remoteDeliverySlotConfirmationHeader.textContent);
        expect(await this.remoteDeliverySlotConfirmationHeader.textContent()).toEqual("Delivery slot selected");
       
    }




}