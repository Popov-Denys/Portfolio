$(document).ready(function () {
	$('.testimonials__slider').slick({
		arrows: false, /**/
		dots: true,  /**/
		adaptiveHeight: false, /*высота слайда по высоте картинки(.slick-track{display:flex, align-items: flex-start,})*/
		slidesToShow: 1, /*количество отображаемых слайдов*/
		slidesToScroll: 1,/*количество пролистываемых слайдов*/
		speed: 300,/*скорость пролистывания слайдов*/
		easing: 'ease',/*тип анимации при смене слайда*/
		infinite: false,/*бесконечность слайдера*/
		initialSlide: 0,/*первый по счёту слайд*/
		autoplay: false, /*автопроигрывание*/
		autoplaySpeed: 0, /*скорость автопроигрывания*/
		pauseOnFocus: true,/*пауза авт. при клике*/
		pauseOnHover: true,/*пауза авт. при наведении*/
		pauseOnDotsHover: true,/*пауза авт. при наведении на точки*/
		draggable: true,/*свайп на пк*/
		swipe: true,/*свайп на телефоне*/
		touchThreshould: 5,/*расстояние свайпов до конца слайдера*/
		touchMove: true,/*отключает свайп НО оставляет возможность использования стрелок*/
		waitForAnimate: true,/*ожидание конца анимации прокрутки*/
		centerMode: false,/* слайд по центру слайдера ВАЖНО*/
		variableWidth: false,/*слайды занимают весь слайдер ВАЖНО*/

	});
});