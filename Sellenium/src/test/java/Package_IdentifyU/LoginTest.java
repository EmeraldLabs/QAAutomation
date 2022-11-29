package Package_IdentifyU;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.MalformedURLException;

//public class LoginTest extends DriverManager
public class LoginTest extends DriverManager
{
    GlobalWaitTime globalWait = new GlobalWaitTime();
    @BeforeClass

    public void Setup () throws MalformedURLException
    {
        globalWait.getLongWaitTime();
        setup();
    }

    @Test
    public void LoginIdentifyu () throws MalformedURLException
    {

      /*  System.setProperty("webdriver.chrome.driver", "D:/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();

        driver.get("https://identifyu-staging.herokuapp.com/");
        //driver.get("http://automationpractice.com/");*/

        globalWait.getIntWaitTime();
        LoginMethods LogIn_Method = new LoginMethods(driver);
       /* LogIn_Method.clickSignIn();
        LogIn_Method.enterEmail();*/
        LogIn_Method.typeEmail();
        LogIn_Method.typePassword();
        LogIn_Method.clickLogin();
        LogIn_Method.verifyLogin();
        /*driver.quit();*/
    }
    @AfterClass
    public void Terminate() throws MalformedURLException {
        terminate();
    }
}
