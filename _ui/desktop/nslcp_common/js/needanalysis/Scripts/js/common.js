(function (window, document, jQuery, undefined) {
	'use strict';

	var common = new index();

	function index() {
		this._CSRFToken            = '';
		this._imageWrap            = '.image-wrap';
		this._start                = '.jq-start';
		this._required             = '.jq-required';
		this._checkbox             = '.jq-checkbox';
		this._btnTopic             = '.jq-topic';
		this._transition           = '.jq-transition';
		this._lightbox             = '.jq-lightbox';
		this._close                = '.jq-close';
		this._dream                = '.jq-dream';
		this._insName              = '.jq-ins-name';
		this._search               = '.jq-search';
		this._result               = '.jq-result';
		this._length               = '.jq-length';
		this._lContent             = '.l-content';
		this._lLightbox            = '.l-lightbox';
		this._stepList             = '.step-list';
		this._checkNum             = /\D+/g;
		this._prevAge              = 0; // 預設年紀
		this._ageRange             = [30, 50, 70]; // 年紀區間
		this._steps                = [7, 17, 23, 25]; // 五階段的題目區隔
		this._prevIncome           = 0; // 預設收入
		this._IncomeAct            = [0, 0]; // 紀錄收入變化
		this._IncomeRange          = [0, 10, 40, 80, 130, 200]; // 收入區間
		this._prevLiability        = 0; // 預設負債
		this._LiabilityAct         = ''; // 紀錄負債變化
		this._LiabilityRange       = ''; // 負債區間
		this._eduCost              = 0; // 子女教育費
		this._fundSelection        = 0; // 基金三選一
		this._AniCache             = 0; // 一桶金拉霸暫存
		this._ExpensesAfterRetire  = 0; // 退休後每月支出
		this._childArray           = []; // 每個小孩的年齡
		this._lifeEvent            = [], // 記錄人生階段
		this._prepare              = 0; // 壽險已有(已準備)
		this._AnnualIncome         = 0; // 年收入
		this._traditionalLiftNeed  = 0; // 壽險需求
		this._socialSecurityAmount = 0; // 寿险/社保
		this._traditionalLiftExist = 0; // 寿险南山
		this._eduExpenses          = 0; // 理财/教育基金需求
		this._retirementPension    = 0; // 理财/退休金需求
		this._nanExistIns          = 0; // 南山現有保險理財額度
		this._ilpExist             = 0; // 理财已有
		this._nanshanInsArray      = ['_hospitalizationDay','_sundry','_surgery','_cancer','_majorDisease','_accident','_longTermCare'];
		this._hospitalizationDay   = 0; // 住院額度
		this._hospitalDayNeeds     = 0; // 住院額度需求
		this._sundry               = 0; // 杂费
		this._sundryNeeds          = 0; // 杂费需求
		this._surgery              = 0; // 手术
		this._surgeryNeeds         = 0; // 手术需求
		this._cancer               = 0; // 癌症
		this._cancerNeeds          = 0; // 癌症需求
		this._majorDisease         = 0; // 重大疾病
		this._majorDiseaseNeeds    = 0; // 重大疾病需求
		this._accident             = 0; // 意外
		this._accidentNeeds        = 0; // 意外殘廢需求
		this._longTermCare         = 0; // 长看
		this._longTermCareNeeds    = 0; // 长看需求
		this._hasChild             = false;
		this._date                 = new Date();
	}

	// 沒作答就往下一題
	index.prototype.shake = function(className) {
		$(className).addClass('btn-shake');

		$(className).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
			$(this).removeClass('btn-shake');
		});
	}

	// Q4 點擊 "沒有小孩"
	index.prototype.checkKid = function(className) {
		if (!$(className).hasClass('is-checked')) {
			if ($('.dog').siblings().find('.is-show').length === 0) {
				if (projects.browsers() === 'IE 11' || projects.browsers() === 'MSIE 10') {
					$('.dog .doll').removeClass('doll').delay(0).queue(function(){
						$(this).attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
						$('.dog .doll').dequeue();
					});
				} else {
					$('.dog .doll').attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
				}
			} else {
				$('input[data-age]').each(function(){
					$(this).data('ionRangeSlider').reset();
				});

				$('.dog').siblings().find('.is-show').addClass('ani-reverse');
				$('.ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
					$(this).removeClass('ani-reverse is-show');

					if ($('.ani-reverse.is-show').length === 0) {
						if (projects.browsers() === 'IE 11' || projects.browsers() === 'MSIE 10') {
							$('.dog .doll').removeClass('doll').delay(0).queue(function(){
								$(this).attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
								$('.dog .doll').dequeue();
							});
						} else {
							$('.dog .doll').attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
						}
					}
				});
			}
			$(className).toggleClass('is-checked');
		}
	}

	// 跑區間動畫
	index.prototype.mixAnimate = function(className, start, end, range) {
		var _direction;

		// 決定方向
		if (start < end) {
			_direction = 1;
		} else {
			_direction = -1;
		}

		// 防止超出最大值
		if (end > range.length) {
			end = range.length - 1;
		}

		if (range[start] !== undefined && range[start + _direction] !== undefined) {
			// 一桶金需要額外判斷
			if (className.split('.cut-22')[1] !== undefined){
				$('.cut-22').addClass('disabled');
				$(className).attr('data-level', range[start] + '-t-' + range[start + _direction]);

				// 隱藏不必要閃爍
				if (($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'buycar' || $('.cut-22 ' + common._imageWrap).attr('data-meta') === 'buyhouse') && className === '.cut-22 ' + common._imageWrap) {
					$(className + ' .color').hide();
				}
			} else {
				$(className).addClass('disabled').attr('data-level', range[start] + '-t-' + range[start + _direction]);
			}

			setTimeout(function(){
				if (start + _direction !== end) {
					start += _direction;

					if (range[start] !== undefined && range[start + _direction] !== undefined) {
						$(className).attr('data-level', range[start] + '-t-' + range[start + _direction]);

						common.mixAnimate(className, start, end, range);
					}
				} else {
					if (className === '.cut-19 ' + common._imageWrap + ' .doll') {
						$(className).attr('data-level', $(className).attr('data-level').split('-t-')[1]).removeClass('disabled').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
					} else if (className.split('.cut-22')[1] !== undefined) {
						// 一桶金需要額外判斷
						$('.cut-22').removeClass('disabled');
						$(className).off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');

						if (($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'buycar' || $('.cut-22 ' + common._imageWrap).attr('data-meta') === 'buyhouse') && className === '.cut-22 ' + common._imageWrap) {
							if (end === 0) {
								$('.cut-22 ' + common._imageWrap).attr('data-level', '');
								$('.cut-22 ' + common._imageWrap + ' .doll').attr('data-level', '');
							} else {
								$('.cut-22 ' + common._imageWrap + ' .doll').attr('data-level', end);
							}
							$(className + ' .color').show();
						} else if ($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'buyhouse' && className === '.cut-22 ' + common._imageWrap + ' .color' && end === 0) {
							$('.cut-22 ' + common._imageWrap + ' .color').attr('data-level', '');
						}
					} else {
						$(className).removeClass('disabled').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
					}
				}
			}, (parseFloat($(className).css('animation-duration'), 10) + parseFloat($(className).css('animation-delay'), 10)) * 1000);
		}
	}

	// 計算千分位
	index.prototype.setPercentile = function(num) {
		num = num.toString().replace(/\$|\,/g, '');
		if (isNaN(num)) num = '0';
		var sign = (num == (num = Math.abs(num)));
		num = Math.floor(num * 100 + 0.50000000001);
		var cents = num % 100;
		num = Math.floor(num / 100).toString();
		if (cents < 10) cents = '0' + cents;
		for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
		num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
		return (((sign) ? '' : '-') + num);
	}

	// 開啟 lightbox
	index.prototype.openBox = function() {
		var _which = '';

		if ($('.l-main').hasClass('is-index')) {
			_which = '.is-notify';
		} else if ($('.l-main').hasClass('is-quest')) {
			_which = '.is-insurance';

			$(common._lLightbox).find('.inputbox').val('').end().find('.selection').each(function(){
				$(this).find('option').eq(0).prop('selected', 'selected');
			});

			$('.datepicker').DatePicker();
		}

		$(common._lLightbox).addClass('is-show animation-op').find(_which).addClass('is-show');
	}

	// 關閉 lightbox
	index.prototype.closeBox = function(confirm) {
		$(common._lLightbox).removeClass('animation-op').on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$(this).removeClass('is-show').off('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend');
		});
	}

	// 點擊目標區域以外的地方可關閉目標區域
	index.prototype.offClick = function(_target) {
		projects.$d.off('click').on('click' , function(e){
			if (_target === common._lLightbox && $(common._lLightbox).hasClass('is-show animation-op')) {
				// 這是 lightbox
				e.stopPropagation();

				if (!$(e.target).is('.m-box, .m-box *, ' + common._lightbox + ', ' + common._lightbox + ' *, .sugarfun-datepicker, .sugarfun-datepicker *')) {
					common.closeBox();
				}
			} else if (_target === common._result) {
				// 這是 搜尋類似項目
				e.stopPropagation();

				if (!$(e.target).is(common._search + ', ' + _target + ', ' + _target + ' *')) {
					$(_target).removeClass('is-show');
				}
			}
		});
	}

	// 檢查裝備的最終驗證
	index.prototype.finalCheck = function(_num, _meta, _emptyLength) {
		var _type = $('.cut-' + _num + ' .respond-wrap').attr('data-meta');

		if (_type === 'labor') {
			if ($('.cut-' + _num + ' .respond-wrap .selection option:selected').val() === '') {
				_emptyLength += 1;
				common.shake('.cut-' + _num + ' .respond-wrap .selectbox');
			}

			if (_meta === undefined) {
				_emptyLength += 1;
				common.shake('.jq-check-wrap');
			}
		}

		$('.' + _type + ' input').each(function(){
			if ($(this).val() === '') {
				_emptyLength += 1;
				common.shake($(this).parent());
			}
		});

		return _emptyLength;
	}

	// datepicker 寫入限制時間
	index.prototype.setDate = function() {
		$('.datepicker').attr('data-max-date', common._date.getFullYear() + '/' + (common._date.getMonth() + 1) + '/' + common._date.getDate());
	}

	// ========================== API function start ==============================

	// 生活支出
	index.prototype.livingExpenses = function() {
		// 更新年收入
		common._AnnualIncome = parseInt($('.cut-6 .irs-single').text(), 10);

		var _data = {
			'annualIncome' : common._AnnualIncome,
			'CSRFToken'    : common._CSRFToken
		};

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/livingExpenses',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._ExpensesAfterRetire = data.outputData.monthlyLivingExpensesAfterRetirement;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 家庭维持基金
	index.prototype.familyMaintenanceFund = function() {
		var $childList = $('.jq-childList'),
			_data      = {};

		_data.CSRFToken = common._CSRFToken;

		$childList.each(function(){
			if (parseInt($(this).find('.irs-single').text(), 10) !== 0) {
				for (var i = 0; i < parseInt($(this).find('.irs-single').text(), 10); i++) {
					common._childArray.push($(this).attr('data-age'));
				}
			}
		});

		for (var i = 0; i < common._childArray.length; i++) {
			_data['childList[' + i + '].age'] = common._childArray[i];
		}

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/familyMaintenanceFund',
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
	}

	// 住院医疗共同问项
	index.prototype.commonInpatientMedicalItems = function() {
		var _data = {
			'roomType'          : $('.cut-10 .is-checked').data('value'),
			'selfPayItemOption' : $('.cut-11 .is-checked').data('value'),
			'CSRFToken'         : common._CSRFToken
		};

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/commonInpatientMedicalItems',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._hospitalDayNeeds = data.outputData.amountOfHospitalization;
				common._sundryNeeds = data.outputData.hospitalizationFeesQuota;
				common._surgeryNeeds = data.outputData.surgicalCompensationAllowance;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 重大疾病/癌症醫療共同問項
	index.prototype.commonMajorDiseaseCancerCareItems = function() {
		var _data = {
			'annualIncome'                         : common._AnnualIncome,
			'recuperationIncomeCompensationOption' : $('.cut-12 .is-checked').data('value'),
			'CSRFToken'                            : common._CSRFToken
		};

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/commonMajorDiseaseCancerCareItems',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._majorDiseaseNeeds = data.outputData.medicalDemandForMajorDiseases;
				common._cancerNeeds = data.outputData.cancerMedicalDemand;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 意外殘廢需求
	index.prototype.accidentalDisabilityDemand = function() {
		var _data = {
			'annualIncome'              : common._AnnualIncome,
			'recuperationIncomeSubsidy' : $('.cut-13 .is-checked').data('value'),
			'CSRFToken'                 : common._CSRFToken
		};

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/accidentalDisabilityDemand',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._accidentNeeds = data.outputData.accidentalDisabilityDemand;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 長期照顧需求
	index.prototype.longTermCareNeeds = function() {
		var _data = {
			'longTermCareOption' : $('.cut-14 .is-checked').data('value'),
			'CSRFToken'          : common._CSRFToken
		};

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/longTermCareNeeds',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._longTermCareNeeds = data.outputData.longTermCareAmount;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 理财/退休金需求
	index.prototype.financialPensionNeeds = function() {
		var _data = {
			'retirementAge'                        : parseInt($('.retire-age-slider').prev().find('.irs-single').text(), 10),
			'monthlyLivingExpensesAfterRetirement' : common._ExpensesAfterRetire,
			'CSRFToken'                            : common._CSRFToken
		};

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/financialPensionNeeds',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._retirementPension = data.outputData.retirementPension;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 理财/教育基金需求
	index.prototype.financialEducationFundDemand = function() {
		var _eduType = 1, // 公立
			_data = {};

		_data.CSRFToken = common._CSRFToken;

		for (var i = 0; i < common._childArray.length; i++) {
			_data['childEduList[' + i + '].age'] = common._childArray[i];
			_data['childEduList[' + i + '].eduType'] = _eduType;
		}

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/financialEducationFundDemand',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._eduExpenses = data.outputData.eduExpenses;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 寿险/社保已有
	index.prototype.existingSocialLifeInsurance = function() {
		var _type = $('.cut-24 .respond-wrap').attr('data-meta'),
			_data = {
				'type'      : $('.cut-23 .is-checked').data('value'),
				'CSRFToken' : common._CSRFToken
			};

		if (_type === 'labor') {
			_data.insuranceSalary = parseInt($('.cut-24 .respond-wrap .selection option:selected').val().replace(',', ''), 10);
			_data.basicPay = parseFloat($('.jq-basicPay .irs-single').text(), 10);
		} else if (_type !== 'farmer' && _type !== '') {
			_data.insuranceSalary = parseInt($('.cut-24 .respond-wrap .' + _type + ' .money').next().find('input').val().replace(',', ''), 10);
			_data.basicPay = parseFloat($('.jq-basicPay .irs-single').text(), 10);
		}

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/existingSocialLifeInsurance',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._socialSecurityAmount = data.outputData.socialSecurityAmount;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 寿险南山保单已有
	index.prototype.existingNanshanLifeInsurance = function() {
		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/existingNanshanLifeInsurance',
			data     : {
				'CSRFToken' : common._CSRFToken
			},
			dataType : 'json',
			success  : function(data) {
				common._traditionalLiftExist = data.outputData.nanshanLifeInsuranceAmount;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 理财/退休金社保已有/一次给付
	index.prototype.existingSocialInsurancePensionFinancialOnePayment = function() {
		var _data = {
			'monthlyInsuranceSalary' : $('.cut-24 .labor .selection option:selected').val(),
			'insuredYears'           : $('.cut-24 .labor .ins-year').val(),
			'CSRFToken'              : common._CSRFToken
		};

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/existingSocialInsurancePensionFinancialOnePayment',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._ilpExist += data.outputData.amount;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 理财/退休金社保已有/劳工退休金
	index.prototype.existingSocialInsurancePensionFinancialLaborPension = function() {
		var _data = {
			'monthlyInsuranceSalary' : $('.cut-24 .labor .selection option:selected').val(),
			'ruleType'               : $('.cut-24 .labor .is-checked').attr('data-value'),
			'CSRFToken'              : common._CSRFToken
		};

		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/existingSocialInsurancePensionFinancialLaborPension',
			data     : _data,
			dataType : 'json',
			success  : function(data) {
				common._ilpExist += data.outputData.amount;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log(_data);
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 南山現有保險理財額度
	index.prototype.nanshanExistingInsuranceFinancingAmount = function() {
		$.ajax({
			type     : 'POST',
			url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/nanshanExistingInsuranceFinancingAmount',
			data     : {
				'CSRFToken' : common._CSRFToken
			},
			dataType : 'json',
			success  : function(data) {
				common._nanExistIns = data.outputData.amount;
			},
			complete : function(data) {
			},
			error    : function(xhr, textStatus, errorThrown) {
				console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
			} 
		});
	}

	// 南山現有医疗保障額度
	index.prototype.nanshanExistingMedicalInsurantAmount = function() {
		for (var i = 0; i < common._nanshanInsArray.length; i++) {
			var _data = {
				'l2Account' : common._nanshanInsArray[i].replace('_', ''),
				'CSRFToken' : common._CSRFToken
			};

			$.ajax({
				type     : 'POST',
				url      : NSLCP.config.encodedContextPath + '/member/needanalysis/ajax/nanshanExistingMedicalInsurantAmount',
				data     : _data,
				dataType : 'json',
				success  : function(data) {
					common[common._nanshanInsArray[i]] = data.outputData.insurantAmount;
				},
				complete : function(data) {
				},
				error    : function(xhr, textStatus, errorThrown) {
					console.log(_data);
					console.log('xhr:' + xhr + ' , ' + 'textStatus:' + textStatus + ' , ' + 'errorThrown:' + errorThrown);
				} 
			});
		}
	}

	// 最終總值計算
	index.prototype.totalCount = function() {
		var _str = '';

		// 歸零
		common._traditionalLiftNeed = 0;

		// 每月生活支出及需求年數
		common._traditionalLiftNeed += (parseFloat($('.jq-basicPay .irs-single').text(), 10) * 12 * parseInt($('.jq-liftNeedYear .irs-single').text(), 10) * 10000);

		// 子女至大學畢業的養育費用 + 其他需求 + 償債基金
		$('.jq-liftNeed .irs-single').each(function(){
			common._traditionalLiftNeed += (parseInt($(this).text(), 10) * 10000);
		});

		_str = '{"traditionalLiftNeed":"' + common._traditionalLiftNeed + 
			'","traditionalLiftExist":"' + (common._socialSecurityAmount + common._traditionalLiftExist + common._prepare) + 
			'","ilpDream":"' + $('.cut-18 .is-checked').attr('data-value') + 
			'","ilpNeed":"' + (common._eduExpenses + common._retirementPension) + 
			'","ilpExist":"' + (common._ilpExist + common._nanExistIns)
			'","mc1Need":"' + common._hospitalDayNeeds + 
			'","mc1Exist":"' + common._hospitalizationDay + 
			'","mc2Need":"' + common._sundryNeeds + 
			'","mc2Exist":"' + common._sundry + 
			'","mc3Need":"' + common._surgeryNeeds + 
			'","mc3Exist":"' + common._surgery + 
			'","mc4Need":"' + common._majorDiseaseNeeds + 
			'","mc4Exist":"' + common._majorDisease + 
			'","mc5Need":"' + common._cancerNeeds + 
			'","mc5Exist":"' + common._cancer + 
			'","mc6Need":"' + common._longTermCareNeeds + 
			'","mc6Exist":"' + common._longTermCare + 
			'","mc7Need":"' + common._accidentNeeds + 
			'","mc7Exist":"' + common._accident + 
			'","annualIncome":"' + common._AnnualIncome + 
			'","lifeEvent":"' + common._lifeEvent.join(',') + 
			'","CSRFToken":"' + common._CSRFToken + '"}';

		$('.totalData').val(_str);
	}

	// ========================== API function end ==============================

	projects.$w.load(function(){
		// common._CSRFToken = $("input[name='CSRFToken']").val();
		// common.nanshanExistingMedicalInsurantAmount();
		// common.nanshanExistingInsuranceFinancingAmount();
		common.setDate();

		if ($.fn.ionRangeSlider !== undefined) {
			// 你的年齡
			$('.age-slider').ionRangeSlider({
				min         : 20,
				max         : 84,
				max_postfix : '<i class="postfix"></i>',
				from        : common._prevAge,
				onStart     : function (data) {
					common._prevAge = data.min;
				},
				onFinish    : function (data) {
					if ((data.from >= common._ageRange[1] && data.from < common._ageRange[2]) && common._prevAge < common._ageRange[0]) {
						// 青年拉到老年
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'y-t-o');
					} else if ((data.from >= common._ageRange[1] && data.from < common._ageRange[2]) && (common._prevAge >= common._ageRange[0] && common._prevAge < common._ageRange[1])) {
						// 中年拉到老年
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'm-t-o');
					} else if ((data.from >= common._ageRange[1] && data.from < common._ageRange[2]) && common._prevAge >= common._ageRange[2]) {
						// 人瑞拉到老年
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'c-t-o');
					} else if ((data.from >= common._ageRange[0] && data.from < common._ageRange[1]) && common._prevAge < common._ageRange[0]) {
						// 青年拉到中年
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'y-t-m');
					} else if ((data.from >= common._ageRange[0] && data.from < common._ageRange[1]) && (common._prevAge >= common._ageRange[1] && common._prevAge < common._ageRange[2])) {
						// 老年拉到中年
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'o-t-m');
					} else if ((data.from >= common._ageRange[0] && data.from < common._ageRange[1]) && common._prevAge >= common._ageRange[2]) {
						// 人瑞拉到中年
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'c-t-m');
					} else if (data.from < common._ageRange[0] && (common._prevAge >= common._ageRange[1] && common._prevAge < common._ageRange[2])) {
						// 老年拉到青年
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'o-t-y');
					} else if (data.from < common._ageRange[0] && (common._prevAge >= common._ageRange[0] && common._prevAge < common._ageRange[1])) {
						// 中年拉到青年
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'm-t-y');
					} else if (data.from < common._ageRange[0] && common._prevAge >= common._ageRange[2]) {
						// 人瑞拉到青年
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'c-t-y');
					} else if (data.from >= common._ageRange[2] && common._prevAge < common._ageRange[0]) {
						// 青年拉到人瑞
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'y-t-c');
					} else if (data.from >= common._ageRange[2] && (common._prevAge >= common._ageRange[0] && common._prevAge < common._ageRange[1])) {
						// 中年拉到人瑞
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'm-t-c');
					} else if (data.from >= common._ageRange[2] && (common._prevAge >= common._ageRange[1] && common._prevAge < common._ageRange[2])) {
						// 老年拉到人瑞
						$('.cut-3 ' + common._imageWrap).attr('data-age', 'o-t-c');
					} else {
						// 不改變
					}
					common._prevAge = data.from;
				}
			});

			// 有幾個小孩
			$('.amount-slider').each(function(){
				$(this).ionRangeSlider({
					min      : 0,
					max      : 5,
					from     : 0,
					onFinish : function (data) {
						var _class = $(data.input).data('age'); // 取得是哪個年齡層的在做調整

						if (data.from === 0) {
							$('.kids-pool .' + _class + ' .is-show').addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
								$(this).removeClass('ani-reverse is-show');
							});
						} else {
							$('[data-meta="dinky"]').removeClass('is-checked');
							$('.dog .doll').addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
								$(this).removeClass('ani-reverse is-show');
							});

							for (var i = 0; i < data.from; i++) {
								$('.kids-pool .' + _class + ' *').eq(i).addClass('is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');

								if (projects.browsers() === 'IE 11' || projects.browsers() === 'MSIE 10') {
									$('.kids-pool .' + _class + ' *').eq(i).removeClass('doll').delay(0).queue(function(){
										$(this).addClass('doll');
										$('.kids-pool .' + _class + ' *').eq(i).dequeue();
									});
								}
							}

							for (var j = $('.kids-pool .' + _class + ' *').length; j > data.from; j--) {
								if ($('.kids-pool .' + _class + ' *').eq(j - 1).hasClass('is-show')) {
									$('.kids-pool .' + _class + ' *').eq(j - 1).addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
										$(this).removeClass('ani-reverse is-show');
									});
								}
							}
						}
					}
				});
			});

			// 收入
			$('.income-slider').ionRangeSlider({
				min                : 0,
				max                : 1000,
				from               : common._prevIncome,
				max_postfix        : '<i class="postfix"></i>',
				prettify_separator : ',',
				values             : [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 250, 300, 350, 400, 450, 500],
				onStart            : function (data) {
					common._prevIncome = data.min;
				},
				onFinish           : function (data) {
					var _startRange, _endRange;

					common._IncomeAct[1] = data.from_value;

					for (var i = (common._IncomeRange.length - 1); i >= 0; i--) {
						if (common._IncomeAct[0] === common._IncomeRange[0]) {
							// = 最小值
							_startRange = i;
						} else if (common._IncomeAct[0] >= common._IncomeRange[common._IncomeRange.length - 1]) {
							// = 最大值
							_startRange = common._IncomeRange.length - 1;
						} else if (common._IncomeAct[0] <= common._IncomeRange[i]) {
							_startRange = ( common._IncomeAct[0] === common._IncomeRange[i] ) ? i : ( i - 1 );
						}
					}

					for (var j = 0; j < common._IncomeRange.length; j++) {
						if (common._IncomeAct[1] >= common._IncomeRange[j]) {
							_endRange = j;
						}
					}

					if (_startRange !== _endRange) {
						common.mixAnimate('.cut-6 ' + common._imageWrap, _startRange, _endRange, common._IncomeRange);
					}

					common._prevIncome = data.from_value;
					common._IncomeAct[0] = data.from_value;
				}
			});

			// 支出
			$('.expend-slider').each(function(){
				$(this).ionRangeSlider({
					min                : 0,
					max                : $(this).data('max'),
					max_postfix        : '<i class="postfix"></i>',
					prettify_separator : ',',
					from               : $(this).hasClass('edu-cost') ? common._eduCost : common._prevLiability,
					values             : $(this).data('values').split(','),
					onFinish           : function (data) {
						var _startRange,
							_endRange;

						common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
						common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

						// 字串轉數字
						for (var i = 0; i < common._LiabilityRange.length; i++) {
							common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
						}
						// 字串轉數字
						for (var i = 0; i < common._LiabilityAct.length; i++) {
							common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
						}
						// 紀錄變化結束點
						common._LiabilityAct[1] = data.from_value;

						// 判斷起始點在哪
						for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
							if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
								// 起始點 = 最小值
								_startRange = 0;
							} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
								// 起始點 = 最大值
								_startRange = common._LiabilityRange.length - 1;
							} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
								_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
							}
						}

						// 判斷結束點在哪
						for (var j = 0; j < common._LiabilityRange.length; j++) {
							if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
								_endRange = j;
							}
						}

						// 判斷是哪一 cut
						if (_startRange !== _endRange && $(data.input[0]).parents('.stage').hasClass('cut-8')) {
							var _base = $('.cut-8 ' + common._imageWrap).attr('data-level').split('-t-')[1];

							_base = ( ! _base ) ? 0 : parseInt(_base, 10);

							common.mixAnimate('.cut-8 ' + common._imageWrap, _base, _endRange - _startRange + _base, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
						} else if (_startRange !== _endRange && $(data.input[0]).parents('.stage').hasClass('cut-9')) {
							var _base = $('.cut-9 ' + common._imageWrap).attr('data-level').split('-t-')[1];

							_base = ( ! _base ) ? 0 : parseInt(_base, 10);

							common.mixAnimate('.cut-9 ' + common._imageWrap, _base, _endRange - _startRange + _base, [0, 1, 2, 3, 4, 5]);
						}

						// 紀錄子女教育費
						if ($(data.input[0]).hasClass('edu-cost')) {
							common._eduCost = data.from;
						}

						common._LiabilityAct[0] = data.from_value;
						$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
					}
				});
			});

			// 醫療相關問項
			$('.medical-slider').each(function(){
				var _idx        = 0,
					_from       = 0,
					_from_value = 0,
					_value      = $(this).data('values').split(',');

				if ($(this).parents('.stage').hasClass('cut-15')) {
					_idx = $(this).parents('.list').index();
				} else {
					_idx = $(this).parents('.list').index() + $('.cut-15 .list').length;
				}

				_from = common[common._nanshanInsArray[_idx]]

				for (var i = 0; i < _value.length; i++) {
					if (_from >= parseInt(_value[i], 10)) {
						_from_value = i;
					}
				}

				$(this).ionRangeSlider({
					min                : 0,
					max                : $(this).data('max'),
					max_postfix        : '<i class="postfix"></i>',
					prettify_separator : ',',
					from               : _from_value,
					values             : _value,
					onFinish           : function (data) {
						var $imgWrap = $(data.input[0]).parent().prev();

						$imgWrap.addClass('go-ani');
						$imgWrap.on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
							$(this).removeClass('go-ani');
						});
					}
				});
			});

			$('.retire-age-slider').ionRangeSlider({
				min         : 40,
				max         : $('.retire-age-slider').data('max'),
				max_postfix : '<i class="postfix"></i>',
				from        : 40,
				onFinish    : function (data) {
					var _startRange,
						_endRange;

					common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
					common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

					// 字串轉數字
					for (var i = 0; i < common._LiabilityRange.length; i++) {
						common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
					}
					// 字串轉數字
					for (var i = 0; i < common._LiabilityAct.length; i++) {
						common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
					}
					// 紀錄變化結束點
					common._LiabilityAct[1] = data.from;

					// 判斷起始點在哪
					for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
						if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
							// 起始點 = 最小值
							_startRange = 0;
						} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
							// 起始點 = 最大值
							_startRange = common._LiabilityRange.length - 1;
						} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
							_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
						}
					}

					// 判斷結束點在哪
					for (var j = 0; j < common._LiabilityRange.length; j++) {
						if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
							_endRange = j;
						}
					}

					if (_startRange !== _endRange) {
						var _base = $('.cut-19 ' + common._imageWrap + ' .doll').attr('data-level');

						_base = ( ! _base ) ? 0 : parseInt(_base, 10);

						common.mixAnimate('.cut-19 ' + common._imageWrap + ' .doll', _base, _endRange - _startRange + _base, [0, 1, 2]);
					}

					common._LiabilityAct[0] = data.from;
					$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
				}
			});

			$('.retire-income-slider').ionRangeSlider({
				min         : 0,
				max         : $('.retire-income-slider').data('max'),
				max_postfix : '<i class="postfix"></i>',
				from        : 0,
				values      : $('.retire-income-slider').data('values') ? $('.retire-income-slider').data('values').split(',') : '',
				onFinish    : function (data) {
					var _startRange,
						_endRange;

					common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
					common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

					// 字串轉數字
					for (var i = 0; i < common._LiabilityRange.length; i++) {
						common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
					}
					// 字串轉數字
					for (var i = 0; i < common._LiabilityAct.length; i++) {
						common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
					}
					// 紀錄變化結束點
					common._LiabilityAct[1] = data.from_value;

					// 判斷起始點在哪
					for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
						if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
							// 起始點 = 最小值
							_startRange = 0;
						} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
							// 起始點 = 最大值
							_startRange = common._LiabilityRange.length - 1;
						} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
							_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
						}
					}

					// 判斷結束點在哪
					for (var j = 0; j < common._LiabilityRange.length; j++) {
						if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
							_endRange = j;
						}
					}

					if (_startRange !== _endRange) {
						var _base = $('.cut-19 ' + common._imageWrap + ' .dream').attr('data-level').split('-t-')[1];

						_base = ( ! _base ) ? 0 : parseInt(_base, 10);

						common.mixAnimate('.cut-19 ' + common._imageWrap + ' .dream', _base, _endRange - _startRange + _base, [0, 1, 2, 3]);
					}

					common._LiabilityAct[0] = data.from_value;
					$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
				}
			});

			$('.retire-prepare-slider').ionRangeSlider({
				min                : 0,
				max                : $('.retire-prepare-slider').data('max'),
				max_postfix        : '<i class="postfix"></i>',
				from               : 0,
				values             : $('.retire-prepare-slider').data('values') ? $('.retire-prepare-slider').data('values').split(',') : '',
				prettify_separator : ',',
				onFinish           : function (data) {
					var _startRange,
						_endRange;

					common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
					common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

					// 字串轉數字
					for (var i = 0; i < common._LiabilityRange.length; i++) {
						common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
					}
					// 字串轉數字
					for (var i = 0; i < common._LiabilityAct.length; i++) {
						common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
					}
					// 紀錄變化結束點
					common._LiabilityAct[1] = data.from_value;
					// 記錄壽險已有
					common._prepare = data.from_value;

					// 判斷起始點在哪
					for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
						if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
							// 起始點 = 最小值
							_startRange = 0;
						} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
							// 起始點 = 最大值
							_startRange = common._LiabilityRange.length - 1;
						} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
							_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
						}
					}

					// 判斷結束點在哪
					for (var j = 0; j < common._LiabilityRange.length; j++) {
						if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
							_endRange = j;
						}
					}

					if (_startRange !== _endRange) {
						var _base = $('.cut-19 ' + common._imageWrap + ' .prepare').attr('data-level').split('-t-')[1];

						_base = ( ! _base ) ? 0 : parseInt(_base, 10);

						common.mixAnimate('.cut-19 ' + common._imageWrap + ' .prepare', _base, _endRange - _startRange + _base, [0, 1, 2, 3, 4, 5]);
					}

					common._LiabilityAct[0] = data.from_value;
					$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
				}
			});

			$('.edu-cost-slider').ionRangeSlider({
				min                : 0,
				max                : $('.edu-cost-slider').data('max'),
				max_postfix        : '<i class="postfix"></i>',
				prettify_separator : ',',
				from               : common._eduCost,
				values             : $('.edu-cost-slider').data('values') ? $('.edu-cost-slider').data('values').split(',') : '',
				onUpdate           : function (data) {
					if (data.from !== 0) {
						var _endRange;
						// 判斷結束點在哪
						common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
						common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

						// 字串轉數字
						for (var i = 0; i < common._LiabilityRange.length; i++) {
							common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
						}
						// 字串轉數字
						for (var i = 0; i < common._LiabilityAct.length; i++) {
							common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
						}

						for (var j = 0; j < common._LiabilityRange.length; j++) {
							if (data.from_value >= common._LiabilityRange[j]) {
								_endRange = j;
							}
						}

						if (_endRange >= 2) {_endRange = 2;}

						$('.cut-20 ' + common._imageWrap + ' .college').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
							common.mixAnimate('.cut-20 ' + common._imageWrap + ' .college', 0, _endRange, [0, 1, 2]);
						});

						common._LiabilityAct[0] = data.from_value;
						$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
					}
				},
				onFinish           : function (data) {
					var _startRange,
						_endRange;

					common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
					common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

					// 字串轉數字
					for (var i = 0; i < common._LiabilityRange.length; i++) {
						common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
					}
					// 字串轉數字
					for (var i = 0; i < common._LiabilityAct.length; i++) {
						common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
					}
					// 紀錄變化結束點
					common._LiabilityAct[1] = data.from_value;

					// 判斷起始點在哪
					for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
						if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
							// 起始點 = 最小值
							_startRange = 0;
						} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
							// 起始點 = 最大值
							_startRange = common._LiabilityRange.length - 1;
						} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
							_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
						}
					}

					// 判斷結束點在哪
					for (var j = 0; j < common._LiabilityRange.length; j++) {
						if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
							_endRange = j;
						}
					}

					if (_endRange >= 2) {_endRange = 2;}

					if (_startRange !== _endRange) {
						var _base = $('.cut-20 ' + common._imageWrap + ' .college').attr('data-level').split('-t-')[1];

						_base = ( ! _base ) ? 0 : parseInt(_base, 10);

						common.mixAnimate('.cut-20 ' + common._imageWrap + ' .college', _base, _endRange - _startRange + _base, [0, 1, 2]);
					}

					// 紀錄子女教育費
					common._eduCost = data.from;

					common._LiabilityAct[0] = data.from_value;
					$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
				}
			});

			$('.edu-prepare-slider').ionRangeSlider({
				min                : 0,
				max                : $('.edu-prepare-slider').data('max'),
				max_postfix        : '<i class="postfix"></i>',
				prettify_separator : ',',
				from               : common._prevLiability,
				values             : $('.edu-prepare-slider').data('values').split(','),
				onFinish           : function (data) {
					var _startRange,
						_endRange;

					common._LiabilityRange = $(data.input[0]).data('range').split(','); //寫入動畫區間
					common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

					// 字串轉數字
					for (var i = 0; i < common._LiabilityRange.length; i++) {
						common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
					}
					// 字串轉數字
					for (var i = 0; i < common._LiabilityAct.length; i++) {
						common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
					}
					// 紀錄變化結束點
					common._LiabilityAct[1] = data.from_value;
					// 記錄壽險已有
					common._prepare = data.from_value;

					// 判斷起始點在哪
					for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
						if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
							// 起始點 = 最小值
							_startRange = 0;
						} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
							// 起始點 = 最大值
							_startRange = common._LiabilityRange.length - 1;
						} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
							_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
						}
					}

					// 判斷結束點在哪
					for (var j = 0; j < common._LiabilityRange.length; j++) {
						if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
							_endRange = j;
						}
					}

					if (_startRange !== _endRange) {
						var _base = $('.cut-20 ' + common._imageWrap + ' .money').attr('data-level').split('-t-')[1];

						_base = ( ! _base ) ? 0 : parseInt(_base, 10);

						common.mixAnimate('.cut-20 ' + common._imageWrap + ' .money', _base, _endRange - _startRange + _base, [0, 1, 2, 3, 4]);
					}

					common._LiabilityAct[0] = data.from_value;
					$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
				}
			});

			// 一桶金 一次通通領 幾年後領取第一筆
			$('.basic-slider').each(function(){
				$(this).ionRangeSlider({
					min                : 0,
					max                : $(this).data('max'),
					max_postfix        : '<i class="postfix"></i>',
					prettify_separator : ',',
					from               : common._prevLiability,
					values             : $(this).data('values') ? $(this).data('values').split(',') : '',
					onFinish           : function (data) {
						var _startRange,
							_endRange,
							_array = [];

						common._LiabilityRange = $(data.input[0]).attr('data-range').split(','); //寫入動畫區間
						common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

						// 字串轉數字
						for (var i = 0; i < common._LiabilityRange.length; i++) {
							common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
							_array.push(i);
						}
						// 字串轉數字
						for (var i = 0; i < common._LiabilityAct.length; i++) {
							common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
						}
						// 紀錄變化結束點
						common._LiabilityAct[1] = data.from_value;

						// 判斷起始點在哪
						for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
							if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
								// 起始點 = 最小值
								_startRange = 0;
							} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
								// 起始點 = 最大值
								_startRange = common._LiabilityRange.length - 1;
							} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
								_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
							}
						}

						// 判斷結束點在哪
						for (var j = 0; j < common._LiabilityRange.length; j++) {
							if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
								_endRange = j;
							}
						}

						if (_startRange !== _endRange) {
							var _base     = $('.cut-22 ' + common._imageWrap).attr('data-level').split('-t-')[1],
								_siblings = $('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level') !== '' ? parseInt($('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level').split('-t-')[1], 10) : 0;

							_base = ( ! _base ) ? 0 : parseInt(_base, 10);

							// 留遊學有不同動畫邏輯
							if ($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'study') {
								if (_base !== 0) {
									$('.cut-22 ' + common._imageWrap).attr('data-level', _startRange + '-t-0');

									setTimeout(function(){
										$('.cut-22 ' + common._imageWrap).attr('data-level', '0-t-' + _endRange);
									}, (parseFloat($('.cut-22 ' + common._imageWrap).css('animation-duration'), 10) + parseFloat($('.cut-22 ' + common._imageWrap).css('animation-delay'), 10)) * 1000);
								} else {
									$('.cut-22 ' + common._imageWrap).attr('data-level', '0-t-' + _endRange);
								}
							} else {
								common.mixAnimate('.cut-22 ' + common._imageWrap, _base, _endRange - _startRange + _base, _array);
							}

							// 有限制最大值，需控制另一動畫
							if ($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'job' || $('.cut-22 ' + common._imageWrap).attr('data-meta') === 'travel') {
								if (common._AniCache >= _endRange) {
									common.mixAnimate('.cut-22 ' + common._imageWrap + ' .drop', _siblings, _endRange - _startRange + _base, _array);
								} else if (common._AniCache < _endRange && common._AniCache !== _siblings) {
									common.mixAnimate('.cut-22 ' + common._imageWrap + ' .drop', _siblings, common._AniCache - _startRange + _base, _array);
								}
							} else if ($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'study' && common._AniCache >= _endRange) {
								// 實際值大於限制值才調整動畫
								if (_endRange !== 0) {
									$('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level', _startRange + '-t-0');

									setTimeout(function(){
										$('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level', '0-t-' + _endRange);
									}, (parseFloat($('.cut-22 ' + common._imageWrap).css('animation-duration'), 10) + parseFloat($('.cut-22 ' + common._imageWrap).css('animation-delay'), 10)) * 1000);
								} else {
									$('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level', _base + '-t-0');
								}
							}
						}

						common._LiabilityAct[0] = data.from_value;
						$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
					}
				});
			});

			// 一桶金 一次通通領 目前已準備
			$('.fund-prepare-slider').each(function(){
				$(this).ionRangeSlider({
					min                : 0,
					max                : $(this).data('max'),
					max_postfix        : '<i class="postfix"></i>',
					prettify_separator : ',',
					from               : common._prevLiability,
					values             : $(this).data('values') ? $(this).data('values').split(',') : '',
					onFinish           : function (data) {
						var _startRange,
							_endRange,
							_array   = [],
							_limited = parseInt($('.cut-22 ' + common._imageWrap).attr('data-level') !== '' ? $('.cut-22 ' + common._imageWrap).attr('data-level').split('-t-')[1] : 0, 10);

						common._LiabilityRange = $(data.input[0]).attr('data-range').split(','); //寫入動畫區間
						common._LiabilityAct = $(data.input[0]).attr('data-liability').split(','); //寫入負債變化

						// 字串轉數字
						for (var i = 0; i < common._LiabilityRange.length; i++) {
							common._LiabilityRange[i] = parseFloat(common._LiabilityRange[i], 10);
							_array.push(i);
						}
						// 字串轉數字
						for (var i = 0; i < common._LiabilityAct.length; i++) {
							common._LiabilityAct[i] = parseFloat(common._LiabilityAct[i], 10);
						}
						// 紀錄變化結束點
						common._LiabilityAct[1] = data.from_value;
						// 記錄壽險已有
						common._prepare = data.from_value;

						// 判斷起始點在哪
						for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
							if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
								// 起始點 = 最小值
								_startRange = 0;
							} else if (common._LiabilityAct[0] >= common._LiabilityRange[common._LiabilityRange.length - 1]) {
								// 起始點 = 最大值
								_startRange = common._LiabilityRange.length - 1;
							} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
								_startRange = ( common._LiabilityAct[0] === common._LiabilityRange[i] ) ? i : ( i - 1 );
							}
						}

						// 判斷結束點在哪
						for (var j = 0; j < common._LiabilityRange.length; j++) {
							if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
								_endRange = j;
							}
						}

						common._AniCache = _endRange; // 記錄拉霸裡的值，如果沒限制的話要跑到哪

						if (_startRange >= _limited && ($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'study' || $('.cut-22 ' + common._imageWrap).attr('data-meta') === 'job' || $('.cut-22 ' + common._imageWrap).attr('data-meta') === 'travel')) {_startRange = _limited;}
						if (_endRange >= _limited && ($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'study' || $('.cut-22 ' + common._imageWrap).attr('data-meta') === 'job' || $('.cut-22 ' + common._imageWrap).attr('data-meta') === 'travel')) {_endRange = _limited;}

						if (_startRange !== _endRange) {
							if ($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'marry') {
								var _base     = $('.cut-22 ' + common._imageWrap + ' .doll').attr('data-level').split('-t-')[1];

								_base = ( ! _base ) ? 0 : parseInt(_base, 10);

								common.mixAnimate('.cut-22 ' + common._imageWrap + ' .doll', _base, _endRange - _startRange + _base, _array);
							} else if ($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'buycar' || $('.cut-22 ' + common._imageWrap).attr('data-meta') === 'buyhouse') {
								var _base = $('.cut-22 ' + common._imageWrap + ' .color').attr('data-level').split('-t-')[1];

								_base = ( ! _base ) ? 0 : parseInt(_base, 10);

								common.mixAnimate('.cut-22 ' + common._imageWrap + ' .color', _base, _endRange - _startRange + _base, _array);
							} else if ($('.cut-22 ' + common._imageWrap).attr('data-meta') === 'study') {
								// 留遊學有不同動畫邏輯
								var _base = $('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level').split('-t-')[1];

								_base = ( ! _base ) ? 0 : parseInt(_base, 10);

								if (_base !== 0) {
									$('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level', _startRange + '-t-0');

									setTimeout(function(){
										$('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level', '0-t-' + _endRange);
									}, (parseFloat($('.cut-22 ' + common._imageWrap + ' .drop').css('animation-duration'), 10) + parseFloat($('.cut-22 ' + common._imageWrap + ' .drop').css('animation-delay'), 10)) * 1000);
								} else {
									$('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level', '0-t-' + _endRange);
								}
							} else {
								var _base = $('.cut-22 ' + common._imageWrap + ' .drop').attr('data-level').split('-t-')[1];

								_base = ( ! _base ) ? 0 : parseInt(_base, 10);

								if (_base !== _endRange - _startRange + _base) {
									common.mixAnimate('.cut-22 ' + common._imageWrap + ' .drop', _base, (_endRange - _startRange + _base >= 0) ? (_endRange - _startRange + _base) : 0, _array);
								}
							}
						}

						common._LiabilityAct[0] = data.from_value;
						$(data.input[0]).attr('data-liability', common._LiabilityAct.join(','));
					}
				});
			});
		}

		if ($(common._lContent).hasClass('index')) {
			$(common._start).on('click', function(){
				if ($(common._required).hasClass('is-checked')) {
					$('.l-main').removeClass('is-index').addClass('is-quest');

					$(common._lContent + '.index').on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						$(this).remove();
					});
				} else {
					common.shake(common._required);
				}
			});

			$('.index ' + common._required + ', .index ' + common._checkbox).on('click', function(){
				$(this).addClass('is-checked').siblings('.btn-check').removeClass('is-checked');
			});
		}

		$(common._checkbox).on('click', function(){
			var $another = $(this).parent().siblings().find(common._checkbox),
				_meta    = $(this).data('meta');

			if ($(common._lContent).hasClass('quest-1')) {
				if (!$(this).hasClass('is-checked')) {
					$(this).addClass('is-checked').removeClass('ani-reverse');
				}

				if ($another.hasClass('is-checked')) {
					$another.removeClass('is-checked').addClass('ani-reverse');
				}

				$(common._imageWrap).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
					$(this).siblings().removeClass('ani-reverse');
				});
			} else if ($(common._lContent).hasClass('quest-2')) {
				$(common._transition).attr('data-first', '');

				if (!$(this).hasClass('is-checked')) {
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						var $this = $(this);

						$another.removeClass('is-checked');
						$('.cut-2 ' + common._transition).attr('data-reverse', $another.attr('data-meta'));

						setTimeout(function(){
							$('.cut-2 ' + common._transition).attr({
								'data-reverse': '',
								'data-select': $this.attr('data-meta')
							});
						}, (parseFloat($('.cut-2 [data-reverse="' + $another.attr('data-meta') + '"]').css('animation-duration'), 10) + parseFloat($('.cut-2 [data-reverse="' + $another.attr('data-meta') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-2 ' + common._transition).attr('data-select', $(this).attr('data-meta'));
					}
				}
			} else if ($(common._lContent).hasClass('quest-4')) {
				common.checkKid('.cut-4 ' + common._checkbox);
			} else if ($(common._lContent).hasClass('quest-5')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					// 已退休 與 新鮮人、待退休 衝突
					if ($(this).data('meta') === 'young'|| $(this).data('meta') === 'near-retired') {
						$(common._checkbox + '[data-meta="retired"]').removeClass('is-checked');

						if ($('.cut-5 .doll').length === 1 && $('.cut-5 .doll').attr('data-meta') === '') {
							$('.cut-5 .doll').attr('data-meta', _meta);
						} else {
							$('.cut-5 ' + common._imageWrap).append($('.cut-5 ' + common._imageWrap + ' .doll').eq(0).clone().attr('data-meta', _meta));
							$('.cut-5 .doll[data-meta="retired"]').remove();
						}
					} else if ($(this).data('meta') === 'retired') {
						$(common._checkbox + '[data-meta="young"], ' + common._checkbox + '[data-meta="near-retired"]').removeClass('is-checked');

						if ($('.cut-5 .doll[data-meta=""]').length === 1) {
							$('.cut-5 .doll').attr('data-meta', _meta);
						} else {
							$('.cut-5 ' + common._imageWrap).append($('.cut-5 ' + common._imageWrap + ' .doll').eq(0).clone().attr('data-meta', _meta));
							$('.cut-5 .doll[data-meta="young"], .cut-5 .doll[data-meta="near-retired"]').remove();
						}
					} else {
						if ($('.cut-5 .is-checked').length === 1) {
							$('.cut-5 .doll').attr('data-meta', _meta);
						} else {
							$('.cut-5 ' + common._imageWrap).append($('.cut-5 ' + common._imageWrap + ' .doll').eq(0).clone().attr('data-meta', _meta));
						}
					}
				} else {
					// 取消勾選
					$(this).removeClass('is-checked');
					if ($('.cut-5 .is-checked').length === 0) {
						$('.cut-5 .doll').attr('data-meta', '');
					} else {
						$('.cut-5 .doll[data-meta="' + _meta + '"]').remove();
					}
				}
			} else if ($(common._lContent).hasClass('quest-10')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');
					$('.cut-11 ' + common._imageWrap).attr('data-meta', _meta);

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked');
						$('.cut-10 ' + common._imageWrap).attr('data-reverse', $('.cut-10 ' + common._imageWrap).attr('data-meta'));

						setTimeout(function(){
							$('.cut-10 ' + common._imageWrap).attr({
								'data-reverse': '',
								'data-meta': _meta
							});
						}, (parseFloat($('[data-reverse="' + $('.cut-10 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $('.cut-10 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-10 ' + common._imageWrap).attr('data-meta', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-11')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked');
						$('.cut-11 ' + common._imageWrap + ' .function').attr('data-reverse', $('.cut-11 ' + common._imageWrap + ' .function').attr('data-selection'));

						setTimeout(function(){
							$('.cut-11 ' + common._imageWrap + ' .function').attr({
								'data-reverse': '',
								'data-selection': _meta
							});
						}, (parseFloat($('[data-reverse="' + $('.cut-11 ' + common._imageWrap + ' .function').attr('data-selection') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $('.cut-11 ' + common._imageWrap + ' .function').attr('data-selection') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-11 ' + common._imageWrap + ' .function').attr('data-selection', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-12')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						$another.removeClass('is-checked');
					} else {
						$('.cut-12 ' + common._imageWrap).addClass('go-ani');
					}
					$('.cut-12 ' + common._imageWrap + ' .function').attr('data-selection', _meta);

					setTimeout(function(){
						$('.cut-12 ' + common._imageWrap).addClass('finish-ani');
					}, (parseFloat($('.cut-12 ' + common._imageWrap + ' .function').css('animation-duration'), 10) + parseFloat($('.cut-12 ' + common._imageWrap + ' .function').css('animation-delay'), 10)) * 1000);
				}
			} else if ($(common._lContent).hasClass('quest-13')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						$another.removeClass('is-checked');
					} else {
						$('.cut-13 ' + common._imageWrap).addClass('go-ani');
					}
					$('.cut-13 ' + common._imageWrap + ' .envelopes').attr('data-selection', _meta);

					setTimeout(function(){
						$('.cut-13 ' + common._imageWrap).addClass('finish-ani');
					}, (parseFloat($('.cut-13 ' + common._imageWrap + ' .envelopes').css('animation-duration'), 10) + parseFloat($('.cut-13 ' + common._imageWrap + ' .envelopes').css('animation-delay'), 10)) * 1000);
				}
			} else if ($(common._lContent).hasClass('quest-14')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked');
						$('.cut-14 ' + common._imageWrap).attr('data-reverse', $('.cut-14 ' + common._imageWrap).attr('data-meta'));

						setTimeout(function(){
							$('.cut-14 ' + common._imageWrap).attr({
								'data-reverse': '',
								'data-meta': _meta
							});
							$('.cut-14 ' + common._imageWrap + ' .care').attr('data-selection', _meta);
						}, (parseFloat($('[data-reverse="' + $('.cut-14 ' + common._imageWrap + ' .care').attr('data-selection') + '"] .care').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $('.cut-14 ' + common._imageWrap + ' .care').attr('data-selection') + '"] .care').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-14 ' + common._imageWrap).attr('data-meta', _meta);
						$('.cut-14 ' + common._imageWrap + ' .care').attr('data-selection', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-18')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked');
						$('.cut-18 ' + common._imageWrap).attr('data-reverse', $('.cut-18 ' + common._imageWrap).attr('data-meta'));

						setTimeout(function(){
							$('.cut-18 ' + common._imageWrap).attr({
								'data-reverse': '',
								'data-meta': _meta
							});
						}, (parseFloat($('[data-reverse="' + $('.cut-18 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $('.cut-18 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-18 ' + common._imageWrap).attr('data-meta', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-21')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫
						$another.removeClass('is-checked');
						$('.cut-21 ' + common._imageWrap).attr('data-reverse', $('.cut-21 ' + common._imageWrap).attr('data-meta'));

						setTimeout(function(){
							$('.cut-21 ' + common._imageWrap).attr({
								'data-reverse': '',
								'data-meta': _meta
							});
						}, (parseFloat($('[data-reverse="' + $('.cut-21 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $('.cut-21 ' + common._imageWrap).attr('data-meta') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.cut-21 ' + common._imageWrap).attr('data-meta', _meta);
					}
				}
			} else if ($(common._lContent).hasClass('quest-23')) {
				// 勾選
				$(this).toggleClass('is-checked');

				if (!$(this).hasClass('is-checked')) {
					_meta = '';
				}

				if ($another.hasClass('is-checked')) {
					// 切換選取時要先跑復原動畫
					$another.removeClass('is-checked');
					$('.cut-23 .list').addClass('disabled');
					$('.cut-23 ' + common._imageWrap).attr('data-reverse', _meta);

					setTimeout(function(){
						$('.cut-23 ' + common._imageWrap).attr({
							'data-reverse': '',
							'data-meta': _meta
						});

						setTimeout(function(){
							$('.cut-23 .list').removeClass('disabled');
						}, (parseFloat($('[data-meta="' + _meta + '"] .' + _meta).css('animation-duration'), 10) + parseFloat($('[data-meta="' + _meta + '"] .' + _meta).css('animation-delay'), 10)) * 1000);
					}, (parseFloat($('[data-reverse="' + _meta + '"] .' + _meta).css('animation-duration'), 10) + parseFloat($('[data-reverse="' + _meta + '"] .' + _meta).css('animation-delay'), 10)) * 1000);
				} else {
					$('.cut-23 ' + common._imageWrap).attr('data-meta', _meta);
				}
			} else if ($(common._lContent).hasClass('quest-24')) {
				if (!$(this).hasClass('is-checked')) {
					// 勾選
					$(this).addClass('is-checked').siblings().removeClass('is-checked');
				}
			}
		});

		// 前往其他題目
		$(common._btnTopic).on('click', function(){
			var $quest   = $(common._lContent + '.quest'),
				_num     = parseInt($quest.attr('data-quest'), 10),
				_meta    = $('.cut-' + _num).find('.is-checked').attr('data-meta'),
				_compare = '',
				_direct  = 0;

			// 判斷是上一題還是下一題
			if ($(this).hasClass('btn-next')) {
				_direct = 1;
				// 是否為第一題
				if (_num === 1) {
					// 作答了沒
					if (_meta !== undefined) {
						$(common._lContent).attr('data-gender', _meta);
					} else {
						common.shake('.cut-' + _num + ' ' + common._checkbox);
					}

					if (_meta === 'boy') {
						_compare = 'girl';
					} else if (_meta === 'girl') {
						_compare = 'boy';
					}

					if (_compare !== '') {
						$(common._imageWrap + '.' + _compare).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
							$quest.attr({
								'class': 'l-content quest quest-' + (_num + _direct),
								'data-quest': _num + _direct
							});
						});
					}
				} else if (_num === 2) {
					// 作答了沒
					if (_meta !== undefined) {
						$(common._transition).addClass('chosen-' + _meta);

						$quest.attr({
							'class': 'l-content quest quest-' + (_num + _direct),
							'data-quest': _num + _direct
						});
					} else {
						common.shake('.cut-' + _num + ' ' + common._checkbox);
					}
				} else if (_num === 4) {
					var _checked = 0;

					$('.cut-4 .irs-single').each(function(){
						if ($(this).text() !== '0') {
							_checked += 1;
						}
					});

					if ($('.cut-4 ' + common._checkbox).hasClass('is-checked')) {
						_checked += 1;
					}

					if (_checked === 0) {
						common.shake('.cut-' + _num + ' .kids-selector');
					} else {
						$('.cut-20 .image-wrap').attr('data-kids', (($('.kids-pool .is-show').length >= 4) ? 4 : $('.kids-pool .is-show').length));

						$quest.attr({
							'class': 'l-content quest quest-' + (_num + _direct),
							'data-quest': _num + _direct
						});

						if ($('.cut-4 ' + common._checkbox).hasClass('is-checked')) {
							common._hasChild = false;
						} else {
							common._hasChild = true;
						}

						// common.familyMaintenanceFund();
					}
				} else if (_num === 10 || _num === 11 || _num === 12 || _num === 13) {
					// 將病房寫入下一題
					if ($('.cut-' + _num + ' .is-checked').length !== 0) {
						if (_num === 11) {
							// common.commonInpatientMedicalItems();
						} else if (_num === 12) {
							$('.cut-' + (_num + 1) + ' ' + common._imageWrap + ' .function').attr('data-selection', $('.cut-' + _num + ' ' + common._imageWrap + ' .function').attr('data-selection'));
							// common.commonMajorDiseaseCancerCareItems();
						} else if (_num === 13) {
							$('.cut-' + (_num + 1) + ' ' + common._imageWrap + ' .function').attr('data-selection', $('.cut-' + _num + ' ' + common._imageWrap + ' .function').attr('data-selection'));
							$('.cut-' + (_num + 1) + ' ' + common._imageWrap + ' .envelopes').attr('data-selection', $('.cut-' + _num + ' ' + common._imageWrap + ' .envelopes').attr('data-selection'));
							// common.accidentalDisabilityDemand();
						}

						$quest.attr({
							'class': 'l-content quest quest-' + (_num + _direct),
							'data-quest': _num + _direct
						});
					} else {
						common.shake('.cut-' + _num + ' ' + common._checkbox);
					}
				} else if (_num === 14 || _num === 18 || _num === 21) {
					// 作答了沒
					if (_meta !== undefined) {

						if (_num === 14) {
							// common.longTermCareNeeds();
						} else if (_num === 18) {
							common._fundSelection = $('.cut-' + _num + ' .is-checked').parent().index();

							// 分岔路
							if (common._fundSelection === 1) {
								_direct += 2;
							} else if (common._fundSelection === 2) {
								// 子女教育
								_direct += 1;
							}
						} else if (_num === 21) {
							// 將一桶金選項寫入下一題
							var  _range = $('.cut-' + _num).find('.is-checked').attr('data-range');

							$('.cut-' + (_num + 1) + ' ' + common._imageWrap).attr('data-meta', _meta);
							$('.cut-' + (_num + 1) + ' .one-time-slider').attr('data-range', _range);

							if (_meta === 'marry') {
								$('.cut-' + (_num + 1) + ' .fund-prepare-slider').attr('data-range', '0,20,100,200,1000');
								$('.cut-' + (_num + 1) + ' .per-year-slider').attr('data-range', '0,15,30,50,75');
							} else if (_meta === 'job') {
								$('.cut-' + (_num + 1) + ' .fund-prepare-slider').attr('data-range', '0,20,200,1000');
								$('.cut-' + (_num + 1) + ' .per-year-slider').attr('data-range', '0,5,50,90');
							} else if (_meta === 'buycar') {
								$('.cut-' + (_num + 1) + ' .per-year-slider').attr('data-range', '0,5,30,60,90');
							} else if (_meta === 'buyhouse') {
								$('.cut-' + (_num + 1) + ' .per-year-slider').attr('data-range', '0,5,50');
							} else {
								$('.cut-' + (_num + 1) + ' .fund-prepare-slider').attr('data-range', '0,2,60,100,200,500,1000');
								$('.cut-' + (_num + 1) + ' .per-year-slider').attr('data-range', '0,5,15,30,50,75,90');
							}
						}

						$quest.attr({
							'class': 'l-content quest quest-' + (_num + _direct),
							'data-quest': _num + _direct
						});
					} else {
						common.shake('.cut-' + _num + ' ' + common._checkbox);
					}
				} else if (_num === 22) {
					var _select = $('.cut-' + _num + ' ' + common._transition).attr('data-selection');

					if ($(common._dream + ' option:selected').val() === '') {
						common.shake('.cut-' + _num + ' .wish');
					} else if ($('.' + _select + '-content .selection option:selected').val() === '') {
						common.shake('.' + _select + '-content .selectbox');
					} else {
						$quest.attr({
							'class': 'l-content quest quest-' + (_num + _direct),
							'data-quest': _num + _direct
						});
					}
				} else if (_num === 23) {
					if (_meta === undefined) { _meta = 'none';}
					// 將保險選項寫入下一題
					$('.cut-' + (_num + 1) + ' ' + common._imageWrap).attr('data-meta', _meta);
					$('.cut-' + (_num + 1) + ' .respond-wrap').attr('data-meta', _meta);

					$quest.attr({
						'class': 'l-content quest quest-' + (_num + _direct),
						'data-quest': _num + _direct
					});
				} else if (_num === 24) {
					var _emptyLength = 0,
						_cereerType  = $('.cut-' + _num + ' .respond-wrap').attr('data-meta');

					common.finalCheck(_num, _meta);

					if (common.finalCheck(_num, _meta, _emptyLength) === 0) {
						// common.existingSocialLifeInsurance();

						// 歸零
						common._ilpExist = 0;

						if (_cereerType === 'labor') {
							// common.existingSocialInsurancePensionFinancialOnePayment();
							// common.existingSocialInsurancePensionFinancialLaborPension();
						} else if (_cereerType !== 'none') {
							common._ilpExist = $('.respond-area.' + _cereerType + ' .retired').next().find('.inputbox').val().replace(',', '') * 10000;
						}

						$quest.attr({
							'class': 'l-content quest is-final',
							'data-quest': 'final'
						});
						$(common._stepList).attr('class', 'step-list complete-phase-4');
						// common.totalCount();
					}
				} else if (isNaN(parseInt($('.quest').attr('data-quest'), 10)) && $('.quest').attr('data-quest') !== 'final') {
					// 最後一 cut
					$quest.attr({
						'class': 'l-content quest is-final',
						'data-quest': 'final'
					});
					$(common._stepList).attr('class', 'step-list complete-phase-4');
					// common.totalCount();
				} else if (isNaN(parseInt($('.quest').attr('data-quest'), 10)) && $('.quest').attr('data-quest') === 'final') {
					// 結果出爐
					$('.nanForm').submit();
				} else {
					if (_num === 5) {
						// 記錄人生階段
						$('.cut-5 .is-checked').each(function(){
							common._lifeEvent.push($(this).attr('data-value'));
						});
					} else if (_num === 6) {
						// common.livingExpenses();
					} else if (_num === 7) {
						if (common._hasChild === true) {
							$('.cut-8 .expenditure-selector').addClass('has-child');
						} else {
							$('.cut-8 .expenditure-selector').removeClass('has-child');
						}
					} else if (_num === 8) {
						$('.edu-cost-slider').data('ionRangeSlider').update({
							from: common._eduCost
						});
					} else if (_num === 19) {
						_direct += 3;
						// common.financialPensionNeeds();
					} else if (_num === 20) {
						_direct += 2;
						// common.financialEducationFundDemand();
					}

					$quest.attr({
						'class': 'l-content quest quest-' + (_num + _direct),
						'data-quest': _num + _direct
					});
				}

				for (var i = 0; i < common._steps.length; i++) {
					if (_num >= (common._steps[i] - 1) && _num !== 24) {
						$(common._stepList).attr('class', common._stepList.split('.')[1] + ' complete-phase-' + (i + 1));
					}
				}
			} else {
				_direct = -1;

				if (isNaN(_num)) {
					_num = 25;
				} else if (_num === 20) {
					_direct -= 1;

					$('.expend-slider.edu-cost').data('ionRangeSlider').update({
						from: common._eduCost
					});
				} else if (_num === 21) {
					_direct -= 2;
				} else if (_num === 23) {
					// 判斷要回哪一分岔題
					if (common._fundSelection === 0) {
						_direct -= 3;
					} else if (common._fundSelection === 2) {
						// 子女教育
						_direct -= 2;
					}
				}

				$quest.attr({
					'class': 'l-content quest quest-' + (_num + _direct),
					'data-quest': _num + _direct
				});

				$(common._imageWrap).off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');

				if (_num === 2) {
					// 還原預設值
					$(common._lContent).attr('data-gender', '');
					$(common._transition).removeClass('chosen-single chosen-merried').attr('data-first', 'true');
				} else if (_num === 22) {
					common._AniCache = 0; // 記錄歸零
					// 歸零所有選取值
					$('.cut-22 ' + common._transition).attr('data-selection', '');
					$('.cut-22 .slider-picker').attr('data-liability', '0,0');
					$('.cut-22 .selection').each(function(){
						$(this).find('option').eq(0).prop('selected', 'selected');
					});
					$('.basic-slider').each(function(){
						$(this).data('ionRangeSlider').update({
							from: 0
						});
					});

					$('.fund-prepare-slider').each(function(){
						$(this).data('ionRangeSlider').update({
							from: 0
						});
					});

					$('.cut-22 ' + common._imageWrap + ', .cut-22 ' + common._imageWrap + ' .drop, .cut-22 ' + common._imageWrap + ' .doll, .cut-22 ' + common._imageWrap + ' .color').attr('data-level', '');
				} else if (_num === 24) {
					$('.cut-24 .respond-wrap input').val('');
					$('.cut-24 .selection option').eq(0).prop('selected', 'selected');
				}

				for (var i = common._steps.length - 1; i >= 0; i--) {
					if (_num <= (common._steps[i])) {
						$(common._stepList).attr('class', common._stepList.split('.')[1] + ' complete-phase-' + i);
					}
				}
			}

			if (projects.browsers() === 'IE 11' || projects.browsers() === 'MSIE 10') {
				$('.quest-title').removeClass('quest-title').delay(0).queue(function(){
					$(this).addClass('quest-title');
					$('.quest-title').dequeue();
				});
			}

			// 療養金的動畫歸零
			if ($(common._lContent).hasClass('quest-12') && $('.cut-12 ' + common._imageWrap + ' .function').attr('data-selection') !== '') {
				$('.cut-12 ' + common._imageWrap).removeClass('finish-ani');

				setTimeout(function(){
					$('.cut-12 ' + common._imageWrap).addClass('finish-ani');
				}, (parseFloat($('.cut-12 ' + common._imageWrap + ' .function').css('animation-duration'), 10) + parseFloat($('.cut-12 ' + common._imageWrap + ' .function').css('animation-delay'), 10)) * 1000);
			} else if ($(common._lContent).hasClass('quest-13') && $('.cut-13 ' + common._imageWrap + ' .envelopes').attr('data-selection') !== '') {
				$('.cut-13 ' + common._imageWrap).removeClass('finish-ani');

				setTimeout(function(){
					$('.cut-13 ' + common._imageWrap).addClass('finish-ani');
				}, (parseFloat($('.cut-13 ' + common._imageWrap + ' .envelopes').css('animation-duration'), 10) + parseFloat($('.cut-13 ' + common._imageWrap + ' .envelopes').css('animation-delay'), 10)) * 1000);
			}
		});

		// 觸發 lightbox 開啟事件
		$(common._lightbox).on('click', function(){
			if ($(this).hasClass('btn-edit')) {
				common.openBox();
				$(common._lLightbox + ' .is-insurance .box-title').text('編輯保單');
			} else if ($(this).hasClass('btn-add')) {
				common.openBox();
				$(common._lLightbox + ' .is-insurance .box-title').text('新增保單');
			} else if ($(this).hasClass('btn-notify')) {
				var $quest       = $(common._lContent + '.quest'),
					_num         = parseInt($quest.attr('data-quest'), 10),
					_meta        = $('.cut-' + _num).find('.is-checked').attr('data-meta'),
					_emptyLength = 0;

				common.finalCheck(_num, _meta, _emptyLength);

				if (common.finalCheck(_num, _meta, _emptyLength) === 0) {
					common.openBox();
					$(common._lLightbox + ' .is-insurance .box-title').text('新增保單');

					// common.existingSocialLifeInsurance();
				}
			}
		});

		// 觸發 lightbox 關閉事件
		$(common._close).on('click', function(){
			common.closeBox($(this).data('type'));
		});

		// 一桶金更換類別即清空資料
		$(common._dream).on('change', function(){
			common._AniCache = 0; // 記錄歸零
			$(this).parents(common._transition).attr('data-selection', $(this).val());
			$('.basic-slider').each(function(){
				$(this).data('ionRangeSlider').update({
					from: 0
				});
			});

			$('.fund-prepare-slider').each(function(){
				$(this).data('ionRangeSlider').update({
					from: 0
				});
			});

			$('.cut-22 ' + common._imageWrap + ', .cut-22 ' + common._imageWrap + ' .drop, .cut-22 ' + common._imageWrap + ' .doll, .cut-22 ' + common._imageWrap + ' .color').attr('data-level', '');
		});

		$('.jq-ins-list').on('click', function(){
			$(common._lContent + '.quest').attr({
				'class': 'l-content quest is-ins-list',
				'data-quest': 'ins-list'
			});
		});

		// 開啟相似結果清單
		$(common._search).on('click', function(){
			if ($(common._insName).val() !== '') {
				$(common._result).addClass('is-show');
				common.offClick(common._result);
			}
		});

		// 選擇相似結果後將值帶入 input 並關閉清單
		$(common._result + ' .result').on('click', function(){
			$(common._insName).val($(this).text());
			$(common._result).removeClass('is-show');
		});

		// 限制 input 輸入數字
		$(common._length).each(function(){
			$(this).on('input', function(){
				$(this).val($(this).val().replace(common._checkNum, ''));
			});

			$(this).on('focusout', function(){
				if ($(this).val() !== '') {
					$(this).val(common.setPercentile($(this).val()));
				}
			});
		});

		common.offClick(common._lLightbox);
	});

	projects.$d.ready(function(){
		$('img.b-lazy').lazyload();
	});
}(window, document, $));