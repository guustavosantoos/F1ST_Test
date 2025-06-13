Feature: Fluxo de Checkout do Pedido

  Background:
    Given que o usuário possui produtos no carrinho

  Scenario: Proceder para checkout a partir do carrinho
    Given que o usuário está na página do carrinho
    When clica no botão "Proceed To Checkout"
    Then deve ser direcionado para a página de checkout
    And deve ver os detalhes do endereço de entrega
    And deve ver os detalhes do endereço de cobrança
    And deve ver a revisão do pedido com o produto "Men Tshirt"

  Scenario: Finalizar pedido com comentários
    Given que o usuário está na página de checkout
    When preenche o campo de comentários com "Entregar no período da manhã"
    And clica no botão "Place Order"
    Then deve ser direcionado para a página de pagamento
    And a URL deve conter "/payment"

  Scenario: Finalizar pedido sem comentários
    Given que o usuário está na página de checkout  
    When clica no botão "Place Order"
    Then deve ser direcionado para a página de pagamento
    And a URL deve conter "/payment"
