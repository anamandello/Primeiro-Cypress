Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click()
})

Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('input[formcontrolname="userName"]').type(usuario)
  cy.get('input[formcontrolname="password"]').type(senha, { log: false })
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('registra', (email, fullName, userName, password) => {
  cy.clickLink('Register now')
  cy.contains('button', 'Register').click()
  cy.get('input[formcontrolname="email"]').type(email)
  cy.get('input[formcontrolname="fullName"]').type(fullName)
  cy.get('input[formcontrolname="userName"]').type(userName)
  cy.get('input[formcontrolname="password"]').type(password)
})