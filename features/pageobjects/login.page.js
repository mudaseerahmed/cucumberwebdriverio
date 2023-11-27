const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }
    get pricetext(){
        return $("//div[contains(text(),'price')]");
    }
    get pricetextbrand(){
        return $("//div[contains(text(),'brand')]");
    }
    get pricefirst(){
        return $("//div[contains(text(),'price')]//following::a[1]");
    }
    get pricefirsttext(){
        return $("//div[contains(text(),'price')]//following::a[1]");
    }
    get priceproducts(){
        return $$("//span[contains(.,'SAVE')]//preceding::span[1]/..");
    }
   async entertext(name){
       await $("input[id$='demo']").setValue(name);
       await browser.keys('Enter');
       await browser.pause(8000);
   }
   async clickonproducts(){
    const links=await $$("//h2[text()='Recommended']//preceding::a/h4[contains(@class,'semi-bold')]");
    console.log(links.length+"is the length");
    for(let i=0;i<links.length;i++){
        console.log("the values are",await links[i].getText());
    }
   }
   get pricebeforediscount(){
    return $$("//span[contains(.,'SAVE')]//preceding::del[1]");
  
   }
   get priceafterdiscount(){
    return  $$("//span[contains(.,'SAVE')]//preceding::span[2]");
   }

   get products(){
    return $("(//p[contains(.,'products')])[1]");
}
   clickproductsnavigateback(){
   return this.clickonproducts().map()
}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('category-sports-outdoor');
    }
}

module.exports = new LoginPage();
