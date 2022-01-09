$(document).ready(function () {
	$('.main-slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		waitForAnimate: true,
		speed: 500,
		variableWidth: true,
		autoplay: false,
		autoplaySpeed: 3000,
		infinite: true,
		draggable: true,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 2,
				},

			},
			{
				breakpoint: 425,
				settings: {
					slidesToShow: 2,
				},

			},
			{
				breakpoint: 1590,
				settings: {
					slidesToShow: 3,
				},

			},
			{
				breakpoint: 1690,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 2000,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 2560,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 4,
				}
			}
		]
	});
});
$(document).ready(function () {
	$('.sports-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 8,
		slidesToScroll: 2,
		speed: 500,
		variableWidth: true,
		draggable: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 6,
				},

			},
			{
				breakpoint: 425,
				settings: {
					slidesToShow: 6,
				},

			},
			{
				breakpoint: 1590,
				settings: {
					slidesToShow: 6,
				},

			},
			{
				breakpoint: 1690,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 2000,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 2560,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 6,
				}
			}
		]
	});
});