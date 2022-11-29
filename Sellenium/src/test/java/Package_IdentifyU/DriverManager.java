package Package_IdentifyU;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

public class DriverManager
{
    public WebDriver driver;

    protected void setup() throws MalformedURLException
    {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();


        driver.get("https://identifyu-staging.herokuapp.com/admin");
        //driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
    }

    protected void terminate() throws MalformedURLException
    {
        if (driver != null) {
            driver.quit();
        }
    }
}
