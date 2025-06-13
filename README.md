# Projeto de Automação de Testes - E-commerce & API

## Requisitos:

```
1. git clone https://github.com/guustavosantoos/F1ST_Test.git 
 
2. npm init -y 

3. npm install cypress@13.7.0 --save-dev  
```


## Execução dos Testes

**Modo interativo:**

```
npx cypress open
```


**Modo headless:**

```
npx cypress run
```


## Estrutura

- `cypress/e2e/features/` — Cenários BDD (.feature)
- `cypress/e2e/tests/` — Cenários de Testes (Cypress)
- `cypress/fixtures/` — Massas de Testes

## Exemplo de Teste de API

Consulta à API do Trello e exibição do campo `name` da estrutura `list`:

{
"data": {
"list": {
"name": "Professional"
}
}
}
