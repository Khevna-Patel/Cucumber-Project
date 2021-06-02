$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/features/currency.feature");
formatter.feature({
  "line": 1,
  "name": "Currency",
  "description": "",
  "id": "currency",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6720747200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to change the currency",
  "description": "",
  "id": "currency;user-should-be-able-to-change-the-currency",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on currency",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should able to change the currency",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 2967406100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_currency()"
});
formatter.result({
  "duration": 2575454100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_change_the_currency()"
});
formatter.result({
  "duration": 334107700,
  "status": "passed"
});
formatter.after({
  "duration": 795122100,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/purchaseAppleMacBookPro.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase Apple MacBook Pro 13-inch",
  "description": "",
  "id": "purchase-apple-macbook-pro-13-inch",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4286821700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to purchase Apple MacBook Pro 13-inch successfully",
  "description": "",
  "id": "purchase-apple-macbook-pro-13-inch;user-should-be-able-to-purchase-apple-macbook-pro-13-inch-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is registered user of https://demo.nopcommerce.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Apple MacBook Pro 13-inch",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter checkout details",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select next day air in shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select credit card in payment method",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Type payment details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should able to see order in process confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_registered_user_of_https_demo_nopcommerce_com()"
});
formatter.result({
  "duration": 9022195400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 32
    }
  ],
  "location": "MyStepsDefs.user_click_on_Apple_MacBook_Pro_inch(int)"
});
formatter.result({
  "duration": 2143957500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.click_on_Add_to_Cart_button()"
});
formatter.result({
  "duration": 2499798400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.click_on_checkout()"
});
formatter.result({
  "duration": 3246424500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.enter_checkout_details()"
});
formatter.result({
  "duration": 51620892300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"BillingNewAddress_Address1\"}\n  (Session info: chrome\u003d90.0.4430.212)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6SOB6E0\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Darshan\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:64303}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 05ad670e71931f4f448c17a90f94e156\n*** Element info: {Using\u003dcss selector, value\u003dBillingNewAddress_Address1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Utils.enterText(Utils.java:22)\r\n\tat org.example.CheckoutPage.billingPlace(CheckoutPage.java:24)\r\n\tat org.example.MyStepsDefs.enter_checkout_details(MyStepsDefs.java:119)\r\n\tat ✽.And Enter checkout details(src/test/Resources/features/purchaseAppleMacBookPro.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepsDefs.select_next_day_air_in_shipping_method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.select_credit_card_in_payment_method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.type_payment_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.click_on_confirm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_see_order_in_process_confirmation_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("!!!!!!!!!!!!!!!!!.............Scenario Failed............!!!!!!!!!!!!!!!!");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1214266500,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/registeration.feature");
formatter.feature({
  "line": 2,
  "name": "registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 4422920200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to register successfully",
  "description": "",
  "id": "registration;user-should-able-to-register-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters all required registration details",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_registration_page()"
});
formatter.result({
  "duration": 1589665100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enters_all_required_registration_details()"
});
formatter.result({
  "duration": 5432852800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 104390800,
  "status": "passed"
});
formatter.after({
  "duration": 1290115400,
  "status": "passed"
});
});