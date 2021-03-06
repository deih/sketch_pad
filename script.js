var start = function(option) {
	$('#grid_container').html("");

	var input = prompt('Type an integer between 1 and 128');

	if (input >= 1 && input <= 128) {
		var square_size = $('#grid_container').width()/input -2;

		for(var i = 1; i <= input; i++) {
			for(var j = 1; i <= input; i++) {
				$('#grid_container').append('<div class="grid_square"></div>');
			}
			$('#grid_container').append('<div class="new_row"></div>');
		}
		$('.grid_square').css('width',square_size);
		$('.grid_square').css('height',square_size);

		$('.grid_square').mouseenter(function(){
			switch(option){
				case 1:
						$(this).addClass('grid_square_lit');
						break;
				case 2:
						var currentOpacity = $(this).css('opacity');
						if(currentOpacity > 0){
							$(this).css('opacity', currentOpacity - 0.1);
						}
						break;
				case 3:
						$(this).fadeTo(100, 0);
						$(this).mouseleave(function(){
							$(this).fadeTo(400,1);
						});
						break;
			}
		});
	}
	else {
		alert('You are crazy, go away.')
	}
}