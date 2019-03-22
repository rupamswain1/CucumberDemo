$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/workspace/CucumberDemo/src/main/java/feature/Basic.feature");
formatter.feature({
  "line": 1,
  "name": "Basic structure example of Cucmber.",
  "description": "",
  "id": "basic-structure-example-of-cucmber.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Basic of Cucumber",
  "description": "",
  "id": "basic-structure-example-of-cucmber.;basic-of-cucumber",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "feature and scenario writen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "this is then step",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "this is and step",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "cucumber basic is completed",
  "keyword": "Then "
});
formatter.match({
  "location": "BasicStepDefinition.feature_and_scenario_writen()"
});
formatter.result({
  "duration": 524091148,
  "status": "passed"
});
formatter.match({
  "location": "BasicStepDefinition.this_is_then_step()"
});
formatter.result({
  "duration": 219223,
  "status": "passed"
});
formatter.match({
  "location": "BasicStepDefinition.this_is_and_step()"
});
formatter.result({
  "duration": 196644,
  "status": "passed"
});
formatter.match({
  "location": "BasicStepDefinition.cucumber_basic_is_completed()"
});
formatter.result({
  "duration": 224150,
  "status": "passed"
});
});