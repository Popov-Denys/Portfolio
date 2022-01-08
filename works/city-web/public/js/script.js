$(document).ready(function () {
	$('.content-dropdown__list-li').click(function () {
		$(this).addClass("active");
		$(this).siblings(".content-dropdown__list-li").removeClass("active");
	});
});
$(document).ready(function () {
	$(".accordion").click(function (event) {
		$(this).toggleClass("active");
		$(this).children(".accordion-arrow").toggleClass("active");
		$(this).siblings().find(".accordion:first").toggleClass("open");
		if ($(this).hasClass('active')) {
		} else {
			$(this).siblings().find(".accordion").removeClass("open");
			$(this).siblings().find(".accordion").removeClass("active");
			$(this).siblings().find(".accordion-arrow").removeClass("active");
		}
		if ($(this).siblings().find(".accordion").hasClass('accordion')) {
		} else {
			$(this).removeClass("active");
		}
	});
});
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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

$(document).ready(function () {
	$('.drop-down').click(function (event) {
		$(this).children('.drop-down__list').addClass("open");
	});
});
$(document).mouseup(function (e) {
	var container = $(".drop-down__list");
	if (container.has(e.target).length === 0) {
		$('.drop-down__list').removeClass('open');
	}
});
$(document).ready(function () {
	$('.bet__close').click(function (event) {
		$(this).parent().parent('.bet__item').addClass("deleted");
	});
});
$(document).ready(function () {
	$('.search-input').focus(function (event) {
		$('.search__close').addClass('active');
	});
});
$(document).ready(function () {
	$('.search-input').click(function (event) {
		$(".search-input").val("");
	});
});
$(".search-input").one('click', function () {
	$(".search-recommended").addClass("active");
});
$('.search-input').on('keyup', function () {
	var $this = $(this),
		val = $this.val();

	if (val.length >= 3) {
		$('.search-result').addClass("active");
		$('.search-recommended,.search-recent__item').removeClass("active");
	} else {
		$('.search-result').removeClass("active");
	}
});
$('.bet-input').on('keyup', function () {
	var $this = $(this),
		val = $this.val();

	if (val.length >= 1) {
		$('.bet__button').addClass("active");
	} else {
		$('.bet__button').removeClass("active");
	}
});
$(document).mouseup(function (e) {
	var container = $(".search__input");
	if (container.has(e.target).length === 0) {
		$(".search-input").val("Search Event");
		$('.search__close,.search-recommended,.search-result,.search-recent__item').removeClass("active");
	}
});
$(document).ready(function () {
	$('.search__close').click(function () {
		$('.search-input').val('');
	});
});
$(document).ready(function () {
	$('.search-recent__clear').click(function () {
		$('.search-recent__item').addClass("active");
	});
});

$(document).ready(function () {
	$('.menu-sports__subitem-content_more').click(function () {
		$(this).hide();
		$(this).siblings().siblings(".menu-sports__subitem-content_fewer").show();
	});
});
$(document).ready(function () {
	$('.menu-sports__subitem-content_fewer').click(function () {
		$(this).hide();
		$(this).siblings().find(".accordion").removeClass("open");
		$(this).siblings().find(".accordion").removeClass("active");
		$(this).siblings().siblings(".menu-sports__subitem-content_more").show();
		$(this).siblings().siblings(".menu-sports__subitem-content_more").removeClass("active");
	});
});

$(document).ready(function () {
	$("input[data-type='number']").keyup(function (event) {

		if (event.which >= 37 && event.which <= 40) {
			event.preventDefault();
		}
		var $this = $(this);
		var num = $this.val().replace(/,/gi, "");
		var num2 = num.split(/(?=(?:\d{3})+$)/).join(",");
		console.log(num2);
		$this.val(num2);
	});
});
function ready() {
	document.getElementById("myDIV").style.overflowY = "scroll";
}

