(function (window, document, jQuery, undefined) {
	'use strict';

	var Projects = {
		Factory : {
			W            : $(window),
			D            : $(document),
			HB           : $('html , body'),
			H            : $('html'),
			B            : $('body'),
			LHeaderGA    : $('.l-header .ga_click_trace'),
			LContent     : $('.l-content'),
			JqFlipCard   : $('.l-content.index').find('.jq-flip-card'),
			Pointer      : $('.l-content.game').find('.pointer'),
			BtnGogoro    : $('.l-content.game').find('.btn-wording'),
			Announced    : $('.l-content.game').find('.announced .wording'),
			MainContent  : $('.l-content.game').find('.main-content'),
			CongratBox   : $('.l-content.get-gift').find('.congratulation'),
			SerialBox    : $('.l-content.get-gift').find('.award-number'),
			GameStatus   : localStorage.getItem('lazybag'),
			Device       : /Android|webOS|iPad|BlackBerry/i,
			UserAgent    : null,
			Dynamic      : null,
			FerrisWord   : ['祝福你有<br>美好的一天', '不要氣餒，<br>好運隨時降臨！', '笑一個嘛！<br>幸運之神馬上到...'],
			BtnWording   : ['你中獎了！領獎就差幾步驟，快來完成！', '沒關係，點我還可領取三大好禮！'],
			GetUserAgent : function() {
				var $this = this;
				
				if ( $this.W.width() < 768 ) {
					$this.UserAgent = 'Mobile';
				} else {
					if ( $this.Device.test(navigator.userAgent) ) {
						$this.UserAgent = 'Tablet';
					} else {
						$this.UserAgent = 'PC';
					}
				}

				if (navigator.userAgent.indexOf('MSIE 10') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
					$this.UserAgent = 'IE';
				} else if (navigator.userAgent.indexOf('MSIE 8') > 0 || navigator.userAgent.indexOf('MSIE 9') > 0) {
					$this.UserAgent = 'IE89';
				}
				
				$this.OS = $this.UserAgent !== 'PC' ? ( /iPad|iPhone|iPod/i.test(navigator.userAgent) ? 'IOS' : 'Android' ) : null;
				$this.Dynamic = $this.Device.test(navigator.userAgent) ? 'webkitAnimationEnd webkitTransitionEnd' : 'animationend transitionend';
			},
			Menu         : {
				Init : function(Element) {
					Projects.Factory.LHeaderGA.attr('ga_cat', 'c_menu_bar');
				},
				Click : function(e , Element) {
					$(Element).parent().toggleClass('is-active');
				}
			},
			LazyBag      : {
				Click : function(e , Element) {
					if (Projects.Factory.GameStatus !== null) {

					} else {
						alert('完成步驟才能下載！');
					}
				}
			},
			Start        : {
				Click     : function(Element) {
					if (!$(Element).hasClass('block-ani') && !Projects.Factory.LContent.hasClass('step-4')) {
						$(Element).addClass('block-ani');
						if (Projects.Factory.LContent.hasClass(Projects.Factory.LContent.data('step1'))) {
							$(Element).attr('ga_label', 'clickgame1');
							Projects.Factory.FlipCard.GetCount('.counter-box', [Projects.Factory.JqFlipCard.eq(0).data('array1').toString().split('') , Projects.Factory.JqFlipCard.eq(1).data('array1').toString().split('')]);
						} else if (Projects.Factory.LContent.hasClass(Projects.Factory.LContent.data('step2'))) {
							$(Element).attr('ga_label', 'clickgame2');
							Projects.Factory.FlipCard.GetCount('.counter-box', [Projects.Factory.JqFlipCard.eq(0).data('array2').toString().split('') , Projects.Factory.JqFlipCard.eq(1).data('array2').toString().split('')]);
						} else if (Projects.Factory.LContent.hasClass(Projects.Factory.LContent.data('step3'))) {
							$(Element).attr('ga_label', 'clickgame3');
							Projects.Factory.FlipCard.GetCount('.counter-box', [Projects.Factory.JqFlipCard.eq(0).data('array3').toString().split('') , Projects.Factory.JqFlipCard.eq(1).data('array3').toString().split('')]);
						}

						Projects.Factory.LContent.removeClass('show-filter');
					}
				}
			},
			FlipCard     : {
				Count : [],
				SetTimer : [],
				OnEnd : 0,
				GetCount : function(Element, count) {
					var $this = this;
					
					for (var i = 0; i < count.length; i++) {
						$this.Count.push([]);
						$this.SetTimer.push([]);

						for (var j = 0; j < count[i].length; j++) {
							$this.Count[i].push(0);
							$this.SetTimer[i].push(null);

							$(Element).eq(i).find('.card').eq(j).attr('data-index' , j);
						};
					}

					$('.is-end').removeClass('is-end');
					$this.Init(Element, count);
				},
				Init : function(Element, count) {
					var $this = this,
						$card = null;

					for (var i = 0; i < count.length; i++) {
						for (var j = 0; j < count[i].length; j++) {
							$card = $(Element).eq(i).find('.card');

							if ( $('.is-end').length === $('.card').length ) {
								if (Projects.Factory.LContent.hasClass(Projects.Factory.LContent.data('step1'))) {
									Projects.Factory.LContent.removeClass(Projects.Factory.LContent.data('step1')).addClass(Projects.Factory.LContent.data('step2') + ' show-filter');
								} else if (Projects.Factory.LContent.hasClass(Projects.Factory.LContent.data('step2'))) {
									Projects.Factory.LContent.removeClass(Projects.Factory.LContent.data('step2')).addClass(Projects.Factory.LContent.data('step3'));
								} else if (Projects.Factory.LContent.hasClass(Projects.Factory.LContent.data('step3'))) {
									Projects.Factory.LContent.removeClass(Projects.Factory.LContent.data('step3')).addClass(Projects.Factory.LContent.data('step4') + ' show-filter');
								}
								$('.jq-start').removeClass('block-ani');

								return false;
							}

							if ( $this.Count[i][j] === parseInt(count[i][j], 10) ) {
								window.clearInterval($this.SetTimer[i][j]);

								$card.eq(j).addClass('is-end');
							} else {
								$this.Count[i][j] ++;

								if ( $this.Count[i][j] > 9 ) {
									$this.Count[i][j] = 0;
								}

								$card.eq(j).find('.bottom-half em, .card-top em').text($this.Count[i][j]);

								if (Projects.Factory.UserAgent === 'IE') {
									$card.eq(j).find('.card-animate').addClass('ani-on').delay((parseFloat($card.find('.card-animate.ani-on').css('transition-duration') , 10) * 1000)/2).queue(function(){
										$(this).addClass('for-ie');
										$(this).dequeue();
									}).delay((parseFloat($card.find('.card-animate.ani-on').css('transition-duration') , 10) * 1000)/2).queue(function(){
										var $i = $(this).parent().parent().parent().index(),
											$j = $(this).parent().data('index');

										$(Element).eq($i).find('.card').eq($j).find('.top-half em, .card-bottom em').text($this.Count[$i][$j]);
										$(this).removeClass('ani-on for-ie');
										$(this).dequeue();
									});
								} else if (Projects.Factory.UserAgent === 'IE89') {
									$(Element).eq(i).find('.card').eq(j).find('.card-bottom em').delay(200).queue(function(){
										var $i = $(this).parents('.counter-box').index(),
											$j = $(this).parents('.card').data('index');

										$(this).text($this.Count[$i][$j]);
										$(this).dequeue();
									});
								} else {
									$card.eq(j).find('.card-animate').addClass('ani-on').delay((parseFloat($card.find('.card-animate.ani-on').css('transition-duration') , 10) * 1000)/2).queue(function(){
										var $i = $(this).parent().parent().parent().index(),
											$j = $(this).parent().data('index');

										$(this).removeClass('ani-on');
										$(Element).eq($i).find('.card').eq($j).find('.top-half em, .card-bottom em').text($this.Count[$i][$j]);
										$(this).dequeue();
									});
								}

								window.clearInterval($this.SetTimer[i][j]);

								$this.SetTimer[i][j] = setInterval(function(){
									$this.Init(Element, count);
								} , ((parseFloat($card.find('.card-animate.ani-on').css('transition-duration') , 10) * 1000) + 50));
							}
						}
					}
				}
			},
			FB           : {
				UserID : null,
				UserEMail : null,
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

					$('.btn-play').addClass('disable');
					Projects.Factory.MainContent.removeClass('before').addClass('loading');
					FB.getLoginStatus(function (response) {
						if ( response.authResponse ) {
							$this.UserID = response.authResponse.userID;

							// FB.api('/me?fields=email', function(response) {
							// 	$this.UserEMail = response.email;
								Projects.Factory.Play.Click($this.UserID, $this.UserEMail);
							// });
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

							// FB.api('/me?fields=email', function(response) {
							// 	$this.UserEMail = response.email;
								Projects.Factory.Play.Click($this.UserID, $this.UserEMail);
							// });
						} else {
							alert('須同意應用程式');
						}
					} , {scope : 'email'});
				}
			},
			Play         : {
				Award : null,
				Money : null,
				Label : null,
				Click : function(fbid, email) {
					var $this = this;

					Projects.Factory.MainContent.removeClass('loading');
					if (Projects.Factory.UserAgent === 'IE89') {
						$('.award-wheel').addClass('go-ani');
					} else {
						Projects.Factory.Pointer.addClass('go-ani');
					}

					$.ajax({
						type     : 'POST',
						url      : 'http://richart-vip.sugarfun.com.tw/api/lottery',
						data     : {
							fbid  : fbid,
							email : ''
						},
						dataType : 'json',
						success  : function(data) {
							if (data.prize === '300') {
								$this.Award = 'failure';
								$this.Money = '300';
								$this.Label = 'submit_lose';
								Projects.Factory.Announced.addClass('failure').html(Projects.Factory.FerrisWord[Math.round(Math.random()*2)]);
								Projects.Factory.BtnGogoro.text(Projects.Factory.BtnWording[1]);
								$('.btn-gogoro').attr('ga_label', $this.Label);
								sessionStorage.setItem('wording', Projects.Factory.FerrisWord[Math.round(Math.random()*2)]);
							} else {
								if (data.prize === '500') {
									$this.Award = 'thousand-half';
									$this.Money = '500';
									$this.Label = 'submit_win500';
								} else if (data.prize === '1000') {
									$this.Award = 'thousand-1';
									$this.Money = '1,000';
									$this.Label = 'submit_win1000';
								} else if (data.prize === '5000') {
									$this.Award = 'thousand-5';
									$this.Money = '5,000';
									$this.Label = 'submit_win5000';
								} else if (data.prize === '10000') {
									$this.Award = 'thousand-10';
									$this.Money = '10,000';
									$this.Label = 'submit_win10000';
								}
								Projects.Factory.Announced.html('恭喜你！獨得<br>現金' + $this.Money + '元');
								Projects.Factory.BtnGogoro.text(Projects.Factory.BtnWording[0]);
								$('.btn-gogoro').attr('ga_label', $this.Label);
								sessionStorage.setItem('wording', '恭喜你！加碼獲得<br><strong>現金<b class="prize">' + $this.Money + '</b>元</strong>');
							}
							sessionStorage.setItem('serial', data.serial);
							sessionStorage.setItem('class', $this.Award + ' is-show');
						},
						complete : function(data) {
							if (Projects.Factory.UserAgent === 'IE89') {
								$('.award-wheel').removeClass('go-ani').addClass($this.Award);
								Projects.Factory.HB.delay(1000).queue(function(e){
									$('.award-wheel').removeClass($this.Award);
									Projects.Factory.MainContent.addClass('after');
									Projects.Factory.HB.dequeue().animate({
										scrollTop : $('.ferris-wheel').offset().top
									});
								}, 700);
							} else {
								Projects.Factory.Pointer.removeClass('go-ani').addClass($this.Award);
								Projects.Factory.HB.delay(1000).queue(function(e){
									Projects.Factory.MainContent.addClass('after');
									Projects.Factory.HB.dequeue().animate({
										scrollTop : $('.ferris-wheel').offset().top
									});
								}, 700);
							}
						}
					});
				}
			},
			GetSession   : {
				Init : function() {
					var _serial  = sessionStorage.getItem('serial'),
						_class   = (sessionStorage.getItem('class') !== null) ? sessionStorage.getItem('class') : '',
						_wording = sessionStorage.getItem('wording');

					Projects.Factory.CongratBox.addClass(_class).find('em').html(_wording);
					Projects.Factory.SerialBox.val(_serial);
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