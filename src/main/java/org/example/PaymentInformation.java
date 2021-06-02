package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class PaymentInformation extends Utils{

    private By _CardHolderName = By.cssSelector("input#CardholderName");
    private By _CardNumber = By.cssSelector("input#CardNumber");
    private By _ExpiryMonth = By.cssSelector("select#ExpireMonth");
    private By _ExpiryYear = By.cssSelector("select#ExpireYear");
    private By _CardCode = By.cssSelector("input#CardCode");
    private By _ContinueButton = By.xpath("//button[@class='button-1 payment-info-next-step-button']");


    LoadProperty loadProperty = new LoadProperty();

    public void paymentDetails(){

        //Expected result
        //String ExpectedPaymentInformationPageUrl = "https://demo.nopcommerce.com/onepagecheckout#opc-payment_info";
        //actual result
        //String ActualPaymentInformationPAgeUrl = driver.getCurrentUrl();
        //verify actual and expected result
        //Assert.assertEquals(ActualPaymentInformationPAgeUrl,ExpectedPaymentInformationPageUrl,"Payment information page is not displayed");
        //System.out.println("Payment information page assert"+" "+loadProperty.getProperty("PaymentInformationPageMessage"));

        //type cardholder name
        enterText(_CardHolderName,loadProperty.getProperty("CardHolderName"));
        //type card number
        enterText(_CardNumber,loadProperty.getProperty("CardNumber"));
        //select expiry month
        selectFromDropdownByVisibleText(_ExpiryMonth,loadProperty.getProperty("ExpiryMonth"));
        //select expiry year
        selectFromDropdownByVisibleText(_ExpiryYear,loadProperty.getProperty("ExpiryYear"));
        //type card code
        enterText(_CardCode,loadProperty.getProperty("CardCode"));
        //click continue
        clickOnElement(_ContinueButton);
    }
}
