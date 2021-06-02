package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class OrderVerificationPage extends Utils{

    private By _OrderVerificationMessage = By.xpath("//strong[contains(text(),'Your order has been successfully processed!')]");

    LoadProperty loadProperty = new LoadProperty();

    public void verifyOrderProcess(){

        //expected message
        String ExpectedMessage = "Your order has been successfully processed!";
        //actual message
        String ActualMessage = getTextFromElement(_OrderVerificationMessage);
        //verification of actual result and expected result
        Assert.assertEquals(ActualMessage,ExpectedMessage,"Your order has not been successfully processed");
        System.out.println(loadProperty.getProperty("AppleMacBookAssert"));

    }
}
