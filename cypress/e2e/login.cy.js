// Este bloco manda o Cypress ignorar erros que vêm do código da aplicação
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('LoginPage', () => {
    beforeEach(() => {
        cy.visit('/login');
    });
    it('deve renderizar os elementos da página de Login corretamente', () => {
        //Verifica textos principais
        cy.contains('h1', 'Acesse sua conta').should('be.visible');

        //Verifica os campos de input
        cy.get('input[placeholder="Seu email cadastrado"]').should('be.visible');
        cy.get('input[placeholder="Sua senha"]').should('be.visible');

        //Verifica se o botão de submit existe
        cy.contains('button', 'Entrar').should('be.visible');
    });
    it('deve exibir mensagem de erro ao tentar fazer login sem preencher os campos', () => {
        //Clica no botão de submit sem preencher os campos
        cy.contains('button', 'Entrar').click();
        //Verifica se a mensagem de erro é exibida
        cy.contains('Por favor, preencha o email e a senha.').should('be.visible');
    });
    it('deve exibir mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
        //Preenche os campos com dados inválidos
        cy.get('input[placeholder="Seu email cadastrado"]').type('emailerrado@email.com');
        cy.get('input[placeholder="Sua senha"]').type('senhaerrada');
        //Clica no botão de submit
        cy.contains('button', 'Entrar').click();
        //Verefica as credenciais inválidas
        cy.contains('Credenciais inválidas. Tente novamente.').should('be.visible');
    });
    it('deve redirecionar para a página inicial após um login bem-sucedido', () => {
        //Preenche os campos com dados válidos
        cy.get('input[placeholder="Seu email cadastrado"]').type('portolani@email.com');
        cy.get('input[placeholder="Sua senha"]').type('123123');
        //Clica no botão de submit
        cy.contains('button', 'Entrar').click();
        //Verifica se foi redirecionado para a página inicial
        cy.url().should('eq', 'https://coontrera.vercel.app/');
    });
});