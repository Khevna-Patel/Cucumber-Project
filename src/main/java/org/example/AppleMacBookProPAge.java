package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class AppleMacBookProPAge extends Utils{

    private By _AddToCartButton = By.cssSelector("button#add-to-cart-button-4");
    private By _shoppingCart = By.xpath("//p[@class='content']/a[@href='/cart']");

    LoadProperty loadProperty = new LoadProperty();

    public void addProduct(){

        //Expected result
        String ExpectedAppleMacBookUrl = "https://demo.nopcommerce.com/apple-macbook-pro-13-inch";
        //Actual result
        String ActualAppleMacBookUrl = driver.getCurrentUrl();
        //verify actual and expected result
        Assert.assertEquals(ActualAppleMacBookUrl,ExpectedAppleMacBookUrl,"AppleMacBook page is not displayed");
        System.out.println("Apple MacBook Page asset"+" "+loadProperty.getProperty("AppleMacBookPageMessage"));

        clickOnElement(_AddToCartButton);
        clickOnElement(_shoppingCart);


    }
}
