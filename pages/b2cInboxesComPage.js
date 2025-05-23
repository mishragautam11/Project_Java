import { test, expect } from '../testFixtures/pageFixture';

const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.B2CInboxesComPage = class B2CInboxesComPage {
    
    constructor(page) {
        this.page = page;
        this.emailSubject = page.locator("//h1[text()= 'starlordqa@email.ghostinspector.com']");
        this.trackOrderLink = page.locator("//a[normalize-space()='Track order']");

        
    }

    /**
     * Method to navigate to Starlord Inboxes
     */
    async navigateToStarlordInbox() {
        console.log("Navigate to Starlord Inbox");
        await this.page.goto(dataset.ghostInspectorInbox);
        await expect(this.page).toHaveURL(dataset.ghostInspectorInbox);
        console.log("Starlord Inbox is open");
        await expect(this.emailSubject).toBeVisible();
    }

    /**
     * Method to open email and click on Track Order link
     */

    async openEmailLink(orderId){
        await this.page.reload();
        console.log("Refresh inbox to receive mail");
        await this.page.waitForTimeout(80000);
        await this.page.reload();
        await this.page.waitForTimeout(80000);
        await this.page.reload();
        console.log("Wait - email is arriving..");
        const orderIdEmailSubject = "//a[text() ='Your order "+orderId+" has been confirmed']";
        await expect(this.page.locator(orderIdEmailSubject)).toContainText(orderId);
        console.log("Email received - Order ID is visible");
        await this.page.locator(orderIdEmailSubject).click();
        console.log("Click on Track Order Link");
    }

       }
