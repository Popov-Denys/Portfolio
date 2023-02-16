$('.hamburger').click(function () {
	$('.hamburger,.header__box,.header__menu').toggleClass('active');
	$('body').toggleClass('locked');
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