package com.essensys.pages;


import com.essensys.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import java.util.List;

public class FindProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(FindProductPage.class.getName());

    public FindProductPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//nav[@class='header-nav']/ul[1]")
    List<WebElement> bar;

    @CacheLookup
    @FindBy(xpath = "//nav[@class='header-nav']/ul[1]/li[4]")
    WebElement resourse;

    @CacheLookup
    @FindBy(xpath = "//nav[@class='header-nav']/ul[1]/li[2]")
    WebElement flex;

    @Test
    public void Selectmenu(String menu){
        for (WebElement name : bar){
            if (name.getText().equalsIgnoreCase(menu)){
                log.info("clicking on pro " + menu.toString() + "<br>");
                name.click();
                break;
            }
        }
    }
    @Test
    public void selectpro(){
        mouseHoverToElementAndClick(resourse);
        log.info("clicking on resources " + resourse.toString() + "<br>");
    }

     @Test
    public void clickonflex(){
        clickOnElement(flex);
         log.info("clicking on flex opretors " + flex.toString() + "<br>");
     }
}
