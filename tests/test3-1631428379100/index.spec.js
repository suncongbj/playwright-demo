const { test, expect } = require('@playwright/test');

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {

  // Go to http://www.baidu.com/
  await page.goto('http://www.baidu.com/');

  // Click text=hao123
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=hao123')
  ]);

  // Click text=点击展开
  await page1.click('text=点击展开');

  // Close page
  await page1.close();

  // Close page
  await page.close();

});