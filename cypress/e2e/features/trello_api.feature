Feature: Consulta de ação no Trello

  Scenario: Buscar ação e exibir nome da lista
    When faço uma requisição GET para a API do Trello
    Then o status code da resposta deve ser 200
    And exibo o campo "name" da estrutura "list"
