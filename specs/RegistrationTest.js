var using = require('jasmine-data-provider');
var registrationPage = require('../pageobjects/RegistrationPage.js');
var rd = require('../dataset/registrationdata.js');

describe('Registration Suite', function()  {
	
	using(rd.registrationdata,function(data,description){
	
	it('Registration Test '+description, function() {
	
		registrationPage.navigateToRegistrationPage();
		registrationPage.enterfirstName(data.firstName);
		registrationPage.enterLastName(data.lastName);
		registrationPage.enterUserName(data.userName);
		registrationPage.enterPassword(data.password);
		registrationPage.clickOnRegisterButton();
		expect(registrationPage.registrationValidationMessage())
		.toEqual(data.registrationValidationMessage);
	})
	
	})
	
})