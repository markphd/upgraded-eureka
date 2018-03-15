(function($) {
	function Buy_User() {
        this.form = $('#customerRegistrantForm');
		this.linkChooseUser = $('#chooseUserOn');
		this.selectCustomerType = $('select[name="customerType"]');
		this.radioNewCustomer = $('#existingCustomerOff');
		this.radioExistingCustomer = $('#existingCustomerOn');
		this.labelEmail = $('.labelEmail');
		this.labelEmailUsername = $('.labelUsername');
		this.containerUser = $('.userContainer');
		this.containerChooseUser = $('.chooseUserContainer');
		this.containerPassword = $('.adminUserPasswordContainer');
		this.forgotPasswordContainer = $('.forgotpassword');
		this.containerCustomerName = $('.customerNameContainer');
		this.containerCustomerCompany = $('.customerCompanyContainer');
		this.containerCustomerType = $('.customerTypeContainer');
		this.forgotPassword = $('');
		this.buttonLogin = $('[name="customerLogin"]');
		this.buttonNext = $('[name="customerUser"]');
		this.addOnCheckBoxes = $('#addOnProductSelector');
		//this.onecomTerms = $('#onecom-terms');

		this.legalEntitiesTicket = $('[name="legalEntitiesTicket"]');
	}


	Buy_User.prototype.init = function() {
        var self = this;
		this.linkChooseUser.on('click change', $.proxy(this.chooseUser, this));
		this.radioNewCustomer.on('click change', $.proxy(this.newCustomer, this));
		this.radioExistingCustomer.on('click change', $.proxy(this.existingCustomer, this));
		this.selectCustomerType.on('change', $.proxy(this.checkCustomerType, this));

        // Hide error messages when clicking the radio buttons
        this.radioNewCustomer.add(this.radioExistingCustomer).on('click change', $.proxy(this.removeErrors, this));

		if(this.legalEntitiesTicket.length) {
			this.user();	
		} else {
			this.chooseUser();

			$(document).ready(function() {
				self.checkRadioValues();
			});
		}
	};

	Buy_User.prototype.checkRadioValues = function() {
		if (this.radioExistingCustomer.is(':checked')) {
			this.existingCustomer();
		} else {
			this.newCustomer();
		}
    };

    Buy_User.prototype.removeErrors = function() {
        this.form.find('[data-error-field]').remove();
    };

	Buy_User.prototype.checkCustomerType = function(e) {
		var select = $(e.target);
		if (select.val() == 'private') {
			this.customerTypePrivate();
		} else {
			this.customerTypeNonPrivate();
		}
	};

	Buy_User.prototype.customerTypePrivate = function() {
		this.containerCustomerCompany.hide();
		this.containerCustomerName.removeClass('hide').show();
	};

	Buy_User.prototype.customerTypeNonPrivate = function() {
		this.containerCustomerCompany.removeClass('hide').show();
		this.containerCustomerName.hide();
	};

	Buy_User.prototype.chooseUser = function(e) {
		if (e) {
			e.preventDefault();
		}
		this.containerChooseUser.show();
		this.containerUser.hide();
		this.existingCustomer();
		this.legalEntitiesTicket.remove();
	};

	Buy_User.prototype.user = function() {
		this.containerUser.removeClass('hide').show();
		this.containerChooseUser.hide();
		this.buttonLogin.hide();
		this.buttonNext.show().prop('disabled', false);
	};

	Buy_User.prototype.newCustomer = function() {
		this.labelEmailUsername.hide();
		this.labelEmail.show();
		this.containerPassword.hide();
		this.buttonLogin.hide();
		this.buttonNext.show().prop('disabled', false);
		this.containerCustomerCompany.show();
		this.containerCustomerName.show();
		this.containerCustomerType.show();
		this.forgotPasswordContainer.hide();
		this.selectCustomerType.trigger('change');
		//this.onecomTerms.show();
	};


	Buy_User.prototype.existingCustomer = function() {
		this.labelEmailUsername.removeClass('hide').show();
		this.labelEmail.hide();
		this.containerPassword.removeClass('hide').show();
		this.buttonLogin.removeClass('hide').show();
		this.buttonNext.hide().prop('disabled', true);
		this.containerCustomerCompany.hide();
		this.containerCustomerName.hide();
		this.containerCustomerType.hide();
		//this.onecomTerms.hide();
		this.forgotPasswordContainer.show();
	};

	$(function() {
		var buyUser = new Buy_User();
		buyUser.init();
	});
}(jQuery));