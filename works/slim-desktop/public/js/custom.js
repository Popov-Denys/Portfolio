var doRelocation = function () {

	var currentWidth = window.innerWidth,
		breakpoint = 1280,
		newLocation = 'sports.html';

	if (currentWidth < breakpoint) {
		window.location.replace(newLocation);
	}

}

doRelocation();

window.addEventListener('resize', doRelocation);

$(document).ready(function () {
	$(".card-result").click(function (event) {
		if ($(this).hasClass('disabled')) {
			event.stopPropagation();
		} else {
			$(this).toggleClass('active');
		}
	});
});

$(document).ready(function () {
	$('.date-tabs__item').click(function (event) {
		$(this).toggleClass('active');
		$(this).siblings('.date-tabs__item').removeClass('active');
	});
});
$(document).ready(function () {
	$('.header-form__btn-login').click(function (event) {
		$(this).parent().addClass('hide');
		$('.header__hidden').addClass('active');
	});
});
$(document).ready(function () {
	if ($(".jersey__item").hasClass("jersey__item_2")) {
		$(".jersey__item_2").find("[data-sleeve_detail]").css({ fill: "#000000" });
		$(".jersey__item_2").find("[data-sleeve]").css({ fill: "#000000" });
		$(".jersey__item_2").find("[data-stripes]").css({ fill: "#ffff00" });
		$(".jersey__item_2").find("[data-base]").css({ fill: "#ffff00" });
		$(".jersey__item_2").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_1")) {
		$(".jersey__item_1").find("[data-sleeve_detail]").css({ fill: "#000000" });
		$(".jersey__item_1").find("[data-sleeve]").css({ fill: "#ffffff" });
		$(".jersey__item_1").find("[data-stripes]").css({ fill: "#ffffff" });
		$(".jersey__item_1").find("[data-base]").css({ fill: "#000000" });
		$(".jersey__item_1").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_3")) {
		$(".jersey__item_3").find("[data-sleeve_detail]").css({ fill: "#006600" });
		$(".jersey__item_3").find("[data-sleeve]").css({ fill: "#006600" });
		$(".jersey__item_3").find("[data-stripes]").css({ fill: "#000000" });
		$(".jersey__item_3").find("[data-base]").css({ fill: "#006600" });
		$(".jersey__item_3").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_4")) {
		$(".jersey__item_4").find("[data-sleeve_detail]").css({ fill: "#ff0000" });
		$(".jersey__item_4").find("[data-sleeve]").css({ fill: "#ff0000" });
		$(".jersey__item_4").find("[data-stripes]").css({ fill: "#008000" });
		$(".jersey__item_4").find("[data-base]").css({ fill: "#ff0000" });
		$(".jersey__item_4").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_5")) {
		$(".jersey__item_5").find("[data-sleeve_detail]").css({ fill: "#e60000" });
		$(".jersey__item_5").find("[data-sleeve]").css({ fill: "#e60000" });
		$(".jersey__item_5").find("[data-stripes]").css({ fill: "#e60000" });
		$(".jersey__item_5").find("[data-base]").css({ fill: "#ffffff" });
		$(".jersey__item_5").find(".jersey__number").css("color", "#e60000");
	}
	if ($(".jersey__item").hasClass("jersey__item_6")) {
		$(".jersey__item_6").find("[data-sleeve_detail]").css({ fill: "#db0a0a" });
		$(".jersey__item_6").find("[data-sleeve]").css({ fill: "#ef0b0b" });
		$(".jersey__item_6").find("[data-stripes]").css({ fill: "#f2e9e9" });
		$(".jersey__item_6").find("[data-base]").css({ fill: "#ec0e0e" });
		$(".jersey__item_6").find(".jersey__number").css("color", "#000000");
	}
	if ($(".jersey__item").hasClass("jersey__item_7")) {
		$(".jersey__item_7").find("[data-sleeve_detail]").css({ fill: "#000000" });
		$(".jersey__item_7").find("[data-sleeve]").css({ fill: "#000000" });
		$(".jersey__item_7").find("[data-stripes]").css({ fill: "#ce0000" });
		$(".jersey__item_7").find("[data-base]").css({ fill: "#000000" });
		$(".jersey__item_7").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_8")) {
		$(".jersey__item_8").find("[data-sleeve_detail]").css({ fill: "#0a27ff" });
		$(".jersey__item_8").find("[data-sleeve]").css({ fill: "#ff740a" });
		$(".jersey__item_8").find("[data-stripes]").css({ fill: "#ffa21f" });
		$(".jersey__item_8").find("[data-base]").css({ fill: "#ff740a" });
		$(".jersey__item_8").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_9")) {
		$(".jersey__item_9").find("[data-neckline]").css({ fill: "#000000" });
		$(".jersey__item_9").find("[data-sleeve]").css({ fill: "#000000" });
		$(".jersey__item_9").find("[data-stripes]").css({ fill: "#ffff00" });
		$(".jersey__item_9").find("[data-base]").css({ fill: "#000000" });
		$(".jersey__item_9").find("[data-top-litter]").css({ fill: "transparent" });
		$(".jersey__item_9").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_10")) {
		$(".jersey__item_10").find("[data-neckline]").css({ fill: "#caca00" });
		$(".jersey__item_10").find("[data-sleeve]").css({ fill: "#caca00" });
		$(".jersey__item_10").find("[data-stripes]").css({ fill: "#c0c0c0" });
		$(".jersey__item_10").find("[data-base]").css({ fill: "#ffffff" });
		$(".jersey__item_10").find("[data-top-litter]").css({ fill: "transparent" });
		$(".jersey__item_10").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_11")) {
		$(".jersey__item_11").find("[data-neckline]").css({ fill: "#ff0000" });
		$(".jersey__item_11").find("[data-sleeve]").css({ fill: "#ff0000" });
		$(".jersey__item_11").find("[data-stripes]").css({ fill: "transparent" });
		$(".jersey__item_11").find("[data-base]").css({ fill: "#ff0000" });
		$(".jersey__item_11").find("[data-top-litter]").css({ fill: "#ffffff" });
		$(".jersey__item_11").find(".jersey__number").css("color", "transparent");
	}
});
$(document).mouseup(function (e) {
	var container = $(".header__dropdown-content");
	if (container.has(e.target).length === 0) {
		$(".header__dropdown-current").removeClass("active");
		$(".header__dropdown-content").removeClass("open");
	}
});
$(document).ready(function () {
	$(".header__dropdown-current").click(function (event) {
		if ($(this).hasClass('active')) {
			event.stopPropagation();
		}
		else {
			$(this).toggleClass("active");
			$(this).siblings(".header__dropdown-content").toggleClass("open");
		}
	});
});
$(document).ready(function () {
	$(".header__dropdown-theme").click(function (event) {
		$(this).siblings(".header__dropdown-theme").removeClass("active");
		$(this).addClass("active");
	});
});

