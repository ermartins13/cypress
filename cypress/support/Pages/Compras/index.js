const elements = require('./elements').ELEMENTS
class Compras {

    acessarPaginaProdutos(){
        cy.get(this.elements.botaoNavProducts).click()
        cy.get('title').should('have.text', this.elements.titleProductsPageTxt)
    }

    FiltrarCategoria(categoria) {
        cy.get(this.elements.categoriaMap[categoria]).click()
        cy.get(this.elements.subcategoriaMap[categoria]).should('be.visible')
        cy.get(this.elements.subcategoriaMap[categoria]).then($subs => {
        const random = Math.floor(Math.random() * $subs.length);
        cy.wrap($subs[random]).click();
    });
    }

    SelecionarProduto() {
        cy.get(this.elements.produtoCard).then($cards => {
            const random = Math.floor(Math.random() * $cards.length);
            cy.wrap($cards[random]).within(() => {
                cy.get(this.elements.botaoAddCarrinho).first().click();
            });
        });
        // Validação do modal após adicionar produto
        cy.get(this.elements.modalContent).should('be.visible');
        cy.get(this.elements.modalTitle).should('have.text', 'Added!');
        cy.get(this.elements.modalBodyMsg).first().should('have.text', 'Your product has been added to cart.');
        cy.get(this.elements.modalBotaoViewCart).should('be.visible').click();
    }

    validarLoginErro() {
        cy.get(this.elements.labelTxtIncorrectLogin).should('be.visible')
    }

    get elements() {
    return elements;
}

}
export default new Compras()