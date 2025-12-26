const {test, expect} = require('@playwright/test');

test('browser test case', async ({page}) => {
    //playwright code here

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.locator("#userEmail").type("bhashwith@gmail.com")
await page.locator("#userPassword").type("Rushika@132019")
await page.locator("#login").click();      
//await page.waitForLoadState('networkidle'); 
await page.locator(".card-body b").first().waitFor();
const title = console.log( await page.locator(".card-body b").allTextContents());
//console.log( await page.locator(".card-body a").nth(1).textContent());
//sssssssconst allTitles = await page.locator(".card-body a").allTextContents();

});

test('page test case', async ({page}) => {
    //playwright code here
    
await page.goto("https://google.com/")
});

test('UI controls test ', async ({page}) => {
    //playwright code here
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
await page.locator("#username").type("rahulshettyacademy")
await page.locator("#password").type("learning")
const dropdown = page.locator("select.form-control");
const aText = page.locator("[href*='documents-request']");
await page.locator(".radiotextsty").last().click()
console.log( await page.locator(".radiotextsty").last().isChecked()); 
await expect(page.locator(".radiotextsty").last()).toBeChecked();
await page.locator("#okayBtn").click();
//dropdown.selectOption("consult");
//await expect(dropdown).toHaveValue("consult");
//await page.locator("button.btn.btn-primary").click();
//await dropdown.selectOption("consult");

await page.locator("#terms").check();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
await expect(page.locator("#terms")).not.toBeChecked();
await expect(aText).toHaveAttribute("class","blinkingText");
//await page.locator("#signInBtn").click();
//await page.locator("div.card-body").first().waitFor();
//const allTitles = await page.locator("div.card-body h4 a").allTextContents();
//console.log(allTitles);

});

test("handling child windows ", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const downloadLink = page.locator("[href*='documents-request']");
    //const username =  page.locator("#userEmail");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        downloadLink.click(), // Opens a new tab
    ]);
    await newPage.waitForLoadState();   
    const text = await newPage.locator(".im-para.red").textContent();
    console.log(text);
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log("domain print" + domain);
    await page.locator('#username').fill(domain);   
    console.log("--------------------");
    //const pageEmail = await page.locator('#username').textContent();
    console.log(await page.locator('#username').inputValue());
});

test.only('handling dynamic elements ', async ({page}) => {
    //playwright code here
    
await page.goto("https://rahulshettyacademy.com/client");
const products = page.locator(".card-body");
const productName = "ZARA COAT 3";
const productCount = await products.count();
for(let i=0;i<productCount;i++)
{
    const productName = await products.nth(i).locator("b").textContent();
    if(await products.nth(i).locator("b").textContent() === productName)
    {
        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }
}

console.log("product added to cart  successfully");
});

