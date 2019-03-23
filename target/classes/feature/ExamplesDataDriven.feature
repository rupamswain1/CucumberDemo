Feature: Cucumber BDD framework test using Examples keyword

Scenario Outline: execution with Example table for data driven testing

Given A scenario for test
Then take "<nameOne>" and "<NameTwo>" from examples table
Then take "<adderess>" from table
Then test executin done

Examples:
|nameOne|NameTwo|adderess|
|one|two|unites states|
|three|four|Russia|