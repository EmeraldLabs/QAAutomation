export default class pappointmentsPO{

    verifyApptstxt(){
        cy.get('#react-header-actions > span').contains('Appointments')
        return this
    }

    verifyUpcomingapptstxt(){
        cy.get('#tab-container > :nth-child(1) > .ant-btn > span').contains('Upcoming Appointments')
        return this
    }

    verifyPastapptstxt(){
        cy.get('#tab-container > :nth-child(2) > .ant-btn > span').contains('Past Appointments')
        return this
    }

    clickUpcomingappts(){
        cy.get('#tab-container > :nth-child(1) > .ant-btn > span').click()
        return this
    }

    clickPastapptstxt(){
        cy.get('#tab-container > :nth-child(2) > .ant-btn > span').click()
        return this
    }
}


