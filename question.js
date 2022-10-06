describe('question', function() {
    it('questionaire', function(){
        var landing= element(by.xpath("//span[contains(.,'Wealth planning')]")).click().then(function(landing){
         expect(browser.getCurrentUrl()).toBe('');
        }); 
      
    
        
        var content = element(by.xpath("//span[contains(.,'Ask a question')]")).click().then(function(content){
         expect(browser.getCurrentUrl()).toBe('');
        });

        element(by.css('[ng-click="vm.askQuestion()"')).click();

        element(by.model("vm.questionDetail.Title")).sendKeys('question');
        element(by.model("vm.selectedAssignee")).click();
        element(by.xpath("//md-option[contains(.,'WTS WTS')]")).click(); 
            
            
        browser.switchTo().frame(element(by.css('#cke_1_contents iframe')).click().sendKeys('flkgjdlfjgklj'));
        browser.executeScript(function () {
         window.CKEDITOR.instances['DocumentDescription'].setData('At Swiss Life we understand that our success depends on our relationships with you - our Partners.');
        });

        $('.padding-left-15.font-size-fixed-16.ng-binding');
        var filepath = 'I:\\test2.pdf';
        var filebox=element(by.css('input[type="file"]'));
        filebox.sendKeys(filepath);
        //element(by.css('[ng-click="selected = 1; step2.disabled = false; step1.completed = true;"]')).click();

        element(by.xpath("//span[contains(.,'Submit')]")).click();

    });

//170: ta.n.iasanjid9@gmail.com
 
});