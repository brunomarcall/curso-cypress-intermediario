/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');

describe('Set milestone on issue', () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(6)
        }
    }

    const milestone = {
        title: `milestone-${faker.random.word()}`
    }

    beforeEach(() => {
        cy.login()
        cy.api_createIssue(issue)
          .then(response => {
              cy.api_createMilestone(response.body.project_id, milestone)
              cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
          })
    })

    it('successfully', () =>{
        cy.gui_setMilestoneOnIssue(milestone)

        cy.get('.block.milestone')
          .should('contain', milestone.title)
    })
})