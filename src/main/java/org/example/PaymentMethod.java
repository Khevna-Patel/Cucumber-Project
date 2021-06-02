package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class PaymentMethod extends Utils{


    private By _CreditCard = By.cssSelector("input#paymentmethod_1");
    private By _ContinueButton = By.xpath("//button[@class='button-1 payment-method-next-step-button']");

    LoadProperty loadProperty = new LoadProperty();

    public void payByCreditCard(){

        //expected result
       // String ExpectedPaymentMethodUrl = "https://demo.nopcommerce.com/onepagecheckout#opc-payment_method";
        //actual result
       // String ActualPAymentMethodUrl = driver.getCurrentUrl();
        //verify actual and expected url
       // Assert.assertEquals(ActualPAymentMethodUrl,ExpectedPaymentMethodUrl,"Payment method page is not displayed");
       // System.out.println("Payment method page assert"+" "+loadProperty.getProperty("PaymentMethodMessage"));

        //select credit cart
        clickOnElement(_CreditCard);
        //click continue
        clickOnElement(_ContinueButton);
    }
}