$(document).ready(function () {
	$('.left-panel__spoiler-content').click(function () {
		$(this).toggleClass("selected");
	});
});
$(document).ready(function () {
	$('.outcome').click(function () {
		$(this).toggleClass("selected");
	});
});
$(document).ready(function () {
	$('.left-panel__title-icon_svg').click(function () {
		if ($(this).parent('.left-panel__title-icon').hasClass('active')) {
			$(this).parent().parent().siblings().children('.left-panel__spoiler-content').removeClass("opened");
			$(this).parent('.left-panel__title-icon').removeClass("active");
		}
		else {
			$(this).parent('.left-panel__title-icon').addClass("active");
			$(this).parent().parent().siblings().children('.left-panel__spoiler-content').addClass("opened");

		}
	});
});
$(document).ready(function () {
	$('.sports-title__settings').click(function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass("active");
		}
		else {
			$(this).addClass("active");

		}
	});
});
$(document).ready(function () {
	$('.mybets__item').click(function () {
		$(".mybets__results").addClass("active");
	});
});
$(document).ready(function () {
	$('.filter__time').click(function () {
		$(this).parent().parent().parent().parent().siblings(".sports-spoilers_league").removeClass("active");
		$(this).parent().parent().parent().parent().siblings(".sports-spoilers_time").addClass("active");
	});
});
$(document).ready(function () {
	$('.filter__league').click(function () {
		$(this).parent().parent().parent().parent().siblings(".sports-spoilers_time").removeClass("active");
		$(this).parent().parent().parent().parent().siblings(".sports-spoilers_league").addClass("active");
	});
});
$(document).ready(function () {
	$('.left-panel__spoiler-outcome').click(function (event) {
		event.stopPropagation();
		$(this).toggleClass("active");
	});
});
$(document).ready(function () {
	$('bet__tab').click(function (event) {
		$(this).addClass('active');
		$('.mybets,#mybets-tab').removeClass('active');
	});
});
$(document).ready(function () {
	$('#betslip-tab').click(function (event) {
		$('.betslip,#betslip-tab').addClass('active');
		$('.mybets,#mybets-tab').removeClass('active');
	});
});
$(document).ready(function () {
	$('#betslip__button-activator').click(function (event) {
		$('.betslip__popup').addClass('active');
	});
});
$(document).mouseup(function (e) {
	var container = $(".betslip__popup-container");
	if (container.has(e.target).length === 0) {
		$(".betslip__popup").removeClass('active');
	}
});
$(document).ready(function () {
	$('.betslip__popup-button_cancel').click(function (event) {
		$('.betslip__popup').removeClass('active');
	});
});
$(document).ready(function () {
	$('#mybets-tab').click(function (event) {
		$('.betslip,#betslip-tab').removeClass('active');
		$('.mybets,#mybets-tab').addClass('active');
	});
});
$(function () {
	// whenever we hover over a menu item that has a submenu
	$('.left-panel__title-icon').on('mouseover', function () {
		var $menuItem = $(this),
			$submenuWrapper = $(this).children('.left-panel__hint');

		// grab the menu item's position relative to its positioned parent
		var menuItemPos = $menuItem.position();

		// place the submenu in the correct position relevant to the menu item
		$submenuWrapper.css({
			top: menuItemPos.top,
			left: menuItemPos.left + Math.round($menuItem.outerWidth() * 0.75)
		});
	});
});
$(document).ready(function () {
	$('.sports-slider__item').click(function (event) {
		$(".sports-slider__item").removeClass('sports-slider__item_arrow');
		$(".sports-slider__item").removeClass('sports-slider__item_active');
		$(this).addClass('sports-slider__item_active');
		$(this).addClass('sports-slider__item_arrow');
	});
});
$(document).ready(function () {
	$('.calendar__item').click(function (event) {
		$(".calendar__item").removeClass('calendar__item_arrow');
		$(".calendar__item").removeClass('calendar__item_active');
		$(this).addClass('calendar__item_active');
		$(this).addClass('calendar__item_arrow');
	});
});