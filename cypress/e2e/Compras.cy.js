import Compras from "../support/Pages/Compras";
import Login from "../support/Pages/Login";

describe('Comprar Produtos', () => {


    before(function() {
        cy.fixture('usuarioCadastrado').then((usuario) => {
            this.credenciaisUserExt = usuario;
        });
    });

    beforeEach(function() {
        // Realiza login antes de cada teste, usando o contexto 'this'
        Login.loginAutomationExercise(this.credenciaisUserExt.email, this.credenciaisUserExt.senha);
        Compras.acessarPaginaProdutos();
    });

    it("Comprar Produto Aleatorio por Categoria", function(){
        Compras.FiltrarCategoria(this.credenciaisUserExt.categoria);
        Compras.SelecionarProduto();
        cy.get('title').should('have.text', Compras.elements.titleCart);
        cy.get(Compras.elements.botaoProceedToCheckout).should('be.visible').click();
        cy.get(Compras.elements.addressDetailsHeading).should('have.text', Compras.elements.addressDetailsText);
        cy.get(Compras.elements.formControl).type(Compras.elements.addressDetailsInputText);
        cy.get(Compras.elements.btnFinalizarEndereco).click();
        cy.get('title').should('have.text', Compras.elements.paymentTitle);
        cy.get(Compras.elements.nameOnCard).type(this.credenciaisUserExt.nome);
        cy.get(Compras.elements.cardNumber).type(this.credenciaisUserExt.telefone);
        cy.get(Compras.elements.cvc).type('123');
        cy.get(Compras.elements.expiryMonth).type('11');
        cy.get(Compras.elements.expiryYear).type('2028');
        cy.get(Compras.elements.payButton).click();
        cy.get(Compras.elements.orderPlacedLabel).should('have.text', Compras.elements.orderPlacedText);
        cy.get(Compras.elements.orderConfirmedLabel).should('have.text', Compras.elements.orderConfirmedText);
        cy.get(Compras.elements.continueButton).click();
    })

})