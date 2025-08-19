import { criarUsuario } from '../support/Factories/usuario'
import Cadastro from '../support/Pages/Cadastro'

describe('Realizar Cadastro', function(){

    before(function(){
          cy.fixture('credenciaisFixture').then((dados)=>{
               this.credenciaisExt = dados
          })
    })

    beforeEach(function(){
          Cadastro.acessarURL('https://www.automationexercise.com')
          cy.get('title').should('have.text', Cadastro.elements.titleHomePageTxt)
    })
    
    const genero = Math.random() < 0.5 ? 'female' : 'male'
    const usuarioFaker = criarUsuario(genero)

    it("Realizar Cadastro com Email Invalido", function(){
        // cy.get(Cadastro.elements.labelPageSignup).should('have.text', 'New User Signup!')
        cy.iniciarCadastro(this.credenciaisExt.users.user_Invalido, this.credenciaisExt.emails.email_invalido)
    })

    it("Realizar Cadastro com Sucesso", function(){
        
        cy.iniciarCadastro(usuarioFaker.nome, usuarioFaker.email)
        cy.contains('b', 'Enter Account Information').should('exist')

        // marcar checkbox de gênero baseado no usuário gerado
        if(usuarioFaker.genero === 'female'){
                cy.get(Cadastro.elements.chkBoxGenderFemale).check({ force: true })
        }
        else {
                cy.get(Cadastro.elements.chkBoxGenderMale).check({ force: true })
        }

        // Preencher campo de senha
        cy.get(Cadastro.elements.campoPassword).type(usuarioFaker.senha)

        // marcar dropdowns data
        cy.get(Cadastro.elements.dropDownDateDay).select(usuarioFaker.dataNascimento.dia)
        cy.get(Cadastro.elements.dropDownDateMonth).select(usuarioFaker.dataNascimento.mes)
        cy.get(Cadastro.elements.dropDownDateYear).select(usuarioFaker.dataNascimento.ano)

        // marcar checkbox de newsletter
        cy.get(Cadastro.elements.chkBoxNewsletter).check({ force: true })

        // Preencher dados endereço entrega
        cy.get(Cadastro.elements.campoFirstName).type(usuarioFaker.nome)
        cy.get(Cadastro.elements.campoLastName).type(usuarioFaker.sobrenome)
        cy.get(Cadastro.elements.campoCompany).type(usuarioFaker.empresa)
        cy.get(Cadastro.elements.campoAddress).type(usuarioFaker.endereco.rua)
        cy.get(Cadastro.elements.dropDownCountry).select(usuarioFaker.endereco.pais)
        cy.get(Cadastro.elements.campoState).type(usuarioFaker.endereco.estado)
        cy.get(Cadastro.elements.campoCity).type(usuarioFaker.endereco.cidade)
        cy.get(Cadastro.elements.campoZipCode).type(usuarioFaker.endereco.cep)
        cy.get(Cadastro.elements.campoPhone).type(usuarioFaker.telefone)

        // Click Create Account
        cy.get(Cadastro.elements.botaoCreateAcount).click()

        // validar cadastro
        Cadastro.validarCadastro()
        
        // Salvar todas as informações do usuário após cadastro
        cy.writeFile('cypress/fixtures/usuarioCadastrado.json', usuarioFaker);
    })

})