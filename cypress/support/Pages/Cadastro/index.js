const elements = require('./elements').ELEMENTS
class Cadastro {

    acessarURL(url){
        cy.visit(url)
    }
    acessarPaginaProdutos() {
        cy.get(elements.botaoSignupLogin).click()
        cy.get(elements.labelPageSignup).should('have.text', 'New User Signup!')
    }

    validarCadastro() {
        cy.get('b').should('have.text', elements.labelAccountCreated)
        cy.get(elements.botaoContinue).click()
    }

    get elements() {
    return elements;
}

}
export default new Cadastro()