describe('Registraion for Jpetstore', () =>{

    it('User can Sign up with valid credentials', ()=>{

    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.xpath('/html/body/div[1]/div[2]/div/a[2]').click();
    cy.xpath('/html/body/div[2]/div/a').click();

    //Registartion Page

    //User Information
    cy.xpath('/html/body/div[2]/div/form/h3[1]').should('have.text', 'User Information');
    cy.xpath('/html/body/div[2]/div/form/table[1]/tbody/tr[1]/td[2]/input').type('Niti');
    cy.xpath('/html/body/div[2]/div/form/table[1]/tbody/tr[2]/td[2]/input').type('Password123');
    cy.xpath('/html/body/div[2]/div/form/table[1]/tbody/tr[3]/td[2]/input').type('Password123');

    //Account Information

    cy.xpath('/html/body/div[2]/div/form/h3[2]').should('have.text','Account Information');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[1]/td[2]/input').type('Niti');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[2]/td[2]/input').type('Bhagat');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[3]/td[2]/input').type('abc@gmail.com');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[4]/td[2]/input').type('1234567890');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[5]/td[2]/input').type('Sankhamul,Kathmandu');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[6]/td[2]/input').type('Biratnagar,Nepal');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[7]/td[2]/input').type('Kathmandu');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[8]/td[2]/input').type('Bagmati');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[9]/td[2]/input').type('4560');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[10]/td[2]/input').type('Nepal');
//Profile Information

    cy.xpath('/html/body/div[2]/div/form/h3[3]').should('have.text', 'Profile Information');
    cy.wait(2000);
    cy.xpath("/html/body/div[2]/div/form/table[3]/tbody/tr[1]/td[2]/select").select('japanese');
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div/form/table[3]/tbody/tr[2]/td[2]/select').select('FISH');
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div/form/table[3]/tbody/tr[3]/td[2]/input').check();
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div/form/table[3]/tbody/tr[4]/td[2]/input').check();
    cy.xpath('/html/body/div[2]/div/form/input').click();

  })

    it('User can Sign up with null credentials', ()=>{

    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.xpath('/html/body/div[1]/div[2]/div/a[2]').click();
    cy.xpath('/html/body/div[2]/div/a').click();

    //Registartion Page

    //User Information
    cy.xpath('/html/body/div[2]/div/form/h3[1]').should('have.text', 'User Information');
    cy.xpath('/html/body/div[2]/div/form/table[1]/tbody/tr[1]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[1]/tbody/tr[2]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[1]/tbody/tr[3]/td[2]/input').clear();

    //Account Information

    cy.xpath('/html/body/div[2]/div/form/h3[2]').should('have.text','Account Information');
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[1]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[2]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[3]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[4]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[5]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[6]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[7]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[8]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[9]/td[2]/input').clear();
    cy.xpath('/html/body/div[2]/div/form/table[2]/tbody/tr[10]/td[2]/input').clear();
//Profile Information

    cy.xpath('/html/body/div[2]/div/form/h3[3]').should('have.text', 'Profile Information');
    cy.wait(2000);
    cy.xpath("/html/body/div[2]/div/form/table[3]/tbody/tr[1]/td[2]/select").select('japanese');
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div/form/table[3]/tbody/tr[2]/td[2]/select').select('FISH');
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div/form/table[3]/tbody/tr[3]/td[2]/input').check();
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div/form/table[3]/tbody/tr[4]/td[2]/input').check();
    cy.xpath('/html/body/div[2]/div/form/input').click();

  })

})