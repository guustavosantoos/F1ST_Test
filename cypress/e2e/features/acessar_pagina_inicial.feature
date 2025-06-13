Feature: Navegação para página de Login
    Quando acessamos a página Home, os usuários devem ser capazes de navegar até a página de Login
    clicando na opção "Signup / Login" no menu superior.

  Scenario: Usuário acessa a Home e clica em "Signup/Login"
    Given que o usuário está na página Home
    When clica na opção "Signup / Login" no menu superior
    Then deve ser direcionado para a página de login (/login)


Feature: Navegação para a página de "Products"

  Scenario: Usuário acessa a Home e clica em "Products"
    Given que o usuário está na página Home
    When clica na opção "Products" no menu superior
    Then deve ser direcionado para a página de produtos (/products)
