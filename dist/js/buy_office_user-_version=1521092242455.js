(function($) {

	/* -----------------------------------------------------------------------------
	***
	*** This file is used on every step of the Office 365 orderflow.
	*** 
	-------------------------------------------------------------------------------- */

	function OfficeOrderFlow() {
        this.form = $('#officeOrderForm');
		this.selectCustomerTypeStepOne = $('#customerTypeStepOne');
		this.selectCustomerTypeStepTwo = $('#customerTypeStepTwo');
		this.radioNewCustomer = $('#existingCustomerOff');
		this.radioExistingCustomer = $('#existingCustomerOn');
		this.existingCustomerContainer = $('#existingCustomerContainer');
		this.newCustomerContainer = $('#newCustomerContainer');
		this.containerCustomerName = $('.customerNameContainer');
		this.containerCustomerCompany = $('.customerCompanyContainer');
		this.containerCustomerType = $('.customerTypeContainer');
		this.addOnCheckBoxes = $('#addOnProductSelector');
		this.officeCustomerCountry = $('#customerCountry');
		this.orderStepTwoContainer = $('#Office365-orderflow-step-2-customer');
	}


	/* -----------------------------------------------------------------------------
	***
	*** Init function - Runs at page load
	*** 
	-------------------------------------------------------------------------------- */

	OfficeOrderFlow.prototype.init = function() {
        
        /**
		*** Register events 
		*******************************************************************************/

		this.radioNewCustomer.on('click', $.proxy(this.newCustomer, this));
		this.radioExistingCustomer.on('click', $.proxy(this.existingCustomer, this));
		this.selectCustomerTypeStepOne.on('change', $.proxy(this.checkCustomerType, this));
		this.selectCustomerTypeStepTwo.on('change', $.proxy(this.manageOrderFields, this));
		this.officeCustomerCountry.on('change', $.proxy(this.manageOrderFields, this));

        // Hide error messages when clicking the radio buttons
        this.radioNewCustomer.add(this.radioExistingCustomer).on('click change', $.proxy(this.removeErrors, this));


        /**
		*** Get the inital customer type chosen in the first step
		*** set the customer type select/dropdown to that type
		*******************************************************************************/

        var initialCustomerType = $('#initialCustomerType').val();
		this.selectCustomerTypeStepTwo.val(initialCustomerType);	

		this.newCustomer();

		this.selectCustomerTypeStepOne.change();

		/**
		*** If we are on step two of the order-form, trigger a change on the country
		*** dropdown to initialize the function that manage the fields.
		*******************************************************************************/

		if (this.officeCustomerCountry.length) {
			this.manageOrderFields();
		}


		/**
		*** Remove the loader from the form
		*******************************************************************************/

		this.orderStepTwoContainer.removeClass('is-loading');

	};

    /* -----------------------------------------------------------------------------
	***
	*** Remove errors
	*** 
	-------------------------------------------------------------------------------- */

    OfficeOrderFlow.prototype.removeErrors = function() {
        this.form.find('[data-error-field]').remove();
    };

    /* -----------------------------------------------------------------------------
	***
	*** Checking the customer type in step one. Run some functions depending on the
	*** value.
	*** 
	-------------------------------------------------------------------------------- */

	OfficeOrderFlow.prototype.checkCustomerType = function(e) {
		var select = $(e.target);
		if (select.val() == 'private') {
			this.customerTypePrivate();
		} else {
			this.customerTypeNonPrivate();
		}
	};

	/* -----------------------------------------------------------------------------
	***
	*** Functions to set customerType - only used on step #1.
	*** 
	-------------------------------------------------------------------------------- */
	
	OfficeOrderFlow.prototype.customerTypePrivate = function() {
		this.containerCustomerCompany.hide();
		this.containerCustomerName.removeClass('hide').show();
	};

	OfficeOrderFlow.prototype.customerTypeNonPrivate = function() {
		this.containerCustomerCompany.removeClass('hide').show();
		this.containerCustomerName.hide();
	};


	/* -----------------------------------------------------------------------------
	***
	*** Funtions that trigger when the radio buttons on step #1 is clicked.
	*** 
	-------------------------------------------------------------------------------- */

	OfficeOrderFlow.prototype.newCustomer = function() {
		this.existingCustomerContainer.hide();
		this.newCustomerContainer.show();
	};

	OfficeOrderFlow.prototype.existingCustomer = function() {
		this.existingCustomerContainer.show();
		this.newCustomerContainer.hide();
	};

	/* -----------------------------------------------------------------------------
	***
	*** Function to show/hide fields in the form depending on country and customer-
	*** type. The FieldsForCountries array should be revised at some point.
	*** 
	-------------------------------------------------------------------------------- */

	OfficeOrderFlow.prototype.manageOrderFields = function() {
		
		var countryName = this.officeCustomerCountry.val();
		var chosenCountry = this.officeCustomerCountry.val().replace(/[- )(]/g,''); //regex is used to filter spaces and parentheses from te name.
		var customerType = $('#customerTypeStepTwo').val();

		var FieldsForCountries = {

			Default:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},

			Austria:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Belgium:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Bulgaria:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Cyprus:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			CzechRepublic:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Denmark:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo'],publicsector:['vatNo','govCode']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat','publicsector']},
			Estonia:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Finland:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			France:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Germany:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Greece:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			HrvatskaCroatia:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Hungary:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Iceland:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Ireland:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Italy:{Fields:{private:['stateIt'],organisation_vat:['vatNo','stateIt'],organisation_no_vat:['vatNo','stateIt']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Latvia:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Liechtenstein:{Fields:{private:[],organisation_vat:[],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Lithuania:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Luxembourg:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Malta:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Netherlands:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Norway:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo'],publicsector:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat', 'publicsector']},
			Poland:{Fields:{private:[],organisation_vat:['vatNo','organisationCode','divlocaltaxid','divlocalunitid'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Portugal:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Romania:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			SlovakiaSlovakRepublic:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Slovenia:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Spain:{Fields:{private:['province'],organisation_vat:['vatNo','province'],organisation_no_vat:['vatNo','province']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Sweden:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']},
			Switzerland:{Fields:{private:[],organisation_vat:['vatNo'],organisation_no_vat:['vatNo']},CustomerTypeDropdown:['organisation_no_vat']},
			UnitedKingdom:{Fields:{private:['address2'],organisation_vat:['vatNo','address2'],organisation_no_vat:['vatNo','address2']},CustomerTypeDropdown:['organisation_vat','organisation_no_vat']}

		};

		var fields = { // reference to dom elements in the order form

			vatNo: $('#vatNo'),
			organisationCode: $('#organisationCode'),
			localTaxId: $('#divlocaltaxid'),
			localUnitId: $('#divlocalunitid'),
			govCode: $('#govCode'),
			province: $('#province'),
			stateIt: $('#stateIt'),
			address2: $('#address2')

		};

		/**
		** 1) Check if we have any data to work woth for the selected country
		*******************************************************************************/

		if (!FieldsForCountries[chosenCountry]) {

			chosenCountry = 'Default';

		}

		/**
		** 2) All fields that we work with in this function will start by being hidden
		*******************************************************************************/

		for(var field in fields){

			fields[field].removeClass('EnabledInput');

		}

		/**
		** 3) Now show the fields for the country
		*******************************************************************************/

		var FieldsForCountry = FieldsForCountries[chosenCountry]['Fields'][customerType];

		for(var prop in FieldsForCountry){

			$('#' + FieldsForCountry[prop]).addClass('EnabledInput');

		}

		/**
		** 4) Now select the phone code for the country
		*******************************************************************************/

		var countrycode = getCountryCode(countryName);

		if (countrycode) {

			$('#customerPhoneCode').val(countrycode);
			$('#customerMobileCode').val(countrycode);

		}

		/**
		** 5) Show/Hide dropdown items for customertype 
		** (only for company and association)
		*******************************************************************************/

		if (customerType == ('organisation_vat') || customerType == ('organisation_no_vat') || customerType == ('publicsector')) {

			var options = {
				optionPrivate: $('#private'),
				optionCompany: $('#organisation_vat'),
				optionOrganisation: $('#organisation_no_vat'),
				optionPublic: $('#publicsector'),
				customerBirthDate: $('#customerBirthdate')
			}

			for(var option in options){

				options[option].hide();

			}

			var DropDownOptionsForCountry = FieldsForCountries[chosenCountry]['CustomerTypeDropdown'];

			for(var prop in DropDownOptionsForCountry){

				$('#' + DropDownOptionsForCountry[prop]).show();

			}


			// Change labels on the VAT NO field

			if(customerType == ('organisation_vat')){
				$('#labelCustomerVatNoOptinal').hide();
				$('#labelCustomerVatNo').show();
			}

			if(customerType == ('organisation_no_vat')){
				$('#labelCustomerVatNo').hide();
				$('#labelCustomerVatNoOptinal').show();
			}

			// if the customer type is not available in the selected country, change the customertype dropdown to the first available type.

			if(DropDownOptionsForCountry.indexOf(customerType) == -1){

				this.selectCustomerTypeStepTwo.val(DropDownOptionsForCountry[0]).trigger('change');
			}

		}

		/**
		** 5) And we are done!
		*******************************************************************************/

	};

	$(function() {
		var app = new OfficeOrderFlow();
		app.init();
	});
}(jQuery));