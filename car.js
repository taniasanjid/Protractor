describe('car', function() {

    it('workflow', function () {

        //for EU and CAR
        expect(browser.getCurrentUrl()).toBe('http://pwc.fakedomain.com/index.html#/');
        element(by.xpath("//span[contains(.,'Online application')]")).click();//gets online app menu
        browser.waitForAngular();
        browser.sleep(1000);
    
        element(by.xpath("//span[contains(.,' Start new  ')]")).click(); //Start new button click
        browser.waitForAngular();
        browser.sleep(1000);
    
        element(by.css("[aria-label='Yes']")).click();
    
        element(by.xpath("//span[contains(.,'  Next ')]")).click();
    
        element(by.xpath("//span[contains(.,'Luxembourg')]")).click();
    
        element(by.xpath("//span[contains(.,'  Next ')]")).click();
    
        element(by.css('[ng-click="vm.startWorkflow(workflow)"]')).click();


    });

it('Identification of the client', function () {

    element(by.css("[aria-label='Legal Entity']")).click();
    element(by.model("vm.formData.NameOfTheDeclarant")).sendKeys('Tania');
    element(by.xpath("//span[contains(.,'First name not applicable')]")).click();
    element(by.model("vm.formData.StreetNameAndNumberOfResidenceOfTheDeclarant")).sendKeys('Tania');
    element(by.model("vm.formData.PostcodeAndTownOrCityOfTheDeclarant")).sendKeys('Tania');
    element(by.model("vm.formData.CountryResidenceOfTheDeclarant")).click();
    element(by.xpath("//md-option[contains(.,'Other')]")).click(); 
    element(by.model("vm.formData.OtherCountryResidenceOfTheDeclarant")).click();
    element(by.xpath("//div[contains(.,' American Samoa ')]")).click(); 
    var startDate =  element(by.css(".md-datepicker-input"));
  startDate.clear();
  startDate.sendKeys("05-08-2019");
  element(by.css("[aria-label='Mr']")).click();
  element(by.model("vm.formData.NameOfTheDecisonTaker")).sendKeys('Tania');
    element(by.model("vm.formData.FirstNameOfTheDecisionTaker")).sendKeys('tania');
    element(by.model("StreetNameAndNumberOfResidenceOfTheDecisionTaker")).sendKeys('Tania');
    element(by.model("vm.formData.PostcodeAndTownOrCityDecisionTaker")).sendKeys('Tania');
    element(by.model("vm.formData.CountryResidenceOfTheDecisionTaker")).click();
    element(by.xpath("//md-option[contains(.,'Other')]")).click(); 
    element(by.model("vm.formData.OtherCountryResidenceOfTheDecisionTaker")).click();
    element(by.xpath("//div[contains(.,' American Samoa ')]")).click(); 
    var startDate =  element(by.css(".md-datepicker-input"));
  startDate.clear();
  startDate.sendKeys("05-07-2019");

  element(by.xpath("//span[contains(.,'Next')]")).click();
    
});

it('Client categorisation', function ()
    {
        expect(element(by.css('h4.font-size-fixed-18.margin-top-0.ng-scope')).getText()).toContain('The aim of this section is the categorisation of the client. According to the information provided by the client he belongs to one of the following categories: ');
        

    });
});