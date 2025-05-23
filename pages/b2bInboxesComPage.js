import { test, expect } from '../testFixtures/pageFixture';

const dataset = JSON.parse(JSON.stringify(require("../utils/testData.json")));

exports.B2bInboxesComPage = class B2bInboxesComPage {
    
    constructor(page) {
        this.page = page;
        this.awaitingApprovalMsg = page.locator('//h2[contains(text(),"is awaiting approval")]');
        this.firstInboxButton = page.locator('//*[text()="Get my first inbox!"]');
        this.addInboxUserName = page.getByPlaceholder('jane1034');
        this.addInboxPopupBtn = page.getByRole('button', { name: 'Add Inbox' });   
        this.acceptInvitationButton = page.locator("//a[normalize-space()='Accept invitation']");
        this.emailSubject = page.locator("//span[normalize-space()='Coles']");
        this.domainOption = page.locator("//select");
        this.awaitingApprovalMsg = page.locator('//h2[contains(text(),"is awaiting approval")]');
        this.emailNum = page.locator("//tbody/tr");
        this.unsubscribeButton = page.locator("//a[normalize-space()='Click here']");

        
    }

    /**
     * Method to navigate to Inboxes.com page.
     */
    async navigateToInbox() {
        await this.page.goto(dataset.inboxesUrl);
        await expect(this.page).toHaveURL(dataset.inboxesUrl);
    }
    

    /**
     * Method to add a new mailbox in Inboxes.com.
     * @param {*} userName The user name for the new mailbox.
     */
    async addNewInbox(userName,domain = 'blondmail.com'){
        await expect(this.firstInboxButton).toBeVisible();
        await this.firstInboxButton.click();
        await expect(this.addInboxUserName).toBeEditable();
        await this.addInboxUserName.fill(userName);
        if(domain != 'blondmail.com'){
            await expect(this.domainOption).toBeVisible();
            await this.domainOption.click();
            await this.domainOption.selectOption(domain);
        }
        await expect(this.addInboxPopupBtn).toBeVisible();
        await this.addInboxPopupBtn.click();
    }

    /**
     * Method To verify email subject line and click on it.
     */
    async acceptInvitationSubject(){
        await this.emailSubject.scrollIntoViewIfNeeded();
        await expect(this.emailSubject).toBeVisible();
        await this.emailSubject.click();
        
    }

    /**
     * Method to accept the email invitation.
     */
    async acceptInvitationButtonClick(){
        await this.acceptInvitationButton.scrollIntoViewIfNeeded();
        await expect(this.acceptInvitationButton).toBeVisible();
        await this.acceptInvitationButton.click();
        
    }

    /**
     * Method to unsubscribe the email invitation.
     */
    async unsubscribeButtonClick(){
        await this.unsubscribeButton.scrollIntoViewIfNeeded();
        await expect(this.unsubscribeButton).toBeVisible();
        await this.unsubscribeButton.click();
        
    }

    /**
     * Method to validate pending approval email.
     */
    async validatePendingApprovalEmail(orderId){
        await this.page.reload();
        const orderIdEmailSubject = "//td[contains(text(),'"+orderId+"')]";
        await expect(this.page.locator(orderIdEmailSubject)).toContainText(orderId);
        await this.page.locator(orderIdEmailSubject).click();

        await this.awaitingApprovalMsg.scrollIntoViewIfNeeded();
        await expect(this.awaitingApprovalMsg).toBeVisible();
        
    }

    /**
     * Method To Validate Number of invites for resend flow(B2B).
     */
    async validateNumOfInvites(){
        let statuss = true;
        let status = false;
        await this.page.reload();
        await this.page.waitForTimeout(10000);
        const emailCount = await this.emailNum.count();
        console.log("email count is:", emailCount);
        if(emailCount > 1){
            await expect(statuss).toBeTruthy(); 
        }else{
            await this.page.waitForTimeout(5000);
            await expect(status).toBeTruthy(); 
        }
        
        
    }

   }
