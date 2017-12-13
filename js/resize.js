var scaleCoefficient;
$(function(){
	
	var bgW = 2560;
	var bgH = 1440;
	var relW = 2460;
	var relH = 1360;
	var actW = 1920;
	var actH = 1080;

	function updateSize() {
		var w = $(window).width();
		var h = $(window).height();
		var propW, calcPropW, propH, calcPropH, calcW, calcH, finPropW, finPropH;

		var proportion = bgH/bgW;
		var newHeight, newWidth;

		scaleCoefficient = w/bgW;
		$(".fg-resizable").css({
		 	"transform": "scale3d(" + scaleCoefficient + ", "+ scaleCoefficient +", " + scaleCoefficient + ")"
		});


		if (proportion > .5625){
			newHeight = w * .5625;
			scaleCoefficient = w/bgW;
			
		} else {
			scaleCoefficient = h/bgH;
		}
	}

	updateSize();
	$(window).on("resize", function(){
		updateSize();
	});
});