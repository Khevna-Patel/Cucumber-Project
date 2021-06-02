package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class CheckoutPage extends Utils {
    private By _countryName = By.cssSelector("select#BillingNewAddress_CountryId");
    private By _cityName = By.cssSelector("input#BillingNewAddress_City");
    private By _Address = By.xpath("//input[@name='BillingNewAddress.Address1']");
   // private By _Address = By.cssSelector("BillingNewAddress_Address1");
    private By _PostalCode = By.cssSelector("input#BillingNewAddress_ZipPostalCode");
   // private By _PostalCode = By.xpath("//input[@id='BillingNewAddress_ZipPostalCode']");
    private By _PhoneNumber = By.cssSelector("input#BillingNewAddress_PhoneNumber");
    private By _ContinueButton = By.xpath("(//button[@class='button-1 new-address-next-step-button'])[1]");


    LoadProperty loadProperty = new LoadProperty();

    public void billingPlace() {

        //Expected result
        String ExpectedCheckOutUrl ="https://demo.nopcommerce.com/onepagecheckout#opc-billing";
        //actual result
        String ActualCheckOutUrl = driver.getCurrentUrl();
        //verify actual and expected result
        Assert.assertEquals(ActualCheckOutUrl,ExpectedCheckOutUrl,"Check out page is not displayed");
        System.out.println("Check out page assert"+" "+loadProperty.getProperty("CheckOutMessage"));

        //select country
        selectFromDropdownByVisibleText(_countryName, loadProperty.getProperty("Country"));
        //type city
        enterText(_cityName, loadProperty.getProperty("City"));

        //type address
        enterText(_Address, loadProperty.getProperty("Address"));
        //type post code
        enterText(_PostalCode, loadProperty.getProperty("PostalCode"));
        //type phone number
        enterText(_PhoneNumber, loadProperty.getProperty("Phonenumber"));
        //click on continue
        clickOnElement(_ContinueButton);


    }
}