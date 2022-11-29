export default class loginPO{

    navigateURL(){
        cy.visit("https://develop.d1cbvinf8cc0vn.amplifyapp.com/")
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
        cy.get('#normal_login_remember').check()
        return this
    }

    clickSignin(){
        cy.get('#simple-signin').click()
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