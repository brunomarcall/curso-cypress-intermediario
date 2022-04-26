/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');

describe('git clone', ()=>{
    const project = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(8)
    }

    beforeEach(() => cy.api_createProject(project))

    it('successfully', () => {
        cy.cloneViaHTTP(project)

        cy.readFile(`temp/${project.name}/README.md`)
          .should('contain', `# ${project.name}`)
          .and('contain', project.description)
    })
})