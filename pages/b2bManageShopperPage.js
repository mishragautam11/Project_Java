import { test, expect } from '../testFixtures/pageFixture';
const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

let status;

exports.B2bManageShopperPage = class B2bManageShopperPage {
    
    constructor(page) {
        this.page = page;
        //Manage shopper locators
        this.accountButton = page.getByTestId('header-user');
        this.manageShopper = page.locator("//a[@identifier='manage_shoppers']");
        this.inviteShopperButton = page.getByRole('button', { name: 'Invite shopper' });
        this.inviteShopperEmail = page.getByLabel('Email');
        this.inviteShopperBusinessName = page.getByLabel('Business name');
        this.invitationSent = page.locator("//button[@aria-label='Close notification dialog']").nth(0);
        this.sendInvitationButton = page.locator("//span[normalize-space()='Send invitation']");
        this.closeInvSent = page.locator("//button[@aria-label='Close notification dialog']");
        //shopper tab locators
        this.shopperTab = page.locator("//a[@id='manage-shoppers-tabs-label-0']");
        this.shopperTableEmail = page.locator("//table[@data-testid='shopper-list-table']//tbody//tr//td[@class='shopper-email']");
        this.shopperTableEmailLength = page.locator("//table[@data-testid='shopper-list-table']//tbody//tr//td[@class='shopper-email']");
        this.totalPagesIncludingArrow = page.locator("//nav[@data-testid='pagination']//li");
        this.totalPageCount = page.locator("//nav[@data-testid='pagination']//li/a");
        this.emailTitle = page.locator("//table[@data-testid='shopper-list-table']//th[@role='columnheader'][normalize-space()='Email']");
        this.paginationNextButton = page.locator("//button[@id='pagination-button-next']");
        this.searchBoxShopperTab = page.locator("//div[@data-testid='search-shoppers']/input");
        //pending tab locators
        this.pendTab = page.locator("//a[@id='manage-shoppers-tabs-label-1']");
        this.pendingTableEmail = page.locator("//table[@data-testid='invitation-list-table']//tbody//tr//td[@class='shopper-email']");
        this.pendingTableEmailLength = page.locator("//table[@data-testid='invitation-list-table']//tbody//tr//td[@class='shopper-email']");
        this.emailTitlePendTab = page.locator("//table[@data-testid='invitation-list-table']//th[@role='columnheader'][normalize-space()='Email']");
        //cancel invite locators
        this.cancelButton = page.locator("//div[@data-testid='popper-content']");
        this.yesCancelCta = page.locator("//span[text()='Yes, cancel invitation']");
        this.invitationCancelledMsg = page.locator("//div[text()='Invitation cancelled']");
        this.resendButton = page.locator("//button[@aria-label='Resend invite']");
        this.resendInvCta = page.locator("//span[text()='Resend invitation']");
        this.invitationSentMsg = page.locator("//div[text()='Invitation sent']");
        this.invitationSentClose = page.locator("//button[@aria-label='Close notification dialog']/span");
        //unsubscribe locator
        this.unsubscribeMsg = page.locator('//*[contains(text(),"The person you have invited has unsubscribed from our invitations.")]');
        this.rtnToManageShopper = page.locator("//span[normalize-space()='Return to Manage shoppers']");

        //segmentation locators
        this.addToolButton = page.locator("//div[@data-testid='segmentation-flow']/button/span");
        this.noOfLocations = page.locator("//select[@name='numberOfLocations']");
        this.noOfEmployees = page.locator("//select[@name='numberOfEmployees']");
        this.segSubmitButton = page.locator("//span[text()='Submit']");
        this.accountUpdatedMsg = page.locator("//div[@data-testid='notification']//div[text()='Account updated.']");
        this.closeNotificationButton = page.locator("//button[@aria-label='Close notification dialog']");
        

    }
    
    /**
     * Method to send an invite to new shopper from manage shopper page.
     * @param {*} userEmail The new shopper email Id to send invite.
     */
    async manageShopperInvite(userEmail){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.isVisible();
        await this.accountButton.click();
        await this.manageShopper.isVisible();
        await this.manageShopper.scrollIntoViewIfNeeded();
        await this.manageShopper.click();
        await this.inviteShopperButton.isVisible();
        await this.inviteShopperButton.click();
        await this.inviteShopperEmail.isVisible();
        await this.inviteShopperEmail.fill(userEmail);
        await this.inviteShopperBusinessName.scrollIntoViewIfNeeded();
        await this.inviteShopperBusinessName.isVisible();
        await this.inviteShopperBusinessName.fill(dataset.ExpertSupportFormBusinessName);
        await this.sendInvitationButton.scrollIntoViewIfNeeded();
        await this.sendInvitationButton.isVisible();
        await this.sendInvitationButton.click();
        await this.pendTab.scrollIntoViewIfNeeded();
        await this.pendTab.isVisible();
        await this.pendTab.click();
      
    }

    /**
     * Method to reach manage tab under manage shopper page.
     */
    async validateShopper(){
        await this.accountButton.isVisible();
        await this.accountButton.click();
        await this.manageShopper.scrollIntoViewIfNeeded();
        await this.manageShopper.isVisible();
        await this.manageShopper.click();
        await this.shopperTab.scrollIntoViewIfNeeded();
        await this.shopperTab.isVisible();
        await this.shopperTab.click();
    }

    /**
     * Method to validate the status 'Invited' after invitation is sent to new shopper.
     * @param {*} userEmail The new shopper email Id to send invite.
     */
    async getByInvitedStatus(userEmail) {
        const xpath ="//*[text()='"+userEmail+"']/parent::tr/td/span/section";
        await expect(this.page.locator(xpath)).toContainText('Invited');
        
    }

    /**
     * Method to validate the new shopper name is present under shopper tab in manage shopper page. (B2B)
     * @param {*} userEmail The new shopper email Id to send invite.
     */
    async validateShoppersInShopperTable(userEmail){

        status = false;
        console.log("status is:", status);
        const shopperEmailLen = await this.shopperTableEmailLength;
        console.log("email id count:",await shopperEmailLen.count());
            await expect(this.emailTitle).toBeVisible();
            for(let i=0; i<await shopperEmailLen.count(); i++){
                let shopperTableEmailValues = await this.shopperTableEmail.nth(i).textContent();
                console.log("email ids in loop:", shopperTableEmailValues);
                console.log("email id shopper:", userEmail);
                if(await shopperTableEmailValues == userEmail){
                    status = true;
                    console.log("email actual:", shopperTableEmailValues);
                    console.log("email expected:", userEmail);
                    break;
                }
            }
            //need this step for search button
            await expect(status).toBeTruthy(); 
        
    }
    /**
     * Method to validate shopper(B2B).
     * @param {*} userEmail The new shopper email Id to send invite.
     */
    async validateShopperFirstPage(userEmail){
        await this.validateShoppersInShopperTable(userEmail);
            if(status == false){
                await this.validateShopperInPagination(userEmail);
            }
    }

    async validateShopperInPagination(userEmail){

    while (await this.paginationNextButton.isEnabled()){
        if (status == true){
            break;
        }
        await this.paginationNextButton.click();
        await this.page.waitForTimeout(3000);
        await this.validateShoppersInShopperTable(userEmail);
    }
    await expect(status).toBeTruthy(); 
    }
    /**
     * Method to validate the invited new shopper name is present under pending tab in manage shopper page.
     * @param {*} userEmail The new shopper email Id to send invite.
     */
    async validatePendingTabShopperInvite(userEmail){
        let status = false;
        await this.page.reload();
        await expect(this.pendTab).toBeVisible();
        await this.pendTab.click();
        await this.page.waitForTimeout(4000);
        await expect(this.emailTitlePendTab).toBeVisible();
        const emailPenTable ="//*[text()='"+userEmail+"']";
             await expect(this.page.locator(emailPenTable)).toBeVisible();
             const pendingEmailLen = await this.pendingTableEmailLength;
             console.log("email id count:",await pendingEmailLen.count());
             for(let i=0; i<await pendingEmailLen.count(); i++){
                let pendingTableEmailValues = await this.pendingTableEmail.nth(i).textContent();
                console.log("email ids in loop:", pendingTableEmailValues);
                console.log("email id shopper:", userEmail);
                if(await pendingTableEmailValues == userEmail){
                    status = true;
                    await this.getByInvitedStatus(userEmail);
                    console.log("email actual:", pendingTableEmailValues);
                    console.log("email expected:", userEmail);
                    break;
                }
        }
        await expect(status).toBeTruthy(); 
    }

    /**
     * Method to search a new shopper added in manage shopper page(B2B).
     * @param {*} userEmail The new shopper email Id to send invite.
     */
    async searchEmailShopperTab(userEmail) {
        await expect(this.searchBoxShopperTab).toBeEditable();
        await this.searchBoxShopperTab.fill(userEmail);
        await this.page.waitForTimeout(3000);
        await this.validateShoppersInShopperTable(userEmail);
        
    }

    /**
     * Method to cancel the invite and validate invitation cancelled message.
     * @param {*} userEmail The new shopper email Id to send invite.
     */
    async cancelShopperInvite(userEmail){
        await expect(this.emailTitlePendTab).toBeVisible();
        const emailPenTable ="//*[text()='"+userEmail+"']";
        await expect(this.page.locator(emailPenTable)).toBeVisible();
        const xpath ="//*[text()='"+userEmail+"']/following-sibling::td//button[@data-testid='burger-menu-anchor-button']";
        await expect(this.page.locator(xpath)).toBeVisible();
        await this.page.locator(xpath).click();
        await expect(this.cancelButton).toBeVisible();
        await this.cancelButton.click();
        await expect(this.yesCancelCta).toBeVisible();
        await this.yesCancelCta.click();
        await expect(this.invitationCancelledMsg).toBeVisible();
    }

    /**
     * Method to segment a standalone user to admin user(B2B). 
     */
    async segmentStandaloneUser(loginEmail){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.click();
        await this.manageShopper.scrollIntoViewIfNeeded();
        await expect(this.manageShopper).toBeVisible();
        await this.manageShopper.click();
        await this.page.waitForTimeout(3000);
        await expect(this.addToolButton).toBeVisible();
        await this.addToolButton.click();
        await this.page.waitForTimeout(3000);
        await expect(this.noOfLocations).toBeVisible();
        await this.noOfLocations.click();
        await this.noOfLocations.selectOption('6-10');
        await this.page.waitForTimeout(3000);
        await expect(this.noOfEmployees).toBeVisible();
        await this.noOfEmployees.click();
        await this.noOfEmployees.selectOption('11-50');
        await this.page.waitForTimeout(3000);
        await expect(this.segSubmitButton).toBeVisible();
        await this.segSubmitButton.click();
        //need to add intermediate screen logic

        await this.page.waitForTimeout(5000);
        await expect(this.accountUpdatedMsg).toBeVisible();
        await this.page.waitForTimeout(3000);
        await expect(this.closeNotificationButton).toBeVisible();
        await this.closeNotificationButton.click(); 

        await this.page.waitForTimeout(5000);
        await expect(this.inviteShopperButton).toBeVisible();
        await expect(this.emailTitle).toBeVisible();
        const xpath ="//*[contains(text(),'"+loginEmail+"')]";
        await expect(this.page.locator(xpath)).toBeVisible();

      
    }

    /**
     * Method to Resend invite to shopper(B2B).
     * @param {*} userEmail Shopper Email.
     * @param {*} userFlow defines 'Resend' or 'unsubscribe' flow.
     */
    async resendInvite(userEmail, userFlow='Resend'){
        await expect(this.accountButton).toBeVisible();
        await this.accountButton.isVisible();
        await this.accountButton.click();
        await this.manageShopper.isVisible();
        await this.manageShopper.scrollIntoViewIfNeeded();
        await this.manageShopper.click();
        await this.pendTab.scrollIntoViewIfNeeded();
        await this.pendTab.isVisible();
        await this.pendTab.click();


        await expect(this.emailTitlePendTab).toBeVisible();
        const emailPenTable ="//*[text()='"+userEmail+"']";
        await expect(this.page.locator(emailPenTable)).toBeVisible();
        const xpath ="//*[text()='"+userEmail+"']/following-sibling::td//button[@data-testid='burger-menu-anchor-button']";
        await expect(this.page.locator(xpath)).toBeVisible();
        await this.page.locator(xpath).click();
        await expect(this.resendButton).toBeVisible();
        await this.resendButton.click();
        await expect(this.resendInvCta).toBeVisible();
        await this.resendInvCta.click();
        if(userFlow ==='Resend'){
            await expect(this.invitationSentMsg).toBeVisible();
            await expect(this.invitationSentClose).toBeVisible();
            await this.invitationSentClose.click();
        }
        
    }

    /**
     * Method to validate unsubscribe message(B2B).
     */
    async validateUnsubscribe(){
        await expect(this.unsubscribeMsg).toBeVisible();
        await expect(this.rtnToManageShopper).toBeVisible();
        await this.rtnToManageShopper.click();
    }

   }
