Feature: Test Background feature

Background: user logged in
And user browsing through product
Then user selects product


Scenario: Cart functionality
Given user is on cart
Then user selects payment


Scenario: User logs out
Given user is on cart page
Then user logged out

Scenario Outline: scenario outline
Given user is on cart
Then user adds "<Products>"
Examples:
|Products|
|Phone|
|Earphone|
