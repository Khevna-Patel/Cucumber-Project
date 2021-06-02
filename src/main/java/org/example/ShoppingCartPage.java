package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class ShoppingCartPage extends Utils{

    private By _termsOfService = By.cssSelector("input#termsofservice");
    private By _checkoutButton = By.cssSelector("button#checkout");

    LoadProperty loadProperty = new LoadProperty();

    public void checkOut(){
        //expected result
        String ExpectedShoppingCartPageUrl = "https://demo.nopcommerce.com/cart";
        //actual result
        String ActualShoppingCartPageUrl = driver.getCurrentUrl();
        //verify actual and expected result
        Assert.assertEquals(ActualShoppingCartPageUrl,ExpectedShoppingCartPageUrl,"Shopping cart page is not displayed");
        System.out.println("Shopping cart page assert"+" "+loadProperty.getProperty("ShoppingCartPageMessage"));

        //click on terms of service
        clickOnElement(_termsOfService);
        //click on checkout button
        clickOnElement(_checkoutButton);
    }
}
