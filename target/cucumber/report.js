$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePage_SearchFilghts.feature");
formatter.feature({
  "line": 1,
  "name": "Search Flights",
  "description": "In order to make a booking \r\na user must be able to search for flights",
  "id": "search-flights",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Search return flights for an adult",
  "description": "",
  "id": "search-flights;search-return-flights-for-an-adult",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@automation"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I see the search flight box",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I select the \u003corigin\u003e and \u003cdestination\u003e cities",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I search with the \u003conward\u003e date",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \u003creturnDate\u003e as return date",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I see multiple search results with outbound and inbound flights",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "SearchReturn",
  "description": "",
  "id": "search-flights;search-return-flights-for-an-adult;searchreturn",
  "rows": [
    {
      "cells": [
        "origin",
        "destination",
        "onward",
        "returnDate"
      ],
      "line": 30,
      "id": "search-flights;search-return-flights-for-an-adult;searchreturn;1"
    },
    {
      "cells": [
        "Amsterdam (Schiphol), Netherlands",
        "Faro, Portugal",
        "10-08-2017",
        "15-08-2017"
      ],
      "line": 31,
      "id": "search-flights;search-return-flights-for-an-adult;searchreturn;2"
    },
    {
      "cells": [
        "Eindhoven, Netherlands",
        "Alicante, Spain",
        "20-08-2017",
        "30-08-2017"
      ],
      "line": 32,
      "id": "search-flights;search-return-flights-for-an-adult;searchreturn;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9097590884,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the transavia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.checkWebsiteOpen()"
});
formatter.result({
  "duration": 215822596,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Search return flights for an adult",
  "description": "",
  "id": "search-flights;search-return-flights-for-an-adult;searchreturn;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@automation"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I see the search flight box",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I select the Amsterdam (Schiphol), Netherlands and Faro, Portugal cities",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I search with the 10-08-2017 date",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select 15-08-2017 as return date",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I see multiple search results with outbound and inbound flights",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.checkSearchBoxExists()"
});
formatter.result({
  "duration": 211554312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amsterdam (Schiphol), Netherlands",
      "offset": 13
    },
    {
      "val": "Faro, Portugal",
      "offset": 51
    }
  ],
  "location": "stepDefinitions.selectSource(String,String)"
});
formatter.result({
  "duration": 798603448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10-08-2017",
      "offset": 18
    }
  ],
  "location": "stepDefinitions.selectOnwardDate(String)"
});
formatter.result({
  "duration": 277148902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15-08-2017",
      "offset": 9
    }
  ],
  "location": "stepDefinitions.selectReturnDate(String)"
});
formatter.result({
  "duration": 1036243606,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.checkBothSearchResults()"
});
formatter.result({
  "duration": 12524851324,
  "status": "passed"
});
formatter.after({
  "duration": 3787464853,
  "status": "passed"
});
formatter.before({
  "duration": 8408102467,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the transavia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.checkWebsiteOpen()"
});
formatter.result({
  "duration": 90560821,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Search return flights for an adult",
  "description": "",
  "id": "search-flights;search-return-flights-for-an-adult;searchreturn;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@automation"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I see the search flight box",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I select the Eindhoven, Netherlands and Alicante, Spain cities",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I search with the 20-08-2017 date",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select 30-08-2017 as return date",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I see multiple search results with outbound and inbound flights",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.checkSearchBoxExists()"
});
formatter.result({
  "duration": 221207373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eindhoven, Netherlands",
      "offset": 13
    },
    {
      "val": "Alicante, Spain",
      "offset": 40
    }
  ],
  "location": "stepDefinitions.selectSource(String,String)"
});
formatter.result({
  "duration": 765691023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20-08-2017",
      "offset": 18
    }
  ],
  "location": "stepDefinitions.selectOnwardDate(String)"
});
formatter.result({
  "duration": 221812028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30-08-2017",
      "offset": 9
    }
  ],
  "location": "stepDefinitions.selectReturnDate(String)"
});
formatter.result({
  "duration": 936797256,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.checkBothSearchResults()"
});
formatter.result({
  "duration": 12495648045,
  "status": "passed"
});
formatter.after({
  "duration": 3640255214,
  "status": "passed"
});
});