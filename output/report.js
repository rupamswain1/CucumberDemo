$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/workspace/CucumberDemo/src/main/java/feature/DataTable.feature");
formatter.feature({
  "line": 1,
  "name": "Data Table in Cucumber.",
  "description": "",
  "id": "data-table-in-cucumber.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Data table demo",
  "description": "",
  "id": "data-table-in-cucumber.;data-table-demo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Feature file Step defination and runner are written",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "data uname and pwd are read from data table",
  "rows": [
    {
      "cells": [
        "abc",
        "*********"
      ],
      "line": 6
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "data location is read from data table",
  "rows": [
    {
      "cells": [
        "United states of america"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "execution is complete",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTableStepDefination.a()"
});
formatter.result({
  "duration": 776003192,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefination.b(DataTable)"
});
formatter.result({
  "duration": 3696825,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefination.c(DataTable)"
});
formatter.result({
  "duration": 274645,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefination.d()"
});
formatter.result({
  "duration": 207728,
  "status": "passed"
});
});