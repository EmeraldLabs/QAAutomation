Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('IdentifyU - Price Model', () =>
{
    it ('Price Model Test - Landing', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get(':nth-child(8) > .nav-link').click()
        cy.wait(3000)
        cy.get('.col-md-10 > h4').contains('Price Model')
        

        
    }
    )

    it ('Price Model Test - Edit', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get(':nth-child(8) > .nav-link').click()
        cy.wait(3000)
        cy.get('#price-model-row1 > :nth-child(3) > .btn').click()
        cy.wait(3000)
        cy.get('#price-model-modal-lable').contains('Edit Price Model')
        cy.get('.price_model_name > label.string').contains('Name')
        cy.get('.price_model_amount > label.string').contains('Amount')
        cy.get('#price_model_amount').clear()
        cy.get('#price_model_amount').type('2')
        cy.get('.form-actions > .btn').contains('Update')
        cy.get('.form-actions > .btn').click()
        cy.wait(3000)
        cy.get('#price-model-success-modal-body > .btn').click({force: true})


        

        
    }
    )

}       )