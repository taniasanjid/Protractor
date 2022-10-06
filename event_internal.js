it('Event_internal', function () {
//login
expect(browser.getCurrentUrl()).toBe('http://www.e-swisslife.com/index.html#/login');
element(by.id('username')).sendKeys('tania.sanjid9@gmail.com');
  element(by.id('password')).sendKeys('1qazZAQ!');
  element(by.css("[aria-label='Login']")).click();
  browser.waitForAngular();
  browser.sleep(10000);
  element(by.xpath("//span[contains(.,'Knowledge hub')]")).click();
  element(by.xpath("//span[contains(.,'Events')]")).click();
  browser.waitForAngular();
  browser.sleep(5000);
  element(by.css('[ng-click="vm.goToDetails(event.ItemId)"]')).click();
  element(by.xpath("//span[contains(.,'Join event')]")).click();  //join event
  
  element(by.xpath("//span[contains(.,'Download as PDF')]")).click(); //download pdf 

  element(by.xpath("//span[contains(.,'Add to my calender')]")).click(); //add to calendar

  element(by.css(".md-font.material-icons.icon-arrow-drop-down.md-dark-swiss-life-theme")).click(); 
  element(by.xpath("//button[contains(.,' Logout')]")).click(); 

  });