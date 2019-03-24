Feature: Validate HOOKs in Cucumber

Scenario: Hooks without tags.
Given open scenario one

@tagged
Scenario: Hooks with tags
Given open scenario two

@order
Scenario: Hooks with order
Given open scenario three