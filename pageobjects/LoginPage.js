var GenericNavigationMethods = require('../genericmethods/GenericNavigationMethods.js');
var GenericBrowserActionMethods = require('../genericmethods/GenericBrowserActionMethods.js');
var data = require('../config/Constants.js');	

var LoginPage = function() {
	
	
	var txtUserName = "vm.username";
	var txtPassword = "vm.password";
	var btnLogin = "button[type='submit']";
	var msgLogin = "p[class='ng-scope']";
	
	
	this.navigateToLoginPage = function() {
		
		 GenericNavigationMethods.navigateToUrl(data.constants.loginUrl);
	   
	 }
	  
	
	this.enterUserName = function(userName) {
		
		GenericBrowserActionMethods.input(userName, txtUserName, 'model');
		
	}
	
	this.enterPassword = function(password) {
		
		GenericBrowserActionMethods.input(password, txtPassword, 'model');

	}
	
	this.clickOnLoginButton = function() {
		
		GenericBrowserActionMethods.submit(btnLogin,'css');
	}
	
	this.loginValidationMessage = function() {
		  
		  
		  return GenericBrowserActionMethods.getText(msgLogin,'css');
	  }
	
}

module.exports=new LoginPage;