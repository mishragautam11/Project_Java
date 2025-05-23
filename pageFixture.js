import { test  , expect } from '../testFixtures/browserFixture';
const base = require('../testFixtures/browserFixture');
const{LoginPage} = require('../pages/loginPage');
const{HomePage} = require('../pages/homePage');
const{CheckoutPage} = require('../pages/checkOutPage');
const{SpecialsPage} = require('../pages/specialsPage');
const{OffersPage} = require('../pages/offersPage');
const{CataloguesPage} = require('../pages/cataloguesPage');
const{RecipesPage} = require('../pages/recipesPage');
const{ListPage} = require('../pages/listPage');
const{ProductDetailsPage} = require('../pages/productDetailsPage');
const{SearchResultPage} = require('../pages/searchResultPage');
const{SignUpPage} = require('../pages/signUpPage');
const{B2bInboxesComPage} = require('../pages/b2bInboxesComPage');
const{B2bGetStartedPage} = require('../pages/b2bGetStartedPage');
const{B2bManageShopperPage} = require('../pages/b2bManageShopperPage');
const{ColesPlusAccountsPage} = require('../pages/colesPlusAccountsPage');
const{ColesPlusSignUpPage} = require('../pages/colesPlusSignupPage');
const{ColesPlusEnterCardAndPaypalPage} = require('../pages/colesPlusEnterCardAndPaypalPage');
const{ColesPlusConfirmationPage} = require('../pages/colesPlusConfirmationPage');
const{ColesPlusSaverLandingPage} = require('../pages/colesPlusSaverLandingPage');
const{ColesPlusEditPaymentPage} = require('../pages/colesPlusEditPaymentPage');
const{ShoppableRecipesPage} = require('../pages/shoppableRecipesPage');
const{IAHeaderPage} = require('../pages/iaHeaderPage');
const{RecipeSearchPage} = require('../pages/recipeSearchPage');
const{OrderConfirmationPage} = require('../pages/orderConfirmationPage');
const{Pagination} = require('../pages/pagination');
const{LogoutPage} = require('../pages/logoutPage');
const{RemoteDeliveryPage} = require('../pages/remoteDeliveryPage');
const{AccountPage} = require('../pages/accountPage');
const{AddressesPage} = require('../pages/addressesPage');
const{B2bOverviewPage} = require('../pages/b2bOverviewPage');
const{YourDetailsPage} = require('../pages/yourDetailsPage');
const{PreferencesPage} = require('../pages/preferencesPage');
const{B2bAccountPage} = require('../pages/b2bAccountPage');
const{B2bBusinessDetailsPage} = require('../pages/b2bBusinessDetailsPage');
const{B2bRestrictCategoriesPage} = require('../pages/b2bRestrictCategoriesPage');
const{AthenaFooterLinksPage} = require('../pages/AthenaFooterLinksPage');
const{AemComponentPage} = require('../pages/aemComponentPage');
const{B2bFlybuysForBusinessPage} = require('../pages/b2bFlybuysForBusinessPage');
const{B2bShopperDetailPage} = require('../pages/b2bShopperDetailPage');
const{B2bOrderListPage} = require('../pages/b2bOrderListPage');
const{B2bOrdersPage} = require('../pages/b2bOrdersPage');
const{B2bOrderDetailPage} = require('../pages/b2bOrderDetailPage');
const{B2bInvoicePreferencesPage} = require('../pages/b2bInvoicePreferencesPage');
const{B2CInboxesComPage} = require('../pages/b2cInboxesComPage');

/**
 * For single page scenarios, while adding any new page please include browserPage.page for creating object of that page.
 * For multiple tab scenarios, Try to access the context from browser fixture using b2bBulkOrderFormPage.
 */
const{BrandPage} = require('../pages/brandPage');
const{MagazinePage} = require('../pages/magazinePage');
const{ColesAccountBarCodePage} = require('../pages/colesAccountBarCodePage');

const{PaypalPage} = require('../pages/paypalPage');
const{BoughtBeforePage} = require('../pages/boughtBeforePage');
const{FlyBuysPage} = require('../pages/flyBuysPage');
const { OrderDetailsPage } = require("../pages/orderDetailsPage");
 

const{ColesPlusCancelPage} = require('../pages/colesPlusCancelPage');





