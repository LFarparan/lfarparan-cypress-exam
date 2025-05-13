

Cypress.Commands.add('fillRegForm', (user) => {
    cy.get('#username').type(user.username)
    cy.get('#email').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('#confirmPassword').type(user.confirmPassword)
});


Cypress.Commands.add('fillLoginForm', (user) => {
    cy.get('[data-testid="input-username"]').type(user.username)
    cy.get('[data-testid="input-password"]').type(user.password)
});