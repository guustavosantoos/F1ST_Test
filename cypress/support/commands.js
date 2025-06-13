Cypress.Commands.add('login', () => {
    
  cy.fixture('user').then((fixture) => {
      const dados = fixture.dados;

    cy.viewport(1920, 1080)  
    cy.visit('https://www.automationexercise.com/login')
    
    cy.url()
      .should('include', 'https://www.automationexercise.com/login');

    cy.get('.login-form')
      .should('be.visible');

    cy.get('[data-qa="login-email"]')
      .type(dados.email)

    cy.get('[data-qa="login-password"]')
      .type(dados.password)

    cy.get('[data-qa="login-button"]')
      .click()

    cy.url()
      .should('include', 'https://www.automationexercise.com')


  }) 
  
}),

Cypress.Commands.add('paginaDepartamento', () => {

  cy.viewport(1920, 1080)  
  cy.visit('https://www.automationexercise.com/products')

})
