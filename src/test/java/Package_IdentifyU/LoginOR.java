package Package_IdentifyU;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginOR {
    @CacheLookup
    @FindBy(xpath = "//*[@id=\"admin_email\"]")
    public WebElement txtEmail;

    @CacheLookup
    @FindBy(xpath = "//*[@id=\"admin_password\"]")
    public WebElement txtPassword;

    @CacheLookup
    @FindBy(xpath = "//*[@id=\"new_admin\"]/div[2]/input")
    public WebElement btnLogin;


}
