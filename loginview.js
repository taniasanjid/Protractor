it('Login', function () {


    browser.get('');
    browser.waitForAngular();
      browser.sleep(2000);
    element(by.id('username')).sendKeys('dilshad.tonu@gmail.com');
    element(by.id('password')).sendKeys('1qazZAQ!');
    element(by.css("[aria-label='Login']")).click();
    browser.waitForAngular();
      browser.sleep(1000);
    expect(browser.getCurrentUrl()).toBe('');
  
  
  });
    
