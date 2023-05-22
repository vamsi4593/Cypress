# Cypress
This repository consist of test automation script for 
Test Case 1 :
- Search Nikon and sort results from highest price to lowest.

- Select second product and click it for details.

- From details check (verify with assert) that product topic contains text “Nikon D3X”

Test Case 2 :
- select "Animated" card category and wait for new design options to be loaded

- select random card design and enter random amount from range $1 - $100

- select second available delivery date from the calendar

- enter two different sets of other data (To, From, Message, Quantity - use Scenario Outline + Examples)

- add product to cart and verify if that action was successful (verify if correct status code came from backend, otherwise return error code with the description)

Framework Setup :
Cypress has main following folders :
Fixtures
Integration
Plugins
Support
Additionally Screenshots and Video folders will be created after the test runs

Test data , test Urls should be provided as json files in **Fixtures** 
Test Cases(Spec files ) and Cucumber(feature files) should be created in **Integration**
All the dependent plugins used in should be added to index.js in **Plugins**
Custom commands if created they should in mentioned in command.js under **Support** 

Plugins Used :
cucumber-cypress-preprocessor 
cy-xpath

test run ;
npx cypress open --> opens the test run 
npx xypress run --> runs all the tests and adds the scrrenshots and videos.



