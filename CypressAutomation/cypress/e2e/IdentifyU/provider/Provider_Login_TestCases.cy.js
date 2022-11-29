import mploginPO from "./PageObjects/mploginPO";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('IdentifyU - Provider - Login', () =>
{
    it('Login Test - Successfull', function ()
    {
        const mplogin = new mploginPO()
        mplogin.navigateURL()
        cy.wait(1500)
        mplogin.enterEmail('provider@identifyu.com')
        mplogin.enterPassword('password')
        mplogin.checkRemember()
        mplogin.clickLogin()
        cy.wait(1500)
        cy.url().should('be.equal', 'https://identifyu-staging.herokuapp.com/dashboard')
        mplogin.verifyDashboardtxt()
        mplogin.verifyCalendartab()
        mplogin.verifyPendingreqtab()
    }
    )

    it ('Login Test - Unsuccessfull', function ()
    {
        const mplogin = new mploginPO()
        mplogin.navigateURL()
        cy.wait(1500)
        mplogin.enterEmail('provider1@identifyu.com')
        mplogin.enterPassword('password1')
        mplogin.checkRemember()
        mplogin.clickLogin()
        cy.wait(1500)
        cy.url().should('be.equal', 'https://identifyu-staging.herokuapp.com/auth/login')
                     
    }
    )
   
}       )