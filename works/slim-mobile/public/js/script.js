$(document).mouseup(function (e) {
	var container = $(".overlay-burger");
	if (container.has(e.target).length === 0) {
		$('.hamburger,.header__menu,.overlay-burger').removeClass('active');
		$('body').removeClass('lock1');
	}
});
$(document).ready(function () {
	$('.hamburger').click(function (event) {
		$('.hamburger,.header__menu,.overlay-burger').addClass('active');
		$('body').addClass('lock1');
	});
});
$(document).mouseup(function (e) {
	var container = $(".result__hidden-container");
	if (container.has(e.target).length === 0) {
		$('.result__hidden,.live-expanded').removeClass('active');
	}
});
$(document).ready(function () {
	$('.live-expanded').click(function (event) {
		$('.result__hidden,.live-expanded').addClass('active');
	});
});
$(document).ready(function () {
	$('#btn-sports').click(function (event) {
		$('.overlay-sports,.overlay-sports__container,#btn-sports').addClass('active');
		$('body').addClass('lock2');
	});
});
$(document).mouseup(function (e) {
	var container = $(".overlay-sports__container");
	if (container.has(e.target).length === 0) {
		$('.overlay-sports,.overlay-sports__container,#btn-sports').removeClass('active');
		$('body').removeClass('lock2');
	}
});
$(document).ready(function () {
	$('#game-center-link').click(function (event) {
		$('.game-center,.game-center__container,#game-center-link').addClass('active');
		$('body').addClass('lock3');
	});
});
$(document).mouseup(function (e) {
	var container = $(".game-center__container");
	if (container.has(e.target).length === 0) {
		$('.game-center,.game-center__container,#game-center-link').removeClass('active');
		$('body').removeClass('lock3');
	}
});
$(document).ready(function () {
	$('.live98-link').click(function (event) {
		$(this).addClass('active');
		$('.live98').addClass('active');
		$(this).parent().parent().parent('.result__item').addClass('active');
	});
});
$(document).mouseup(function (e) {
	var container = $(".live98__container");
	if (container.has(e.target).length === 0) {
		$('.live98,.live98-link,.result__item').removeClass('active');
	}
});
$(document).ready(function () {
	$('#chat').click(function (event) {
		$('.chat,.chat__container,#chat').addClass('active');
		$('body').addClass('lock5');
	});
});
$(document).ready(function () {
	$('#chat-cross').click(function (event) {
		$('.chat,.chat__container,#chat').removeClass('active');
		$('body').removeClass('lock5');
	});
});
$(document).mouseup(function (e) {
	var container = $(".chat");
	if (container.has(e.target).length === 0) {
		$('.chat,.chat__container,#chat').removeClass('active');
		$('body').removeClass('lock5');
	}
});
$(document).ready(function () {
	$('#btn-league').click(function (event) {
		$('.overlay-league,.overlay-league__container,#btn-league').addClass('active');
		$('body').addClass('lock6');
	});
});
$(document).mouseup(function (e) {
	var container = $(".overlay-league__container");
	if (container.has(e.target).length === 0) {
		$('.overlay-league,.overlay-league__container,#btn-league').removeClass('active');
		$('body').removeClass('lock6');
	}
});
$(document).mouseup(function (e) {
	var container = $(".overlay-folder");
	if (container.has(e.target).length === 0) {
		$('.overlay-folder,.overlay-wrapper,.folder').removeClass('active');
		$('body').removeClass('lock7');
	}
});
$(document).ready(function () {
	$('.folder').click(function (event) {
		$('.overlay-folder,.overlay-wrapper,.folder').addClass('active');
		$('body').addClass('lock7');
	});
});
$(document).ready(function () {
	$('#folder-cross').click(function (event) {
		$('.overlay-folder,.overlay-wrapper,.folder').removeClass('active');
		$('body').removeClass('lock7');
	});
});
$(document).ready(function () {
	$('.search').focus(function (event) {
		$('.search-icon').addClass('active');
	});
});
$(document).ready(function () {
	$('.search').blur(function (event) {
		$('.search-icon').removeClass('active');
	});
});
let arrow = document.querySelectorAll('.arrow');
for (i = 0; i < arrow.length; i++) {
	let thisLink = arrow[i].parentNode;
	let subMenu = arrow[i].nextElementSibling;
	let thisArrow = arrow[i];


	arrow[i].addEventListener('click', function () {
		thisLink.classList.toggle('parent');
		subMenu.classList.toggle('open');
		thisArrow.classList.toggle('active');
	});
}

