var data = require('../config/Constants.js');	

var GenericNavigationMethods = require('../genericmethods/GenericNavigationMethods.js');
var GenericBrowserActionMethods = require('../genericmethods/GenericBrowserActionMethods.js');


var RegistrationPage = function() {
	
	var txtFirstName = "vm.user.firstName";
	var txtLastName = "vm.user.lastName";
	var txtUserName = "vm.user.username";
	var txtPassword = "vm.user.password";
	var btnSubmit = "button[type='submit']";
	var msgRegistration ="div[class*='alert-success']";
	
	 this.navigateToRegistrationPage = function() {
			
		 GenericNavigationMethods.navigateToUrl(data.constants.url);
	   
	 }
	  
	  this.enterfirstName =function(firstName) {
		  
		  GenericBrowserActionMethods.input(firstName,txtFirstName,'model');
	  }
		
	  this.enterLastName =function(lastName) {
		  
		  GenericBrowserActionMethods.input(lastName,txtLastName,'model');

	  }
	  
	  this.enterUserName=function(userName) {
		  
		  GenericBrowserActionMethods.input(userName,txtUserName,'model');

	  }
	  
	  this.enterPassword=function(password) {
		  
		  GenericBrowserActionMethods.input(password,txtPassword,'model');

	  }
	
	  this.clickOnRegisterButton =function() {
		  
		  GenericBrowserActionMethods.submit(btnSubmit,'css');
	  }
	  
	  this.registrationValidationMessage = function() {
		  
		  
		  return GenericBrowserActionMethods.getText(msgRegistration,'css');
	  }
	  }

module.exports = new RegistrationPage();