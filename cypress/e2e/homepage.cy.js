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

        cy.get('.w-44 > .img-fluid').click()

        //cy.get('.css-ackcql').click().type('criminal law')
        //cy.get('sel.css-ackcql').contains('Option 1').click() 
        //[for contact us with correct Email]
        cy.get('.nav-item > .btn').click()
        cy.get('.mb-6 > .text-input-container > #dateInput').type('faheem')
        cy.get('.flex.text-darkest > .flex > :nth-child(2) > .text-input-container > #dateInput').type('shah')
        cy.get('.flex.text-darkest > :nth-child(2) > .text-input-container > #dateInput').type('faheem.bukhari1122@gmail.com')
        cy.get('#textArea').type('sahdujd sakjdkb sdkjaduqwio')
        cy.get('#button > .text-center').click()
        
    })

    it('2nd test', function () {
    
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
//test.simplestudying.com/login')
    //pop-up cancellation
    cy.visit('https://test.simplestudying.com/login')
        //pop-up cancellation
    cy.wait(8000)
    cy.get('[title="Close"]').click()
    cy.get('#rcc-confirm-button').click()

    cy.get('.w-44 > .img-fluid').click()
    cy.get('.nav-item > .btn').click()
        cy.get('.mb-6 > .text-input-container > #dateInput').type('faheem')
        cy.get('.flex.text-darkest > .flex > :nth-child(2) > .text-input-container > #dateInput').type('shah')
        //[with invalid Email address]
        cy.get('.flex.text-darkest > :nth-child(2) > .text-input-container > #dateInput').type('zjhkahsud')
        cy.get('#textArea').type('sahdujd sakjdkb sdkjaduqwio')
        cy.get('#button > .text-center').click()

})

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

    cy.get('.w-44 > .img-fluid').click()
    //pop-up cancellation
    cy.get('.pt-12 > :nth-child(1) > p').click()
    //[test for notes]
    cy.get(':nth-child(1) > .flex-col > .lazy-load-image-background > img').click()

})

