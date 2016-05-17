(function (window, document, jQuery, undefined) {
	'use strict';

	Projects.Factory.$W.load(function(e){
		Projects.Factory.Canvas.Setting(['/Content/img/boy.png'], {bow: [0, 6, false],recover: {frames: Projects.Factory.Reverse([6, 0]),next: false}}, [[0,0,148,239,0,-98.4,98.5],[148,0,136,235,0,-104.4,94.5],[284,0,115,232,0,-114.4,90.5],[399,0,107,228,0,-106.4,85.5],[0,239,104,224,0,-98.4,80.5],[104,239,104,225,0,-98.4,81.5],[0,239,104,224,0,-98.4,80.5]]);
		Projects.Factory.Canvas.Setting(['/Content/img/girl.png'], {bow: [0, 11, false],recover: {frames: Projects.Factory.Reverse([11, 0]),next: false}}, [[0,0,151,235,0,244.9,94.15],[151,0,81,234,0,215.9,92.15],[232,0,87,233,0,217.9,90.15],[319,0,96,233,0,218.9,89.15],[0,235,105,231,0,222.9,85.15],[105,235,117,231,0,228.9,84.15],[222,235,125,227,0,231.9,79.15],[347,235,125,219,0,231.9,75.15],[0,466,125,219,0,231.9,75.15],[125,466,125,220,0,231.9,75.15],[250,466,125,220,0,231.9,75.15],[125,466,125,220,0,231.9,75.15]]);
	});
	Projects.Factory.$D.ready(function(e){});
}(window, document, $));