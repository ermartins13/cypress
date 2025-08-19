//Elementos da pagina de Produtos
export const ELEMENTS = {
	addressDetailsInputText: 'Capacitação - Cypress',
	addressDetailsHeading: ':nth-child(2) > .heading',
	addressDetailsText: 'Address Details',
	formControl: '.form-control',
	btnFinalizarEndereco: ':nth-child(7) > .btn',
	paymentTitle: 'Automation Exercise - Payment',
	
	url: 'https://www.automationexercise.com/products',
    titleCart: 'Automation Exercise - Checkout',

	nameOnCard: '[data-qa="name-on-card"]',
	cardNumber: '[data-qa="card-number"]',
	cvc: '[data-qa="cvc"]',
	expiryMonth: '[data-qa="expiry-month"]',
	expiryYear: '[data-qa="expiry-year"]',
	continueButton: '[data-qa="continue-button"]',
	orderPlacedText: 'Order Placed!',
	orderConfirmedText: 'Congratulations! Your order has been confirmed!',
	payButton: '[data-qa="pay-button"]',
	successMessageContainer: '#success_message .alert-success.alert',
	successMessageText: 'Your order has been placed successfully!',
	orderPlacedLabel: '[data-qa="order-placed"] > b',
	orderConfirmedLabel: '.col-sm-9 > p',

	titleProductsPageTxt: 'Automation Exercise - All Products',
	botaoNavProducts: '.shop-menu > .nav > :nth-child(2) > a',
	imageProducts: '#sale_image',
	txtCategorySection: 'Category',
    botaoProceedToCheckout: '.col-sm-6 > .btn',
	// Categoria principal
	categoriaWomen: '.panel-title a[href="#Women"]',
	categoriaMen: '.panel-title a[href="#Men"]',
	categoriaKids: '.panel-title a[href="#Kids"]',
	// Subcategorias (listas)
	subcategoriasWomen: '#Women .panel-body ul li a',
	subcategoriasMen: '#Men .panel-body ul li a',
	subcategoriasKids: '#Kids .panel-body ul li a',
	// Mapeamento para uso dinâmico
	categoriaMap: {
		women: '.panel-title a[href="#Women"]',
		men: '.panel-title a[href="#Men"]',
		kid: '.panel-title a[href="#Kids"]'
	},
	subcategoriaMap: {
		women: '#Women .panel-body ul li a',
		men: '#Men .panel-body ul li a',
		kid: '#Kids .panel-body ul li a'
	},

    // Produtos na página de lista
	produtoCard: '.features_items .col-sm-4',
	botaoAddCarrinho: '.btn.add-to-cart',

    modalContent: '.modal-content',
	modalTitle: '.modal-content .modal-title',
	modalBodyMsg: '.modal-content .modal-body p.text-center',
	modalContinueBtn: '.modal-content .modal-footer .close-modal',
    modalBotaoViewCart: '.modal-content .modal-body a[href="/view_cart"]'
};