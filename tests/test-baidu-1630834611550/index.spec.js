const { test, expect } = require('@playwright/test');

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {

  // Go to http://www.baidu.com/
  await page.goto('http://www.baidu.com/');

  // Click text=换一换
  await page.click('text=换一换');

  // Click text=换一换
  await page.click('text=换一换');

  // Click text=换一换
  await page.click('text=换一换');

  // Click text=换一换
  await page.click('text=换一换');

  // Click text=换一换
  await page.click('text=换一换');

  // Click text=换一换
  await page.click('text=换一换');

  // Click text=换一换
  await page.click('text=换一换');

  // Click text=换一换
  await page.click('text=换一换');

  // Click text=换一换
  await page.click('text=换一换');

  // Click text=换一换
  await page.click('text=换一换');

  // Close page
  await page.close();

});