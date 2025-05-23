import { expect } from '../testFixtures/pageFixture.js';

/**
 * Page objects for Footer Links.
 */
exports.AthenaFooterLinksPage = class AthenaFooterLinksPage {
    constructor(page){
        this.page = page;
        this.exploreOurBrandsFooter=page.locator('//div[@data-testid="footer-content-shop"]/div/h3[contains(text(),"Explore our brands")]');
        this.footerBrandElements=page.locator("//div[@class='brand-links']/ul/li/a/child::img");
        this.footerBrandElementsLink=page.locator("//div[@class='brand-links']//child::a");

    }

    async validateFooterLinksElements(footerElements){
        await this.exploreOurBrandsFooter.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(9000);
        expect(await this.exploreOurBrandsFooter.isVisible({timeout: 3000}))
        const footerElementsCount= await this.footerBrandElements.count();
        expect(footerElementsCount).toEqual(15);
        console.info("verified Footer links count")
        for(let i=0;i<=footerElementsCount-1;i++)
            {
                const footerElementName= await this.footerBrandElements.nth(i).getAttribute('alt');
                expect(await footerElements[i]).toEqual(footerElementName);
            }
        console.info("verified footer elements")

    }

    async valiateFooterLinksPages(FooterLinks){
        const footerElementsCount= await this.footerBrandElements.count();
        for(let i=0;i<=footerElementsCount-1;i++){
            let links= await this.footerBrandElementsLink.nth(i).getAttribute('href');
            expect(await FooterLinks[i]).toEqual(links);
        }  
        console.info("verified the footerLinks")
    }

    async validateFooterLiquorConnection(footerElements){
        const Liquorelement= await this.footerBrandElements.nth(6).getAttribute('alt');
        expect(footerElements[6]).toEqual(Liquorelement);
        console.info("verified Liquor Connection Element in Footer")
        
    }


}