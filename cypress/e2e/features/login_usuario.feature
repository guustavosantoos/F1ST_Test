Feature: Login de Usuário

  Background:
    Given que o usuário está na página de login

  Scenario: Login com credenciais válidas
    When preenche o campo "Email Address" com "test_2025@teste.com.br"
    And preenche o campo "Password" com "teste"
    And clica no botão "Login"
    Then deve ser direcionado para a página principal logado

  Scenario: Login com senha incorreta
    When preenche o campo "Email Address" com "test_2025@teste.com.br"
    And preenche o campo "Password" com "senhaerrada"
    And clica no botão "Login"
    Then deve ver a mensagem de erro "Your email or password is incorrect!"

  Scenario: Login com email não cadastrado
    When preenche o campo "Email Address" com "naoexiste@teste.com"
    And preenche o campo "Password" com "teste"
    And clica no botão "Login"
    Then deve ver a mensagem de erro "Your email or password is incorrect!"

  Scenario: Validação de campos obrigatórios no login
    When clica no botão "Login" sem preencher os campos
    Then os campos "Email Address" e "Password" devem ser destacados como obrigatórios
