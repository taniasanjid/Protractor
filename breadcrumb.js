it('Breadcrumb', function () {

    //for EU and CAR

    element(by.xpath("//span[contains(.,'Online application')]")).click();//gets online app menu
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//span[contains(.,' Start new  ')]")).click(); //Start new button click
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.css("[aria-label='Yes']")).click();

    element(by.xpath("//span[contains(.,'  Next ')]")).click();
    element(by.xpath("//span[contains(.,' Back ')]")).click();
    element(by.xpath("//span[contains(.,'  Next ')]")).click();

    element(by.xpath("//span[contains(.,'Luxembourg')]")).click();

    element(by.xpath("//span[contains(.,'  Next ')]")).click();

    element(by.css('[ng-click="vm.startWorkflow(workflow)"]')).click();

    element(by.css("[aria-label='Client assessment report']")).click();
    element(by.css("[aria-label='Online application']")).click();

    expect(browser.getCurrentUrl()).toBe('http://pwc.fakedomain.com/index.html#/apply-online');

// For non EU and CAR
    element(by.xpath("//span[contains(.,' Start new  ')]")).click(); //Start new button click
    browser.waitForAngular();
    browser.sleep(1000);
    element(by.css("[aria-label='No']")).click();
    element(by.xpath("//span[contains(.,'United Kingdom')]")).click();
    element(by.xpath("//span[contains(.,'  Next ')]")).click();
    element(by.css("[aria-label='Additional Premium']")).click();
    element(by.xpath("//span[contains(.,'  Next ')]")).click();

    element(by.css("[aria-label='Additional Premium US   * Mandatory']")).click();
    element(by.css("[aria-label='Additional Premium']")).click();
    element(by.css("[aria-label='Online application']")).click();
    expect(browser.getCurrentUrl()).toBe('http://pwc.fakedomain.com/index.html#/apply-online');

       //logout
 
  element(by.css(".md-font.material-icons.icon-arrow-drop-down.md-dark-swiss-life-theme")).click(); 
  element(by.xpath("//button[contains(.,' Logout')]")).click(); 
  browser.waitForAngular();
   browser.sleep(5000);

   //login as external

   expect(browser.getCurrentUrl()).toBe('');
   element(by.id('username')).sendKeys('');
  element(by.id('password')).sendKeys('');
  element(by.css("[aria-label='Login']")).click();
  browser.waitForAngular();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toBe('');


    element(by.xpath("//app-menu-item[3]/div/button")).click();//gets online app menu
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//span[contains(.,' Start new  ')]")).click(); //Start new button click
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//span[contains(.,'Luxembourg')]")).click();

    element(by.xpath("//span[contains(.,'  Next ')]")).click();

    element(by.css("[aria-label='New Policy Application']")).click();
    element(by.xpath("//span[contains(.,'  Next ')]")).click();

    element(by.css('[ng-click="vm.startWorkflow(workflow)"]')).click();

    element(by.css("[aria-label='New Policy Application']")).click();
    element(by.css("[aria-label='Online application']")).click();

    expect(browser.getCurrentUrl()).toBe('');

    element(by.css(".md-font.material-icons.icon-arrow-drop-down.md-dark-swiss-life-theme")).click(); 
    element(by.xpath("//button[contains(.,' Logout')]")).click(); 
    browser.waitForAngular();
     browser.sleep(5000);

      });