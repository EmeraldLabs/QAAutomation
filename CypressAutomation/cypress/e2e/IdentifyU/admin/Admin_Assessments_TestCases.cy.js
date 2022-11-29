Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('IdentifyU - Assessments', () =>
{
    it.only ('Assessments Test - Landing', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get(':nth-child(5) > .nav-link').click()
        cy.wait(3000)
        cy.get('.card-body > .button-orange').contains('Questions')
        cy.get('.button-white-border-less').contains('Assessment Slides')
        cy.get('.row > :nth-child(2) > .btn').contains('Add Question')
             
        
    }
    )
   
    it ('Assessments Test - Add Assessment Question', function ()
    {
        
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(1500)
        cy.get(':nth-child(5) > .nav-link').click()
        cy.contains('Add Question').click()
        cy.get('#question_statement').type('Cypress Added Questionaire')
        cy.get(':nth-child(4) > .collection_radio_buttons').click()
        cy.get('#question_feeling_ids_1').check()
        cy.get('#question_feeling_ids_18').check()
        cy.get('#question_form_submit_button').click()
        cy.contains('Created Successfully')
        cy.get('#edit-question-success-modal-body > #thats_great').click({force: true})
                
    }
    )

    it ('Assessments Test - Assessment Slides Landing', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(1500)
        cy.get(':nth-child(5) > .nav-link').click()
        cy.get('.button-white-border-less').click()
        cy.wait(1500)
        cy.get('.row > :nth-child(2) > .btn').contains('Add Slide')

        
    }
    )
    it ('Assessments Test - Assessment Slides Add', function ()
    {
        cy.visit('https://identifyu-staging.herokuapp.com/admins/sign_in')
        cy.wait(3000)
        cy.get('#admin_email').type('admin@identifyu.com')
        cy.get('#admin_password').type('P@55w04d')
        cy.get('#admin_remember_me').check()
        cy.get('.btn').click()
        cy.wait(1500)
        cy.get(':nth-child(5) > .nav-link').click()
        cy.get('.button-white-border-less').click()
        cy.wait(30000)
        cy.get('.row > :nth-child(2) > .btn').click()
        cy.wait(1500)
        cy.get('#assessment_slide-modal-lable').contains('Add Assessment Slide')
        cy.get('#upload-photo').contains('Upload Photo')
        cy.get('label.select').contains('Sequence number')
        cy.get('.button-white').contains('Cancel')
        cy.get('.form-actions').contains('Save')
        cy.get('.button-white').click()
        
    }
    )
}       )