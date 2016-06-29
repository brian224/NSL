(function (window, document, jQuery, undefined) {
	'use strict';

	var common = new index();

	function index() {
		this._imageWrap      = '.image-wrap';
		this._start          = '.jq-start';
		this._required       = '.jq-required';
		this._checkbox       = '.jq-checkbox';
		this._btnTopic       = '.jq-topic';
		this._transition     = '.jq-transition';
		this._lightbox       = '.jq-lightbox';
		this._close          = '.jq-close';
		this._lContent       = '.l-content';
		this._lLightbox      = '.l-lightbox';
		this._stepList       = '.step-list';
		this._prevAge        = 20; // 預設年紀
		this._ageRange       = [30, 50, 70]; // 年紀區間
		this._steps          = [7, 10, 14, 15]; // 五階段的題目區隔
		this._prevIncome     = 0; // 預設收入
		this._IncomeAct      = [0, 0]; // 紀錄收入變化
		this._IncomeRange    = [0, 50, 100, 200, 500, 1000]; // 收入區間
		this._prevLiability  = 0; // 預設負債
		this._LiabilityAct   = [0, 0]; // 紀錄負債變化
		this._LiabilityRange = [0, 400, 800, 1200, 1600, 2001, 2400, 2800, 3200, 3600, 4030]; // 負債區間
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
				// $('.dog .doll').attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
			} else {
				$('input[data-age]').each(function(){
					$(this).data('ionRangeSlider').reset();
				});

				$('.dog').siblings().find('.is-show').addClass('ani-reverse');
				$('.ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
					$(this).removeClass('ani-reverse is-show');

					if ($('.ani-reverse.is-show').length === 0) {
						$('.dog .doll').attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
					}
				});
			}
			$(className).toggleClass('is-checked');
		// } else {
		// 	$('.dog .doll').addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
		// 		$(this).removeClass('ani-reverse is-show');
		// 	});
		}
		// $(className).toggleClass('is-checked');
	}

	// 跑區間動畫
	index.prototype.mixAnimate = function(className, start, end, range) {
		var _direction;

		if (start < end) {
			_direction = 1;
		} else {
			_direction = -1;
		}

		$(className).attr('data-level', range[start] + '-t-' + range[start + _direction]);

		$(className).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
			if (start + _direction !== end) {
				start += _direction;

				$(className).attr('data-level', range[start] + '-t-' + range[start + _direction]);

				common.mixAnimate(className, start, end, range);
			}
		});
	}

	index.prototype.openBox = function() {
		$(common._lLightbox).addClass('is-show animation-op');
	}

	index.prototype.closeBox = function() {
		$(common._lLightbox).removeClass('animation-op').on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$(this).removeClass('is-show').off('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend');
		});
	}

	index.prototype.offClick = function() {
		projects.$d.off('click').on('click' , function(e){
			if ($(common._lLightbox).hasClass('is-show animation-op')) {
				e.stopPropagation();

				if (!$(e.target).is('.m-box, .m-box *, ' + common._lightbox + ', ' + common._lightbox + ' *')) {
					common.closeBox();
				}
			}
		});
	}

	projects.$w.load(function(){
		$('.age-slider').ionRangeSlider({
			min: 20,
			max: 84,
			from: common._prevAge,
			onStart: function (data) {
				common._prevAge = data.min;
			},
			onFinish: function (data) {
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

		$('.amount-slider').each(function(){
			$(this).ionRangeSlider({
				min: 0,
				max: 5,
				from: 0,
				onFinish: function (data) {
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

		$('.income-slider').ionRangeSlider({
			min: 0,
			max: 1000,
			from: common._prevIncome,
			max_postfix: '<i class="postfix"></i>',
			prettify_separator: ',',
			onStart: function (data) {
				common._prevIncome = data.min;
			},
			onFinish: function (data) {
				var _startRange, _endRange;

				common._IncomeAct[1] = data.from;

				for (var i = (common._IncomeRange.length - 1); i >= 0; i--) {
					if (common._IncomeAct[0] === common._IncomeRange[0]) {
						// = 最小值
						_startRange = i;
					} else if (common._IncomeAct[0] === common._IncomeRange[common._IncomeRange.length - 1]) {
						// = 最大值
						_startRange = common._IncomeRange.length - 1;
					} else if (common._IncomeAct[0] <= common._IncomeRange[i]) {
						_startRange = i - 1;
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

				if (data.from === data.max) {
					$('.quest-6 .irs-single').addClass('size-adj');
				} else {
					$('.quest-6 .irs-single').removeClass('size-adj');
				}
				common._prevIncome = data.from;
				common._IncomeAct[0] = data.from;
			}
		});

		$('.expend-slider').each(function(){
			$(this).ionRangeSlider({
				min: 0,
				max: $(this).data('max'),
				max_postfix: '<i class="postfix"></i>',
				prettify_separator: ',',
				from: common._prevLiability,
				values: $(this).data('values').split(','),
				onFinish: function (data) {
					var _startRange,
						_endRange,
						_total = 0,
						_aniRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

					for (var k = 0; k < $('.cut-8 .irs-single').length; k++) {
						_total += parseInt($('.cut-8 .irs-single').eq(k).text().split(',').join(''), 10);
					}

					common._LiabilityAct[1] = _total;
					// console.log(_total);

					for (var i = (common._LiabilityRange.length - 1); i >= 0; i--) {
						if (common._LiabilityAct[0] === common._LiabilityRange[0]) {
							// = 最小值
							_startRange = i;
						} else if (common._LiabilityAct[0] === common._LiabilityRange[common._LiabilityRange.length - 1]) {
							// = 最大值
							_startRange = common._LiabilityRange.length - 1;
						} else if (common._LiabilityAct[0] <= common._LiabilityRange[i]) {
							_startRange = i - 1;
						}
					}

					for (var j = 0; j < common._LiabilityRange.length; j++) {
						if (common._LiabilityAct[1] >= common._LiabilityRange[j]) {
							_endRange = j;
						}
					}

					if (_startRange !== _endRange) {
						common.mixAnimate('.cut-8 ' + common._imageWrap, _startRange, _endRange, _aniRange);
					}

					common._LiabilityAct[0] = _total;
				}
			});
		});

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
			if ($(common._lContent).hasClass('quest-1')) {
				var $another = $(this).parent().siblings().find(common._checkbox);

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
				var $another = $(this).parent().siblings().find(common._checkbox);

				$(common._transition).attr('data-first', '');

				if (!$(this).hasClass('is-checked')) {
					$(this).addClass('is-checked');

					if ($another.hasClass('is-checked')) {
						// 切換選取時要先跑復原動畫

						var $this = $(this);

						$another.removeClass('is-checked');
						$('.quest-2 ' + common._transition).attr('data-reverse', $another.attr('data-meta'));

						setTimeout(function(){
							$('.quest-2 ' + common._transition).attr({
								'data-reverse': '',
								'data-select': $this.attr('data-meta')
							});
						}, (parseFloat($('[data-reverse="' + $another.attr('data-meta') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $another.attr('data-meta') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$('.quest-2 ' + common._transition).attr('data-select', $(this).attr('data-meta'));
					}
				}
			} else if ($(common._lContent).hasClass('quest-4')) {
				common.checkKid('.cut-4 ' + common._checkbox);
			} else if ($(common._lContent).hasClass('quest-5')) {
				var $another = $(this).parent().siblings().find(common._checkbox),
					_meta    = $(this).data('meta');

				if (!$(this).hasClass('is-checked')) {
					$(this).addClass('is-checked');

					if ($(this).data('meta') === 'young') {
						$(common._checkbox + '[data-meta="retired"]').removeClass('is-checked');
					} else if ($(this).data('meta') === 'near-retired') {
						$(common._checkbox + '[data-meta="retired"]').removeClass('is-checked');
					} else if ($(this).data('meta') === 'retired') {
						$(common._checkbox + '[data-meta="young"], ' + common._checkbox + '[data-meta="near-retired"]').removeClass('is-checked');
					}
					$('.cut-5 ' + common._imageWrap + ' .doll').attr('data-meta', _meta);
				} else {
					$(this).removeClass('is-checked');
					$('.cut-5 ' + common._imageWrap + ' .doll').attr('data-meta', '');
				}

				// if ($another.hasClass('is-checked')) {
				// 	// 切換選取時要先跑復原動畫
				// 	$another.removeClass('is-checked');
				// 	$('.cut-5 ' + common._imageWrap).addClass('ani-reverse');

				// 	setTimeout(function(){
				// 		$('.cut-5 ' + common._imageWrap).attr('class', 'image-wrap ' + _meta);
				// 	}, (parseFloat($('.cut-5 ' + common._imageWrap).css('animation-duration'), 10) + parseFloat($('.cut-5 ' + common._imageWrap).css('animation-delay'), 10)) * 1000);
				// } else {
				// }
			}
		});

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
						$(common._transition).addClass('chosen-' + _meta);
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
				} else if (_num === 2 || _num === 5) {
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
				} else {
					$(common._transition).addClass('chosen-' + _meta);

					$quest.attr({
						'class': 'l-content quest quest-' + (_num + _direct),
						'data-quest': _num + _direct
					});

					if (_num === 3 || _num === 4 || _num === 6) {
						// common.slider();
					}
				}

				for (var i = 0; i < common._steps.length; i++) {
					if (_num >= (common._steps[i] - 1)) {
						$(common._stepList).attr('class', common._stepList.split('.')[1] + ' complete-phase-' + (i + 1));
					}
				}
			} else {
				_direct = -1;

				$quest.attr({
					'class': 'l-content quest quest-' + (_num + _direct),
					'data-quest': _num + _direct
				});

				$(common._imageWrap).off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');

				if (_num === 2) {
					// 還原預設值
					$(common._transition).removeClass('chosen-boy chosen-girl chosen-single chosen-merried').attr('data-first', 'true');
				} else if (_num === 5) {
					// common.slider();
				}

				for (var i = common._steps.length - 1; i >= 0; i--) {
					if (_num <= (common._steps[i])) {
						$(common._stepList).attr('class', common._stepList.split('.')[1] + ' complete-phase-' + i);
					}
				}
			}
		});

		$(common._lightbox).on('click', function(){
			common.openBox();
		});

		$(common._close).on('click', function(){
			common.closeBox();
		});

		// common.slider();
		common.offClick();
	});

	projects.$d.ready(function(){
		$('img.b-lazy').lazyload();
	});
}(window, document, $));