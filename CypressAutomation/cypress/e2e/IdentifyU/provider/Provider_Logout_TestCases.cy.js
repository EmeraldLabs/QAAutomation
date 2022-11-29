import mploginPO from "./PageObjects/mploginPO";
import mplogoutPO from "./PageObjects/mplogoutPO";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('IdentifyU - Provider - Logout', () =>
{
    it('Logout Test - Successfull', function ()
    {
        const mplogin = new mploginPO()
        const mplogout = new mplogoutPO()
        mplogin.navigateURL()
        cy.wait(1500)
        mplogin.enterEmail('provider@identifyu.com')
        mplogin.enterPassword('password')
        mplogin.checkRemember()
        mplogin.clickLogin()
        cy.wait(1500)
        mplogout.clickLogout()
        cy.url().should('be.equal', 'https://identifyu-staging.herokuapp.com/auth/login')
    }
    )
}       )