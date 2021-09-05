const { test, expect } = require('@playwright/test');

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {

  // Go to https://www.douban.com/
  await page.goto('https://www.douban.com/');

  // Click [placeholder="手机号"]
  await page.frame({
    url: 'https://accounts.douban.com/passport/login_popup?login_source=anony'
  }).click('[placeholder="手机号"]');

  // Fill [placeholder="手机号"]
  await page.frame({
    url: 'https://accounts.douban.com/passport/login_popup?login_source=anony'
  }).fill('[placeholder="手机号"]', '13261607667');

  // Click text=获取验证码
  await page.frame({
    url: 'https://accounts.douban.com/passport/login_popup?login_source=anony'
  }).click('text=获取验证码');

  // Click text=获取验证码
  await page.frame({
    url: 'https://accounts.douban.com/passport/login_popup?login_source=anony'
  }).click('text=获取验证码');

  // Click #slide
  await page.frame({
    url: 'https://t.captcha.qq.com/cap_union_new_show?aid=2044348370&protocol=https&accver=1&showtype=popup&ua=TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk0LjAuNDU5NS4wIFNhZmFyaS81MzcuMzY%3D&noheader=1&fb=1&enableDarkMode=0&grayscale=1&clientype=2&sess=s0IaCr4GTZlaM-h1TOYsN0IQprxyJn_tCBCwnZU2zPegXKiG5eT_IKkV2-waYRYo8s5JvH2lTptMSGNg97cMGEf4PHCyqeWStm4sSujBMWXVWG6TZAphoo5kNjruVjkIJNCUP1-voSJK84I9I9KJmYe0KpXoSJMiHF4s65vR60bjI7oSLBoTXAXGDIfzuLjOiBUIRdBEcHyT0oGf3HkZAXxThcV2oQh0He24PRq5TPkmOWhIkgvJKRVQ**&fwidth=296&sid=6840204928135479296&wxLang=&tcScale=1&uid=&cap_cd=&rnd=471375&prehandleLoadTime=2866&createIframeStart=1630831940001&subsid=3'
  }).click('#slide');

  // Click #slide div
  await page.frame({
    url: 'https://t.captcha.qq.com/cap_union_new_show?aid=2044348370&protocol=https&accver=1&showtype=popup&ua=TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk0LjAuNDU5NS4wIFNhZmFyaS81MzcuMzY%3D&noheader=1&fb=1&enableDarkMode=0&grayscale=1&clientype=2&sess=s0IaCr4GTZlaM-h1TOYsN0IQprxyJn_tCBCwnZU2zPegXKiG5eT_IKkV2-waYRYo8s5JvH2lTptMSGNg97cMGEf4PHCyqeWStm4sSujBMWXVWG6TZAphoo5kNjruVjkIJNCUP1-voSJK84I9I9KJmYe0KpXoSJMiHF4s65vR60bjI7oSLBoTXAXGDIfzuLjOiBUIRdBEcHyT0oGf3HkZAXxThcV2oQh0He24PRq5TPkmOWhIkgvJKRVQ**&fwidth=296&sid=6840204928135479296&wxLang=&tcScale=1&uid=&cap_cd=&rnd=471375&prehandleLoadTime=2866&createIframeStart=1630831940001&subsid=3'
  }).click('#slide div');

  // Click #captcha_close div
  await page.frame({
    url: 'https://t.captcha.qq.com/cap_union_new_show?aid=2044348370&protocol=https&accver=1&showtype=popup&ua=TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk0LjAuNDU5NS4wIFNhZmFyaS81MzcuMzY%3D&noheader=1&fb=1&enableDarkMode=0&grayscale=1&clientype=2&sess=s0IaCr4GTZlaM-h1TOYsN0IQprxyJn_tCBCwnZU2zPegXKiG5eT_IKkV2-waYRYo8s5JvH2lTptMSGNg97cMGEf4PHCyqeWStm4sSujBMWXVWG6TZAphoo5kNjruVjkIJNCUP1-voSJK84I9I9KJmYe0KpXoSJMiHF4s65vR60bjI7oSLBoTXAXGDIfzuLjOiBUIRdBEcHyT0oGf3HkZAXxThcV2oQh0He24PRq5TPkmOWhIkgvJKRVQ**&fwidth=296&sid=6840204928135479296&wxLang=&tcScale=1&uid=&cap_cd=&rnd=471375&prehandleLoadTime=2866&createIframeStart=1630831940001&subsid=3'
  }).click('#captcha_close div');

  // Click text=获取验证码
  await page.frame({
    url: 'https://accounts.douban.com/passport/login_popup?login_source=anony'
  }).click('text=获取验证码');

  // Close page
  await page.close();

});