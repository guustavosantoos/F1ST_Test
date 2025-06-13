const locators = {

    header: {

        btnLogin: '[href="/login"]',
        btnProducts: '[href="/products"]',
    },

    departmentPage: {

        searchInput: '[class="form-control input-lg"]',
        btnSearch: '[class="btn btn-default btn-lg"]',
        modalProduct: '[class="product-image-wrapper"]',
        btnAddToCart: '[class="btn btn-default add-to-cart"]',
        modalAdded: '[class="modal-content"]',
        linkViewCart: '[href="/view_cart"]',

    },

    checkout: {
        modalProductCheckout: '[class="table-responsive cart_info"]',
        btnProcessCheckout: '[class="btn btn-default check_out"]',
        infoDeliveryAddress: '[class="page-subheading"]',
        btnPlaceOrder: '[class="btn btn-default check_out"]'
    },

    login: {
        modalLogin: '.login-form',
        inputEmail: '[data-qa="login-email"]',
        inputPassword: '[data-qa="login-password"]',
        btnLogin: '[data-qa="login-button"]',

    }



}


export default locators;