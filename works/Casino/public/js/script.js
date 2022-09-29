$(document).ready(function () {
	$('#featured-tab').click(function (event) {
		if ($(this).hasClass('disabled')) {
			event.stopPropagation();
		}
		else {
			$('#featured-tab,#featured-box').addClass('active');
			$('#games-tab,#games-box,#tools-tab,#tools-box').removeClass('active');
		}

	});
});
$(document).ready(function () {
	$('#games-tab').click(function (event) {
		if ($(this).hasClass('disabled')) {
			event.stopPropagation();
		}
		else {
			$('#games-tab,#games-box').addClass('active');
			$('#featured-tab,#featured-box,#tools-tab,#tools-box').removeClass('active');
		}

	});
});
$(document).ready(function () {
	$('#tools-tab').click(function (event) {
		if ($(this).hasClass('disabled')) {
			event.stopPropagation();
		}
		else {
			$('#tools-tab,#tools-box').addClass('active');
			$('#games-tab,#games-box,#featured-tab,#featured-box').removeClass('active');
		}

	});
});
