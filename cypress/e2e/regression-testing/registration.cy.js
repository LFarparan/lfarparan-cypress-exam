import { generateRegistrationData } from '../../support/register.utils'

describe('Sprint 1 - Registration for Quiz Master & Regular User', { testIsolation: false }, () => {
    const user = generateRegistrationData()

    before(() => {
        cy.visit('/')
    })

    it('Verify user registration for Quiz Master and Regular User roles', () => {
        cy.get('.border').should('exist').click()

        // fill up reg form
        cy.fillRegForm(user)

        // select radio button for user type
        cy.get(`#${user.roleId}`).should('exist').click()

        // click register
        cy.get(':nth-child(6) > .w-full').should('exist').click()
    })


    it('Verify successful log in and access to appropriate URL of newly created accounts', () => {
        // fill up Login form
        cy.fillLoginForm(user)

        // click login button & check for redirect url
        cy.get('[data-testid="login-button"]').should('exist').click()
        cy.url().should('contain', user.expectedRedirect)
    })

    // Sad Path
    it('Verify unsuccessfully registration with blank credentials', () => {
        cy.visit('/register')

        // select radio button for user type
        cy.get(`#${user.roleId}`).should('exist').click()

        // click register
        cy.get(':nth-child(6) > .w-full').should('exist').click()

        //check for error message
        cy.get(':nth-child(1) > .text-red-600').should('contain', 'Username must be at least 3 characters')
        cy.get(':nth-child(2) > .text-red-600').should('contain', 'Please enter a valid email')
        cy.get(':nth-child(3) > .text-red-600').should('contain', 'Password must be at least 6 characters')

    })
})