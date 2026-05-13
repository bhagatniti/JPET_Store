import {selectors} from '../../support/selectors.js'


describe('Login for Jpetstore', () =>{
afterEach(() => {
        cy.log('Runs after every Test');
    })
beforeEach(() =>{
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
    cy.xpath('/html/body/div[1]/div[2]/div/a[2]').should('have.text', 'Sign In').click();
})
it ('User can login using valid creds', () =>{
    
    cy.xpath(selectors.log_id).type('Niti');
    cy.xpath(selectors.log_pass).clear().type('Password123');
    cy.xpath('/html/body/div[2]/div/form/input').should('have.value','Login').click();
   
})
it('User cannot login using invalid creds',() => {
    cy.xpath(selectors.log_id).type('Niti2222');
    cy.xpath(selectots.log-pass).clear().type('Password123');
    cy.xpath('/html/body/div[2]/div/form/input').should('have.value','Login').click();


})
 it ('User can login using valid creds', () =>{
    
    cy.xpath(selectors.log_id).type('Niti');
    cy.xpath(selectors.log_pass).clear().type('Password123');
    cy.xpath('/html/body/div[2]/div/form/input').should('have.value','Login').click();

})
})