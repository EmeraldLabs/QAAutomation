Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('IdentifyU - Logout', () =>
{
    it ('Login Test - Positive', function ()
    {
    cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
    cy.wait(3000)
    cy.get('#admin_email').type('admin@identifyu.com')
    cy.get('#admin_password').type('P@55w04d')
    cy.get('#admin_remember_me').check()
    cy.get('.btn').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > .nav-link').contains('Admins')
    cy.get('#navbarDropdown').click()
    cy.get('.dropdown-menu > :nth-child(2) > .dropdown-item').click()
    }
    )
}       )