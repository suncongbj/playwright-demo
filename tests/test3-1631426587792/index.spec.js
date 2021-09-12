const { test, expect } = require('@playwright/test');

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {

  // Go to http://www.baidu.com/
  await page.goto('http://www.baidu.com/');

  // Click input[name="wd"]
  await page.click('input[name="wd"]');

  // Fill input[name="wd"]
  await page.fill('input[name="wd"]', '测试');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E6%B5%8B%E8%AF%95&fenlei=256&rsv_pq=febc6831000b6b60&rsv_t=ab18HDYAdreP3rcNzc1x1i6a6%2BhpUx7OoYBiq7JS4hgUPpHPTk5xzMYK%2FIw&rqlang=cn&rsv_dl=tb&rsv_enter=1&rsv_sug3=6&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=%25E6%25B5%258B%25E8%25AF%2595&rsp=5&inputT=2090&rsv_sug4=2090&rsv_jmp=fail' }*/),
    page.press('input[name="wd"]', 'Enter')
  ]);

  // Close page
  await page.close();

});