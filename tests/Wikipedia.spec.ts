import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe("Wikipedia", async () => {
    test('Check wikipedia header links', async ({ page }) => {
        await page.goto("https://www.wikipedia.com.ua/")
        await page.locator("//div[@class='central-featured-lang lang7']").click();
    
        await expect(page.getByRole('link', { name: 'Visualizza sorgente' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Cronologia' })).toBeVisible();
    
    });
    test('wikipedia check login navigation', async({page}) =>{
        await page.goto("https://www.wikipedia.com.ua/")
        await page.getByRole('link', { name: 'English 657 000+ articles' }).click();
        await page.locator("//li[@id='pt-login-2']").click();
        await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    })
    test('WikipediaTest', async ({page}) => {
        await page.goto("https://www.wikipedia.com.ua/");
        await page.getByRole('link', { name: 'Português 1 095 000+ artigos' }).click();
        await expect (page.getByRole('cell', { name: 'Boas-vindas à Wikipédia, a' })).toBeVisible();
        await page.getByRole('link', { name: 'Matemática' }).click();
        await expect (page.getByRole('cell', { name: 'Portal:MatemáticaPortal:Matem' })).toBeVisible();
        await page.getByRole('link', { name: 'Ver fonte' }).click();
    })
    test('check search works properly', async ({page}) => {
        await page.goto("https://www.wikipedia.com.ua/");
        await page.getByRole('link', { name: 'English 657 000+ articles' }).click();
        await page.getByPlaceholder('Search Wikipedia').pressSequentially("test automation");
        await page.keyboard.press("Enter");
        await expect(page.getByRole('heading', { name: 'Test automation', exact: true }).locator('span')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Test automation', exact: true }).locator('span')).toHaveText(/Test automation/);
        await expect(page.locator("//ul[@id='mw-panel-toc-list']/li/a")).toHaveCount(12);


    })

})


