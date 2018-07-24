 CheckoutPageLocators = {
		
		 valCheckOutPage : "div[id='form-1'] span",
		 btnShowTitle : "button[ng-click*='showtitles']",
		 ddMrTitle : "//a[text()='Mr']",
		 txtFirstName :"personal.firstname",
		 txtLastName : "personal.lastname",
		 btnProposalTabContinue : "button[ng-click*='proposalTab']",
	     txtRegNo1 : "reg3",
	     txtRegNo2 : "reg4",
		 btnBasicDetailContinue : "button[ng-click*='validateBasicDetailTab']",
		 btnPolicyStatus : "expireid",
		 ddPolicyStatus : "a[ng-click='setPolType(1)']",
		 radioFileClaim : "(//span[@class='outer'])[1]",
	     txtAddressLine1 : "manualForm.addressStatus.address1",
	     txtAddressLine2 : "manualForm.addressStatus.address2",
	     txtCity : "input[ng-model='manualForm.cityStatus.searchKey']:nth-child(2)",
	     ddCityMumbai : "//a[text()='Mumbai']",
	     txtPinCode : "manualForm.pinCodeStatus.pincode",
	     txtPolicyNumber : "manualForm.expiringPolicyNoStatus.policyNo",
	     btnPolicyRegDetailsContinue : "button[ng-click*='validatePolicyRegistrationDetail']",
	     radioMaritalStatus : "(//span[@class='outer'])[7]",
	     txtBirthDate : "birDay",
	     txtBirthMonth : "birMon",
	     txtBirthYear : "birYear",
	     radioGender : "(//span[@class='outer'])[9]",
		 txtNomineeName : "proposalDetail.nomineeNameStatus.nomineeName",	
		 btnPersonalDetailsContinue : "button[ng-click*='validateProposerPersonalDetail']",
		 radioPaymentMode: "(//span[@class='outer'])[11]",
		 btnProceedWithPayment : "button[ng-click*='setPayMode']",
		 valCheckoutSuccessful : "div[class*='accepted-proposal']"
		
}

module.exports = CheckoutPageLocators;