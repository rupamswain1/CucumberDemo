$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/workspace/CucumberDemo/src/main/java/feature/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Validate HOOKs in Cucumber",
  "description": "",
  "id": "validate-hooks-in-cucumber",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1242260,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Hooks without tags.",
  "description": "",
  "id": "validate-hooks-in-cucumber;hooks-without-tags.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "open scenario one",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksStepDefinition.open_scenario_one()"
});
formatter.result({
  "duration": 359439267,
  "status": "passed"
});
formatter.after({
  "duration": 1481599,
  "status": "passed"
});
formatter.before({
  "duration": 2970586,
  "status": "passed"
});
formatter.before({
  "duration": 246317,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Hooks with tags",
  "description": "",
  "id": "validate-hooks-in-cucumber;hooks-with-tags",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tagged"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "open scenario two",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksStepDefinition.open_scenario_two()"
});
formatter.result({
  "duration": 2253803,
  "status": "passed"
});
formatter.after({
  "duration": 168317,
  "status": "passed"
});
formatter.after({
  "duration": 2132286,
  "status": "passed"
});
formatter.before({
  "duration": 566529,
  "status": "passed"
});
formatter.before({
  "duration": 733615,
  "status": "passed"
});
formatter.before({
  "duration": 683941,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Hooks with order",
  "description": "",
  "id": "validate-hooks-in-cucumber;hooks-with-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@order"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "open scenario three",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksStepDefinition.open_scenario_three()"
});
formatter.result({
  "duration": 668341,
  "status": "passed"
});
formatter.after({
  "duration": 273412,
  "status": "passed"
});
formatter.after({
  "duration": 223328,
  "status": "passed"
});
formatter.after({
  "duration": 568993,
  "status": "passed"
});
});