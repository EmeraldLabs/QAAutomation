package Package_IdentifyU;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import java.time.Duration;

public class LoginMethods {
SoftAssert softAssert = new SoftAssert();

    private WebDriver driver;
    private LoginOR orLogin	= null;

    public LoginMethods(WebDriver driver)
    {
        this.driver = driver;

        orLogin = PageFactory.initElements (driver, LoginOR.class);
    }

    public void typeEmail()

    {
        WebDriverWait wait= new WebDriverWait(driver, Duration.ofMillis(60));
        wait.until (ExpectedConditions.elementToBeClickable (orLogin.txtEmail));
        orLogin.txtEmail.sendKeys ("admin@identifyU.com");

    }

    public void typePassword()

    {
        WebDriverWait wait= new WebDriverWait(driver, Duration.ofMillis(60));
        wait.until (ExpectedConditions.elementToBeClickable (orLogin.txtPassword));
        orLogin.txtPassword.sendKeys ("P@55w04d");

    }

    public void clickLogin()

    {

        WebDriverWait wait= new WebDriverWait(driver, Duration.ofMillis(60));
        wait.until (ExpectedConditions.elementToBeClickable (orLogin.btnLogin));
        orLogin.btnLogin.click();

    }

    public void verifyLogin()
    {
        WebDriverWait wait= new WebDriverWait(driver, Duration.ofMillis(60));
        String ActualTitle = driver.getTitle();
        String ExpectedTitle = "Dashboard - IdentifyU";
        softAssert.assertEquals(ActualTitle,ExpectedTitle);
        softAssert.assertAll();
    }


}
