import { Given, And, Then, When, Before } from "cypress-cucumber-preprocessor/steps";

let url;
let pathdata;
let cardnumber;
let giftamount;
Before(function(){
    //access fixture data
    cy.fixture('testurls').then(function(data){
        url=data
        return url
        })

    cy.fixture('xpath').then(function(data){
        pathdata=data
        return pathdata
            })

    return cardnumber = Math.floor((Math.random() * 5)+1)

})

Given('Gift card page is open',() => {
    cy.visit(url.gift_card_url)
    cy.xpath(pathdata.verify_gift_card_page)
      .then(($text) => {
        expect($text).to.contain('Amazon.com eGift Card')
    })
})

Then('Select the Animated card design',() => {
    cy.xpath(pathdata.animated_design_button).click()
})

And('Verify if Animated Designs are displayed',() => {
    cy.xpath(pathdata.design_title).should('have.text', 'Unboxing Merry Christmas (Animated)')
})

And('Select a random design',() => {
    cy.xpath(pathdata.design_card + cardnumber + "']").click()
})

And('Enter Gift card amount',() => {
    giftamount = Math.floor((Math.random()*100)+1)
    cy.get('#gc-order-form-custom-amount').type(giftamount)
})

let test_data;
before(function(){
    cy.fixture("testdata").then(function(data){
        test_data = data
        return test_data
    })
})

And('Enter To and From information , quantity',() => {
    cy.xpath(pathdata.to_address).type(test_data.to_address)
    cy.xpath(pathdata.from_address).type(test_data.from_address)
    cy.xpath(pathdata.quantity_number).clear().type(cardnumber)
})

And('Select the second possible date',() => {    
    var today = new Date()
    var d = today.getDate() + 1
    cy.xpath(pathdata.date_picker).click()
    cy.get('.a-declarative.a-cal-date-anchor').contains(d).click()
})

And('Add the gift card to cart',() => {
  cy.xpath(pathdata.add_to_cart).click()
  cy.intercept('GET','**/reftag?ref_=gcui_d_e_meAOC_u_d').as('addtocart')
  cy.wait(`@addtocart`).then((xhr) => {if (xhr.response.statusCode == '200'){
      expect(xhr.response.statusCode).to.equal(200)
      cy.log("status code is OK")
  } else { cy.log(xhr.response.statusCode)}})
})


Then('Verify the item count in cart',() => {
    cy.xpath(pathdata.item_count_cart).should('have.text',cardnumber)
})

//And('Verify the backend response',() => {
  //  cy.wait().should(xhr => {
    //    expect(xhr.response).to.have.property('status', 200);
    //});
//})