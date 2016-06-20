(function (window, document, jQuery, undefined) {
	'use strict';

	var common = new index();

	function index() {
		this._start      = '.jq-start';
		this._required   = '.jq-required';
		this._lContent   = '.l-content';
		this._checkbox   = '.jq-checkbox';
		this._btnTopic   = '.jq-topic';
		this._transition = '.jq-transition';
		this._imageWrap  = '.image-wrap';
		this._prevAge    = 20; // 紀錄預設年紀
		this.ageRange    = [30, 50, 70]; // 年紀區間
		this._steps      = [7, 10, 14, 15]; // 五階段的題目區隔
	}

	// 沒作答就往下一題
	index.prototype.shake = function(className) {
		$(className).addClass('btn-shake');

		$(className).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
			$(this).removeClass('btn-shake');
		});
	}

	index.prototype.slider = function() {
		$('.amount-slider').each(function(){
			$(this).rangeslider({
				polyfill: false,
				onSlide: function(position, value) {
					var $tag = $('#' + $(this)[0].identifier).siblings('.tag');

					$tag.attr('class', 'tag tag-' + value);
				},
				onSlideEnd: function(position, value) {
					var _class = $('#' + $(this)[0].identifier).siblings('.amount-slider').data('age'); // 取得是哪個年齡層的在做調整

					if (value === 0) {
						$('.kids-pool .' + _class + ' .is-show').addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
							$(this).removeClass('ani-reverse is-show');
						});
					} else {
						$('[data-meta="dinky"]').removeClass('is-checked');
						$('.dog .doll').addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
							$(this).removeClass('ani-reverse is-show');
						});

						for (var i = 0; i < value; i++) {
							$('.kids-pool .' + _class + ' *').eq(i).addClass('is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
						}

						for (var j = $('.kids-pool .' + _class + ' *').length; j > value; j--) {
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
	}

	// Q4 點擊 "沒有小孩"
	index.prototype.checkKid = function(className) {
		if (!$(className).hasClass('is-checked')) {
			if ($('.dog').siblings().find('.is-show').length === 0) {
				$('.dog .doll').attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
			} else {
				$('[data-age]').val(0).change();
				$('.dog').siblings().find('.is-show').addClass('ani-reverse');
				$('.ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
					$(this).removeClass('ani-reverse is-show');

					if ($('.ani-reverse.is-show').length === 0) {
						$('.dog .doll').attr('class', 'doll is-show').off('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend');
					}
				});
			}
		} else {
			$('.dog .doll').addClass('ani-reverse').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
				$(this).removeClass('ani-reverse is-show');
			});
		}
		$(className).toggleClass('is-checked');
	}

	projects.$w.load(function(){
		$('.age-slider').ionRangeSlider({
			min: 20,
			max: 84,
			from: common._prevAge,
			max_postfix: '+',
			onStart: function (data) {
				common._prevAge = data.min;
			},
			onFinish: function (data) {
				// console.log(data);
				if ((data.from >= common.ageRange[1] && data.from < common.ageRange[2]) && common._prevAge < common.ageRange[0]) {
					// 青年拉到老年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'y-t-o');
				} else if ((data.from >= common.ageRange[1] && data.from < common.ageRange[2]) && (common._prevAge >= common.ageRange[0] && common._prevAge < common.ageRange[1])) {
					// 中年拉到老年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'm-t-o');
				} else if ((data.from >= common.ageRange[1] && data.from < common.ageRange[2]) && common._prevAge >= common.ageRange[2]) {
					// 人瑞拉到老年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'c-t-o');
				} else if ((data.from >= common.ageRange[0] && data.from < common.ageRange[1]) && common._prevAge < common.ageRange[0]) {
					// 青年拉到中年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'y-t-m');
				} else if ((data.from >= common.ageRange[0] && data.from < common.ageRange[1]) && (common._prevAge >= common.ageRange[1] && common._prevAge < common.ageRange[2])) {
					// 老年拉到中年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'o-t-m');
				} else if ((data.from >= common.ageRange[0] && data.from < common.ageRange[1]) && common._prevAge >= common.ageRange[2]) {
					// 人瑞拉到中年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'c-t-m');
				} else if (data.from < common.ageRange[0] && (common._prevAge >= common.ageRange[1] && common._prevAge < common.ageRange[2])) {
					// 老年拉到青年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'o-t-y');
				} else if (data.from < common.ageRange[0] && (common._prevAge >= common.ageRange[0] && common._prevAge < common.ageRange[1])) {
					// 中年拉到青年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'm-t-y');
				} else if (data.from < common.ageRange[0] && common._prevAge >= common.ageRange[2]) {
					// 人瑞拉到青年
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'c-t-y');
				} else if (data.from >= common.ageRange[2] && common._prevAge < common.ageRange[0]) {
					// 青年拉到人瑞
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'y-t-c');
				} else if (data.from >= common.ageRange[2] && (common._prevAge >= common.ageRange[0] && common._prevAge < common.ageRange[1])) {
					// 中年拉到人瑞
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'm-t-c');
				} else if (data.from >= common.ageRange[2] && (common._prevAge >= common.ageRange[1] && common._prevAge < common.ageRange[2])) {
					// 老年拉到人瑞
					$('.cut-3 ' + common._imageWrap).attr('data-age', 'o-t-c');
				} else {
					// 不改變
				}
				common._prevAge = data.from;
			}
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

			$(common._required).on('click', function(){
				$(this).toggleClass('is-checked');
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
						$(common._transition).attr('data-reverse', $another.attr('data-meta'));

						setTimeout(function(){
							$(common._transition).attr({
								'data-reverse': '',
								'data-select': $this.attr('data-meta')
							});
						}, (parseFloat($('[data-reverse="' + $another.attr('data-meta') + '"]').css('animation-duration'), 10) + parseFloat($('[data-reverse="' + $another.attr('data-meta') + '"]').css('animation-delay'), 10)) * 1000);
					} else {
						$(common._transition).attr('data-select', $(this).attr('data-meta'));
					}
				}
			} else if ($(common._lContent).hasClass('quest-4')) {
				common.checkKid('.cut-4 ' + common._checkbox);
			} else if ($(common._lContent).hasClass('quest-5')) {
				var $another = $(this).parent().siblings().find(common._checkbox),
					_meta    = $(this).data('meta');

				if (!$(this).hasClass('is-checked')) {
					$(this).addClass('is-checked');
				}

				if ($another.hasClass('is-checked')) {
					// 切換選取時要先跑復原動畫
					$another.removeClass('is-checked');
					$('.cut-5 ' + common._imageWrap).addClass('ani-reverse');

					setTimeout(function(){
						$('.cut-5 ' + common._imageWrap).attr('class', 'image-wrap ' + _meta);
					}, (parseFloat($('.cut-5 ' + common._imageWrap).css('animation-duration'), 10) + parseFloat($('.cut-5 ' + common._imageWrap).css('animation-delay'), 10)) * 1000);
				} else {
					$('.cut-5 ' + common._imageWrap).attr('class', 'image-wrap ' + _meta);
				}
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
				} else {
					$(common._transition).addClass('chosen-' + _meta);

					$quest.attr({
						'class': 'l-content quest quest-' + (_num + _direct),
						'data-quest': _num + _direct
					});

					if (_num === 3) {
						common.slider();
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
					common.slider();
				}
			}
		});

		common.slider();
	});

	projects.$d.ready(function(){
		$('img.b-lazy').lazyload();
	});
}(window, document, $));