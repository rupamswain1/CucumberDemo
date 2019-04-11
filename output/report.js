$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/workspace/CucumberDemo/src/main/java/feature/Background.feature");
formatter.feature({
  "line": 1,
  "name": "Test Background feature",
  "description": "",
  "id": "test-background-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1374043,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user browsing through product",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "user selects product",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.user_browsing_through_product()"
});
formatter.result({
  "duration": 343945797,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.user_selects_product()"
});
formatter.result({
  "duration": 209370,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Cart functionality",
  "description": "",
  "id": "test-background-feature;cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user is on cart",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user selects payment",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.user_is_on_cart()"
});
formatter.result({
  "duration": 251244,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.user_selects_payment()"
});
formatter.result({
  "duration": 5336885,
  "status": "passed"
});
formatter.after({
  "duration": 551751,
  "status": "passed"
});
formatter.before({
  "duration": 527530,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user browsing through product",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "user selects product",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.user_browsing_through_product()"
});
formatter.result({
  "duration": 245497,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.user_selects_product()"
});
formatter.result({
  "duration": 548467,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User logs out",
  "description": "",
  "id": "test-background-feature;user-logs-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user is on cart page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.user_is_on_cart_page()"
});
formatter.result({
  "duration": 1039050,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.user_logged_out()"
});
formatter.result({
  "duration": 407656,
  "status": "passed"
});
formatter.after({
  "duration": 156412,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "scenario outline",
  "description": "",
  "id": "test-background-feature;scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is on cart",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user adds \"\u003cProducts\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "test-background-feature;scenario-outline;",
  "rows": [
    {
      "cells": [
        "Products"
      ],
      "line": 21,
      "id": "test-background-feature;scenario-outline;;1"
    },
    {
      "cells": [
        "Phone"
      ],
      "line": 22,
      "id": "test-background-feature;scenario-outline;;2"
    },
    {
      "cells": [
        "Earphone"
      ],
      "line": 23,
      "id": "test-background-feature;scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1300968,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user browsing through product",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "user selects product",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.user_browsing_through_product()"
});
formatter.result({
  "duration": 297223,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.user_selects_product()"
});
formatter.result({
  "duration": 450761,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "scenario outline",
  "description": "",
  "id": "test-background-feature;scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is on cart",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user adds \"Phone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.user_is_on_cart()"
});
formatter.result({
  "duration": 480730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 11
    }
  ],
  "location": "BackgroundStepDefinition.user_adds(String)"
});
formatter.result({
  "duration": 11278069,
  "status": "passed"
});
formatter.after({
  "duration": 190486,
  "status": "passed"
});
formatter.before({
  "duration": 612099,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user browsing through product",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "user selects product",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.user_browsing_through_product()"
});
formatter.result({
  "duration": 1102272,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.user_selects_product()"
});
formatter.result({
  "duration": 1841225,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "scenario outline",
  "description": "",
  "id": "test-background-feature;scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is on cart",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user adds \"Earphone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.user_is_on_cart()"
});
formatter.result({
  "duration": 1505823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Earphone",
      "offset": 11
    }
  ],
  "location": "BackgroundStepDefinition.user_adds(String)"
});
formatter.result({
  "duration": 291887,
  "status": "passed"
});
formatter.after({
  "duration": 204444,
  "status": "passed"
});
});