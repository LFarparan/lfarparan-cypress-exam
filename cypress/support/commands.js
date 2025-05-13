

Cypress.Commands.add('fillRegForm', (user) => {
    cy.get('#username').type(user.username).should('be.visible')
    cy.get('#email').type(user.email).should('be.visible')
    cy.get('#password').type(user.password).should('be.visible')
    cy.get('#confirmPassword').type(user.confirmPassword).should('be.visible')
});


Cypress.Commands.add('fillLoginForm', (user) => {
    cy.get('[data-testid="input-username"]').type(user.username).should('be.visible')
    cy.get('[data-testid="input-password"]').type(user.password).should('be.visible')
});