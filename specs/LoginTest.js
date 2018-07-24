var using = require('jasmine-data-provider');
var loginPage = require('../pageobjects/LoginPage.js');
var rd = require('../dataset/registrationdata.js');

describe('Login Suite', function()  {
	
	using(rd.registrationdata,function(data,description){
	
	it('Login Test '+description, function() {

		loginPage.navigateToLoginPage();
		loginPage.enterUserName(data.userName);
		loginPage.enterPassword(data.password);
		loginPage.clickOnLoginButton();
		expect(loginPage.loginValidationMessage())
		.toEqual(data.loginValidationMessage);
	})
	
	})
	
})