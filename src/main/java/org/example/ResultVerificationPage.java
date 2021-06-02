package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import java.sql.Timestamp;

public class ResultVerificationPage extends Utils{


    LoadProperty loadProperty = new LoadProperty();

    private By _registerMessage = By.xpath("//div[@class='result']");
    private By _continueButton = By.xpath("//a[@class='button-1 register-continue-button']");



    public void verifyRegisterMessage(){
        //Expected result
        String ExpectedRegisterVerificationUrl = "https://demo.nopcommerce.com/registerresult/1?returnUrl=/";
        //actual result
        String ActualRegisterVerificationMessage = driver.getCurrentUrl();
        //verify expected and actual result
        Assert.assertEquals(ActualRegisterVerificationMessage,ExpectedRegisterVerificationUrl,"Register verification page is not displayed");
        System.out.println("Register verification page assert ="+" "+loadProperty.getProperty("registerVerificationMessage"));

        //assert to print expected message
        Assert.assertEquals(getTextFromElement(_registerMessage),"Your registration completed","Your registration is not completed");
        System.out.println(loadProperty.getProperty("RegisterMessage"));
    }
    public void clickContinue(){
        clickOnElement(_continueButton);
    }

}
