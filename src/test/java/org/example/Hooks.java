package org.example;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;


import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.apache.commons.io.FileUtils.copyFile;

public class Hooks extends Utils{

    String timestamp = new SimpleDateFormat("yy.MM.dd.HH.mm.ss").format(new Date());
    BrowserSelector browserSelector = new BrowserSelector();

    @Before
    public void openBrowser(){
        //open browser
        browserSelector.openBrowser();
        //open url
        driver.get("https://demo.nopcommerce.com/");
    }

    @After
    public void closeBrowser(Scenario scenario){
        String screenshotName = scenario.getName().replaceAll(".,;:!?","") + timestamp + ".png";
        if (scenario.isFailed()){
            File sourcepath = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            File destinationPath = new File(System.getProperty("user.dir")+ "/target/Destination/screenshot/" + screenshotName);
            try {
                copyFile(sourcepath,destinationPath);
            }catch (IOException e){
                e.printStackTrace();
            }
            scenario.write(("!!!!!!!!!!!!!!!!!.............Scenario Failed............!!!!!!!!!!!!!!!!"));
            scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES),"image/png");

        }
        driver.quit();
    }
}
