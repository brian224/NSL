(function (window, document, jQuery, undefined) {
	'use strict';

	$(window).load(function(){
		var _CSRFToken = $('#CSRFToken').val();

		totalCount();

		// 生活支出
		$('.livingExpenses').on('click', function(){
			var _data = {
				'annualIncome' : $('.annualIncome1').val(),
				'CSRFToken'    : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/livingExpenses',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.monthlyLivingExpenses);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 家庭维持基金
		$('.familyMaintenanceFund').on('click', function(){
			var _childList = $('.childList').val().split(','),
				_data      = {};

			_data.CSRFToken = _CSRFToken;

			for (var i = 0; i < _childList.length; i++) {
				_data['childList[' + i + '].age'] = _childList[i];
			}

			// {
			// 	childList : [
			// 		{
			// 			age : '10'
			// 		} , {
			// 			age : '12'
			// 		}
			// 	]
			// }

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/familyMaintenanceFund',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.educationExpenses);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 寿险/社保已有
		$('.existingSocialLifeInsurance').on('click', function(){
			var _data = {
				'type'            : $('#type').val(),
				'insuranceSalary' : $('.insuranceSalary').val(),
				'basicPay'        : $('.basicPay').val(),
				'CSRFToken'       : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/existingSocialLifeInsurance',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.socialSecurityAmount);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 寿险南山保单已有
		$('.existingNanshanLifeInsurance').on('click', function(){
			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/existingNanshanLifeInsurance',
				data     : {
					'CSRFToken' : _CSRFToken
				},
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.nanshanLifeInsuranceAmount);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 理财/教育基金需求
		$('.financialEducationFundDemand').on('click', function(){
			var _age     = $('.age').val().split(','),
				_eduType = $('.eduType').val().split(','),
				_data    = {};

			_data.CSRFToken = _CSRFToken;

			for (var i = 0; i < _age.length; i++) {
				_data['childEduList[' + i + '].age'] = _age[i];
			}

			for (var i = 0; i < _eduType.length; i++) {
				_data['childEduList[' + i + '].eduType'] = _eduType[i];
			}

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/financialEducationFundDemand',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.eduExpenses);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 理财/退休金需求
		$('.financialPensionNeeds').on('click', function(){
			var _data = {
				'retirementAge'                        : $('.retirementAge').val(),
				'monthlyLivingExpensesAfterRetirement' : $('.monthlyLivingExpensesAfterRetirement').val(),
				'CSRFToken'                            : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/financialPensionNeeds',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.retirementPension);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 理财/退休金社保已有/一次给付
		$('.existingSocialInsurancePensionFinancialOnePayment').on('click', function(){
			var _data = {
				'monthlyInsuranceSalary' : $('.monthlyInsuranceSalary7').val(),
				'insuredYears'           : $('.insuredYears').val(),
				'CSRFToken'              : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/existingSocialInsurancePensionFinancialOnePayment',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.onePaymentAmount);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 理财/退休金社保已有/劳工退休金
		$('.existingSocialInsurancePensionFinancialLaborPension').on('click', function(){
			var _data = {
				'monthlyInsuranceSalary' : $('.monthlyInsuranceSalary8').val(),
				'ruleType'               : $('.ruleType:checked').val(),
				'CSRFToken'              : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/existingSocialInsurancePensionFinancialLaborPension',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.amount);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 南山現有保險理財額度
		$('.nanshanExistingInsuranceFinancingAmount').on('click', function(){
			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/nanshanExistingInsuranceFinancingAmount',
				data     : {
					'CSRFToken' : _CSRFToken
				},
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.amount);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 住院医疗共同问项
		$('.commonInpatientMedicalItems').on('click', function(){
			var _data = {
				'roomType'          : $('#roomType').val(),
				'selfPayItemOption' : $('#selfPayItemOption').val(),
				'CSRFToken'         : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/commonInpatientMedicalItems',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.amountOfHospitalization + ' , ' + data.outputData.hospitalizationFeesQuota + ' , ' + data.outputData.surgicalCompensationAllowance);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 重大疾病/癌症醫療共同問項
		$('.commonMajorDiseaseCancerCareItems').on('click', function(){
			var _data = {
				'annualIncome'                         : $('.annualIncome11').val(),
				'recuperationIncomeCompensationOption' : $('#recuperationIncomeCompensationOption').val(),
				'CSRFToken'                            : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/commonMajorDiseaseCancerCareItems',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.medicalDemandForMajorDiseases + ' , ' + data.outputData.cancerMedicalDemand);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 長期照顧需求
		$('.longTermCareNeeds').on('click', function(){
			var _data = {
				'longTermCareOption' : $('#longTermCareOption').val(),
				'CSRFToken'          : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/longTermCareNeeds',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.longTermCareAmount);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 意外殘廢需求
		$('.accidentalDisabilityDemand').on('click', function(){
			var _data = {
				'annualIncome'              : $('.annualIncome13').val(),
				'recuperationIncomeSubsidy' : $('#recuperationIncomeSubsidy').val(),
				'CSRFToken'                 : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/accidentalDisabilityDemand',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.accidentalDisabilityDemand);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 南山現有医疗保障額度
		$('.nanshanExistingMedicalInsurantAmount').on('click', function(){
			var _data = {
				'l2Account' : $('#l2Account').val(),
				'CSRFToken' : _CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : '/member/needanalysis/ajax/nanshanExistingMedicalInsurantAmount',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					console.log(data);
					console.log(data.outputData.insurantAmount);
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		});

		// 最終計算
		function totalCount() {
			var _str = '';

			_str = '{"traditionalLiftNeed":"' + $('.traditionalLiftNeed').val() + '","traditionalLiftExist":"' + $('.traditionalLiftExist').val() + '","ilpDream":"' + $('#ilpDream').val() + '","ilpNeed":"' + $('.ilpNeed').val() + '","ilpExist":"' + $('.ilpExist').val() + '","mc1Need":"' + $('.mc1Need').val() + '","mc1Exist":"' + $('.mc1Exist').val() + '","mc2Need":"' + $('.mc2Need').val() + '","mc2Exist":"' + $('.mc2Exist').val() + '","mc3Need":"' + $('.mc3Need').val() + '","mc3Exist":"' + $('.mc3Exist').val() + '","mc4Need":"' + $('.mc4Need').val() + '","mc4Exist":"' + $('.mc4Exist').val() + '","mc5Need":"' + $('.mc5Need').val() + '","mc5Exist":"' + $('.mc5Exist').val() + '","mc6Need":"' + $('.mc6Need').val() + '","mc6Exist":"' + $('.mc6Exist').val() + '","mc7Need":"' + $('.mc7Need').val() + '","mc7Exist":"' + $('.mc7Exist').val() + '","annualIncome":"' + $('.annualIncome15').val() + '","lifeEvent":"' + $('#lifeEvent').val() + '","CSRFToken":"' + _CSRFToken + '"}';

			$('.totalData').val(_str);
		}
	});
}(window, document, $));