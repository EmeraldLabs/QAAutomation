export default class mploginPO{

    navigateURL(){
        cy.visit("https://identifyu-staging.herokuapp.com/auth/login")
    }

    enterEmail(username){
        cy.get('#email').clear()
                            .type(username)
        return this
    }

    enterPassword(password){
        cy.get('#password').clear()
                                .type(password)
        return this
    }

    checkRemember(){
        cy.get('#remember').check()
        return this
    }

    clickLogin(){
        cy.get('.ant-btn > span').click()
        return this
    }

    verifyDashboardtxt(){
        cy.get('#react-header-actions > span').contains('Dashboard')
        return this
    }

    verifyCalendartab(){
        cy.get(':nth-child(1) > .ant-btn > span').contains('Calendar')
        return this
    }

    verifyPendingreqtab(){
        cy.get('#tab-container > :nth-child(2) > .ant-btn > span').contains('Pending Requests')
        return this
    }
}