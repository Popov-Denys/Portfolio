$(document).ready(function () {
	$('.homepage-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
	});
});
$(document).ready(function () {
	$('.casino__slider').slick({
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 3,
		variableWidth: true,
	});
});