var GenericBrowserActionMethods = require('../genericmethods/GenericBrowserActionMethods.js');

var FindPlanPage = function() {
	
	

    this.inputCarNumber = function(regNo,txtRegistrationNumber) {
		
		GenericBrowserActionMethods.input(regNo,txtRegistrationNumber,'model');
	}
    
    this.clickOnFindPlan = function(btnFindPlan)  {
    	
    	
    	GenericBrowserActionMethods.click(btnFindPlan,'name');
    }
	
}

module.exports = new FindPlanPage();