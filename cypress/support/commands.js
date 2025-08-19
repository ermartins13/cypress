import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";

Cypress.Commands.add('login', (email, senha) => {
    Login.acessarURL(Login.elements.url);
    cy.get(Login.elements.campoEmailLogin).type(email);
    cy.get(Login.elements.campoSenhaLogin).type(senha);
    cy.get(Login.elements.botaoLogin).click();
});

Cypress.Commands.add('iniciarCadastro', (user, email) => {
    Cadastro.acessarPaginaProdutos();
    cy.get(Cadastro.elements.campoName).type(user)
    cy.get(Cadastro.elements.campoEmail).type(email)
    cy.get(Cadastro.elements.botaoSignup).click()
});
