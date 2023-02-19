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
let mySlider = $('.story__slider').slick({
	arrows: true,
	dots: true,
	centerMode: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	waitForAnimate: false,
	speed: 400,
	//responsive: [{
	//breakpoint: 920,
	//settings: {
	//vertical: true,
	//verticalSwiping: true,
	//}
	//}]
});

// our mySlider dots
let dots = $('.slick-dots > LI', mySlider);

// before mySlider change slick event
mySlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

	// remove dot past classes on dots after next slide dot
	$(dots[nextSlide]).nextAll().removeClass('past');

	// add dot past classes on dots before next slide dot
	$(dots[nextSlide]).prevAll().addClass('past');

});