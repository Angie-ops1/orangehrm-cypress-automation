# OrangeHRM Cypress Automation

## Descripción

Este proyecto contiene la automatización del Happy Path del proceso de autenticación del sistema OrangeHRM Demo utilizando Cypress.

## Objetivo

Validar que un usuario con credenciales válidas pueda iniciar sesión correctamente y acceder al Dashboard del sistema.

## Tecnologías utilizadas

- Cypress 15
- JavaScript
- Node.js
- Git
- GitHub

## Escenario automatizado

✔ Login exitoso

### Flujo

1. Abrir OrangeHRM Demo.
2. Validar carga del formulario.
3. Ingresar usuario.
4. Ingresar contraseña.
5. Presionar Login.
6. Validar redirección al Dashboard.
7. Validar visualización del Dashboard.

## Datos de prueba

| Campo | Valor |
|--------|-------|
| Usuario | Admin |
| Contraseña | admin123 |

## Instalación

```bash
npm install
```

## Ejecución

Modo gráfico

```bash
npx cypress open
```

Modo consola

```bash
npx cypress run
```

## Estructura

```
cypress/
 ├── e2e/
 │     orangehrm_login_happy_path.cy.js
 ├── fixtures/
 └── support/

cypress.config.js
package.json
README.md
```

## Autor

Angelica Silva
QA Tester
