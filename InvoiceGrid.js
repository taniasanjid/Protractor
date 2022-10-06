describe('invoice', function() {

    it('grid',function(){
        
        var grid = element(by.xpath("//span[contains(.,'Invoicing')]")).click().then(function(grid){
            expect(browser.getCurrentUrl()).toBe('http://www.e-swisslife.com/index.html#/invoice');
            });
            expect(element(by.css('aria-label="Invoicing"')).getText()).toContain('Invoicing');

        element(by.xpath("//span[contains(.,'Upload instructions ')]")).click();

});
});