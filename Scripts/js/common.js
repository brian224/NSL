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
		this._questTitle = '.jq-title';
		this._exam       = [
			{
				'number' : '1',
				'title' : '你的性別？',
				'selection' : ['女', '男'],
				'selectMeta' : ['girl', 'boy']
			},
			{
				'number' : '2',
				'title' : '你婚了嗎？',
				'selection' : ['單身', '已婚'],
				'selectMeta' : ['single', 'merryed']
			},
			{
				'number' : '3',
				'title' : '您的年齡？',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '4',
				'title' : '你有小孩嗎？',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '5',
				'title' : '你正處於哪個人生階段？',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '6',
				'title' : '不好意思，你的年收入？',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '7',
				'title' : '日常支出支多少',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '8',
				'title' : '誰都不想破病',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '9',
				'title' : '醫療項目保障額度',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '10',
				'title' : '夢想三擇一',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '11',
				'title' : '無痛退休',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '12',
				'title' : '給兒女無憂的求學時光',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '13',
				'title' : '',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '14',
				'title' : '',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '15',
				'title' : '',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			},
			{
				'number' : '16',
				'title' : '',
				'selection' : ['', ''],
				'selectMeta' : ['', '']
			}
		];
	}

	projects.$w.load(function(){
		if ($(common._lContent).hasClass('index')) {
			$(common._start).on('click', function(){
				if ($(common._required).hasClass('is-checked')) {
					$('.l-main').removeClass('is-index').addClass('is-quest');

					$(common._lContent + '.index').on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						$(this).remove();
					});
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

		$(common._checkbox).on('click', function(){
			if ($(common._lContent).hasClass('quest-1')) {
				var $another = $(this).parent().siblings().find(common._checkbox);

				if ($(this).hasClass('is-checked')) {
					$(this).removeClass('is-checked').addClass('ani-reverse');
				} else {
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

				$('.choice-list').attr('data-first', '');

				if ($(this).hasClass('is-checked')) {
					$(this).removeClass('is-checked');
					$(common._transition).attr('data-select', '').attr('data-reverse', $(this).attr('data-meta'));
				} else {
					$(this).addClass('is-checked');
					$(common._transition).attr('data-select', $(this).attr('data-meta'));
				}

				if ($another.hasClass('is-checked')) {
					$another.removeClass('is-checked');
				}

				$('.choice-list').on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
					$(this).attr('data-reverse', '');
				});
			}
		});

		$(common._btnTopic).on('click', function(){
			var $quest   = $(common._lContent + '.quest'),
				_num     = parseInt($quest.attr('data-quest'), 10),
				_meta    = $quest.find('.is-checked').attr('data-meta'),
				_compare = '';

			if (_num === 1 && $(this).hasClass('btn-next')) {
				if (_meta !== undefined) {
					$(common._transition).addClass('chosen-' + _meta);

					$(common._questTitle).on('webkitTransitionEnd oTransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						$(this).find('em').text(common._exam[_num].title);

						for (var i = 0; i < common._exam[_num].selection.length; i++) {
							$(common._transition + ' .list').eq(i).find('.btn-check').attr('data-meta', common._exam[_num].selectMeta[i]);
							$(common._transition + ' .list').eq(i).find('em').text(common._exam[_num].selection[i]);
						};
					});
				}

				if (_meta === 'boy') {
					_compare = 'girl';
				} else if (_meta === 'girl') {
					_compare = 'boy';
				}
			}

			if (_compare !== '') {
				$(common._imageWrap + '.' + _compare).on('webkitAnimationEnd oAnimationend oAnimationEnd msAnimationEnd animationend', function(){
					$(common._checkbox).removeClass('is-checked');
					$quest.attr({
						'class': 'l-content quest quest-' + (_num + 1),
						'data-quest': _num + 1
					});
				});
			}
		});
	});
	projects.$d.ready(function(){
		$('img.b-lazy').lazyload();
	});
}(window, document, $));