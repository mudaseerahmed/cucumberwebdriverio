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
