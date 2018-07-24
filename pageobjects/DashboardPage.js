var GenericBrowserActionMethods = require('../genericmethods/GenericBrowserActionMethods.js');
var GenericNavigationMethods = require('../genericmethods/GenericNavigationMethods.js');
var data = require('../config/Constants.js');
var DashboardPage = function() {
	
	
//var btnCar = "(//a[@analytics-event='Car-category-select_Home-top'])[3]";
	
	this.navigateToDashboardPage = function() {
		
		 GenericNavigationMethods.navigateToUrl(data.constants.turtlemintUrl);
	   
	 }
		
	this.clickOnCarButton = function(btnCar) {
		
		GenericBrowserActionMethods.click(btnCar,'xpath');
	}
	
    
}

module.exports = new DashboardPage();