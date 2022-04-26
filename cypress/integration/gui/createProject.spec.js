/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');

describe('Create Project', () => {
    beforeEach(() => cy.login());

    it('succefully', ()=>{
    const project = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(8)
    }
    
    cy.gui_createProject(project);

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`);
    cy.contains(project.name).should('be.visible');
    cy.contains(project.description).should('be.visible');

    });
});