import { multiply } from './index';
const playwright = require('playwright');

test( 'multiply tester', async () => {
   expect( multiply( 3, 7 ) ).toEqual( 21 );
});

test( 'mf test', async() => {
   
   for (const browserType of ['chromium', 'firefox', 'webkit']) {
      console.log( browserType, "START" );
      const browser = await playwright[browserType].launch();
      console.log( browserType, "LAUNCHED" );
      const context = await browser.newContext();
      console.log( browserType, "MADE CONTEXT" );
      const page = await context.newPage();
      console.log( browserType, "NEW PAGE" );
      await page.goto('http://localhost:3000/');
      console.log( browserType, "VISITED PAGE" );
      await page.waitForSelector('#thebutton', { visible: true });
      console.log( browserType, "FOUND SELECTOR" );
      await page.click('#thebutton');
      console.log( browserType, "CLICKED THE MF BUTTON" );
      const result = await page.$eval('#answer', (el:any) => el.innerHTML);
      console.log( browserType, "FETCHED THE RESULT" );
      await browser.close();
      console.log( browserType, "IS IT COFFEE?" );
      expect(result).toEqual('coffee');
      console.log( browserType, "I THINK SO" );
   }
});