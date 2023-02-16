$(document).ready(function () {
	$('.testimonials__slider').slick({
		arrows: true,
		dots: false,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		Infinity: false,
		waitForAnimate: false,
		variableWidth: false,
		swipe: false,
		speed: 400,
		responsive: [{
			breakpoint: 768,
			settings: {
				swipe: true,
				slidesToShow: 1,
			}
		}]
	});
});
$(document).ready(function () {
	$('.introduction__slider').slick({
		arrows: true,
		dots: false,
		centerMode: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		Infinity: false,
		waitForAnimate: false,
		variableWidth: false,
		speed: 400,
	});
});