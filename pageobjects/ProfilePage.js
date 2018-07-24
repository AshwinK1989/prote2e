var GenericBrowserActionMethods = require('../genericmethods/GenericBrowserActionMethods.js');

var ProfilePage = function()  {
	


this.clickOnNextButton = function (btnNext) {
		
	GenericBrowserActionMethods.click(btnNext,'id');	
		
}
	
this.clickOnPrevPolicyExpiryDD = function (ddPolicyExpiry) {

	GenericBrowserActionMethods.click(ddPolicyExpiry,'xpath');	

		
}
	
this.clickOnPrevPolicyType = function (radioPrevPolicyType) {
	
	GenericBrowserActionMethods.click(radioPrevPolicyType,'css');
		
}

this.clickOnPrevClaim = function (radioClaimPreviousYear) {
	
	GenericBrowserActionMethods.click(radioClaimPreviousYear,'xpath');
		
}

this.clickOnPrevNCB = function (ddNCBPreviousYear) {
	
	GenericBrowserActionMethods.click(ddNCBPreviousYear,'css');
		
}

this.clickOnPrevPolicyInsurer =  function(ddPrevPolicyInsurer) {
	
	GenericBrowserActionMethods.click(ddPrevPolicyInsurer,'css');

	
}

this.enterCustomerName =  function(name,txtCustomerName) {
	
	GenericBrowserActionMethods.input(name, txtCustomerName, 'css');
	
}

this.enterCustomerMobile =  function(mobile,txtCustomerMobile) {
	
	GenericBrowserActionMethods.input(mobile, txtCustomerMobile, 'css');
	
}

this.enterCustomerEmail =  function(email,txtCustomerEmail) {
	
	GenericBrowserActionMethods.input(email, txtCustomerEmail, 'css');
	
}

}

module.exports= new ProfilePage();