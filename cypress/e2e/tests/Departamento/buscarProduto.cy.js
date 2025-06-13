import locators from "../../../support/locators";

describe('Página de Departamento', () => {
    
    beforeEach(() => {
        cy.paginaDepartamento()
    });

    it('Realizar a busca de um produto com sucesso', () => {
        
        cy.get(locators.departmentPage.searchInput)
            .should('be.visible')
            .type('Men Tshirt')

        cy.get(locators.departmentPage.btnSearch)
            .click()

        cy.url()
            .should('include', 'https://www.automationexercise.com/products?search=Men%20Tshirt')

        cy.get(locators.departmentPage.modalProduct)
            .should('be.visible')
    });

    it('Adicionando Produto no Carrinho', () => {
        
        cy.get(locators.departmentPage.searchInput)
            .should('be.visible')
            .type('Men Tshirt')

        cy.get(locators.departmentPage.btnSearch)
            .click()

        cy.url()
            .should('include', 'https://www.automationexercise.com/products?search=Men%20Tshirt')

        cy.get(locators.departmentPage.modalProduct)
            .should('be.visible')

        cy.get(locators.departmentPage.btnAddToCart)
            .eq(0)
            .click()

        cy.get(locators.departmentPage.modalAdded)
            .should('be.visible')
            .contains('Added!')

        cy.get(locators.departmentPage.linkViewCart)
            .eq(1)
            .click()

        cy.get(locators.checkout.modalProductCheckout)
            .should('be.visible')
        
        cy.url()
            .should('include', 'https://www.automationexercise.com/view_cart')
    });
});