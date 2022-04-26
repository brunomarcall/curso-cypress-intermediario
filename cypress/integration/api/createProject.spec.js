/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');

describe('Create Project', () => {
    it('successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(8)
        }

        cy.api_createProject(project)
          .then(response => {
              expect(response.status).to.equal(201)
              expect(response.body.name).to.equal(project.name)
              expect(response.body.description)

          })
          
    })
})
