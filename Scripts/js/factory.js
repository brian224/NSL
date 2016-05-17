(function (window, document, jQuery, undefined) {
	'use strict';

	var Projects = {
		Factory : {
			$W      : $(window),
			$D      : $(document),
			$HB     : $('html , body'),
			$H      : $('html'),
			$B      : $('body'),
			Canvas  : {
				frame : null,
				Setting : function(img, ani, fra){
					Projects.Factory.Canvas.frame = function() {
						this.initialize();
					}
					Projects.Factory.Canvas.frame._SpriteSheet = new createjs.SpriteSheet({
						images: img,
						animations: ani,
						frames: fra
					});
					var frame_p = Projects.Factory.Canvas.frame.prototype = new createjs.Sprite();
					frame_p.Sprite_initialize = frame_p.initialize;
					frame_p.initialize = function() {
						this.Sprite_initialize(Projects.Factory.Canvas.frame._SpriteSheet);
						this.paused = true;
					}
					window.frame = Projects.Factory.Canvas.frame;

					Projects.Factory.Canvas.Init();
				},
				Init : function(){
					var canvas = document.getElementById('canvas');
					var stage = new createjs.Stage(canvas);

					// 從 flash 匯出成 easeljs 格式
					var boy = new Projects.Factory.Canvas.frame();
					boy.x = canvas.width>>1;
					boy.y = canvas.height>>1;
					stage.addChild(boy);

					createjs.Ticker.timingMode = createjs.Ticker.RAF;
					createjs.Ticker.addEventListener('tick', function(){
						stage.update();
					});

					boy.addEventListener('click', function(){
						boy.gotoAndPlay('bow');

						setTimeout(function() {
							boy.gotoAndPlay('recover');
						}, 1000);
					});
				}
			},
			Reverse : function(array) {
				var _start    = array[0],
					_end      = array[1],
					_newArray = [];

				for (var i = _start; i >= _end; i--) {
					_newArray.push(i);
				}

				return _newArray;
			}
		}
	}

	if ( ! window.Projects ) {
		window.Projects = Projects;
	} else {
		window.Projects = $.extend( {} , window.Projects , Projects );
	}
}(window, document, $));