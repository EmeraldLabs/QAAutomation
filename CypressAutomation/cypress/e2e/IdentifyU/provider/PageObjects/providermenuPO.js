export default class providermenuPO{

    clickmenu(){
        cy.get('#react-sidebar-toggle-btn').click()
        return this
    }

    clickappointments(){
        cy.get('[style="display: flex; flex-direction: column; padding-top: 50px;"] > :nth-child(2)').click()
        return this
    }

    clickmembers(){
        cy.get('[style="display: flex; flex-direction: column; padding-top: 50px;"] > :nth-child(3)').click()
        return this
    }

    clickPayout(){
        cy.get('[style="display: flex; flex-direction: column; padding-top: 50px;"] > :nth-child(4)').click()
        return this
    }

    clickInvite(){
        cy.get('[style="display: flex; flex-direction: column; padding-top: 50px;"] > :nth-child(5)').click()
        return this
    }

    clickProfile(){
        cy.get('[style="display: flex; flex-direction: column; padding-top: 50px;"] > :nth-child(6)').click()
        return this
    }
}