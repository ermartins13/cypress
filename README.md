# Automação de Testes com Cypress

Este projeto realiza automação de testes end-to-end utilizando [Cypress](https://www.cypress.io/) para o site [Automation Exercise](https://www.automationexercise.com/), com organização modular, centralização de seletores e integração com o Allure Report para geração de relatórios.

---

## Estrutura do Projeto

```
cypress/
├── downloads/                # Arquivos baixados durante os testes
├── e2e/                      # Especificações dos testes (specs)
│   ├── Cadastro.cy.js
│   ├── Compras.cy.js
│   ├── Login.cy.js
│   └── RealizarLogin.cy.js
├── fixtures/                 # Dados de teste em JSON
│   ├── credenciaisFixture.json
│   └── usuarioCadastrado.json
├── support/
│   ├── commands.js           # Comandos customizados Cypress
│   ├── e2e.js                # Configurações globais dos testes
│   ├── Factories/
│   │   └── usuario.js        # Funções utilitárias para geração de dados
│   └── Pages/                # Page Objects e elementos
│       ├── Cadastro/
│       │   ├── elements.js
│       │   └── index.js
│       ├── Compras/
│       │   ├── elements.js
│       │   └── index.js
│       └── Login/
│           ├── elements.js
│           └── index.js
allure-report/                # Relatório gerado pelo Allure
```

---

## Como Executar os Testes

### Instalação

1. **Clone o repositório**
2. **Instale as dependências**
   ```bash
   npm install
   ```

### Execução dos Testes

- **Executar todos os testes com relatório Allure:**
  ```bash
  npm run cy:run
  ```

- **Gerar e abrir o relatório Allure:**
  ```bash
  npm run report:allure
  ```

> O relatório só funciona corretamente se aberto por um servidor local (ex: comando acima ou Live Server do VS Code).

---

## Organização dos Testes

- **Specs:** Cada arquivo em `cypress/e2e/` representa um fluxo de teste (cadastro, login, compras, etc).
- **Page Objects:** Os arquivos em `support/Pages/` centralizam seletores e métodos de interação, facilitando manutenção.
- **Comandos Customizados:** O arquivo `support/commands.js` contém comandos reutilizáveis, como login e cadastro.
- **Fixtures:** Dados de teste dinâmicos e estáticos em JSON, facilitando cenários variados.

---

## Relatórios

- **Allure Report:** Após a execução dos testes, o relatório é gerado na pasta `allure-report/`.
- Para visualizar, utilize o comando `npm run report:allure` ou um servidor local.

---

## Dicas

- **Centralize todos os seletores e textos nos arquivos `elements.js` de cada página.**
- **Evite hardcode de valores nos specs, utilize sempre as variáveis dos Page Objects.**
- **Para manutenção, altere apenas os arquivos de elementos e dados, sem precisar mexer nos testes.**

---

## Requisitos

- Node.js >= 14
- npm >= 6
- Cypress >= 12
- Allure Reporter instalado globalmente ou como dependência do projeto

---

## Contato

Dúvidas ou sugestões? Abra uma issue ou entre em contato com o responsável
