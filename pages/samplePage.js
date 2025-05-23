const { expect } = require("@playwright/test");
const { assert } = require("console");

exports.SamplePage =  class SamplePage {
    constructor(page) {
        this.page = page
        this.searchTxt = page.locator('id=search-text-input')
        this.searchOption =  page.locator('id=react-select-search-box-option-0')
        this.resultInfo = page.locator('xpath=//div[@data-testid="pagination-info"]')
    }

    async navigateCUSP() {
        await this.page.goto('https://www.coles.com.au/');
    }

    async searchChocolate() {
        await this.searchTxt.fill('chocolate')
        await this.searchOption.click()
    }

    async assertResult() {
        await this.resultInfo.isVisible()
    }

    async assertResultFail() {
        await this.resultInfo.fill("fail")
    }

}