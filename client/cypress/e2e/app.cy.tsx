import App from "../../src/App";
import * as cypress from "cypress";
import {mount} from "cypress/react";


describe('all app test', () => {
  it('visits', () => {
    cy.visit('/')
  })
  it('clicks', () => {
    cy.visit('/')
    cy.get('.css-dk35kr').click()
    
  })
})