$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		autoplay: false,
		centerMode: false,
		infinite: true,
		variableWidth: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					centerMode: true,
					slidesToShow: 3,
					variableWidth: true
				}
			},
		],
		mobileFirst: true,
	});
});
var width = $("body").width();
console.log(width);

if (width > 768) {
	$('.reviews__body').masonry({
		// set itemSelector so .grid-sizer is not used in layout
		itemSelector: '.reviews__box',
		percentPosition: true
	})
}
$(document).ready(function () {
	$('.accordion__title').click(function (event) {
		if ($('.accordions__body').hasClass('simple')) {
			$('.accordion__title').not($(this)).removeClass('active');
			$('.accordion__body').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});