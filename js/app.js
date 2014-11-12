$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		//alert('mousenter works');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		//alert('mouseleave works');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
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
		//console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
		$('.ryu-ready').show();
	});
	/*$('.ryu').keydown(function() {
		alert(event.which);
	};*/
})

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}
