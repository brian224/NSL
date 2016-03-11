(function (window, document, jQuery, undefined) {
	'use strict';

	$('.jq-menu').on('click' , function(e){
		e.preventDefault();
		Projects.Factory.Menu.Click(e, this);
	});

	$('.jq-lazybag').on('click' , function(e){
		e.preventDefault();
		Projects.Factory.LazyBag.Click(e, this);
	});

	$('.jq-start').on('click' , function(e){
		e.preventDefault();
		Projects.Factory.Start.Click(this);
	});

	$('.jq-complete').on('click' , function(){
		localStorage.setItem('lazybag', 'done');
	});

	$(window).load(function(e){
		$('.jq-play').on('click' , function(e){
			if (!$(this).hasClass('disable')) {
				e.preventDefault();
				Projects.Factory.FB.GetLoaginState();
			}
		});
	});

	$(document).ready(function(e){
		Projects.Factory.Menu.Init();
		Projects.Factory.FB.Init();
		Projects.Factory.GetUserAgent();
	});
}(window, document, $));