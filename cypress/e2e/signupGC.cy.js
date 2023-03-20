// <reference types="cypress" />
describe('simple studies', () => {

    it('1st test', function () {
    
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    
        cy.visit('https://test.simplestudying.com/login')
        //pop-up cancellation
        cy.wait(8000)
        cy.get('[title="Close"]').click()
        cy.get('#rcc-confirm-button').click()
        
        cy.get('.loginBottomText > .font-bold').click() // //click on sign up
        //cy.get('.w-full > .socialBtn').click() //click on google buton
        //cy.wait(5000)
        //cy.get('span > .socialBtn').click() //click on facebook button

        //[signup page with correct information]
        cy.get(':nth-child(1) > :nth-child(2) > .text-input-container > .text-input').type('herry.george70@gmail.com')
        cy.get(':nth-child(2) > :nth-child(2) > .text-input-container > .text-input').type('herry123')
        cy.get(':nth-child(3) > :nth-child(2) > .text-input-container > .text-input').type('Chemical043') //signup password
        cy.get(':nth-child(4) > :nth-child(2) > .text-input-container > .text-input').type('Chemical043') //confirm password
        cy.get('.checkmark').click()
        cy.get('.h-51 > .buttonClass').click()
        


    })
})

//[page for login after signup]
it('2nd test', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('https://test.simplestudying.com/login')
    //pop-up cancellation
    cy.wait(8000)
    cy.get('[title="Close"]').click()
    cy.get('#rcc-confirm-button').click()
    
    cy.get('input[name="username"]').type('herry.george70@gmail.com')
    cy.get('input[name="password"]').type('Chemical043')
    // cy.get('.h-34 > .buttonClass').click()
    //cy.get('.buttonClass.w-full.h-full.p-2.flex.items-center.cursor-pointer.justify-center.text-body-large.font-bold.prevNextBtnBox.text-white.subscription_btn-disable.buttonClass').click({multiple: true})
    cy.get('#login').click()


    //cy.get('div:contains("Log in")').click()

})

