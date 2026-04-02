Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('LoginPage', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('deve renderizar os elementos da página de Login corretamente', () => {
        cy.contains('h1', 'Acesse sua conta').should('be.visible');
        cy.get('input[placeholder="Seu email cadastrado"]').should('be.visible');
        cy.get('input[placeholder="Sua senha"]').should('be.visible');
        cy.contains('button', 'Entrar').should('be.visible');
    });

    it('deve exibir mensagem de erro ao tentar fazer login sem preencher os campos', () => {
        cy.contains('button', 'Entrar').click();
        cy.contains('Por favor, preencha o email e a senha.').should('be.visible');
    });

    it('deve exibir mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
        cy.get('input[placeholder="Seu email cadastrado"]').type('emailerrado@email.com');
        cy.get('input[placeholder="Sua senha"]').type('senhaerrada');
        cy.contains('button', 'Entrar').click();
        cy.contains('Falha ao entrar. Verifique suas credenciais.').should('be.visible');
    });

    it('deve redirecionar para a página inicial após um login bem-sucedido', () => {
        cy.get('input[placeholder="Seu email cadastrado"]').type('portolani@email.com');
        cy.get('input[placeholder="Sua senha"]').type('123123');
        cy.contains('button', 'Entrar').click();
        cy.location('pathname').should('eq', '/'); 
    });
});