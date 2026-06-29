// cypress/e2e/orangehrm_login_happy_path.cy.js

describe('OrangeHRM Demo - Happy Path Login', () => {
  it('Debe iniciar sesión correctamente con credenciales válidas', () => {
    // 1. Ingresar al sitio OrangeHRM Demo
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // 2. Validar que el formulario de login cargó correctamente
    cy.contains('Login', { timeout: 15000 }).should('be.visible')

    // 3. Capturar usuario válido
    cy.get('input[name="username"]')
      .should('be.visible')
      .clear()
      .type('Admin')

    // 4. Capturar contraseña válida
    cy.get('input[name="password"]')
      .should('be.visible')
      .clear()
      .type('admin123')

    // 5. Dar clic en el botón Login
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    // 6. Validar redirección exitosa al Dashboard
    cy.url({ timeout: 15000 })
      .should('include', '/dashboard')

    // 7. Validar que el Dashboard sea visible
    cy.contains('Dashboard', { timeout: 15000 })
      .should('be.visible')
  })
})