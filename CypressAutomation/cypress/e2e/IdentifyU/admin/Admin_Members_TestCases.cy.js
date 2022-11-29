Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('IdentifyU - Members', () =>
{
    it ('Members Test - Landing', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.card-body > .button-orange').contains('Signed Up')
        cy.get('.button-white-border-less').contains('Invited by Provider')
        
    }
    )

    it.only ('Members Test - View Member', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000) 
        cy.get(':nth-child(4) > .nav-link').click()
        cy.contains('View/Edit').click()
        cy.wait(3000) 
        //cy.get('#advisor-row287 > :nth-child(6) > .text-right > .btn').click()
        cy.get('label.select').contains('Status')
        cy.get('div.float-right > .button-white').contains('Back')
        cy.get('div.float-right > .button-orange').contains('Save')
        cy.get(':nth-child(3) > :nth-child(1) > .profile-label').contains('First name')
        cy.get(':nth-child(3) > :nth-child(2) > .profile-label').contains('Last name')
        cy.get(':nth-child(7) > :nth-child(1) > .profile-label').contains('Email')
        cy.get(':nth-child(7) > :nth-child(2) > .profile-label').contains('Phone number')
        cy.get(':nth-child(12) > .ms-3 > .mb-4').contains('Gender')
        cy.get(':nth-child(13) > .ms-3 > .mb-4').contains('Age Bracket')
        cy.get(':nth-child(14) > .ms-3 > .mb-4').contains('What kind of Advisor are looking to work with?')
        cy.get(':nth-child(15) > .ms-3 > .mb-4').contains('Gender of Adviser You would like to work with')
        cy.get('.provider-profile-container > :nth-child(4)').scrollIntoView()
        cy.get('.provider-profile-container > :nth-child(4)').contains('Assessments')
        cy.get('div.float-right > .button-white').click()
    }
    )
    it ('Members Test - Edit Member', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000) 
        cy.get(':nth-child(4) > .nav-link').click()
        cy.contains('View/Edit').click()
        cy.get('#user_first_name').type('CYFN')
        cy.get('#user_last_name').type('CYLN')
        cy.get('#user_gender_other').click()
        cy.contains('Save').click()
        cy.contains('Back').click()

        
    }
    )
}       )