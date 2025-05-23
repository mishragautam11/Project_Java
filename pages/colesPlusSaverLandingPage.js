import { expect } from '../testFixtures/pageFixture';
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));


exports.ColesPlusSaverLandingPage = class ColesPlusSaverLandingPage{

    constructor(page){

        this.page=page;
        this.JoinColesPlusSaverButton = page.locator("//a[@data-testid='hero-btn-primary']");       
    
    }

    /**
     * Method to navigate to Coles Plus Saver Sign up page
     */
    async goToColesPlusSaverSignUpPage(){
        await this.JoinColesPlusSaverButton.click();
    }
}