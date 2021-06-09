package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;


public class LogInPage extends Utils{
    
    private By _Email = By.cssSelector("input#Email");
    private By _Password = By.cssSelector("input#Password");
    private By _LogInButton = By.xpath("//button[contains(@class,'button-1 login-button')]");
    private By _ErrorMessage = By.cssSelector(".returning-wrapper.fieldset");



    public void verifyCurrentUrl(){
        //expected url
        String url = "https://demo.nopcommerce.com/login?returnUrl=%2F";
        //verify url
        assertCurrentUrl(url);
    }

    public void enterLogInDetails(String Email, String Password){

        //type email
        enterText(_Email, Email);
        //type password
        enterText(_Password, Password);
    }

    public void clickOnLogInButton(){
        //click on log in button
        clickOnElement(_LogInButton);
    }

    public void errorMessageVerification(String errorMessage){
        WebElement EmailField = driver.findElement(_ErrorMessage);
        String ActualEmail = EmailField.getText();

        if (errorMessage.equals(ActualEmail))
        {
            System.out.println("Actual and and Expected validation are same and it is : "+ActualEmail);
        }else
            {
                System.out.println("Actual error message is "+ActualEmail);
                System.out.println("Expected error message is "+errorMessage);
            }
    }

}
