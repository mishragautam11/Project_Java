import { test, expect } from '@playwright/test';
const browserFixture = require('@playwright/test');


exports.test = browserFixture.test.extend({
    browserPage: async ({ browser }, use) => {
        console.log("in browser fixture");
        const context = await browser.newContext({ userAgent : "coles/internal-qa-af098fa",});
        await context.grantPermissions(['geolocation'], { origin: 'https://cusp-test.coles.com.au' });
        await context.grantPermissions(['geolocation'], { origin: 'https://cusp-svt.coles.com.au' });
        const page = await context.newPage({});
        console.log(await page.evaluate(()=>navigator.userAgent));
        await use({page,context});
        await context.close();
    },
    inboxPage: async ({ browser }, use) => {
        console.log("in browser fixture");
        const context = await browser.newContext({ userAgent : "coles/internal-qa-af098fa",});
        const inboxpage = await context.newPage({});
        console.log(await inboxpage.evaluate(()=>navigator.userAgent));
        await use({inboxpage,context});
        await context.close();
    }
    
});
exports.expect = browserFixture.expect;