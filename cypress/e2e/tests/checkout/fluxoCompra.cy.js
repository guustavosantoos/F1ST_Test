import locators from "../../../support/locators";

describe('Checkout', () => {
    
    
    it('Realizando fluxo de compra', () => {
        
        cy.login()

        cy.get(locators.header.btnProducts)
            .click()

        cy.url()
            .should('include', 'https://www.automationexercise.com/products')
        
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

        cy.wait(1500)

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

        cy.get(locators.checkout.btnProcessCheckout)
            .click()

        cy.get(locators.checkout.infoDeliveryAddress)
            .eq(0)
            .should('be.visible')
        
        cy.get(locators.checkout.infoDeliveryAddress)
            .eq(1)
            .should('be.visible')

        cy.get(locators.checkout.btnPlaceOrder)
            .click()
        
        cy.url()
            .should('include', 'https://www.automationexercise.com/payment')



    });
});