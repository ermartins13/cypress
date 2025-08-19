const elements = require('./elements').ELEMENTS
class Login {

    acessarURL(url){
        cy.visit(url)
    }

    loginAutomationExercise(usuario, senha) {
        cy.login(usuario, senha);
    }

    validarLogin(usuario) {
        cy.get(this.elements.labelLoginSuccess).should('have.text', usuario)
    }

    validarLoginErro() {
        cy.get(this.elements.labelTxtIncorrectLogin).should('be.visible')
    }

    get elements() {
    return elements;
}

}
export default new Login()