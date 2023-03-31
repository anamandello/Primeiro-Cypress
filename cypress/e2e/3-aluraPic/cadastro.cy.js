describe('Cadastro de usuarios alura pic', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('verifica mensagens de validação', () => {
    cy.clickLink('Register now')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
  })

  it('verifica mensagem de email invalido', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get('input[formcontrolname="email"]').type('Ana')
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
  })

  it('verifica mensagem de password invalido', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="password"]').type('123')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
  })

  it('verifica mensagem de username lower case', () => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="userName"]').type('ANA')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Must be lower case')
  })

  const usuarios = require('../../fixtures/usuarios.json')
  usuarios.forEach(usuario => {
    it(`registra novo usuário ${usuario.userName}`, () => {
      cy.registra(usuario.email, usuario.fullName, usuario.userName, usuario.password)
      cy.contains('button', 'Register').click()
    })
  })
})