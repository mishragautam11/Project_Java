const{LoginPage} = require('./loginPage');
const{SignUpPage} = require('./signUpPage');
const{CataloguesPage} = require('./cataloguesPage');
const{CheckoutPage} = require('./checkOutPage');
const{HomePage} = require('./homePage');
const{OffersPage} = require('./offersPage');
const{shoppableRecipesPage} = require('./shoppableRecipesPage');
const{specialsPage} = require('./specialsPage');
const{searchResultPage} = require('./searchResultPage');
const{ListPage} = require('./listPage');
const{ProductDetailsPage} = require('./productDetailsPage');
const{pagination} = require('./pagination');
const {brandPage} = require('./brandPage');
const{B2bBulkOrderFormPage} = require('./b2bBulkOrderFormPage');
const{B2bGetStartedPage} = require('./b2bGetStartedPage');
const{B2bManageShopperPage} = require('./b2bManageShopperPage');
const{B2bInboxesComPage} = require('./b2bInboxesComPage');
const{CustomerAgreementPage} = require('./customerAgreementPage');
const{iaHeaderPage} = require('./iaHeaderPage');
const{recipeSearchPage} = require('./recipeSearchPage');
const{magazinePage} = require('./magazinePage');
const{B2CInboxesComPage} = require('./b2cInboxesComPage');
const{orderConfirmationPage} = require('./orderConfirmationPage');
const{UnAuthenticatedDeliveryTrackerHDPage} = require('./unAuthenticatedDeliveryTrackerHDPage');
/**
 * Base page for initializing the instances of all the other pages.
 */
exports.BasePage = class basePage
{
    constructor(page)
    {
        this.page = page;
        this.signUpPage = new SignUpPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.cataloguesPage = new CataloguesPage(this.page);
        this.checkOutPage = new CheckoutPage(this.page);
        this.homePage = new HomePage(this.page);
        this.offersPage = new OffersPage(this.page);
        this.shoppableRecipesPage = new shoppableRecipesPage(this.page);
        this.specialsPage = new specialsPage(this.page);
        this.searchResultPage = new searchResultPage(this.page);
        this.listPage = new ListPage(this.page);
        this.productDetailsPage = new ProductDetailsPage(this.page);
        this.pagination = new pagination(this.page);   
        this.brandPage = new brandPage(this.page);
        this.iaHeaderPage = new iaHeaderPage(this.page);                  
        this.recipeSearchPage=new recipeSearchPage(this.page);
        this.magazinePage = new magazinePage(this.page);     
        this.brandPage = new brandPage(this.page);     
        this.b2bBulkOrderFormPage = new B2bBulkOrderFormPage(this.page);      
        this.b2bGetStartedPage = new B2bGetStartedPage(this.page);
        this.b2bManageShopperPage = new B2bManageShopperPage(this.page);
        this.b2bInboxesComPage = new B2bInboxesComPage(this.page);
        this.magazinePage = new magazinePage(this.page);      
        this.orderConfirmationPage = new orderConfirmationPage(this.page); 
        this.customerAgreementPage = new CustomerAgreementPage(this.page); 
        this.b2cInboxesComPage = new B2CInboxesComPage(this.page);
        this.unAuthenticatedDeliveryTrackerHDPage = new UnAuthenticatedDeliveryTrackerHDPage(this.page); 
    }

    getLoginPage(){
        return this.loginPage;
    }

    getSignUpPage(){
        return this.signUpPage;
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
        return this.shoppableRecipesPage;
    }

    getSpecialsPage(){
        return this.specialsPage;
    }
    
    getSearchResultPage(){
        return this.searchResultPage;
    }
    getPagination(){
        return this.pagination;
    }

    getListPage(){
        return this.listPage;
    }

    getProductDetailsPage(){
        return this.productDetailsPage;
    }

    getbrandPage(){
        return this.brandPage;
    }
    
    getb2bGetStartedPage(){
        return this.b2bGetStartedPage;
    }

    getB2bBulkOrderFormPage(){
        return this.b2bBulkOrderFormPage;
    }

    getB2bManageShopperPage(){
        return this.b2bManageShopperPage;
    }
    
    getB2bInboxesComPage(){
        return this.b2bInboxesComPage;
    }
    getB2CInboxesComPage(){
        return this.b2cInboxesComPage;
    }

    getIAHeaderPage(){
        return this.iaHeaderPage;
    }
    
    getrecipesSearchPage(){
        return this.recipeSearchPage;
    }

    getMagazinePage(){
        return this.magazinePage;
    }

    getOrderConfirmationPage(){
        return this.orderConfirmationPage;
    }

    getCustomerAgreementPage(){
        return this.customerAgreementPage;
    }

    getUnAuthenticatedDeliveryTrackerHDPage(){
        return this.unAuthenticatedDeliveryTrackerHDPage;
    }
    
}