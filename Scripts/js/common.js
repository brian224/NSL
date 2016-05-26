(function (window, document, jQuery, undefined) {
	'use strict';

	var common = new index();

	function index() {
	}

	projects.$w.load(function(){
		$('.jq-start').on('click', function(){
			$('.l-main').removeClass('is-index').addClass('is-quest');
		});

		$('.btn-check').on('click', function(){
			var $another = $(this).parent().siblings().find('.btn-check');

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
	});
	projects.$d.ready(function(){});
}(window, document, $));