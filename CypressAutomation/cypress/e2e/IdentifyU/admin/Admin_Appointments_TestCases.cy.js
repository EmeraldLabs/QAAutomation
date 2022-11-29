Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('IdentifyU - Appointments', () =>
{
    it ('Appointments Test - All Apointments', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get(':nth-child(6) > .nav-link').click()
        cy.wait(3000)
        cy.get('.button-orange').click()
        cy.get('.button-orange').contains('All Appointments')
        cy.get('[href="/admins/dashboard/appointments?filter=past"]').contains('Past Appointments')
        cy.get('[href="/admins/dashboard/appointments?filter=upcoming"]').contains('Upcoming Appointments')

        
    }
    )

    it ('Appointments Test - Past Appointments', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get(':nth-child(6) > .nav-link').click()
        cy.wait(3000)
        cy.get('[href="/admins/dashboard/appointments?filter=past"]').click()

   }
    )
    it ('Appointments Test - Upcoming Apointments', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000) 
        cy.get(':nth-child(6) > .nav-link').click()
        cy.wait(3000)
        cy.get('[href="/admins/dashboard/appointments?filter=upcoming"]').click()
        
        
    }
    )
}       )