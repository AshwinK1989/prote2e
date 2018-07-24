var GenericBrowserActionMethods = require('../genericmethods/GenericBrowserActionMethods.js');

var ResultsPage = function() {
	
	
	
	this.clickOnCustomizePolicyPP = function (popupCustomizePolicy) {
		
		GenericBrowserActionMethods.click(popupCustomizePolicy,'linkText');	
	}
	
    this.returnBuy = function (btnBuy) {
		
		return GenericBrowserActionMethods.getText(btnBuy, 'xpath');
	}
    
    this.clickOnBuyButton = function (btnBuy) {
		
		 GenericBrowserActionMethods.click(btnBuy, 'xpath');
	}
	
}

module.exports=new ResultsPage();