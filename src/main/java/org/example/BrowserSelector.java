package org.example;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;
import java.net.URL;

public class BrowserSelector extends BasePage{
    LoadProperty loadProperty = new LoadProperty();
    String browserName = loadProperty.getProperty("browser");

    public static final String AUTOMATE_USERNAME = "khevnapatel_YWSgFJ";
    public static final String AUTOMATE_ACCESS_KEY = "dDxxwEKH2zXybDL1e2Ju";
    public static final String URL = "https://" + AUTOMATE_USERNAME + ":" + AUTOMATE_ACCESS_KEY + "@hub-cloud.browserstack.com/wd/hub";
    public static final boolean browserStack = false;

    DesiredCapabilities caps = new DesiredCapabilities();

    public void openBrowser() {
        //open Browser Stack
        if (browserStack) {
            if (browserName.equalsIgnoreCase("Chrome")) {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("browser", "Chrome");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.14.0");

            } else if (browserName.equalsIgnoreCase("edge")) {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("browser", "Chrome");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.14.0");

            } else if (browserName.equalsIgnoreCase("firefox")) {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("browser", "Firefox");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.10.0");

            } else if (browserName.equalsIgnoreCase("safari")) {
                caps.setCapability("os", "OS X");
                caps.setCapability("os_version", "Big Sur");
                caps.setCapability("browser", "Safari");
                caps.setCapability("browser_version", "14.0");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.14.0");

            }
            try {
                driver = new RemoteWebDriver(new URL(URL), caps);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }

        //open locally
        else {

            if (browserName.equalsIgnoreCase("Chrome")) {
                //setting up chromedriver path from the system
                System.setProperty("webdriver.chrome.driver", "src/test/Resources/BrowserDrivers/chromedriver.exe");

                //initialising the object
                driver = new ChromeDriver();
            } else if (browserName.equalsIgnoreCase("edge")) {
                //setting up Edgedriver path from the system
                System.setProperty("webdriver.edge.driver", "src/test/Resources/BrowserDrivers/msedgedriver.exe");

                //initialising the object
                driver = new EdgeDriver();
            } else if (browserName.equalsIgnoreCase("Firefox")) {
                //setting up firefoxdriver path from the system
                System.setProperty("webdriver.gecko.driver", "src/test/Resources/BrowserDrivers/geckodriver.exe");

                //initialising the object
                driver = new FirefoxDriver();
            } else {
                System.out.println("In correct browser name or empty....:" + browserName);
            }
        }
            //maximise the browser window
            driver.manage().window().maximize();
            //applying implicit wait to driver object
            driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

    }
}

