describe('wp', function() {

    it('landing page', function() {
        var landing= element(by.xpath("//span[contains(.,'Wealth planning')]")).click().then(function(landing){
            expect(browser.getCurrentUrl()).toBe('');
        }); 
    });

    it('Content', function() {
       var content = element(by.xpath("//span[contains(.,'Search library')]")).click().then(function(content){
        expect(browser.getCurrentUrl()).toBe('');
       });

       element(by.xpath("//span[contains(.,'Create new')]")).click();
       

       element(by.model("vm.documentDetail.Title")).sendKeys('Content');
       element(by.model("vm.seletedMarket")).click();
       element(by.xpath("//md-option[contains(.,'Finland')]")).click(); 
       element(by.model("vm.documentCategory")).click();
       element(by.xpath("//md-option[contains(.,'Policyholder')]")).click(); 
       var publishDate =  element(by.css(".md-datepicker-input"));
       publishDate.clear();
       publishDate.sendKeys("16-07-2019");

     
        browser.switchTo().frame(element(by.css('#cke_1_contents iframe')).click().sendKeys('flkgjdlfjgklj'));
        browser.executeScript(function () {
         window.CKEDITOR.instances['DocumentDescription'].setData('At Swiss Life we understand that our success depends on our relationships with you - our Partners.');
        });

        var save= element(by.xpath("//span[contains(.,'Save')]")).click().then(function(save){
            expect(browser.getCurrentUrl()).toBe('');
            
        });
        element(by.id("clientSearch")).sendKeys('Content');
        element(by.css('[ng-click="vm.getDocumentBySearch()"')).click();
        element(by.xpath("//a[contains(.,'Content')]")).click();
        element(by.css('[ng-click="vm.editDocument()"')).click();

        element(by.model("vm.documentDetail.Title")).clear();
        element(by.model("vm.documentDetail.Title")).sendKeys('edited');

        element(by.xpath("//span[contains(.,'Publish')]")).click();

        element(by.css('[ng-click="vm.showModal();"')).click();

        var a = element(by.xpath("//span[contains(.,' Delete ')]")).click().then(function(a){
            expect(browser.getCurrentUrl()).toBe(''); 
        });

        element(by.css(".md-font.material-icons.icon-arrow-drop-down.md-dark-swiss-life-theme")).click(); 

        var logout= element(by.xpath("//button[contains(.,' Logout')]")).click().then(function(){
            expect(browser.getCurrentUrl()).toBe('');
        });

        
    });
});