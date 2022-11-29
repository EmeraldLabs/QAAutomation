Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('IdentifyU - Store Front', () =>
{
    it ('Store Front Test - Landing', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get(':nth-child(7) > .nav-link').click()
        cy.wait(3000)
        cy.get('.col-md-10 > h4').contains('Store Front')
        cy.contains('View')
        cy.get('#store_front_select_261').select(2)
        cy.wait(3000)
        cy.get('#thats_great').click({force: true})

        
    }
    )

}       )