$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/features/currency.feature");
formatter.feature({
  "line": 1,
  "name": "Currency",
  "description": "",
  "id": "currency",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15719435200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to change the currency",
  "description": "",
  "id": "currency;user-should-be-able-to-change-the-currency",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    },
    {
      "line": 2,
      "name": "@reg"
    },
    {
      "line": 3,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on currency",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should able to change the currency",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 3524483300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_currency()"
});
formatter.result({
  "duration": 2016453300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_change_the_currency()"
});
formatter.result({
  "duration": 851075900,
  "status": "passed"
});
formatter.after({
  "duration": 797316100,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/logIn.feature");
formatter.feature({
  "line": 1,
  "name": "Log in",
  "description": "",
  "id": "log-in",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should not be able to log in successfully with invalid credentials",
  "description": "",
  "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User type \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should not be able to log in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should get \"\u003cerrormessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password",
        "errormessage"
      ],
      "line": 13,
      "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "test@gmail.com",
        "",
        "Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect"
      ],
      "line": 14,
      "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "",
        "Xyz1234",
        "Please enter your email"
      ],
      "line": 15,
      "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "",
        "",
        "Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect"
      ],
      "line": 16,
      "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "##@gmail.com",
        "Xyz1234",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 17,
      "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11748505000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 2060539700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should not be able to log in successfully with invalid credentials",
  "description": "",
  "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User type \"test@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should not be able to log in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should get \"Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1388605600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 11
    },
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "MyStepsDefs.userTypeAnd(String,String)"
});
formatter.result({
  "duration": 297386000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 1410742700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotBeAbleToLogIn()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.userShouldGet(String)"
});
formatter.result({
  "duration": 208362100,
  "status": "passed"
});
formatter.after({
  "duration": 886871600,
  "status": "passed"
});
formatter.before({
  "duration": 11896755500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 2985183800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should not be able to log in successfully with invalid credentials",
  "description": "",
  "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User type \"\" and \"Xyz1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should not be able to log in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should get \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1393473300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "Xyz1234",
      "offset": 18
    }
  ],
  "location": "MyStepsDefs.userTypeAnd(String,String)"
});
formatter.result({
  "duration": 384996300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 428042900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotBeAbleToLogIn()"
});
formatter.result({
  "duration": 19400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.userShouldGet(String)"
});
formatter.result({
  "duration": 195575200,
  "status": "passed"
});
formatter.after({
  "duration": 777610200,
  "status": "passed"
});
formatter.before({
  "duration": 10508928000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 2551918500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should not be able to log in successfully with invalid credentials",
  "description": "",
  "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User type \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should not be able to log in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should get \"Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1296868800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "MyStepsDefs.userTypeAnd(String,String)"
});
formatter.result({
  "duration": 223994400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 356214800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotBeAbleToLogIn()"
});
formatter.result({
  "duration": 18400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.userShouldGet(String)"
});
formatter.result({
  "duration": 117195100,
  "status": "passed"
});
formatter.after({
  "duration": 820143400,
  "status": "passed"
});
formatter.before({
  "duration": 9166951200,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 2635311900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should not be able to log in successfully with invalid credentials",
  "description": "",
  "id": "log-in;user-should-not-be-able-to-log-in-successfully-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User type \"##@gmail.com\" and \"Xyz1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should not be able to log in",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should get \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1220162800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "##@gmail.com",
      "offset": 11
    },
    {
      "val": "Xyz1234",
      "offset": 30
    }
  ],
  "location": "MyStepsDefs.userTypeAnd(String,String)"
});
formatter.result({
  "duration": 295795300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 1213580800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotBeAbleToLogIn()"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.userShouldGet(String)"
});
formatter.result({
  "duration": 154034100,
  "status": "passed"
});
formatter.after({
  "duration": 825118500,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/newOnlineStoreISOpenComment.feature");
formatter.feature({
  "line": 1,
  "name": "New online store is open!",
  "description": "",
  "id": "new-online-store-is-open!",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13636462400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should able to add comment successfully in new online store is open",
  "description": "",
  "id": "new-online-store-is-open!;user-should-able-to-add-comment-successfully-in-new-online-store-is-open",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Test2"
    },
    {
      "line": 2,
      "name": "@smoke"
    },
    {
      "line": 2,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on new online store  is open page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User type title and comment",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should able to see comment added in comment box",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_new_online_store_is_open_page()"
});
formatter.result({
  "duration": 1497654800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_type_title_and_comment()"
});
formatter.result({
  "duration": 2355143700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_see_comment_added_in_comment_box()"
});
formatter.result({
  "duration": 157364000,
  "status": "passed"
});
formatter.after({
  "duration": 925386000,
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
  "duration": 10572129000,
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
      "name": "@Test3"
    },
    {
      "line": 2,
      "name": "@reg"
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
  "duration": 9256637500,
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
  "duration": 3714885700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.click_on_Add_to_Cart_button()"
});
formatter.result({
  "duration": 3048119300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.click_on_checkout()"
});
formatter.result({
  "duration": 1576375600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.enter_checkout_details()"
});
formatter.result({
  "duration": 1603594100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.select_next_day_air_in_shipping_method()"
});
formatter.result({
  "duration": 683930200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.select_credit_card_in_payment_method()"
});
formatter.result({
  "duration": 775063300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.type_payment_details()"
});
formatter.result({
  "duration": 2872780200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.click_on_confirm()"
});
formatter.result({
  "duration": 360068400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_see_order_in_process_confirmation_message()"
});
formatter.result({
  "duration": 712333800,
  "status": "passed"
});
formatter.after({
  "duration": 757458300,
  "status": "passed"
});
formatter.uri("src/test/Resources/features/registeration.feature");
formatter.feature({
  "line": 2,
  "name": "registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9348408400,
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
      "name": "@Test4"
    },
    {
      "line": 5,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters all required registration details",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_registration_page()"
});
formatter.result({
  "duration": 1517865700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enters_all_required_registration_details()"
});
formatter.result({
  "duration": 5690291000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 150485100,
  "status": "passed"
});
formatter.after({
  "duration": 880233800,
  "status": "passed"
});
});