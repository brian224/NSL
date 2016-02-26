(function (window, document, jQuery, undefined) {
	'use strict';

	// if ( Projects.Factory.Device.test(navigator.userAgent) ) {
	// } else {
	// }

	$('.jq-menu').on('click' , function(e){
		e.preventDefault();
		Projects.Factory.Menu.Click(e, this);
	});

	$('.jq-start').on('click' , function(e){
		e.preventDefault();
		Projects.Factory.Start.Click();
	});

	$('.jq-play').on('click' , function(e){
		e.preventDefault();
		Projects.Factory.FB.GetLoaginState();
	});

	$(document).ready(function(e){
		Projects.Factory.FB.Init();
	});
}(window, document, $));