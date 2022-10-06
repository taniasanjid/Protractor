it('create_event', function () {

  element(by.xpath("//span[contains(.,'Knowledge hub')]")).click();
  element(by.xpath("//span[contains(.,'Events')]")).click();
  browser.waitForAngular();
  browser.sleep(5000);
  element(by.css('[ng-click="vm.goToNewEvent()"]')).click();
  element(by.model("vm.form.Title")).sendKeys('test automation');
  var startDate =  element(by.css(".md-datepicker-input"));
  startDate.clear();
  startDate.sendKeys("05-08-2019");
  var endDate =  element(by.xpath("//div[2]/div/md-datepicker/div/input"));
  endDate.clear();
  endDate.sendKeys("05-09-2019");  
  element(by.xpath("//md-select[contains(.,'Relevant markets')]")).click();
  element(by.xpath("//div[4]/md-select-menu/md-content/md-option")).click();
  element(by.xpath("//md-backdrop")).click();
  element(by.model("vm.form.ExternalUrl")).sendKeys("https://www.google.com");
  element(by.model("vm.form.Location")).sendKeys("dhaka");
  browser.switchTo().frame(element(by.css('#cke_1_contents iframe')).click().sendKeys('flkgjdlfjgklj'));
  browser.executeScript(function () {
  window.CKEDITOR.instances['NewsDescription'].setData('At Swiss Life we understand that our success depends on our relationships with you - our Partners.');
  });
  browser.waitForAngular();
  browser.sleep(5000);
  $('.padding-left-15.font-size-fixed-16.ng-binding');
  browser.waitForAngular();
  var filepath = 'I:\\test.jpg';
  var filebox=element(by.css('input[type="file"]'));
  filebox.sendKeys(filepath);
  element(by.css('[ng-click="selected = 1; step2.disabled = false; step1.completed = true;"]')).click();

 browser.waitForAngular();
  browser.sleep(5000);
  /*
//doc
  element(by.css('[ng-click="vm.showAddDocumentsModal($event)"]')).click();
  element(by.model("vm.title")).sendKeys("document");
  element(by.xpath("//a[contains(.,'Upload file')]"));
  browser.waitForAngular();
  var filepath = 'I:\\test2.pdf';
  var filebox=element(by.css('input[type="file"]'));
  filebox.sendKeys(filepath);
  browser.sleep(2000);
  element(by.xpath("//span[contains(.,' Upload ')]")).click();

//photo
  element(by.css('[ng-click="vm.showAddPhotosModal($event)"]')).click();
  element(by.model("vm.photoTitle")).sendKeys("photo");
  element(by.xpath("//span[contains(.,'Choose your file')]")).click();
  browser.waitForAngular();
  var filepath = 'I:\\pic.jpg';
  var filebox=element(by.css('input[type="file"]'));
  filebox.sendKeys(filepath);
  browser.sleep(2000);
  element(by.xpath("//span[contains(.,' Add ')]")).click();

  //video
  element(by.css('[ng-click="vm.showAddVideoModal($event)"]')).click();
  element(by.model("vm.videoTitle")).sendKeys("video");
  element(by.model("vm.videoUrl")).sendKeys("https://www.youtube.com/watch?v=z-DBzW2xlB0");
  element(by.xpath("//span[contains(.,'Choose your file')]")).click();
  browser.waitForAngular();
  var filepath = 'I:\\pic.jpg';
  var filebox=element(by.css('input[type="file"]'));
  filebox.sendKeys(filepath);
  browser.sleep(2000);
  element(by.xpath("//span[contains(.,' Add ')]")).click();
*/

  element(by.xpath("//span[contains(.,' Create event ')]")).click(); 
  

   //share in markets
   element(by.xpath("//span[contains(.,'Share')]")).click(); 

   //Edit
   element(by.xpath("//span[contains(.,'Edit')]")).click();
   element(by.model("vm.form.Title")).clear();
   element(by.model("vm.form.Title")).sendKeys('edited');
   element(by.xpath("//span[contains(.,'Next')]")).click();
   element(by.css("[aria-label='Save']")).click();
   browser.waitForAngular();
   browser.sleep(5000);
 
   //share in markets
   element(by.xpath("//span[contains(.,'Share')]")).click(); 
 
 
   //share via email
   element(by.xpath("//span[contains(.,'Share via email')]")).click(); 
   element(by.model("vm.formData.ShareEmailComments")).sendKeys("comment");
   element(by.model("vm.formData.SharedPersonEmailAddress")).sendKeys("taniasanjid9@gmail.com");
   element(by.xpath("//span[contains(.,'Send')]")).click();
  // delete

  element(by.xpath("//span[contains(.,'Delete')]")).click();
  element(by.css('[ng-click="vm.deleteContent()"]')).click();
   
   //logout
 
  element(by.css(".md-font.material-icons.icon-arrow-drop-down.md-dark-swiss-life-theme")).click(); 
  element(by.xpath("//button[contains(.,' Logout')]")).click(); 
  browser.waitForAngular();
   browser.sleep(5000);
  


  
});
 