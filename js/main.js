$(document).ready(function() {
	function yScroll() {
		var leftH = 89;
		var rightH = 62;
		var yPos = window.pageYOffset;
		// if(yPos < 330) {
		// 	$(document).mousemove(function(event) {
		// 	  cx = Math.ceil($(window).width() / 1.8);
		// 	  cy = Math.ceil($(window).height() / 1.8);
		// 	  dx = event.pageX - cx;
		// 	  dy = event.pageY - cy;

		// 	  var tiltx;
		// 	  if(dy < 310) {
		// 	  	tiltx = (dy / cy);
		// 	  } else {
		// 	  	tiltx = (310 / cy);
		// 	  }
		// 	  tilty = -(dx / cx);
		// 	  radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
		// 	  degree = (radius * 20);

		// 	  $('#head').css('-webkit-transform', 'rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');
		// 	  $('#head').css('transform', 'rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');

		// 	});
		// }
		var left = leftH + (yPos / leftH) * 3.5;
		var right = rightH + (yPos / rightH) * 3.5;
		if (yPos > 100) {
			if(left < 100){
				$('#polygon').css(`clip-path`, `polygon(0 ${left}%, 100% ${right}%, 100% 100%, 0% 100%)`);
			} else if(right < 100){
				$('#polygon').css(`clip-path`, `polygon(0 100%, 100% ${right}%, 100% 100%, 0% 100%)`);
			}
		}
	}
	window.addEventListener("scroll", yScroll);
});