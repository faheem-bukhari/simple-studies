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
        
        //login test successful
        cy.get('input[name="username"]').type('student1')
        cy.get('input[name="password"]').type('Testing123@')
        cy.get('#login').click()
        //cy.get('form > .pt-4').click()
        //console.log("valid username/password")
    
    })
    
})

it('2nd test', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('https://test.simplestudying.com/login')
    //pop-up cancellation
    cy.wait(8000)
    cy.get('[title="Close"]').click()
    cy.get('#rcc-confirm-button').click()
    
    //login test unsuccessful
    cy.get('input[name="username"]').type('student')
    cy.get('input[name="password"]').type('Testing123@')
    cy.get('form > .pt-4').click()
    //console.log("invalid username/valid password")

})

it('3rd test', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('https://test.simplestudying.com/login')
    //pop-up cancellation
    cy.wait(8000)
    cy.get('[title="Close"]').click()
    cy.get('#rcc-confirm-button').click()
    
    //login test unsuccessful
    cy.get('input[name="username"]').type('student1')
    cy.get('input[name="password"]').type('535473buj')
    cy.get('form > .pt-4').click()
    //console.log("valid username/invalid password")

})

it('4rth test', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('https://test.simplestudying.com/login')
    //pop-up cancellation
    cy.wait(8000)
    cy.get('[title="Close"]').click()
    cy.get('#rcc-confirm-button').click()
    
    //login test unsuccessful
    cy.get('input[name="username"]').type('studant1')
    cy.get('input[name="password"]').type('System123@')
    cy.get('form > .pt-4').click()
    //console.log("invalid username/invalid password")

})