exports.test = base.test.extend({
	
	
	loginPage: async ({ browserPage }, use) => {
		console.log("in Login Page fixture");
    
		await use(new LoginPage(browserPage.page));
	},
	homePage: async ({ browserPage }, use) => {
		console.log("in Home Page fixture");
		await use(new HomePage(browserPage.page));
	},
	checkoutPage: async ({ browserPage }, use) => {
		console.log("in Checkout Page fixture");
		await use(new CheckoutPage(browserPage.page));
	},
	orderConfirmationPage: async ({ browserPage }, use) => {
		console.log("in OrderConfirmationPage fixture");
		await use(new OrderConfirmationPage(browserPage.page));
	},


	specialsPage: async ({ browserPage }, use) => {
		console.log("In Special Page fixture");
		await use(new SpecialsPage(browserPage.page));
	},
	offersPage: async({browserPage}, use) => {
		console.log("In Offer Page fixture");
		await use( new OffersPage(browserPage.page));
	},
	cataloguesPage: async({browserPage}, use) => {
		console.log("In Catalogue Page fixture");
		await use(new CataloguesPage(browserPage.page));
	},
	recipesPage: async({browserPage}, use) => {
		console.log("In Recipe Page fixture");
		await use(new RecipesPage(browserPage.page));
	},
	searchResultPage: async({browserPage}, use) => {
		console.log("In Search Result Page fixture");
		await use(new SearchResultPage(browserPage.page));
	},
	listPage: async({browserPage}, use) => {
		console.log("In List Page fixture");
		await use(new ListPage(browserPage.page));
	},
	productDetailsPage: async({browserPage}, use) => {
		console.log("In Product Details Page fixture");
		await use(new ProductDetailsPage(browserPage.page));
	},
	signUpPage: async({browserPage}, use) => {
		console.log("In Sign Up Page fixture");
		await use(new SignUpPage(browserPage.page));
	},
	b2bInboxesComPage: async({inboxPage}, use) => {
		console.log("In Inbox Page fixture");
		await use(new B2bInboxesComPage(inboxPage.inboxpage));

	},
	b2bInboxesComConPage: async({inboxPage}, use) => {
		console.log("In Inbox context fixture");
		const page = inboxPage.inboxpage;
		const context = inboxPage.context;
		await use({page,context});

	},
	
	b2bBulkOrderFormPage: async({browserPage}, use) => {
		console.log("In Bulk Order form Page fixture");
		const page = browserPage.page;
		const context = browserPage.context;
		await use({page,context});

	},
	
	customerAgreementPage: async({browserPage}, use) => {
		console.log("In customer Agreement Page fixture");
		const page = browserPage.page;
		const context = browserPage.context;
		await use({page,context});

	},

	b2bGetStartedPage: async({browserPage}, use) => {
		console.log("In Expert Support form Page fixture");
		await use(new B2bGetStartedPage(browserPage.page));
	},
	b2bManageShopperPage: async({browserPage}, use) => {
		console.log("In Manage Shopper Page fixture");
		await use(new B2bManageShopperPage(browserPage.page));
	},
	paginationPage: async({browserPage}, use) => {
		console.log("Pagination Page fixture");
		await use(new Pagination(browserPage.page));
	},
	b2bOverviewPage: async({browserPage}, use) => {
		console.log("Overview Page fixture");
		await use(new B2bOverviewPage(browserPage.page));
	},
	shoppableRecipesPage: async({browserPage}, use) => {
		console.log("In Shoppable recipe Page fixture");
		await use(new ShoppableRecipesPage(browserPage.page));
	},
	iaHeaderPage: async({browserPage}, use) => {
		console.log("In IA Header Page fixture");
		await use(new IAHeaderPage(browserPage.page));
	},
	recipeSearchPage: async({browserPage}, use) => {
		console.log("In recipe search Page fixture");
		await use(new RecipeSearchPage(browserPage.page));
	},
	aemComponentPage: async({browserPage},use) => {
        console.log("In AEM Component page fixture");
		await use(new AemComponentPage(browserPage.page));
	},
	colesPlusPage: async({browserPage}, use)=>{
        await use(new ColesPlusPage(browserPage.page));
	},
	colesPlusAccountsPage: async({browserPage}, use)=>{
		await use(new ColesPlusAccountsPage(browserPage.page));
	},
	colesPlusSignUpPage: async({browserPage}, use)=>{
		await use(new ColesPlusSignUpPage(browserPage.page));
	},
	colesPlusEnterCardAndPaypalPage: async({browserPage}, use)=>{
		await use(new ColesPlusEnterCardAndPaypalPage(browserPage.page));
	},
	colesPlusConfirmationPage: async({browserPage}, use)=>{
		await use(new ColesPlusConfirmationPage(browserPage.page));
	},
	colesPlusSaverLandingPage: async({browserPage}, use)=>{
		await use(new ColesPlusSaverLandingPage(browserPage.page));
	},
	colesPlusEditPaymentPage: async({browserPage}, use)=>{
		await use(new ColesPlusEditPaymentPage(browserPage.page));
	},
	colesPlusCancelPage: async({browserPage}, use)=>{
		console.log("In Coles Plus Cancel Page fixture");
		await use(new ColesPlusCancelPage(browserPage.page));
	},
	remoteDeliveryPage: async ({ browserPage }, use) => {
		console.log("In Remote delivery Page fixture");
		await use(new RemoteDeliveryPage(browserPage.page));
	},
	logoutPage: async ({ browserPage}, use) => {
		console.log("In the Accounts -> Logout page");
		await use(new LogoutPage(browserPage.page));
	},
	accountPage: async ({ browserPage }, use) => {
		console.log("In Account Page fixture");
		await use(new AccountPage(browserPage.page));
	},
	addressesPage: async ({ browserPage }, use) => {
		console.log("In Address Page fixture");
		await use(new AddressesPage(browserPage.page));
	},
	preferencesPage: async ({ browserPage }, use) => {
		console.log("In preferances Page fixture");
		await use(new PreferencesPage(browserPage.page));
	},
	brandPage: async({browserPage}, use) => {
		console.log("In Brand Page fixture");
		await use(new BrandPage(browserPage.page));
	},
	magazinePage: async({browserPage}, use) => {
		console.log("In Magazine Page fixture");
		await use(new MagazinePage(browserPage.page));
	},
	colesAccountBarCodePage: async ({ browserPage }, use) => {
		console.log("Cole account barcode page");
		await use(new ColesAccountBarCodePage(browserPage.page));
	},
	yourDetailsPage: async ({ browserPage}, use) => {
		console.log("In the Accounts -> Your Details page");
		await use(new YourDetailsPage(browserPage.page));
	},
	b2bAccountPage: async ({ browserPage}, use) => {
		console.log("B2B Account page");
		await use(new B2bAccountPage(browserPage.page));
	},

	paypalPage: async({browserPage}, use)=>{
		const page = browserPage.page;
		const context = browserPage.context;
		await use({page,context});
	},
	b2bBusinessDetailsPage: async ({ browserPage}, use) => {
		console.log("B2B shopper standalone business details page");
		await use(new B2bBusinessDetailsPage(browserPage.page));
	},
	b2bRestrictCategoriesPage: async ({ browserPage}, use) => {
		console.log("B2B admin restrict categories page");
		await use(new B2bRestrictCategoriesPage(browserPage.page));
	},
	b2bFlybuysForBusinessPage: async ({ browserPage}, use) => {
		console.log("B2B admin manage flybuys page");
		await use(new B2bFlybuysForBusinessPage(browserPage.page));
	},
	flyBuysPage: async({browserPage}, use) => {
		console.log(" In flyBuys Page Fixture");
		await use(new FlyBuysPage(browserPage.page));
	},
	boughtBeforePage: async({browserPage}, use) => {
		console.log(" In BoughtBeforePage");
		await use(new BoughtBeforePage(browserPage.page));
	},
	shopperDetailPage: async({browserPage}, use) => {
		console.log(" In BoughtBeforePage");
		await use(new B2bShopperDetailPage(browserPage.page));
	},
	AthenaFooterLinksPage: async({browserPage}, use) => {
		console.log("In Footer Link Fixture");
		await use(new AthenaFooterLinksPage(browserPage.page));
	},
	orderDetailsPage: async({browserPage}, use) => {
		console.log("In Order Details Page Fixture");
		await use(new OrderDetailsPage(browserPage.page));
	},
	b2bOrderListPage: async({browserPage}, use) => {
		console.log("In B2B Order List Fixture");
		await use(new B2bOrderListPage(browserPage.page));
	},
	b2bOrdersPage: async({browserPage}, use) => {
		console.log("In B2B Orders Fixture");
		await use(new B2bOrdersPage(browserPage.page));
	},
	
	b2bOrderDetailPage: async({browserPage}, use) => {
		console.log("In B2B Orders detail Page Fixture");
		await use(new B2bOrderDetailPage(browserPage.page));
	},
	b2bInvoicePreferencesPage: async ({ browserPage}, use) => {
		console.log("B2B invoice preferences page");
		await use(new B2bInvoicePreferencesPage(browserPage.page));
	},

	b2cInboxesComPage: async({inboxPage}, use) => {
		console.log("In Inbox Page fixture");
		await use(new B2CInboxesComPage(inboxPage.inboxpage));
	}
}); 

// export default test
exports.expect = base.expect;