Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('IdentifyU - Providers', () =>
{
    it ('Providers Test - Landing', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.card-body > .button-orange').contains('All Providers')
        cy.get('[href="/admins/dashboard/advisors?filter=invited"]').contains('Invited')
        cy.get('[href="/admins/dashboard/advisors?filter=signed_up"]').contains('Signed Up')
        cy.get('.row > :nth-child(2) > .btn').contains('Invite Provider')
    }
    )

    // it('Providers Test - Invite Provider', function ()
    // {

    //     cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
    //     cy.wait(3000)
    //     cy.get('#admin_email').type('admin@identifyu.com')
    //     cy.get('#admin_password').type('P@55w04d')
    //     cy.get('#admin_remember_me').check()
    //     cy.get('.btn').click()
    //     cy.wait(3000) 
    //     cy.get(':nth-child(3) > .nav-link').click()
    //     cy.get('[href="/admins/dashboard/advisors?filter=signed_up"]').click()
    //     cy.get('.row > :nth-child(2) > .btn').click()
    //     cy.wait(1500)
    //     cy.get('#invitation_first_name').type('Cypress')
    //     cy.get('#invitation_last_name').type('Provider')
    //     cy.get('#invitation_email').type('cypress_email1212130@emerald-labs.com')
    //     cy.get('.form-actions > .btn').click()
    //     cy.get('#invite-success-modal > .modal-dialog > .modal-content > .modal-header > .btn-close').click()
             
    // }
    // )

    it ('Providers Test - View Provider', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000) 
        cy.get(':nth-child(3) > .nav-link').click()
        cy.contains('View/Edit').click()
        cy.get(':nth-child(3) > :nth-child(1) > .profile-label').contains('First name')
        cy.get(':nth-child(3) > :nth-child(2) > .profile-label').contains('Last name')
        cy.get(':nth-child(7) > :nth-child(1) > .profile-label').contains('Email')
        cy.get(':nth-child(7) > :nth-child(2) > .profile-label').contains('Phone number')
        cy.get('.col-12 > .profile-label').contains('Street address')
        cy.get(':nth-child(16) > :nth-child(1) > .profile-label').contains('City')
        cy.get(':nth-child(16) > :nth-child(2) > .profile-label').contains('State')
        cy.get(':nth-child(3) > .profile-label').contains('Zipcode')
        cy.get(':nth-child(17) > .col-8 > .float-left').contains('Education')
        cy.get(':nth-child(19) > .col-8 > .float-left').contains('Certifications')
        cy.get(':nth-child(22) > .col-8 > .float-left').contains('Previous Professional Experience')
        cy.get(':nth-child(25) > .col-8 > .float-left').contains('Skills')
        cy.get(':nth-child(28) > .col-8 > .float-left').contains('Social Media Links')
        cy.contains('Weekly Appointments').scrollIntoView()
        cy.contains('Weekly Appointments')
        cy.get('div.float-right > .button-white').contains('Back')
        cy.get('div.float-right > .button-orange').contains('Save')
        cy.get('div.float-right > .button-white').click()

    }
    )
    it.only ('Providers Test - Edit Provider', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000) 
        cy.get(':nth-child(3) > .nav-link').click()
        cy.contains('View/Edit').click()
        cy.get(':nth-child(3) > :nth-child(1) > .profile-label').type('UpdatedFN')
        cy.get(':nth-child(3) > :nth-child(2) > .profile-label').type('UpdatedLN')
        cy.get('div.float-right > .button-white').click()
        cy.get('div.float-right > .button-orange').click()
        
    }
    )
}       )