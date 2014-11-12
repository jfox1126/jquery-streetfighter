$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		//alert('mousenter works');
		$('.ryu-still').hide().removeClass('on');
		$('.ryu-ready').show().addClass("on");
	});
	$('.ryu').mouseleave(function() {
		//alert('mouseleave works');
		$('.ryu-ready').hide().removeClass('on');
		$('.ryu-still').show().addClass('on');
	});
	$('.ryu').mousedown(function() {
		//console.log('mousedown');
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate({'left': '500px'}, 700, 
			function() {
				$(this).hide();
				$(this).css('left', '-170px')
			}	
		);
		playHadouken();
	});
	$('.ryu').mouseup(function() {
		console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
		$('.ryu-ready').show();
	});
	$(document).keydown(function(event) {
		if (event.which === 88) {
			//alert("x pressed");
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	});
	$(document).keyup(function(event) {
		if (event.which === 88) {
			//alert("x pressed");
			$('.ryu-cool').hide();
			$('.on').show();
		}
	});
})

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}
