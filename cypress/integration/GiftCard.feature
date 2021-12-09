Feature: Select and Add Gift card to cart

    Scenario: Select and Add Gift Card to cart
        Given Gift card page is open
        Then Select the Animated card design
        And Verify if Animated Designs are displayed
        And Select a random design
        And Enter Gift card amount 
        And Enter To and From information , quantity
        And Select the second possible date
        And Add the gift card to cart
        Then Verify the item count in cart 
