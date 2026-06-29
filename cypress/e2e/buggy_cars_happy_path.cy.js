describe('Buggy Cars Rating - Happy Path', () => {
  const baseUrl = 'https://buggy.justtestit.org/';

  const username = `qa_angelica_${Date.now()}`;
  const password = 'QaTest123!';
  const firstName = 'Angelica';
  const lastName = 'Silva';

  it('Debe registrar un usuario, iniciar sesión y votar por un vehículo', () => {
    cy.visit(baseUrl);

    // Espera a que cargue la aplicación, ya que el HTML inicial solo muestra un spinner
    cy.contains('Buggy Rating', { timeout: 20000 }).should('be.visible');

    // Registro de usuario
    cy.contains('Register').click();

    cy.get('#username').should('be.visible').type(username);
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#password').type(password);
    cy.get('#confirmPassword').type(password);

    cy.get('button[type="submit"]').click();

    cy.contains('Registration is successful', { timeout: 10000 })
      .should('be.visible');

    // Login con usuario recién creado
    cy.get('input[name="login"]').should('be.visible').type(username);
    cy.get('input[name="password"]').should('be.visible').type(password);

    cy.contains('button', 'Login').click();

    cy.contains(`Hi, ${firstName}`, { timeout: 10000 })
      .should('be.visible');

    // Navegación al ranking de autos populares
    cy.contains('Popular Make', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Selecciona el primer vehículo disponible
    cy.get('table tbody tr', { timeout: 10000 })
      .first()
      .find('a')
      .click();

    // Vota por el vehículo seleccionado
    cy.get('textarea', { timeout: 10000 })
      .should('be.visible')
      .type('Prueba automatizada happy path con Cypress.');

    cy.contains('button', 'Vote').click();

    // Validación final
    cy.contains('Thank you for your vote!', { timeout: 10000 })
      .should('be.visible');
  });
});