$(document).ready(function () {
	$('.betslip-popup-activator').click(function (event) {
		$('.betslip-popup').addClass('open');
	});
});
$(document).ready(function () {
	$('.betslip-popup-closer').click(function (event) {
		$('.betslip-popup').removeClass('open');
	});
});
$(document).ready(function () {
	$(".sport-head-score-item").click(function (event) {
		$(this).toggleClass("active");
	});
});
$(document).ready(function () {
	$(".flag-activator").click(function (event) {
		$(this).parent().siblings(".flag").toggleClass("open");
	});
});
$(document).ready(function () {
	$("#acceptPolicy").click(function (event) {
		$(this).toggleClass("active");
	});
});
$(document).ready(function () {
	$("#confirmAge").click(function (event) {
		$(this).toggleClass("active");
	});
});
$('.game-center,.navigation-submenu').mouseover(
	function () {
		$('.navigation-submenu').addClass('open');
	});
$('.navigation-submenu').mouseout(
	function () {
		$('.navigation-submenu').removeClass('open');
	});
$(document).ready(function () {
	//  header
	// header slider
	$('.navigation-slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	});
	// dropdowns
	$('.header-controls__item').click(function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$('.header-controls__item').removeClass('active');
			$(this).addClass('active');
		}
	})

	//  sidebar
	// favs
	$('.js-remove-favorites').click(function () {
		//ajax call goes here to remove item
		$(this).parent().remove();
	});
	// tabs
	$('.js-sidebar-tab').click(function (e) {
		e.preventDefault();
		$('.js-sidebar-tab').removeClass('sidebar-tabs__control_active');
		$(this).addClass('sidebar-tabs__control_active');
		$('.js-sidebar-tab-content').removeClass('sidebar-tabs__tab_active');
		$('.js-sidebar-tab-content' + $(this).attr('href')).addClass('sidebar-tabs__tab_active');
	});
	// dropdown
	$('.js-dropdown').click(function () {
		$(this).parent().toggleClass('active');
		$(this).parent().siblings('.js-dropdown-box').toggle();
	});
	// betslip
	$('.js-betslip-card-remove').click(function () {
		//ajax call goes here to remove item
		$(this).closest('.betslip-card').remove();
	});

	//content
	// content slider
	$('.content-slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
})


