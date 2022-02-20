$(document).ready(function () {
	$('.features__slider').slick({
		arrows: false,
		dots: false,
		centerMode: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false,
		speed: 400,
		infinite: true,
	});
});
$(document).ready(function () {
	$('.features-mobile__slider').slick({
		arrows: true,
		dots: false,
		centerMode: false,
		variableWidth: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false,
		speed: 400,
		infinite: true,

	});
});
$(document).ready(function () {
	$('.gallery__slider').slick({
		arrows: false,
		dots: false,
		centerMode: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false,
		speed: 400,
		infinite: true,
	});
});
$(document).ready(function () {
	$('.gallery-small__slider').slick({
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		centerMode: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		waitForAnimate: false,
		speed: 400,
		infinite: true,

	});
});
$(document).ready(function () {
	$('.roadmap__slider').slick({
		arrows: false,
		dots: true,
		centerMode: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false,
		speed: 400,
		responsive: [{
			breakpoint: 920,
			settings: {
				vertical: true,
				verticalSwiping: true,
			}
		}]
	});
});