import { test, expect } from '../testFixtures/pageFixture.js';
const { LoginPage } = require("./loginPage.js");
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.CustomerAgreementPage = class CustomerAgreementPage {
    
    constructor(page) {
        this.page = page;
        this.customerAgreementHeading = page.locator('//h1[text()="Customer Agreement"]');
        this.linkMoreOnPendingPayment = page.locator('//*[text()="More on pending payments."]');

    }

    async verifyHeadingOnPage(){
        await this.customerAgreementHeading.isVisible();
    }

}