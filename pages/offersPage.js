import { test, expect } from '../testFixtures/pageFixture';
//const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage.js");

/**
 * Page objects for Offers page.
 */
exports.OffersPage = class OffersPage {

    constructor(page) {

        this.page = page;
        this.loginPage = new LoginPage(page);
        this.titleConatiner = page.locator("[data-testid='fitToGrid-container']  h1");



    }


    async verifyOffersTitle(expectedHeaderName){
        await this.loginPage.verifyInnerText(this.titleConatiner,expectedHeaderName);
    }



}
