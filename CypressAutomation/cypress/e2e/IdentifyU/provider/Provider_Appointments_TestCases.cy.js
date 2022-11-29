
import providermenuPO from "./PageObjects/providermenuPO";
import mploginPO from "./PageObjects/mploginPO"
import pappointmentsPO from "./PageObjects/pappointmentsPO";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('IdentifyU - Provider - Appointments', () =>
{
    it('Appointments Test - Landing Page', function ()
    {
        const mplogin = new mploginPO()
        const providermenu = new providermenuPO()
        const pappts = new pappointmentsPO()
        mplogin.navigateURL()
        cy.wait(1500)
        mplogin.enterEmail('provider@identifyu.com')
        mplogin.enterPassword('password')
        mplogin.checkRemember()
        mplogin.clickLogin()
        cy.wait(1500)
        providermenu.clickmenu()
        providermenu.clickappointments()
        cy.url().should('be.equal', 'https://identifyu-staging.herokuapp.com/appointments')
        pappts.verifyApptstxt()
        pappts.verifyUpcomingapptstxt()
        pappts.verifyPastapptstxt()
        cy.wait(1500)
    }
    )

    it ('Appointments Test - Upcoming Appointments', function ()
    {
        const mplogin = new mploginPO()
        const providermenu = new providermenuPO()
        const pappts = new pappointmentsPO()
        mplogin.navigateURL()
        cy.wait(1500)
        mplogin.enterEmail('provider@identifyu.com')
        mplogin.enterPassword('password')
        mplogin.checkRemember()
        mplogin.clickLogin()
        cy.wait(1500)
        providermenu.clickmenu()
        providermenu.clickappointments()
        pappts.clickUpcomingappts()
        cy.wait(1500)
                     
    }
    )
   
    it ('Appointments Test - Past Appointments', function ()
    {
        const mplogin = new mploginPO()
        const providermenu = new providermenuPO()
        const pappts = new pappointmentsPO()
        mplogin.navigateURL()
        cy.wait(1500)
        mplogin.enterEmail('provider@identifyu.com')
        mplogin.enterPassword('password')
        mplogin.checkRemember()
        mplogin.clickLogin()
        cy.wait(1500)
        providermenu.clickmenu()
        providermenu.clickappointments()
        pappts.clickPastapptstxt()
        cy.wait(1500)
                     
    }
    )

    it ('Appointments Test - Upcoming Appointments', function ()
    {
        const mplogin = new mploginPO()
        const providermenu = new providermenuPO()
        const pappts = new pappointmentsPO()
        mplogin.navigateURL()
        cy.wait(1500)
        mplogin.enterEmail('provider@identifyu.com')
        mplogin.enterPassword('password')
        mplogin.checkRemember()
        mplogin.clickLogin()
        cy.wait(1500)
        providermenu.clickmenu()
        providermenu.clickappointments()
        pappts.clickUpcomingappts()
        cy.wait(1500)
                     
    }
    )
}       )