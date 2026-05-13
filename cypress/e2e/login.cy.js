describe('Login for Jpetstore', () =>{
afterEach(() => {
        cy.log('Runs after every Test');
    })
beforeEach(() =>{
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
    cy.xpath('/html/body/div[1]/div[2]/div/a[2]').should('have.text', 'Sign In').click();
})
it ('User can login using valid creds', () =>{
    
    cy.xpath('/html/body/div[2]/div/form/p[2]/input[1]').type('Niti');
    cy.xpath('/html/body/div[2]/div/form/p[2]/input[2]').clear().type('Password123');
    cy.xpath('/html/body/div[2]/div/form/input').should('have.value','Login').click();
   
})
it('User cannot login using invalid creds',() => {
    cy.xpath('/html/body/div[2]/div/form/p[2]/input[1]').type('Niti2222');
    cy.xpath('/html/body/div[2]/div/form/p[2]/input[2]').clear().type('Password123');
    cy.xpath('/html/body/div[2]/div/form/input').should('have.value','Login').click();


})

it('User cannot login with empty credentials',() =>{
    cy.xpath('/html/body/div[2]/div/form/p[2]/input[1]').clear();
    cy.xpath('/html/body/div[2]/div/form/p[2]/input[2]').clear();
    cy.xpath('/html/body/div[2]/div/form/input').should('have.value','Login').click();
 
})

})