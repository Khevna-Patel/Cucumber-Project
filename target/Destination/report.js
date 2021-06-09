$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/features/newOnlineStoreISOpenComment.feature");
formatter.feature({
  "line": 1,
  "name": "New online store is open!",
  "description": "",
  "id": "new-online-store-is-open!",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8616478800,
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
  "duration": 1955440800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_type_title_and_comment()"
});
formatter.result({
  "duration": 2956138200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_see_comment_added_in_comment_box()"
});
formatter.result({
  "duration": 436071800,
  "status": "passed"
});
formatter.after({
  "duration": 815483200,
  "status": "passed"
});
});