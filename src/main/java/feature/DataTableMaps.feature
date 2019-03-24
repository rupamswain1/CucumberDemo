Feature: Validating Data table of cucmber using maps

Scenario: Data Table map when data table consists of one item.
Given All required data is available
Then read username and password from datatable.
|username|password|
|demoUser|Demaoppppp|

Scenario: Data Table using map when data table contains a number of rows.
Given All required data is available
Then read department from table
|Department|
|Dev|
|Test|
|QA|