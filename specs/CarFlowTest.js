var dp = require('../pageobjects/DashboardPage.js');
var fp = require('../pageobjects/FindPlanPage.js');
var pp = require('../pageobjects/ProfilePage.js');
var rp = require('../pageobjects/ResultsPage.js');
var cp = require('../pageobjects/CheckoutPage.js');
var GenericBrowserActionMethods = require('../genericmethods/GenericBrowserActionMethods.js');
var using = require('jasmine-data-provider');
var carflowdata = require('../dataset/carflowdata.js');
var DashboardLocators = require('../locators/DashboardLocators.js');
var FindPlanLocators = require('../locators/FindPlanLocators.js');
var CheckoutPageLocators = require('../locators/CheckoutPageLocators.js');
var FindPlanPage = require('../locators/FindPlanLocators.js');
var ProfilePage = require('../locators/ProfilePageLocators.js');
var ResultsPageLocators = require('../locators/ResultsPageLocators.js');


describe("Car Flow Suite", function() {

	using(carflowdata.cardata, function(data, describe) {

		it("Check results page displayed", function() {

			dp.navigateToDashboardPage();
			dp.clickOnCarButton(DashboardLocators.btnCar);
			fp.inputCarNumber(data.regNo,FindPlanLocators.txtRegistrationNumber);
			fp.clickOnFindPlan(FindPlanLocators.btnFindPlan);
			pp.clickOnNextButton(ProfilePage.btnNext);
			pp.clickOnPrevPolicyExpiryDD(ProfilePage.ddPolicyExpiry);
			pp.clickOnPrevPolicyType(ProfilePage.radioPrevPolicyType);
			pp.clickOnPrevPolicyType(ProfilePage.radioPrevPolicyType);
			pp.clickOnPrevClaim(ProfilePage.radioClaimPreviousYear);
			pp.clickOnPrevNCB(ProfilePage.ddNCBPreviousYear);
			pp.clickOnPrevPolicyInsurer(ProfilePage.ddPrevPolicyInsurer);
			pp.clickOnNextButton(ProfilePage.btnNext);
			pp.enterCustomerName(data.customerName+data.customerLastName,ProfilePage.txtCustomerName);
			pp.enterCustomerMobile(data.customerMobile,ProfilePage.txtCustomerMobile);
			pp.enterCustomerEmail(data.customerEmail,ProfilePage.txtCustomerEmail);
			pp.clickOnNextButton(ProfilePage.btnNext);
			rp.clickOnCustomizePolicyPP(ResultsPageLocators.popupCustomizePolicy);
			expect(rp.returnBuy(ResultsPageLocators.btnBuy)).toEqual("Buy");

		}),

		it("Check checkout page displayed",
				function() {

					rp.clickOnBuyButton(ResultsPageLocators.btnBuy);
					expect(cp.getForm1ValMessage(CheckoutPageLocators.valCheckOutPage)).toEqual(
							"Registered Owner Details");

		}),
				
	    it("Check Checkout is Successful",function() {
			     
	    	     cp.clickOnSelectButton(CheckoutPageLocators.btnShowTitle);
	    	     cp.clickOnMrTitle(CheckoutPageLocators.ddMrTitle);
				 cp.enterFirstName(data.customerName,CheckoutPageLocators.txtFirstName);
				 cp.enterLastName(data.customerLastName,CheckoutPageLocators.txtLastName);
				 cp.clickOnProposalTabContinueButton(CheckoutPageLocators.btnProposalTabContinue);
				 cp.enterRegNo1(data.regNo1,CheckoutPageLocators.txtRegNo1);
				 cp.enterRegNo2(data.regNo2,CheckoutPageLocators.txtRegNo2);
				 cp.clickOnPolicyStatusButton(CheckoutPageLocators.btnPolicyStatus);
				 cp.clickOnPolicyStatus(CheckoutPageLocators.ddPolicyStatus);
				 cp.selectFileClaimRadio(CheckoutPageLocators.radioFileClaim);
				 cp.clickOnBasicDetailContinueButton(CheckoutPageLocators.btnBasicDetailContinue);
				 cp.enterAddress1(data.addressLine1,CheckoutPageLocators.txtAddressLine1);
				 cp.enterAddress2(data.addressLine2,CheckoutPageLocators.txtAddressLine2);
                 cp.enterCity(data.city,CheckoutPageLocators.txtCity,CheckoutPageLocators.ddCityMumbai);
				 cp.enterPincode(data.pincode,CheckoutPageLocators.txtPinCode);			 
                 cp.enterPolicyNumber(data.policyNumber,CheckoutPageLocators.txtPolicyNumber);
				 cp.clickOnPolicyDetailsContinue(CheckoutPageLocators.btnPolicyRegDetailsContinue);
				 cp.selectPDMaritalStatus(CheckoutPageLocators.radioMaritalStatus);
				 cp.enterPDBirthDate(data.birthDate,CheckoutPageLocators.txtBirthDate);
				 cp.enterPDBirthMonth(data.birthMonth,CheckoutPageLocators.txtBirthMonth);
				 cp.enterPDBirthYear(data.birthYear,CheckoutPageLocators.txtBirthYear);
                 cp.selectPDGender(CheckoutPageLocators.radioGender);
                 cp.enterPDNomineeName(data.customerName,CheckoutPageLocators.txtNomineeName);
                 cp.clickOnPDContinueButton(CheckoutPageLocators.btnPersonalDetailsContinue);
                 cp.selectPaymentMode(CheckoutPageLocators.radioPaymentMode);
                 cp.clickOnPaymentProceed(CheckoutPageLocators.btnProceedWithPayment);

   				 expect(cp.getCheckoutSuccessfulText(CheckoutPageLocators.valCheckoutSuccessful)).toEqual("Checkout Details Verified");
				 
			   })		

	})

})
