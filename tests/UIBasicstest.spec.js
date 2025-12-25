const {test} = require('@playwright/test');

test('browser test case', async ({browser}) => {
    //playwright code here
    const context = await browser.newContext();
    const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
});

test('page test case', async ({page}) => {
    //playwright code here
    
await page.goto("https://google.com/")
});