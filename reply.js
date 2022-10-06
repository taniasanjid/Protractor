describe('reply', function() {
    it('reply', function(){
        var landing= element(by.xpath("//span[contains(.,'Wealth planning')]")).click().then(function(landing){
         expect(browser.getCurrentUrl()).toBe('http://www.e-swisslife.com/index.html#/slpc-landing-page');
        }); 
      
    
        
        var content = element(by.xpath("//span[contains(.,'Ask a question')]")).click().then(function(content){
         expect(browser.getCurrentUrl()).toBe('http://www.e-swisslife.com/index.html#/customer-query?Type=All&SearchText=&isEnableQuestionsView=false');
        });

        element(by.css('[ng-click="vm.showQueryDetail(document.ItemId)"')).click();
            
        browser.switchTo().frame(element(by.css('#cke_1_contents iframe')).click().sendKeys('flkgjdlfjgklj'));
        browser.executeScript(function () {
         window.CKEDITOR.instances['DocumentDescription'].setData('At Swiss Life we understand that our success depends on our relationships with you - our Partners.');
        });

        $('.padding-left-15.font-size-fixed-16.ng-binding');
        var filepath = 'I:\\test2.pdf';
        var filebox=element(by.css('input[type="file"]'));
        filebox.sendKeys(filepath);
        

        element(by.xpath("//span[contains(.,'Send reply')]")).click();
        

    });




//170:t.aniasanjid.9@gmail.com 
});