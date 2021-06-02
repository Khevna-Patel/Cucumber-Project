package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class ConfirmOrderPage extends Utils{

    private By _ConfirmButton = By.xpath("//button[@class='button-1 confirm-order-next-step-button']");

    LoadProperty loadProperty= new LoadProperty();

    public void confirmOrder(){

        //Expected result
        //String ExpectedConfirmOrderPageUrl = "https://demo.nopcommerce.com/onepagecheckout#opc-confirm_order";
        //Actual result
        //String ActualConfirmOrderPAgeUrl = driver.getCurrentUrl();
        //verify actual and expected result
        //Assert.assertEquals(ActualConfirmOrderPAgeUrl,ExpectedConfirmOrderPageUrl,"Confirmation page is not displayed");
        //System.out.println("Confirm order page assert"+" "+loadProperty.getProperty("ConfirmationMessage"));


        //click confirm button
        clickOnElement(_ConfirmButton);
    }
}
