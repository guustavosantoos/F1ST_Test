# Projeto de Automação de Testes - E-commerce & API

## Sobre o Projeto
Este projeto automatiza testes para um sistema de e-commerce completo, incluindo funcionalidades de:

- Autenticação de usuários (Login/Registro)
- Busca e navegação de produtos
- Carrinho de compras
- Processo de checkout
- Testes de API (integração com Trello API)


## 🛠 Tecnologias Utilizadas
[Cypress](https://www.cypress.io/) - Framework de testes end-to-end

[Cucumber](https://cucumber.io/) - Ferramenta BDD para escrita de cenários

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação

[Node.js](https://nodejs.org/pt) - Ambiente de execução

## 📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 14 ou superior)
- npm (geralmente vem com Node.js)
- Git

## Instalação do Repositório:

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

