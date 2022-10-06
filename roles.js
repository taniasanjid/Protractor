describe('Roles', function() {

    it('Admin', function () {

browser.get('http://pwc.fakedomain.com/index.html#/login');
  browser.waitForAngular();
    browser.sleep(2000);
  element(by.id('username')).sendKeys('taniasanjid9@gmail.com');
  element(by.id('password')).sendKeys('1qazZAQ!');
  element(by.css("[aria-label='Login']")).click();
  browser.waitForAngular();
    browser.sleep(1000);
  expect(browser.getCurrentUrl()).toBe('http://pwc.fakedomain.com/index.html#/');
  element(by.xpath("//span[contains(.,'Dashboard')]")).click();
  element(by.xpath("//span[contains(.,'Private Wealth Solutions')]")).click();
  element(by.css('[ng-click="vm.gotoGeneralFolder()"]')).click();
  element(by.css("[aria-label='Delete']")).click();
  element(by.xpath("//span[contains(.,' Delete ')]")).click();

    });
    });