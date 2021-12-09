Feature: Nikon Search
  
   Scenario: Search Nikon In Amazon Website
    Given Amazon website is open in browser
    And Todays Deal is visible
    Then Search for Nikon

   Scenario: Sort , select and verify the selected Nikon
    When Search results are visible 
    Then Sort the results by High to Low price
    And Select the second item in the list
    And If product page is open
    Then Verify if the product name contains Nikon D3

