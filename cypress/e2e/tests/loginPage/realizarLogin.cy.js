import locators from "../../../support/locators";

describe('Página de login', () => {
    
  beforeEach(() => {
    cy.viewport(1920, 1080)  
    cy.visit('https://www.automationexercise.com/login')
  });
  
  it('Realizar o login com sucesso', () => {
    
    cy.fixture('user').then((fixture) => {
      const dados = fixture.dados;
      cy.url()
        .should('include', 'https://www.automationexercise.com/login');

      cy.get(locators.login.modalLogin)
      .should('be.visible');

      cy.get(locators.login.inputEmail)
        .type(dados.email)

      cy.get(locators.login.inputPassword)
        .type(dados.password)

      cy.get(locators.login.btnLogin)
        .click()

      cy.url()
        .should('include', 'https://www.automationexercise.com')
    })
  });
});