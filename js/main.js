$(document).ready(function() {

	var loadingText = anime({
	  targets: '.loading-screen p, #progressbar, #loading',
	  opacity: 0,
	  duration: 11000,
	  delay: 14700
	});

	var loadingOne = anime({
	  targets: '.loading-screen.one',
	  translateX: '-100%',
	  easing: 'easeInSine',
	  duration: 3000,
	  delay: 15000
	});

	var loadingOne = anime({
	  targets: '.loading-screen.two',
	  translateX: '100%',
	  easing: 'easeInSine',
	  duration: 4000,
	  delay: 15200
	});

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
			triangles[i].style.right = '-300px';
		}
	})

	setTimeout(function(){

		var rect1 = anime({
		  targets: '.rect-1',
		  translateX: '-600%',
		  width: {
		    value: '+=500',
		    duration: 5000,
		    easing: 'easeInCirc'
		  },
		  easing: 'easeInOutQuart',
		  duration: 5000,
		  direction: 'reverse',
		  begin: function(anim) {
		    setTimeout(function(){
		      $('.rect-1').show()
		    }, 100)
		  }
		});

		var rect2 = anime({
		  targets: '.rect-2',
		  translateY: '500%',
		  height: {
		    value: '+=200',
		    duration: 6000,
		    easing: 'easeInCirc'
		  },
		  easing: 'easeInOutQuart',
		  duration: 6000,
		  direction: 'reverse',
		  begin: function(anim) {
		    setTimeout(function(){
		      $('.rect-2').show()
		    }, 100)
		  }
		});

		var rect3 = anime({
		  targets: '.rect-3',
		  translateY: '-500%',
		  height: {
		    value: '+=200',
		    duration: 7000,
		    easing: 'easeInCirc'
		  },
		  easing: 'easeInOutQuart',
		  duration: 7000,
		  direction: 'reverse',
		  begin: function(anim) {
		    setTimeout(function(){
		      $('.rect-3').show()
		    }, 100)
		  }
		});

		var rect4 = anime({
		  targets: '.rect-4',
		  translateY: '-500%',
		  translateX: '500%',
		  easing: 'easeInOutQuart',
		  height: {
		    value: '+=200',
		    duration: 8000,
		    easing: 'easeInCirc'
		  },
		  width: {
		    value: '+=200',
		    duration: 8000,
		    easing: 'easeInCirc'
		  },
		  duration: 7500,
		  direction: 'reverse',
		  begin: function(anim) {
		    setTimeout(function(){
		      $('.rect-4').show()
		    }, 100)
		  }
		});

	}, 15400)

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