/// <reference types="cypress" />

context('Capturar elementos para fazer uma ação', () => {
    it('Capturar os inputs', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        
               
        cy.get('[data-cy="input-username"]').click();
        cy.get('[data-cy="input-password"]').click();
        cy.get('[data-cy="input-pokeinit"]').click();
        cy.get('[data-cy="botao-login"]').click();
        cy.get('[data-cy="botao-limpar"]').click();
    });
    
});