//for section vh 
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);


window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});


//show hide icons
$('body').on('click', '.input__icon_password', function () {
	if ($('#password').attr('type') == 'password') {
		$(this).addClass('view');
		$('#password').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password').attr('type', 'password');
	}
	return false;
});
$('body').on('click', '.input__icon_change-password', function () {
	if ($('#changePassword').attr('type') == 'password') {
		$(this).addClass('view');
		$('#changePassword').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#changePassword').attr('type', 'password');
	}
	return false;
});

//inputs validation
(function ($) {

	$(".form__button").one('click', function () {

		$('.rf').each(function () {
			// Объявляем переменные (форма и кнопка отправки)
			var form = $(this),
				btn = form.find('.form__button');

			// Добавляем каждому проверяемому полю, указание что поле пустое
			form.find('.rfield').addClass('empty_field');

			// Функция проверки полей формы
			function checkInput() {

				form.find('.rfield').each(function () {
					if ($(this).val() != '') {
						// Если поле не пустое удаляем класс-указание
						$(this).removeClass('empty_field');
						$(this).parent(".input__content").parent(".input").removeClass('data-error');
					} else {
						// Если поле пустое добавляем класс-указание
						$(this).addClass('empty_field');
						$(this).parent(".input__content").parent(".input").addClass('data-error');
					}
				});
			}

			// Функция подсветки незаполненных полей
			function lightEmpty() {
				form.find('.empty_field').parent(".input__content").parent(".input").addClass('data-error');
				// Через полсекунды удаляем подсветку
				setTimeout(function () {
					form.find('.empty_field').parent(".input__content").parent(".input").removeClass('data-error');
				});
			}

			// Проверка в режиме реального времени
			setInterval(function () {

				// Запускаем функцию проверки полей на заполненность
				checkInput();
				// Считаем к-во незаполненных полей
				var sizeEmpty = form.find('.empty_field').length;
				// Вешаем условие-тригер на кнопку отправки формы
				if ($("div").is(".form__checkbox")) {
					if ($("#confirmAge").prop('checked')) {
					}
					else {
						return false
					}
				}
				else {

				}
				if ($("div").is(".form__checkbox")) {
					if ($("#acceptPolicy").prop('checked')) {

					}
					else {
						return false
					}
				}
				else {

				}

				if (sizeEmpty > 0) {
					if (btn.hasClass('disabled')) {
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			});

			// Событие клика по кнопке отправить
			btn.click(function () {
				if ($(this).hasClass('disabled')) {
					// подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
					lightEmpty();
					return false
				} else {
				}
				if ($("div").is(".form__checkbox")) {
					if ($("#confirmAge").prop('checked')) {
					}
					else {
						btn.addClass('disabled');
					}
				}
				else {

				}
				if ($("div").is(".form__checkbox")) {
					if ($("#acceptPolicy").prop('checked')) {

					}
					else {
						btn.addClass('disabled');
					}
				}
				else {

				}
			});
		});
	});

})(jQuery);


//popup

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {

			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = document.querySelector('.wrapper');

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}
function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});