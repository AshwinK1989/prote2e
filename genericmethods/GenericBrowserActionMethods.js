var GenericBrowserActionMethods = function() {
	
		
}

GenericBrowserActionMethods.input =  function(inputData,locator,locatorType) {
	
	if(locatorType=='css') {
		
	element(by.css(locator)).sendKeys(inputData);
	
	} else if (locatorType=='model') {
		
	 element(by.model(locator)).sendKeys(inputData);

	} else if (locatorType=='id') {
		
		 element(by.id(locator)).sendKeys(inputData);

		} 
}

GenericBrowserActionMethods.submit =  function(locator,locatorType) {
	
	if(locatorType=='css') {
		
	element(by.css(locator)).submit();
	
	} else if (locatorType=='model') {
		
	 element(by.model(locator)).submit();

	}
}

GenericBrowserActionMethods.click =  function(locator,locatorType) {
	
	if(locatorType=='css') {
		
	element(by.css(locator)).click();
	
	} else if (locatorType=='model') {
		
	 element(by.model(locator)).click();

	} else if (locatorType=='xpath') {
		
	 element(by.xpath(locator)).click();

	} else if (locatorType=='name')  {
		
		element(by.name(locator)).click();
		
	} else if (locatorType=='id')  {
		
		element(by.id(locator)).click();
	}
    else if (locatorType=='linkText')  {
		
		element(by.linkText(locator)).click();
	} 
}
	
GenericBrowserActionMethods.getText =  function(locator,locatorType) {
		
		if(locatorType=='css') {
			
		 return element(by.css(locator)).getText();
		
		} else if (locatorType=='model') {
			
		 return element(by.model(locator)).getText();

		} else if (locatorType=='xpath') {
			
			 return element(by.xpath(locator)).getText();

			}  
		
		else if (locatorType=='linkText') {
			
		  element(by.linkText(locator)).getText();

		}
}

module.exports=GenericBrowserActionMethods;