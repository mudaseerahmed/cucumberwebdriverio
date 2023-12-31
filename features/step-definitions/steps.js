const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.navigateTo("https://www.hamleys.in/collections/category-school-travel-travel");
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
When(/^user clicks on price button$/, async() => {
//    await LoginPage.pricetextbrand.scrollIntoView();
    await browser.scroll(0, 500);
    await LoginPage.pricetext.click();
    await browser.scroll(0, 350);
    await browser.pause(4000);
  //  await LoginPage.pricefirst.scrollIntoView();
  let bool;
  browser.waitUntil(async() =>{
    bool=await LoginPage.pricefirst.isDisplayed();
    return bool;
  })
  console.log(bool);
    await LoginPage.pricefirst.click();   
});
var lowerint, upperint ;
Then(/^validate price between lower and higher$/,async()=>{
    let priceamt=await LoginPage.pricefirsttext.getText();
    await browser.pause(4000);
    console.log(priceamt+"is the price");
    const price=priceamt.split("-");
    console.log(price+"is the amount after split");
    let lower = price[0];
    let upper=price[1];
    lowerint = parseInt(lower);
    upperint = parseInt(upper);
    console.log(lowerint+"is the price");
    console.log(upperint+"is the price");
    let priceamts=await LoginPage.priceproducts;
    let b;
    const num = [];
        for( let i=0;i<priceamts.length;i++){
          let priceamttext=await priceamts[i].getText();
          priceamttext=priceamttext.substring(2);
          b=parseInt(priceamttext);
          console.log(priceamttext+"is amt---->");
          num.push(b);
        }
        console.log(num+"is the value in array");

})
Then(/^user enters different values in search textbox "([^\"]*)"$/, async (input) => {
  await LoginPage.entertext(input);
  await browser.keys('Enter');
 // await browser.scroll(0, 0);

})
Then(/^validate text of the product is "([^\"]*)"$/, async (input) => {
  await LoginPage.entertext(input);
  await LoginPage.clickonproducts();
});
Then(/^get the text of number of products$/,async()=>{
   let productvalue=await LoginPage.products.getText();
   console.log(productvalue+"is the no of products");
});
Then(/^user validates price before discount$/,async()=>{
       await browser.scroll(0, 3000);
       let priceamts= await LoginPage.pricebeforediscount;
        for( let i=0;i<priceamts.length;i++){
          let priceamttext=await priceamts[i].getText();
          console.log(priceamttext+"is the text before discount");
        }
        await browser.pause(8000);
       
});
Then(/^user validates price after discount$/,async()=>{
   let priceamts= await LoginPage.priceafterdiscount;
   for( let i=0;i<priceamts.length;i++){
     let priceamttext=await priceamts[i].getText();
     console.log(priceamttext+"is the text after discount");
   }
   await browser.pause(8000);
});
Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

