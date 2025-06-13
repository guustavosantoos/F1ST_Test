Feature: Busca de Produto na Página de Produtos

  Background:
    Given que o usuário está na página de produtos

  Scenario: Buscar produto existente pelo nome
    When preenche o campo "Search Product" com "Men Tshirt"
    And clica no botão de busca
    Then deve ver pelo menos um resultado contendo "Men Tshirt"

  Scenario: Buscar produto inexistente
    When preenche o campo "Search Product" com "ProdutoInexistente123"
    And clica no botão de busca
    Then não deve exibir nenhum produto


Feature: Adicionar Produto ao Carrinho

  Background:
    Given que o usuário está na página de produtos

  Scenario: Adicionar um produto ao carrinho com sucesso
    When clica no botão "Add to cart" do produto "Blue Top"
    Then deve ver o modal de confirmação de adição ao carrinho
    And a mensagem "Your product has been added to cart."
    When clica em "Continue Shopping"
    Then o modal deve ser fechado

  Scenario: Visualizar o carrinho após adicionar um produto
    When clica no botão "Add to cart" do produto "Men Tshirt"
    Then deve ver o modal de confirmação de adição ao carrinho
    When clica em "View Cart"
    Then deve ser direcionado para a página do carrinho
    And o produto "Men Tshirt" deve estar listado no carrinho
