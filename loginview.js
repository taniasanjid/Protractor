it('Login', function () {


    browser.get('http://www.e-swisslife.com/index.html#/login');
    browser.waitForAngular();
      browser.sleep(2000);
    element(by.id('username')).sendKeys('dilshad.tonu@gmail.com');
    element(by.id('password')).sendKeys('1qazZAQ!');
    element(by.css("[aria-label='Login']")).click();
    browser.waitForAngular();
      browser.sleep(1000);
    expect(browser.getCurrentUrl()).toBe('http://www.e-swisslife.com/index.html#/');
  
  
  });
    
