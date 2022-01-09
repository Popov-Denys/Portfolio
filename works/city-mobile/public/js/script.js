// Sidebar menu slides out 
$(document).ready(function () {
	const navToggle = $(".menuToggle");
	const mobileSidebar = $(".mobile-sidebar");
	const mobileSidebarWrapper = $(".mobile-sidebar__wrapper");
	//open panel
	navToggle.on("click", function (event) {
		event.preventDefault();
		mobileSidebar.addClass("is-active");
		mobileSidebarWrapper.addClass("is-active");
		$("body").toggleClass("hidden");
	});
	//closed panel
	mobileSidebar.on("click", function (event) {
		if ($(event.target).is('.mobile-sidebar')) {
			event.preventDefault();
			mobileSidebar.removeClass('is-active');
			mobileSidebarWrapper.removeClass("is-active");
			$("body").toggleClass("hidden");
		}
	});
});

// Sidebar menu tabs
$(document).ready(function () {
	const tabs = $(".sports-slider_menu a");

	tabs.click(function () {
		var content = this.hash.replace('/', '');

		tabs.removeClass("sports-slider__item_active");
		$(this).addClass("sports-slider__item_active");

		$(".menu").find(".menu__container").hide();
		$(content).fadeIn(200);
	});
});

// Slider
$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		waitForAnimate: true,
		variableWidth: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		easing: 'ease',
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
				breakpoint: 1440,
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
				breakpoint: 2560,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 8,
				}
			}
		]
	});
});

// Sports Titles
$(document).ready(function () {
	$(".sport-titles").on("click", "a:not(.sport-title_active)", function () {
		$(this).addClass("sport-title_active")
			.siblings()
			.removeClass("sport-title_active")
			.closest("div.sport")
			.find("div.sports-container")
			.removeClass("is-active")
			.eq($(this).index())
			.addClass("is-active");

		var idAttr = this.hash.replace('/', '');
		$(idAttr).children(".links").children(".links__item:first-of-type").addClass("links__item_active").siblings().removeClass("links__item_active");

		$(idAttr).children(".spoilers-tabs").children(".spoilers-item:first-of-type").addClass("active").siblings().removeClass("active");
	});
});

// Sports Links
$(document).ready(function () {
	$(".links").on("click", "a:not(.links__item_active)", function () {
		$(this).addClass("links__item_active")
			.siblings()
			.removeClass("links__item_active")
			.closest(".sports-container.is-active")
			.find("div.spoilers-item")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
	});
});

// Accordion
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
$(document).ready(function () {
	$('.search-input').focus(function (event) {
		$('.search__icon,.search__close').addClass('active');
	});
});
$(document).mouseup(function (e) {
	var container = $(".search__search");
	if (container.has(e.target).length === 0) {
		$('.search__icon,.search__close').removeClass('active');
	}
});
$(document).ready(function () {
	$('.search__close').click(function () {
		$('.search-input').val('');
	});
});
$(document).ready(function () {
	$('.bet__close').click(function (event) {
		$(this).parent().parent('.bet__item').addClass("deleted");
	});
});
$('.bet-input').on('keyup', function () {
	var $this = $(this),
		val = $this.val();

	if (val.length >= 7) {
		$('.betslip__button').addClass("active");
	} else {
		$('.betslip__button').removeClass("active");
	}
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
$(document).ready(function () {
	$('.object').click(function (event) {
		$(".bet,.bet__content").addClass("active");
		$('body').addClass('lock1');
		$('.mobile-sidebar,.mobile-sidebar__wrapper').removeClass('is-active');
		$('body').removeClass('hidden');
	});
});
$(document).mouseup(function (e) {
	var container = $(".bet");
	if (container.has(e.target).length === 0) {
		$('.bet__content,.bet').removeClass('active');
		$('body').removeClass('lock1');
	}
});
$(document).ready(function () {
	$('#betslip-tab').click(function (event) {
		$('.betslip,#betslip-tab').addClass('active');
		$('.mybets,#mybets-tab').removeClass('active');
	});
});
$(document).ready(function () {
	$('#mybets-tab').click(function (event) {
		$('.betslip,#betslip-tab').removeClass('active');
		$('.mybets,#mybets-tab').addClass('active');
	});
});
$(document).ready(function () {
	$('.bet__close').click(function (event) {
		$(this).parent().parent('.bet__item').addClass("deleted");
	});
});
$(document).ready(function () {
	$('.mybets__item').click(function (event) {
		$(".mybets__results").addClass("active");
	});
});
$(document).ready(function () {
	if ($('.flag__input').is(':checked')) {
		$(".sports-title__coupon").removeClass("sports-title__coupon_disabled")  // checkbox checked 
	} else {
		$(".sports-title__coupon").addClass("sports-title__coupon_disabled") // checkbox unchecked 
	}
});
$(document).click(function () {
	if ($('.flag__input').is(':checked')) {
		$(".sports-title__coupon").removeClass("sports-title__coupon_disabled")  // checkbox checked 
	} else {
		$(".sports-title__coupon").addClass("sports-title__coupon_disabled") // checkbox unchecked 
	}
});
$(window).scroll(function () {
	var kek = $(window).scrollTop();

	if (kek > 5) {
		$('.top').addClass('active');
	} else {
		$('.top').removeClass('active');
	}
});
$(window).scroll(function () {
	var kek = $(window).scrollTop();

	if (kek > 380) {
		$('.event-schema').addClass('scrolled');
	} else {
	}
});
$(window).scroll(function () {
	var kek = $(window).scrollTop();
	var moved = kek < 300;
	var scrolled = $('.event-schema').hasClass('scrolled');
	if (scrolled & moved) {
		$('.event-schema').removeClass('scrolled')
	}
	else {
	}
});
$(document).ready(function () {
	$('.sports-spoiler__coeficient,.sports-spoiler__factor,.event-content__coeficient,.outcome').click(function (event) {
		$(this).toggleClass('selected');
		if ($(".sports-spoiler__coeficient,.sports-spoiler__factor,.event-content__coeficient,.outcome").hasClass('selected')) {
			$('.object').addClass('active');
		}
		else {
			$('.object').removeClass('active');
		}
	});
});
$(document).ready(function () {
	$('.event-content__icon_star').click(function (event) {
		$(this).toggleClass('selected');
	});
});
$(document).ready(function () {
	$('.breadcrumbs__event').click(function (event) {
		$(this).toggleClass('selected');
		$(this).siblings('.breadcrumbs__event').removeClass('selected');
	});
});
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
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
$(document).ready(function () {
	$('.search-recent__clear').click(function () {
		$(this).parent().parent().children('.search-recent__item').addClass("active");
	});
});
$(document).click(function () {
	if ($(".sports-spoiler__coeficient,.sports-spoiler__factor,.event-content__coeficient,.outcome").hasClass('selected')) {
		$(".object__count").html($(".selected").length);
	} else {
	}
});

$(document).ready(function () {
	$('.dropdown').click(function (event) {
		if ($(this).children('.dropdown__list').hasClass("open")) {
			return false
		}
		else {
			$(this).children('.dropdown__list').addClass("open");
		}
	});
});
$(document).mouseup(function (e) {
	var container = $(".dropdown__list");
	if (container.has(e.target).length === 0) {
		$('.dropdown__list').removeClass('open');
	}
});
$(document).ready(function () {
	$('.dropdown__list-li').click(function (event) {
		if ($(this).hasClass("dropdown__list-li_active")) {
			return false
		}
		else {
			$(this).addClass("dropdown__list-li_active");
			$(this).siblings(".dropdown__list-li").removeClass("dropdown__list-li_active")
		}
	});
});