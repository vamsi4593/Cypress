import { Given, And, Then, When, Before } from "cypress-cucumber-preprocessor/steps";

let pathdata;
Before(function(){
    //access fixture data
    cy.fixture('xpath').then(function(data){
        pathdata=data
        return pathdata
        cy.log('Reading the fixture')
        cy.log(pathdata.click_product)
        })
    })

Given('Amazon website is open in browser',() => {
        cy.visit('https://www.amazon.com/')
})

And('Todays Deal is visible',() => {
    cy.get('#nav-xshop')
          .then(($div) => {
            let a = $div.find('a');
            if (a.length == 0 ){
                cy.log('Page did not open ....')
            }else {                
                    cy.wrap(a).first().should('have.text',"Today's Deals");
                }
            })
})

Then('Search for Nikon',() => {
    cy.get('.nav-search-field').type('Nikon')
    cy.get('#nav-search-submit-button').click()
})

When('Search results are visible',() => {
    cy.get('.a-color-state.a-text-bold')
          .then(($text) => {
            expect($text).to.contain('Nikon')
        })
})

And('Sort the results by High to Low price',() => {
    cy.get('.a-dropdown-prompt').click()
    cy.get('#s-result-sort-select_2').click()
    cy.get('.a-dropdown-prompt').should('have.text', 'Price: High to Low')
})

And('Select the second item in the list',() => {
    cy.xpath(pathdata.click_product).click()
})

And('If product page is open',() => {
    cy.xpath(pathdata.verify_product_page).should('have.text', ' About this item ')
})

Then('Verify if the product name contains Nikon D3', () => {
    cy.get('#productTitle')
          .then(($text) => {
            expect($text).to.contain('Nikon D3')
        })  
})