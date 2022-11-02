$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/Topbar.feature");
formatter.feature({
  "line": 1,
  "name": "Find Products",
  "description": "",
  "id": "find-products",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verify user should find product successfully",
  "description": "",
  "id": "find-products;verify-user-should-find-product-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Select one \"\u003cProduct\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "find-products;verify-user-should-find-product-successfully;",
  "rows": [
    {
      "cells": [
        "Product"
      ],
      "line": 9,
      "id": "find-products;verify-user-should-find-product-successfully;;1"
    },
    {
      "cells": [
        "Landlords"
      ],
      "line": 10,
      "id": "find-products;verify-user-should-find-product-successfully;;2"
    },
    {
      "cells": [
        "essensys Platform"
      ],
      "line": 11,
      "id": "find-products;verify-user-should-find-product-successfully;;3"
    },
    {
      "cells": [
        "Success stories"
      ],
      "line": 12,
      "id": "find-products;verify-user-should-find-product-successfully;;4"
    },
    {
      "cells": [
        "Investors"
      ],
      "line": 13,
      "id": "find-products;verify-user-should-find-product-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16364932500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify user should find product successfully",
  "description": "",
  "id": "find-products;verify-user-should-find-product-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Select one \"Landlords\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Topbarsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 878972200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Landlords",
      "offset": 14
    }
  ],
  "location": "Topbarsteps.iSelectOne(String)"
});
formatter.result({
  "duration": 299345900,
  "status": "passed"
});
formatter.after({
  "duration": 2680760800,
  "status": "passed"
});
formatter.before({
  "duration": 8436206600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify user should find product successfully",
  "description": "",
  "id": "find-products;verify-user-should-find-product-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Select one \"essensys Platform\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Topbarsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "essensys Platform",
      "offset": 14
    }
  ],
  "location": "Topbarsteps.iSelectOne(String)"
});
formatter.result({
  "duration": 737579900,
  "status": "passed"
});
formatter.after({
  "duration": 1772233500,
  "status": "passed"
});
formatter.before({
  "duration": 8028414500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify user should find product successfully",
  "description": "",
  "id": "find-products;verify-user-should-find-product-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Select one \"Success stories\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Topbarsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success stories",
      "offset": 14
    }
  ],
  "location": "Topbarsteps.iSelectOne(String)"
});
formatter.result({
  "duration": 364422600,
  "status": "passed"
});
formatter.after({
  "duration": 1545300600,
  "status": "passed"
});
formatter.before({
  "duration": 9798928000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "verify user should find product successfully",
  "description": "",
  "id": "find-products;verify-user-should-find-product-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Select one \"Investors\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Topbarsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 36300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Investors",
      "offset": 14
    }
  ],
  "location": "Topbarsteps.iSelectOne(String)"
});
formatter.result({
  "duration": 338652200,
  "status": "passed"
});
formatter.after({
  "duration": 1205556000,
  "status": "passed"
});
formatter.before({
  "duration": 7868378300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify user should we able to click on submenu",
  "description": "",
  "id": "find-products;verify-user-should-we-able-to-click-on-submenu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I mousehover on resources able to click on \"Thought leadership\"",
  "keyword": "When "
});
formatter.match({
  "location": "Topbarsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 42300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thought leadership",
      "offset": 44
    }
  ],
  "location": "Topbarsteps.iMousehoverOnResourcesAbleToClickOn(String)"
});
formatter.result({
  "duration": 973398800,
  "status": "passed"
});
formatter.after({
  "duration": 1333827100,
  "status": "passed"
});
formatter.before({
  "duration": 7492740600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify user should we able to click on flex operators",
  "description": "",
  "id": "find-products;verify-user-should-we-able-to-click-on-flex-operators",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on flex oprators",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify the navigate to \"Flexible space made simple\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Topbarsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 62200,
  "status": "passed"
});
formatter.match({
  "location": "Topbarsteps.iClickOnFlexOprators()"
});
formatter.result({
  "duration": 2757416400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flexible space made simple",
      "offset": 26
    }
  ],
  "location": "Topbarsteps.iVerifyTheNavigateTo(String)"
});
formatter.result({
  "duration": 20072749200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Flexible space made simple\u0027)]\"}\n  (Session info: chrome\u003d106.0.5249.119)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-HLN3KFS\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4ae4aa1e21c43944de3b7ca672c1954f, findElement {using\u003dxpath, value\u003d//h1[contains(text(),\u0027Flexible space made simple\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\sapna\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55240}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55240/devtoo..., se:cdpVersion: 106.0.5249.119, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4ae4aa1e21c43944de3b7ca672c1954f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat com.essensys.pages.ResultPage.verifyTextSuccessfully(ResultPage.java:19)\r\n\tat com.essensys.steps.Topbarsteps.iVerifyTheNavigateTo(Topbarsteps.java:29)\r\n\tat ✽.Then I verify the navigate to \"Flexible space made simple\"(src/test/java/resources/featurefile/Topbar.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1980869100,
  "status": "passed"
});
});