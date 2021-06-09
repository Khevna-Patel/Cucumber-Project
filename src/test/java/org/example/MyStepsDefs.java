package org.example;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepsDefs {

    HomePage homePage = new HomePage();
    RegisterPage registerPage = new RegisterPage();
    ResultVerificationPage resultVerificationPage = new ResultVerificationPage();
    NewOnlineStoreIsOpenPage newOnlineStoreIsOpenPage = new NewOnlineStoreIsOpenPage();
    AppleMacBookProPAge appleMacBookProPAge = new AppleMacBookProPAge();
    ShoppingCartPage shoppingCartPage = new ShoppingCartPage();
    CheckoutPage checkoutPage = new CheckoutPage();
    ShippingMethod shippingMethod = new ShippingMethod();
    PaymentMethod paymentMethod = new PaymentMethod();
    PaymentInformation paymentInformation = new PaymentInformation();
    ConfirmOrderPage confirmOrderPage = new ConfirmOrderPage();
    OrderVerificationPage orderVerificationPage = new OrderVerificationPage();
    LogInPage logInPage = new LogInPage();


//================================================Registration=======================================================

    @When("^user enters all required registration details$")
    public void user_enters_all_required_registration_details()  {
        registerPage.enterRegistrationDetails();
    }



    @Then("^user should able to register successfully$")
    public void user_should_able_to_register_successfully()  {
        resultVerificationPage.verifyRegisterMessage();
    }



    @Given("^user is on registration page$")
    public void user_is_on_registration_page()  {
        homePage.clickOnRegisterButton();
    }



//=====================================================currency======================================================

    @Given("^User is on homepage$")
    public void user_is_on_homepage()  {
        homePage.selectEuroCurrency();

    }


    @When("^User click on currency$")
    public void user_click_on_currency()  {
        homePage.selectUSDollarCurrency();

    }

    @Then("^User should able to change the currency$")
    public void user_should_able_to_change_the_currency()  {
        homePage.verifyChangeOfCurrencySymbolInEachProductPrice();

    }

    //===============================================New online store is open==========================================


    @Given("^User is on new online store  is open page$")
    public void user_is_on_new_online_store_is_open_page() {
        homePage.NewOnlineStoreIsOpen();

    }

    @When("^User type title and comment$")
    public void user_type_title_and_comment() {
        newOnlineStoreIsOpenPage.newOnlineStoreOpenComments();


    }

    @Then("^User should able to see comment added in comment box$")
    public void user_should_able_to_see_comment_added_in_comment_box() {
        newOnlineStoreIsOpenPage.verifyUserShouldSeeSuccessMessage();
       // newOnlineStoreIsOpenPage.verifyCommentIsPresentInTheCommentList();
        newOnlineStoreIsOpenPage.verifyAddedCommentIsAtLastInTheList();

    }


//============================================Purchase of Apple MacBook Pro-13==========================================

    @Given("^User is registered user of https://demo\\.nopcommerce\\.com/$")
    public void user_is_registered_user_of_https_demo_nopcommerce_com() {
        homePage.clickOnRegisterButton();
        registerPage.enterRegistrationDetails();
        resultVerificationPage.verifyRegisterMessage();
        resultVerificationPage.clickContinue();
    }
    @When("^User click on Apple MacBook Pro (\\d+)-inch$")
    public void user_click_on_Apple_MacBook_Pro_inch(int arg1) {
        homePage.clickOnAppleMacBookPro();
    }

    @When("^Click on Add to Cart button$")
    public void click_on_Add_to_Cart_button()  {
        appleMacBookProPAge.addProduct();

    }
    @When("^Click on checkout$")
    public void click_on_checkout()  {
        shoppingCartPage.checkOut();

    }

    @When("^Enter checkout details$")
    public void enter_checkout_details()  {
        checkoutPage.billingPlace();
    }

    @When("^select next day air in shipping method$")
    public void select_next_day_air_in_shipping_method()  {
        shippingMethod.clickOnNextDayAir();

    }

    @When("^Select credit card in payment method$")
    public void select_credit_card_in_payment_method() {
        paymentMethod.payByCreditCard();

    }
    @When("^Type payment details$")
    public void type_payment_details() {
       paymentInformation.paymentDetails();

    }

    @When("^Click on confirm$")
    public void click_on_confirm() {
        confirmOrderPage.confirmOrder();
    }

    @Then("^User should able to see order in process confirmation message$")
    public void user_should_able_to_see_order_in_process_confirmation_message()  {
        orderVerificationPage.verifyOrderProcess();

    }


//======================================LogIn===========================================================


    @When("^User click on login$")
    public void userClickOnLogin() {

        homePage.clickOnLogIn();
    }

    @And("^User type \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userTypeAnd(String Email, String Password) {

        logInPage.enterLogInDetails(Email,Password);
    }

    @And("^click on login button$")
    public void clickOnLoginButton() {

        logInPage.clickOnLogInButton();
    }

    @Then("^User should not be able to log in$")
    public void userShouldNotBeAbleToLogIn() {
    }

    @And("^User should get \"([^\"]*)\"$")
    public void userShouldGet(String errorMessage) {
        logInPage.errorMessageVerification(errorMessage);
    }

}

