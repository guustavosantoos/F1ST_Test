import locators from "../../../support/locators";

describe('Página Home', () => {
    
    beforeEach(() => {
        cy.viewport(1920, 1080)  
        cy.visit('https://www.automationexercise.com/')
    });
    it('Acessando a página de Login/Registro', () => {
        
        cy.url()
            .should('include', 'https://www.automationexercise.com/')

        cy.get(locators.header.btnLogin)
            .click()
    
        cy.url()
            .should('include', 'https://www.automationexercise.com/login')
    });
});