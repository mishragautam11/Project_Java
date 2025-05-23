import { test, expect } from '../testFixtures/pageFixture.js';

/**
 * Page objects for Unauthenticated Tracker - Page .
 */

exports.UnAuthenticatedDeliveryTrackerHDPage = class UnAuthenticatedDeliveryTrackerHDPage {

    constructor(page) {
        this.page = page;
        this.orderTrackingPageHeading = this.page.locator('//*[text() = "Order tracking"]');
        this.hdTrackerLabel = this.page.locator('//*[text() ="Delivery"]');
        this.trackerStatePlaced = this.page.locator('//*[@data-testid ="step-Order placed"]');
        this.trackerStatePreparing = this.page.locator('//*[@data-testid ="step-Preparing order"]');
        this.trackerStateOutForDelivery = this.page.locator('//*[@data-testid ="step-Out for delivery"]');
        this.modifyMessage = this.page.locator('//*[text() ="Modify order until "]');
        this.estimatedArrivalMessage = this.page.locator('//*[text() ="Estimated arrival "]');
        this.logInToViewOrderButton = this.page.locator('//*[text() ="Log in to view order"]');

        
       
    }

    /**
     * Method to verify heading on Unauthenticated Delivery Tracker
     */

    async verifyHeading(){
    console.log("Order Tracking HEading is visible");
    await this.orderTrackingPageHeading.isVisible();
}

    /**
     * Method to verify HD Tracker
     */

    async verifyHDTracker(){
    await this.hdTrackerLabel.isVisible();
    console.log("Delivery Tracker is visible");
    await this.trackerStatePlaced.isVisible();
    await this.trackerStatePreparing.isVisible();
    await this.trackerStateOutForDelivery.isVisible();
    console.log("Different states of HD Tracker is visible");
    await this.estimatedArrivalMessage.isVisible();
    console.log("Estimated Arrival time is visible");
    await this.modifyMessage.isVisible();
    console.log("Modify until time is visible");
    await this.logInToViewOrderButton.isVisible();
    console.log("Log in to view Order Button is visible");
}
    
}