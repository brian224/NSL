(function(window) {
	boy_frame = function() {
		this.initialize();
	}
	boy_frame._SpriteSheet = new createjs.SpriteSheet({
		images: ['/Content/img/boy.png'],
		animations: {
			bow: [0, 6, false],
			recover: {
				frames: reverse([6, 0]),
				next: false
			}
		},
		frames: [
			[0,0,148,239,0,-98.4,98.5],
			[148,0,136,235,0,-104.4,94.5],
			[284,0,115,232,0,-114.4,90.5],
			[399,0,107,228,0,-106.4,85.5],
			[0,239,104,224,0,-98.4,80.5],
			[104,239,104,225,0,-98.4,81.5],
			[0,239,104,224,0,-98.4,80.5]
		]});
	var boy_frame_p = boy_frame.prototype = new createjs.Sprite();
	boy_frame_p.Sprite_initialize = boy_frame_p.initialize;
	boy_frame_p.initialize = function() {
		this.Sprite_initialize(boy_frame._SpriteSheet);
		this.paused = true;
	}
	window.boy_frame = boy_frame;

	girl_frame = function() {
		this.initialize();
	}
	girl_frame._SpriteSheet = new createjs.SpriteSheet({
		images: ['/Content/img/girl.png'],
		animations: {
			bow: [0, 11, false],
			recover: {
				frames: reverse([11, 0]),
				next: false
			}
		},
		frames: [
			[0,0,151,235,0,244.9,94.15],
			[151,0,81,234,0,215.9,92.15],
			[232,0,87,233,0,217.9,90.15],
			[319,0,96,233,0,218.9,89.15],
			[0,235,105,231,0,222.9,85.15],
			[105,235,117,231,0,228.9,84.15],
			[222,235,125,227,0,231.9,79.15],
			[347,235,125,219,0,231.9,75.15],
			[0,466,125,219,0,231.9,75.15],
			[125,466,125,220,0,231.9,75.15],
			[250,466,125,220,0,231.9,75.15],
			[125,466,125,220,0,231.9,75.15]
		]});
	var girl_frame_p = girl_frame.prototype = new createjs.Sprite();
	girl_frame_p.Sprite_initialize = girl_frame_p.initialize;
	girl_frame_p.initialize = function() {
		this.Sprite_initialize(girl_frame._SpriteSheet);
		this.paused = true;
	}
	window.girl_frame = girl_frame;
}(window));

function reverse(array) {
	var _start    = array[0],
		_end      = array[1],
		_newArray = [];

	for (var i = _start; i >= _end; i--) {
		_newArray.push(i);
	}

	return _newArray;
}

function init() {
	var canvas = document.getElementById('canvas');
	var stage = new createjs.Stage(canvas);

	// 從 flash 匯出成 easeljs 格式
	var boy  = new boy_frame();
	boy.x = canvas.width>>1;
	boy.y = canvas.height>>1;
	stage.addChild(boy);

	var girl = new girl_frame();
	girl.x = canvas.width>>1;
	girl.y = canvas.height>>1;
	stage.addChild(girl);

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

	girl.addEventListener('click', function(){
		girl.gotoAndPlay('bow');

		setTimeout(function() {
			girl.gotoAndPlay('recover');
		}, 1000);
	});
}