package org.example;

import cucumber.api.java.pt.E;
import org.openqa.selenium.By;
import org.testng.Assert;

public class ShippingMethod extends Utils{

    private By _NextDayAir = By.cssSelector("input#shippingoption_1");
    private By _ContinueButton = By.xpath("//button[@class='button-1 shipping-method-next-step-button']");

    LoadProperty loadProperty = new LoadProperty();

    public void clickOnNextDayAir(){
        //expected result
        //String ExpectedShippingMethodUrl = "https://demo.nopcommerce.com/onepagecheckout#opc-shipping_method";
        //actual result
      //  String ActualShippingMethodUrl = driver.getCurrentUrl();
        //verify actual and expected result
       // Assert.assertEquals(ActualShippingMethodUrl, ExpectedShippingMethodUrl,"Shipping method page is not displayed");
       // System.out.println("Shipping method page assert"+" "+loadProperty.getProperty("ShippingMethodMessage"));

        //click next day air
        clickOnElement(_NextDayAir);

        //click continue
        clickOnElement(_ContinueButton);
    }
}
