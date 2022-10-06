it('Manage_doc', function () {

   // create 
    element(by.xpath("//app-menu-item[3]/div/button")).click();//gets online app menu
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//span[contains(.,'Manage documents')]")).click(); //Manage document button click
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//span[contains(.,'Luxembourg')]")).click(); //Market select
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//span[contains(.,' Upload new ')]")).click(); //upload button
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//md-select[contains(.,'Product')]")).click(); //product select
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//div[contains(.,' Life Asset Portfolio - Life Insurance and Capitalisation ')]")).click(); 
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//md-select[contains(.,'Language')]")).click(); //language select
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//md-option[contains(.,'French')]")).click(); 
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//md-select[contains(.,'Competence center ')]")).click(); //CC select
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//div[contains(.,' Swiss Life Luxembourg ')]")).click(); 
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//md-select[contains(.,'Process')]")).click(); //process select
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//md-option[contains(.,'New Policy Application')]")).click(); 
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.xpath("//button[contains(.,'Add file or link')]")).click(); //file upload select
    browser.waitForAngular();
    browser.sleep(1000);

    element(by.model("vm.title")).sendKeys("test 1");

    $('.font-size-fixed-20.padding-right-8.margin-0.md-font.material-icons.icon-link');
    browser.waitForAngular();
    var filepath = 'I:\\test.pdf';
    var filebox=element(by.css('input[type="file"]'));
    filebox.sendKeys(filepath);
    browser.sleep(2000);

    element(by.xpath("//div[2]/div/button[2]/span")).click();
    element(by.xpath("//span[contains(.,'Add documents')]")).click(); 
    expect(browser.getCurrentUrl()).toBe('http://pwc.fakedomain.com/#/related-document/Luxembourg');

    //Search
    
    element(by.model("vm.searchKey")).sendKeys("test 1");
    element(by.xpath("//a[contains(.,'test 1')]")).click();


    //Reupload
    
    element(by.css("[aria-label='Re-upload']")).click();
    element(by.css("[aria-label='Remove Attachment']")).click();
    element(by.xpath("//a[contains(.,'Upload file')]"));
    browser.waitForAngular();
    var filepath = 'I:\\test2.pdf';
    var filebox=element(by.css('input[type="file"]'));
    filebox.sendKeys(filepath);
    browser.sleep(2000);

    element(by.xpath("//span[contains(.,' Re-upload ')]")).click(); 
    
   // Delete

    element(by.css("[aria-label='Delete']")).click();
    element(by.xpath("//span[contains(.,' Delete ')]")).click(); 
    

    //logout
 
  element(by.css(".md-font.material-icons.icon-arrow-drop-down.md-dark-swiss-life-theme")).click(); 
  element(by.xpath("//button[contains(.,' Logout')]")).click(); 
  


     


  });