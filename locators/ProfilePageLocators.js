var ProfilePageLocators = {

	btnNext : "container-next-btn",
	ddPolicyExpiry : "//span[text()='Expiring in few days']",
	radioPrevPolicyType : "span[class='outer']",
	radioClaimPreviousYear : "(//span[@class='outer'])[3]",
	ddNCBPreviousYear : "div[class*='ui-select-choices-row']:nth-child(4)",
	ddPrevPolicyInsurer : "div[class*='ui-select-choices-row']:nth-child(20)",
	txtCustomerName : "input[id='customerName']",
	txtCustomerMobile : "input[id='paidUserMobile']",
	txtCustomerEmail : "input[id='paidUserEmail']"

}

module.exports = ProfilePageLocators;