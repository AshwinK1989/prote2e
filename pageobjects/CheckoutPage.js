var GenericBrowserActionMethods = require('../genericmethods/GenericBrowserActionMethods.js')

var CheckoutPage = function () {
	
	
	
	this.getForm1ValMessage = function (valCheckOutPage) {
		
	  return GenericBrowserActionMethods.getText(valCheckOutPage, 'css');

	}
	
	this.clickOnSelectButton = function (btnShowTitle) {
		
		  return GenericBrowserActionMethods.click(btnShowTitle, 'css');

	}
	
	this.clickOnMrTitle = function (ddMrTitle) {
		
		  return GenericBrowserActionMethods.click(ddMrTitle, 'xpath');

	}
	
	this.enterFirstName = function (firstName,txtFirstName) {
		
		  return GenericBrowserActionMethods.input(firstName, txtFirstName, 'model')

	}
	
	this.enterLastName = function (lastName,txtLastName) {
		
		  return GenericBrowserActionMethods.input(lastName, txtLastName, 'model')

	}
	
	this.clickOnProposalTabContinueButton = function (btnProposalTabContinue) {
		
		  return GenericBrowserActionMethods.click(btnProposalTabContinue, 'css');

	}
	
	this.enterRegNo1 = function (regno1,txtRegNo1) {
		
		  return GenericBrowserActionMethods.input(regno1, txtRegNo1, 'id')

	}
	
	this.enterRegNo2 = function (regno2,txtRegNo2) {
		
		  return GenericBrowserActionMethods.input(regno2, txtRegNo2, 'id')

	}
	
	this.clickOnBasicDetailContinueButton = function (btnBasicDetailContinue) {
		
		  return GenericBrowserActionMethods.click(btnBasicDetailContinue, 'css');

	}
	
	this.clickOnPolicyStatusButton = function (btnPolicyStatus) {
		
		GenericBrowserActionMethods.click(btnPolicyStatus,'id');
	}
	
   this.clickOnPolicyStatus = function (ddPolicyStatus) {
		
		GenericBrowserActionMethods.click(ddPolicyStatus,'css');
	}
   
   this.selectFileClaimRadio = function (radioFileClaim) {
		
		GenericBrowserActionMethods.click(radioFileClaim,'xpath');
	}
   
   this.enterAddress1 = function (addressLine1,txtAddressLine1)  {
	   
	   GenericBrowserActionMethods.input(addressLine1, txtAddressLine1, 'model');

   }
   
   this.enterAddress2 = function (addressLine2,txtAddressLine2)  {
	   
	   GenericBrowserActionMethods.input(addressLine2, txtAddressLine2, 'model');

   }

   this.enterCity = function (city,txtCity,ddCityMumbai)  {
	   GenericBrowserActionMethods.input(city, txtCity, 'css');
	   GenericBrowserActionMethods.click(ddCityMumbai, 'xpath');
   }
   
   this.enterPincode = function (pincode,txtPinCode)  {
	   
	   GenericBrowserActionMethods.input(pincode, txtPinCode, 'model');

   }
   
   this.enterPolicyNumber = function (policyNumber,txtPolicyNumber)  {
	   
	   GenericBrowserActionMethods.input(policyNumber, txtPolicyNumber, 'model');

   }
   
   this.clickOnPolicyDetailsContinue = function (policyNumber,txtPolicyNumber)  {
	   
	   GenericBrowserActionMethods.click(btnPolicyRegDetailsContinue, 'css');

   }
   
   this.selectPDMaritalStatus = function (radioMaritalStatus) {
	   
	   GenericBrowserActionMethods.click(radioMaritalStatus, 'xpath');

   }
   
  this.enterPDBirthDate = function (birthDate,txtBirthDate) {
	   
	   GenericBrowserActionMethods.input(birthDate, txtBirthDate, 'id');

   }
  
  this.enterPDBirthMonth = function (birthMonth,txtBirthMonth) {
	   
	   GenericBrowserActionMethods.input(birthMonth,txtBirthMonth, 'id');

  }
  
  this.enterPDBirthYear = function (birthYear,txtBirthYear) {
	   
	   GenericBrowserActionMethods.input(birthYear, txtBirthYear, 'id');

 }
  
  this.selectPDGender = function (radioGender) {
	   
	   GenericBrowserActionMethods.click(radioGender, 'xpath');

 }
  
   this.enterPDNomineeName = function (nomineeName,txtNomineeName) {
	   
	   GenericBrowserActionMethods.input(nomineeName, txtNomineeName, 'model');

  }
   
  this.clickOnPDContinueButton = function (btnPersonalDetailsContinue) {
	   
	   GenericBrowserActionMethods.click(btnPersonalDetailsContinue,'css');

  }
  
  this.selectPaymentMode = function (radioPaymentMode) {
	   
	   GenericBrowserActionMethods.click(radioPaymentMode, 'xpath');

 }
   
  this.clickOnPaymentProceed = function (btnProceedWithPayment) {
	   
	   GenericBrowserActionMethods.click(btnProceedWithPayment, 'xpath');

}
  
   this.getCheckoutSuccessfulText = function (valCheckoutSuccessful) {
	   
	   return GenericBrowserActionMethods.getText(valCheckoutSuccessful, 'css');
   }
}

module.exports = new CheckoutPage();