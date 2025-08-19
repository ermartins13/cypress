import Login from "../support/Pages/Login";

let credenciaisUserExt;
let credenciaisFixture;

before(() => {
  cy.fixture('usuarioCadastrado').then((usuario) => {
    credenciaisUserExt = usuario;
  });
  cy.fixture('credenciaisFixture').then((dados) => {
    credenciaisFixture = dados;
  });
});

describe('Realizar Login', () => {
  beforeEach(() => {
    Login.acessarURL('https://www.automationexercise.com');
    cy.get('title').should('have.text', Login.elements.titleHomePageTxt);
    cy.get(Login.elements.botaoSignupLogin).click();
  });

  it("Login com Sucesso", () => {
    cy.get(Login.elements.campoEmailLogin).type(credenciaisUserExt.email);
    cy.get(Login.elements.campoSenhaLogin).type(credenciaisFixture.passwords.password_valido);
    cy.get(Login.elements.botaoLogin).click();
    Login.validarLogin(credenciaisUserExt.nome);
  });

  it("Login com Usuario Invalido", () => {
    cy.get(Login.elements.campoEmailLogin).type(credenciaisFixture.emails.email_invalido);
    cy.get(Login.elements.campoSenhaLogin).type(credenciaisFixture.passwords.password_invalido);
    cy.get(Login.elements.botaoLogin).click();
    Login.validarLoginErro();
  });
});