$(document).ready(function () {
	$('.gc-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 715,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

$(document).ready(function () {
	$('.main-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true
	});
});

$(document).mouseup(function (e) {
	var container = $("#settings-theme-sublist");
	if (container.has(e.target).length === 0) {
		$('#settings-theme-sublist,#settings-theme').removeClass('active');
	}
});
$(document).ready(function () {
	$('#settings-theme').click(function (event) {
		$('#settings-theme-sublist,#settings-theme').addClass('active');
	});
});
$(document).mouseup(function (e) {
	var container = $("#settings-language-sublist");
	if (container.has(e.target).length === 0) {
		$('#settings-language-sublist,#settings-language').removeClass('active');
	}
});
$(document).ready(function () {
	$('#settings-language').click(function (event) {
		$('#settings-language-sublist,#settings-language').addClass('active');
	});
});
$(document).mouseup(function (e) {
	var container = $("#login__container-1");
	if (container.has(e.target).length === 0) {
		$('#login-1,#login__container-1').removeClass('active');
		$('body').removeClass('lock2');
	}
});
$(document).ready(function () {
	$('#login-activator').click(function (event) {
		$('#login-1,#login__container-1').addClass('active');
		$('body').addClass('lock2');
	});
});
$(document).mouseup(function (e) {
	var container = $("#login__container-2");
	if (container.has(e.target).length === 0) {
		$('#login-2,#login__container-2').removeClass('active');
		$('body').removeClass('lock3');
	}
});
$(document).ready(function () {
	$('#login-2-activator').click(function (event) {
		$('#login-2,#login__container-2').addClass('active');
		$('body').addClass('lock3');
		$('#login-1,#login__container-1').removeClass('active');
		$('body').removeClass('lock2');
	});
});
$(document).ready(function () {
	$('#login-close').click(function (event) {
		$('#login-1,#login__container-1').removeClass('active');
		$('body').removeClass('lock2');
	});
});
$(document).ready(function () {
	$('#login-close-2').click(function (event) {
		$('#login-2,#login__container-2').removeClass('active');
		$('body').removeClass('lock3');
	});
});
$(document).ready(function () {
	$("#login-slider").slider({
		animate: true,
		range: "min",
		value: 1,
		min: 1,
		max: 100,
		step: 1,
		opacity: 0.5,
		change: function (event, ui) {
			$('#znch').attr('value', ui.value);
		}

	});
});
$(document).ready(function () {
	$("#login-slider-2").slider({
		animate: true,
		range: "min",
		value: 1,
		min: 1,
		max: 100,
		step: 1,
		opacity: 0.5,
		change: function (event, ui) {
			$('#znch-login').attr('value', ui.value);
		}

	});
});

$(document).ready(function () {
	$('.spoiler-list').click(function (event) {
		$(this).toggleClass("active");
		$(this).next().toggleClass("open");
		$(this).children('.spoiler-arrow').toggleClass('active');
	});
});
$(document).ready(function () {
	$('.result__card').click(function (event) {
		$(this).toggleClass("selected");
	});
});
$(document).ready(function () {
	$('.flag__coeficient').click(function (event) {
		$(this).toggleClass("selected");
	});
});
$(window).scroll(function () {
	var kek = $(window).scrollTop();

	if (kek > 5) {
		$('.top').addClass('active');
	} else {
		$('.top').removeClass('active');
	}
});