(function (window, document, jQuery, undefined) {
	'use strict';

	var Projects = {
		Factory : {
			W           : $(window),
			D           : $(document),
			HB          : $('html , body'),
			H           : $('html'),
			B           : $('body'),
			LContent    : $('.l-content'),
			Pointer     : $('.l-content.game').find('.pointer'),
			MainContent : $('.l-content.game').find('.main-content'),
			UserAgent   : null,
			FerrisWord  : ['祝福你有美好的一天', '不要氣餒，好運隨時降臨！', '笑一個嘛！幸運之神馬上到...'],
			BtnWording  : ['快來完成領獎步驟！再抽Gogoro', '點我領取三大好禮，再抽Gogoro'],
			Menu        : {
				Click : function(e , Element) {
					$(Element).parent().toggleClass('is-active');
				}
			},
			Start       : {
				Click : function(Element) {
					if (Projects.Factory.LContent.hasClass(Projects.Factory.LContent.data('step1'))) {
						Projects.Factory.LContent.removeClass(Projects.Factory.LContent.data('step1')).addClass(Projects.Factory.LContent.data('step2'));
					} else if (Projects.Factory.LContent.hasClass(Projects.Factory.LContent.data('step2'))) {
						Projects.Factory.LContent.removeClass(Projects.Factory.LContent.data('step2')).addClass(Projects.Factory.LContent.data('step3'));
					} else if (Projects.Factory.LContent.hasClass(Projects.Factory.LContent.data('step3'))) {
						Projects.Factory.LContent.removeClass(Projects.Factory.LContent.data('step3')).addClass(Projects.Factory.LContent.data('step4'));
					}
				}
			},
			FB : {
				UserID : null,
				Init : function() {
					window.fbAsyncInit = function(){
						FB.init({
							appId   : 192839774410784,
							status  : true,
							cookie  : true,
							xfbml   : true,
							version : 'v2.5'
						});
					};

					(function(d, s, id){
						var js,
						fjs = d.getElementsByTagName(s)[0];

						if ( d.getElementById(id) ) {return;}

						js     = d.createElement(s); js.id = id;
						js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.5&appId=192839774410784";

						fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));
				},
				GetLoaginState : function(Functions) {
					var $this = this;

					FB.getLoginStatus(function (response) {
						if ( response.authResponse ) {
							$this.UserID = response.authResponse.userID;
							// Functions();
							Projects.Factory.Play.Click();
						} else {
							$this.Login(Functions);
						}
					});
				},
				Login : function(Functions) {
					var $this = this;

					FB.login(function (response) {
						if ( response.authResponse ) {
							$this.UserID = response.authResponse.userID;
							// Functions();
							Projects.Factory.Play.Click();
						} else {
							alert('須同意應用程式');
						}
					} , {scope : 'email'});
				}
			},
			Play        : {
				Click : function(e) {
					Projects.Factory.MainContent.removeClass('before');
					Projects.Factory.Pointer.addClass('go-ani');

					setTimeout(function(){
						Projects.Factory.Pointer.removeClass('go-ani').addClass('thousand-10');
						Projects.Factory.HB.delay(1000).queue(function(e){
							Projects.Factory.MainContent.addClass('after');
							Projects.Factory.HB.dequeue().animate({
								scrollTop : $('.ferris-wheel').offset().top
							});
						}, 700);
					} , 1000);
				}
			}
		}
	}

	if ( ! window.Projects ) {
		window.Projects = Projects;
	} else {
		window.Projects = $.extend( {} , window.Projects , Projects );
	}
}(window, document, $));