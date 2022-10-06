describe('angular login page', function() {

  it('pageview', function(){

   browser.get('');
   var EC = protractor.ExpectedConditions;
   browser.wait(EC.visibilityOf(element(by.id("username"))), 10000);

   element(by.id('username')).sendKeys('t.aniasanjid.9@gmail.com');
   element(by.id('password')).sendKeys('1qazZAQ!');

   var login = element(by.css("[aria-label='Login']")).click().then(function(loggedin){
    expect(browser.getCurrentUrl()).toBe('');

    });
  });
});

