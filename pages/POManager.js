const{LoginPage} = require('./loginPage');
const{CataloguesPage} = require('./cataloguesPage');
const{CheckoutPage} = require('./checkOutPage');
const{HomePage} = require('./homePage');
const{OffersPage} = require('./offersPage');
const{RecipesPage} = require('./recipesPage');
const{SpecialsPage} = require('./specialsPage');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.cataloguesPage = new CataloguesPage(this.page);
        this.checkOutPage = new CheckoutPage(this.page);
        this.homePage = new HomePage(this.page);
        this.offersPage = new OffersPage(this.page);
        this.recipesPage = new RecipesPage(this.page);
        this.specialsPage = new SpecialsPage(this.page);

    }

    getLoginPage(){
        return this.loginPage;
    }

    getCataloguesPage(){
        return this.cataloguesPage;
    }

    getCheckoutPage(){
        return this.checkOutPage;
    }

    getHomePage(){
        return this.homePage;
    }

    getOffersPage(){
        return this.offersPage;
    }

    getRecipesPage(){
        return this.recipesPage;
    }

    getSpecialsPage(){
        return this.specialsPage;
    }

} module.exports = {POManager};