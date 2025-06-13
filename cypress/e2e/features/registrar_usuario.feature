Feature: Registro de Novo Usuário

  Background:
    Given que o usuário está na página de login/signup

  Scenario: Registro bem-sucedido de novo usuário
    Given que o usuário está na seção "New User Signup!"
    When preenche o campo "Name" com "Usuário Teste"
    And preenche o campo "Email Address" com "test_2025@teste.com.br"
    And clica no botão "Signup"
    Then deve ser direcionado para a página de informações da conta
    When preenche os dados obrigatórios da conta
    And define a senha como "teste"
    And clica no botão "Create Account"
    Then deve ser direcionado para a página {/account_created} com a mensagem "Account Created!"
    And deve exibir botão de "Continue" para a página inicial

  Scenario: Tentativa de registro com email já existente
    Given que o usuário está na seção "New User Signup!"
    When preenche o campo "Name" com "Outro Usuário"
    And preenche o campo "Email Address" com "test_2025@teste.com.br"
    And clica no botão "Signup"
    Then deve ver a mensagem de erro "Email Address already exist!"

  Scenario: Validação de campos obrigatórios no signup
    Given que o usuário está na seção "New User Signup!"
    When clica no botão "Signup" sem preencher os campos
    Then os campos "Name" e "Email Address" devem ser destacados como obrigatórios


    
