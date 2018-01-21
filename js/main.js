$(document).ready(function() {
	$(document).mousemove(function(event) {
		cx = Math.ceil($(window).width() / 1.8);
		cy = Math.ceil($(window).height() / 1.8);
		dx = event.pageX - cx;
		dy = event.pageY - cy;

		var tiltx;
		if(dy < 310) {
			tiltx = (dy / cy);
		} else {
			tiltx = (310 / cy);
		}
		tilty = -(dx / cx);
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
		degree = (radius * 20);

		$('#head').css('-webkit-transform', 'rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');
		$('#head').css('transform', 'rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');

		ballCoords();

	});

	$('.title span').click(function(){
		var triangles = this.children;
		for(var i = 0; i < triangles.length; i++){
			triangles[i].style.right = '-200px';
			triangles[i].style.opacity = 0;
		}
	})

	setTimeout(function(){

		var rect1 = anime({
		  targets: '.rect-1',
		  translateX: '-100%',
		  easing: 'easeInOutQuart',
		  duration: 3000,
		  delay: 500,
		  direction: 'reverse'
		});

		var rect2 = anime({
		  targets: '.rect-2',
		  translateY: '100%',
		  easing: 'easeInOutQuart',
		  duration: 3000,
		  delay: 1500,
		  direction: 'reverse'
		});

		var rect3 = anime({
		  targets: '.rect-3',
		  translateY: '-100%',
		  easing: 'easeInOutQuart',
		  duration: 3000,
		  delay: 2500,
		  direction: 'reverse'
		});

		var rect4 = anime({
		  targets: '.rect-4',
		  translateY: '-100%',
		  translateX: '100%',
		  easing: 'easeInOutQuart',
		  duration: 3000,
		  delay: 3500,
		  direction: 'reverse'
		});

	}, 2000)

	var ball = $("#ball");

	function ballCoords(mouseEvent) {
	  var xpos;
	  var ypos;
	  
	  if (mouseEvent) {
	    
	    //FireFox
	    xpos = mouseEvent.pageX + "px";
	    ypos = mouseEvent.pageY + "px";
	    
	  } else {
	    
	    //IE
	    xpos = window.event.x + document.body.scrollLeft - 2;
	    ypos = window.event.y + document.body.scrollTop - 2;
	    
	  }
	  
	  ball.css('top', ypos);
	  ball.css('left', xpos);
	}

});