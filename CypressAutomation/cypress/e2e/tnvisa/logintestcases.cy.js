import loginPO from "./pageobjects/loginPO";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('TN Visa - Login', () =>
{
    it.only('Login Test - Successfull', function ()
    {
        const login = new loginPO()
        login.navigateURL()
        cy.wait(1500)
        login.enterEmail('bilal.ashraf+03@emerald-labs.com')
        login.enterPassword('12345678')
        login.checkRemember()
        login.clickSignin()
        cy.wait(4500)
        cy.url().should('be.equal', 'https://develop.d1cbvinf8cc0vn.amplifyapp.com/dashboard')
        //login.verifyDashboardtxt()
        //login.verifyCalendartab()
        //login.verifyPendingreqtab()
    }
    )

    it ('Login Test - Unsuccessfull', function ()
    {
        const login = new loginPO()
        login.navigateURL()
        cy.wait(1500)
        login.enterEmail('provider1@identifyu.com')
        login.enterPassword('password1')
        login.checkRemember()
        login.clickLogin()
        cy.wait(1500)
        cy.url().should('be.equal', 'https://identifyu-staging.herokuapp.com/auth/login')

    }
    )

}       )