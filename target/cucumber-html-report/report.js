$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("app.feature");
formatter.feature({
  "line": 1,
  "name": "WonderFlats Application",
  "description": "",
  "id": "wonderflats-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to the application with valid credentials",
  "description": "",
  "id": "wonderflats-application;login-to-the-application-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "wonderflats-application;login-to-the-application-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 10,
      "id": "wonderflats-application;login-to-the-application-with-valid-credentials;;1"
    },
    {
      "cells": [
        "bharu292+2@gmail.com",
        "Bharath8$"
      ],
      "line": 11,
      "id": "wonderflats-application;login-to-the-application-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login to the application with valid credentials",
  "description": "",
  "id": "wonderflats-application;login-to-the-application-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"bharu292+2@gmail.com\" and \"Bharath8$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.i_am_in_Login_Page()"
});
formatter.result({
  "duration": 22578924982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bharu292+2@gmail.com",
      "offset": 15
    },
    {
      "val": "Bharath8$",
      "offset": 42
    }
  ],
  "location": "stepDefinition.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 704532367,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_click_on_Login_Button()"
});
formatter.result({
  "duration": 185695307,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 4068076723,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "To verify Users can change their User Profile data",
  "description": "",
  "id": "wonderflats-application;to-verify-users-can-change-their-user-profile-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I am in Profile Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I update \"\u003cFirstName\u003e\" , \"\u003cLastName\u003e\" , \"\u003cEmail\u003e\" , \"\u003cPhoneNumber\u003e\" , \"\u003cNationality\u003e\" , \"\u003cBirthDate\u003e\", \"\u003cBirthMonth\u003e\" , \"\u003cBirthYear\u003e\" , \"\u003cStreetAddress\u003e\", \"\u003cZIPCode\u003e\" , \"\u003cCity\u003e\" , \"\u003cState\u003e\" , \"\u003cCountry\u003e\" , \"\u003cJobTitle\u003e\" and  \"\u003cCompanyName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Save Profile Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the updated details",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "wonderflats-application;to-verify-users-can-change-their-user-profile-data;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "PhoneNumber",
        "Nationality",
        "BirthDate",
        "BirthMonth",
        "BirthYear",
        "StreetAddress",
        "ZIPCode",
        "City",
        "State",
        "Country",
        "JobTitle",
        "CompanyName",
        ""
      ],
      "line": 20,
      "id": "wonderflats-application;to-verify-users-can-change-their-user-profile-data;;1"
    },
    {
      "cells": [
        "BharatRaj",
        "RajBharat",
        "bharu292+2@gmail.com",
        "9886439594",
        "India",
        "02",
        "09",
        "1992",
        "TestAddress",
        "123456",
        "Chennai",
        "Tamil Nadu",
        "India",
        "Sr. QA",
        "Deloitte",
        ""
      ],
      "line": 21,
      "id": "wonderflats-application;to-verify-users-can-change-their-user-profile-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "To verify Users can change their User Profile data",
  "description": "",
  "id": "wonderflats-application;to-verify-users-can-change-their-user-profile-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I am in Profile Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I update \"BharatRaj\" , \"RajBharat\" , \"bharu292+2@gmail.com\" , \"9886439594\" , \"India\" , \"02\", \"09\" , \"1992\" , \"TestAddress\", \"123456\" , \"Chennai\" , \"Tamil Nadu\" , \"India\" , \"Sr. QA\" and  \"Deloitte\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Save Profile Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the updated details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.i_am_in_Profile_Page()"
});
formatter.result({
  "duration": 63290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BharatRaj",
      "offset": 10
    },
    {
      "val": "RajBharat",
      "offset": 24
    },
    {
      "val": "bharu292+2@gmail.com",
      "offset": 38
    },
    {
      "val": "9886439594",
      "offset": 63
    },
    {
      "val": "India",
      "offset": 78
    },
    {
      "val": "02",
      "offset": 88
    },
    {
      "val": "09",
      "offset": 94
    },
    {
      "val": "1992",
      "offset": 101
    },
    {
      "val": "TestAddress",
      "offset": 110
    },
    {
      "val": "123456",
      "offset": 125
    },
    {
      "val": "Chennai",
      "offset": 136
    },
    {
      "val": "Tamil Nadu",
      "offset": 148
    },
    {
      "val": "India",
      "offset": 163
    },
    {
      "val": "Sr. QA",
      "offset": 173
    },
    {
      "val": "Deloitte",
      "offset": 187
    }
  ],
  "location": "stepDefinition.i_update_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1291094918,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027HEMANTH\u0027, ip: \u0027192.168.2.131\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\Hemanth\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59572}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 4db61df60982d9e76020a93f8c7e075c\n*** Element info: {Using\u003did, value\u003dfirstName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Steps.stepDefinition.i_update_and(stepDefinition.java:61)\r\n\tat ✽.When I update \"BharatRaj\" , \"RajBharat\" , \"bharu292+2@gmail.com\" , \"9886439594\" , \"India\" , \"02\", \"09\" , \"1992\" , \"TestAddress\", \"123456\" , \"Chennai\" , \"Tamil Nadu\" , \"India\" , \"Sr. QA\" and  \"Deloitte\"(app.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.i_click_on_Save_Profile_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.i_verify_the_updated_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "To Verify My Account Section is accessed only in logged in",
  "description": "",
  "id": "wonderflats-application;to-verify-my-account-section-is-accessed-only-in-logged-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I am in Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I try to access My Account section",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should not be able to access",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.i_am_in_Main_Page()"
});
formatter.result({
  "duration": 64431,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_try_to_access_My_Account_section()"
});
formatter.result({
  "duration": 8689554,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027HEMANTH\u0027, ip: \u0027192.168.2.131\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\Hemanth\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59572}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 4db61df60982d9e76020a93f8c7e075c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat Steps.stepDefinition.i_try_to_access_My_Account_section(stepDefinition.java:147)\r\n\tat ✽.When I try to access My Account section(app.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.i_should_not_be_able_to_access()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "To verify user accounts are persisted only for a certain amount of time",
  "description": "",
  "id": "wonderflats-application;to-verify-user-accounts-are-persisted-only-for-a-certain-amount-of-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I enter valid \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should not be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "wonderflats-application;to-verify-user-accounts-are-persisted-only-for-a-certain-amount-of-time;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 36,
      "id": "wonderflats-application;to-verify-user-accounts-are-persisted-only-for-a-certain-amount-of-time;;1"
    },
    {
      "cells": [
        "bharu292+3@gmail.com",
        "Bharath8$"
      ],
      "line": 37,
      "id": "wonderflats-application;to-verify-user-accounts-are-persisted-only-for-a-certain-amount-of-time;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "To verify user accounts are persisted only for a certain amount of time",
  "description": "",
  "id": "wonderflats-application;to-verify-user-accounts-are-persisted-only-for-a-certain-amount-of-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I enter valid \"bharu292+3@gmail.com\" and \"Bharath8$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should not be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.i_am_in_Login_Page()"
});
