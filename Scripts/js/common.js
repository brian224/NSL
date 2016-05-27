(function (window, document, jQuery, undefined) {
	'use strict';

	var common = new index();

	function index() {
		this._start    = '.jq-start';
		this._required = '.jq-required';
		this._lContent = '.l-content';
		this._checkbox = '.jq-checkbox';
	}

	projects.$w.load(function(){
		if ($(common._lContent).hasClass('index')) {
			$(common._start).on('click', function(){
				if ($(common._required).hasClass('is-checked')) {
					$('.l-main').removeClass('is-index').addClass('is-quest');
				} else {
					$(common._required).addClass('btn-shake');

					$(common._required).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
						$(this).removeClass('btn-shake');
					});
				}
			});

			$(common._required).on('click', function(){
				$(this).toggleClass('is-checked');
			});
		}

		if ($(common._lContent).hasClass('quest-1')) {
			$(common._checkbox).on('click', function(){
				var $another = $(this).parent().siblings().find(common._checkbox);

				if ($(this).hasClass('is-checked')) {
					$(this).removeClass('is-checked').addClass('ani-reverse');
				} else {
					$(this).addClass('is-checked').removeClass('ani-reverse')
				}

				if ($another.hasClass('is-checked')) {
					$another.removeClass('is-checked').addClass('ani-reverse');
				}
			});

			$('.image-wrap').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
				$(this).siblings().removeClass('ani-reverse');
			});
		}
	});
	projects.$d.ready(function(){});
}(window, document, $));