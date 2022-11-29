Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('IdentifyU - Admins', () =>
{
    it ('Admins Test - Landing', function ()
    {
    cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
    cy.wait(3000)
    cy.get('#admin_email').type('admin@identifyu.com')
    cy.get('#admin_password').type('P@55w04d')
    cy.get('#admin_remember_me').check()
    cy.get('.btn').click()
    cy.wait(3000)    
    cy.get('.col-md-10 > :nth-child(5)').contains('Admins')
    cy.get('.row > :nth-child(2) > .btn').contains('Invite Admin')

    }
    )

    it ('Admins Test - Invite Admin', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get('.row > :nth-child(2) > .btn').click()
        cy.get('#invite-member-modal-lable').contains('Invite Admin to IdentifyU')
        cy.get('#admin_first_name').type('CypressFirstName')
        cy.get('#admin_last_name').type('CypressLastName')
        cy.get('#admin_email').type('bilal.ashraf+9999@emerald-labs.com')
        cy.get('#admin_designation').type('CypressQA')    
        cy.get('.form-actions > .btn').click()
        cy.wait(1000)
        cy.get('#invite-success-modal > .modal-dialog > .modal-content > #invite-success-modal-body > .btn').click({force: true})
        
    }
    )

    it ('Admins Test - Edit Admin', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get('.row > :nth-child(2) > .btn').click()
        cy.get('#invite-member-modal-lable').contains('Invite Admin to IdentifyU')
        cy.get('#admin_first_name').type('CypressFirstNameUpdated')
        cy.get('#admin_last_name').type('CypressLastNameUpdated')
        cy.get('#admin_email').type('bilal.ashraf+9999@emerald-labs.com')
        cy.get('#admin_designation').type('CypressQAUpdated')    
        cy.get('.form-actions > .btn').click()
        cy.wait(1000)
        cy.get('#invite-success-modal > .modal-dialog > .modal-content > #invite-success-modal-body > .btn').click({force: true})
        
    }
    )

}       )