$(function () {

	var flowers = ["Bordeaux Graves", "Bordeaux Graves supérieures", "Bordeaux Côtes-de-blaye", "Bordeaux Graves", "Bordeaux entre-deux-mers  ", "Bordeaux Graves", "Bordeaux Graves supérieures", "Bordeaux Côtes-de-blaye", "Bordeaux Graves", "Bordeaux entre-deux-mers  ", "Bordeaux Graves", "Bordeaux Graves supérieures", "Bordeaux Côtes-de-blaye", "Bordeaux Graves", "Bordeaux entre-deux-mers  ", "Bordeaux Côtes-de-blaye", "Bordeaux Graves", "Bordeaux entre-deux-mers  ", "Bordeaux Côtes-de-blaye", "Bordeaux Graves", "Bordeaux entre-deux-mers  ", "Bordeaux Côtes-de-blaye", "Bordeaux Graves", "Bordeaux entre-deux-mers  "];

	$('#acInput').autocomplete({
		source: flowers
	})
});

$(document).ready(function () {
	$('.arrow').click(function (event) {
		if ($('.hidden').hasClass('one')) {
			$('.arrow').not($(this)).removeClass('active');
			$('.list__dots').not($(this)).toggleClass('active');
			$('.hidden').not($(this).prev()).slideUp(300);
		}
		$(this).toggleClass('active').prev().slideToggle(300);
	});
});
$(document).ready(function () {
	$(".slider").slider({
		animate: true,
		range: "min",
		value: 7,
		min: 7,
		max: 9,
		step: 1,
		opacity: 0.5,

		slide: function (event, ui) {
			$(".slider-result").html(ui.value);
		},

		change: function (event, ui) {
			$('#znch').attr('value', ui.value);
		}

	});
});


$(document).ready(function () {
	$('.more__btn').click(function (event) {
		$('.more__btn').hide();
		$('.more__body').not($(this)).addClass('show');
	});
});

$('[href^="#anchor"]').on('click', function () {
	let href = $(this).attr('href'), elem = $(document).find(href);
	if (elem.length > 0) {
		let posY = elem.eq(0).offset().top;
		$('html, body').animate({
			scrollTop: posY
		}, 1000);
	}
	return false;
});
