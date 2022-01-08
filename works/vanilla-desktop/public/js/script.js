
$(window).load(function () {
	$("body").removeClass("preload");
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
$(document).ready(function () {
	$(".african-sports-table__factor").click(function (event) {
		$(this).toggleClass("active");
	});
});
$(document).ready(function () {
	$(".accordion").click(function (event) {
		$(this).toggleClass("active");
	});
	$(".accordion-arrow").click(function (event) {
		event.stopPropagation();
		$(this).toggleClass("active");
		$(this).parent().siblings().find(".accordion:first").toggleClass("open");
	});
});
$(document).ready(function () {
	$(".main-icon").click(function (event) {
		$(this).toggleClass("active");
	});
});
$(document).ready(function () {
	$(".spoiler").click(function (event) {
		$(this).toggleClass("active");
		$(this).children(".spoiler-arrow").toggleClass("active");
		$(this).siblings(".spoiler:first").toggleClass("open");
		if ($(this).hasClass('active')) {
		} else {
			$(this).siblings(".spoiler").removeClass("open");
			$(this).siblings(".spoiler").removeClass("active");
			$(this).siblings(".spoiler-arrow").removeClass("active");
		}
		if ($(this).siblings().find(".spoiler").hasClass('spoiler')) {
		} else {
			$(this).removeClass("active");
		}
	});
});
$(document).ready(function () {
	$('.mybets__arrow').click(function (event) {
		$(this).toggleClass('active');
		$(this).parent().next('.mybets__cash').toggleClass('active');
	});
});
$(document).ready(function () {
	$('.date-tabs__item').click(function (event) {
		$(this).toggleClass('active');
		$(this).siblings('.date-tabs__item').removeClass('active');
	});
});
$(document).ready(function () {
	$('.live-overview-navigation__item').click(function (event) {
		$(this).addClass('active');
		$(this).siblings('.live-overview-navigation__item').removeClass('active');
	});
});

$(document).mouseup(function (e) {
	var container = $(".mybets__card");
	if (container.has(e.target).length === 0) {
		$(this).find('.mybets__arrow').removeClass('active');
		$(this).find('.mybets__cash').removeClass('active');
	}
});
$(document).ready(function () {
	$('.betting-tickets__betslip').click(function (event) {
		$('.betting-tickets__betslip').addClass('active');
		$('.betting-tickets__arrow_betslip,.betslip').toggleClass('active');
		$('.betting-tickets__mybets,.betting-tickets__arrow_mybets,.mybets').removeClass('active');
	});
});
$(document).ready(function () {
	$('.match-tab').click(function (event) {
		$(this).addClass('active');
		$(this).siblings('.match-tab').removeClass('active');
	});
});
$(document).ready(function () {
	$('.upcoming-match__coeficient').click(function (event) {
		$(this).toggleClass('active');
	});
});
$(document).ready(function () {
	$('.asian-menu__tab').click(function (event) {
		$(this).siblings('.asian-menu__tab').removeClass('active');
	});
});
$(document).ready(function () {
	$('.asian-menu__tab_sports').click(function (event) {
		$(this).addClass('active');
		$(".asian-menu__sports").addClass('active');
		$(".asian-menu__favourites,.betslip,.asian-menu__links").removeClass('active');
	});
});

$(document).ready(function () {
	$('.asian-menu__tab_favourites').click(function (event) {
		$(this).addClass('active');
		$(".asian-menu__favourites").addClass('active');
		$(".asian-menu__sports,.betslip,.asian-menu__links").removeClass('active');
	});
});
$(document).ready(function () {
	$('.asian-menu__tab_betslip').click(function (event) {
		$(this).addClass('active');
		$(".betslip").addClass('active');
		$(".asian-menu__sports,.asian-menu__favourites,.asian-menu__links").removeClass('active');
	});
});
$(document).ready(function () {
	$('.asian-menu__tab_links').click(function (event) {
		$(this).addClass('active');
		$(".asian-menu__links").addClass('active');
		$(".asian-menu__sports,.asian-menu__favourites,.betslip").removeClass('active');
	});
});

$(document).ready(function () {
	$('.menu-sports-tab_today').click(function (event) {
		$(this).addClass('active');
		$(".menu-sports_today").addClass('active');
		$(".menu-sports-tab_earlier,.menu-sports-tab_live,.menu-sports_earlier,.menu-sports_live").removeClass('active');
	});
});
$(document).ready(function () {
	$('.menu-sports-tab_earlier').click(function (event) {
		$(this).addClass('active');
		$(".menu-sports_earlier").addClass('active');
		$(".menu-sports-tab_today,.menu-sports-tab_live,.menu-sports_today,.menu-sports_live").removeClass('active');
	});
});
$(document).ready(function () {
	$('.asian-sports-table__activator').click(function (event) {
		$(this).toggleClass('active');
		$(".asian-sports-table__spoilers").toggleClass('active');
	});
});
$(document).ready(function () {
	$('.african-sports-table__activator').click(function (event) {
		$(this).toggleClass('active');
		$(".african-sports-table__spoilers").toggleClass('active');
	});
});
$(document).ready(function () {
	$('.factor').click(function (event) {
		$(this).toggleClass('active');
		$(this).siblings(".factor").removeClass('active');
	});
});
$(document).ready(function () {
	$('.menu-sports-tab_live').click(function (event) {
		$(this).addClass('active');
		$(".menu-sports_live").addClass('active');
		$(".menu-sports-tab_today,.menu-sports-tab_earlier,.menu-sports_today,.menu-sports_earlier").removeClass('active');
	});
});
$(document).ready(function () {
	$('.vs-popup__result').click(function (event) {
		$(this).toggleClass("active");
		$(this).next().toggleClass("open");
		$(this).children('.vs-popup__arrow').toggleClass('active');
	});
});
$(document).ready(function () {
	$('.betslip-popup-activator1').click(function (event) {
		$('.betslip-popup1').addClass('open');
	});
});
$(document).ready(function () {
	$('.virtual-match__coeficient').click(function (event) {
		$(this).toggleClass('active');
	});
});
$(document).ready(function () {
	$('.betslip-popup-closer1').click(function (event) {
		$('.betslip-popup1').removeClass('open');
	});
});
$(document).ready(function () {
	$('.betslip-popup-activator2').click(function (event) {
		$('.betslip-popup2').addClass('open');
	});
});
$(document).ready(function () {
	$('.betslip-popup-closer2').click(function (event) {
		$('.betslip-popup2').removeClass('open');
	});
});
$(document).ready(function () {
	$('.betslip__notification-cross').click(function (event) {
		$('.betslip__notification').hide();
	});
});
$(document).ready(function () {
	$('.betslip__button').click(function (event) {
		$(this).addClass('active');
		$(this).siblings('.betslip__button').removeClass('active');
	});
});
$(document).ready(function () {
	$('.menu-sports-table').click(function (event) {
		$(this).toggleClass('active');
	});
});
$(document).ready(function () {
	$('.ticket-activator').click(function (event) {
		$(this).parent().parent().parent(".ticket").toggleClass('active');

	});
	$(".coeficient").click(function (event) {

		$(this).toggleClass("active");
	});
});
$(document).ready(function () {

	$('.match-spoiler__body').click(function (event) {

		$(this).toggleClass("active");
		$(this).children(".match-spoiler__info").toggleClass("active");
		$(this).children('.match-spoiler__arrow').toggleClass("active");
		$(this).next().toggleClass("open");
		$(this).parent('.match-spoiler').toggleClass('active');
	});
	$(".popup-link").click(function (event) {
		event.stopPropagation();
	});
	$(".match-spoiler__more").click(function (event) {
		event.stopPropagation();
	});
	$(".match-spoiler__phone").click(function (event) {
		event.stopPropagation();
	});
	$(".match-spoiler__info").click(function (event) {
		event.stopPropagation();
	});
});
$(document).ready(function () {
	$('.match-spoiler__more').click(function (event) {
		$(this).toggleClass('active');
		$(this).parent().parent().siblings(".upcoming-matches__spoilers").toggleClass("active");
	});
});

$(document).ready(function () {
	$('.calculator-odds__cross').click(function (event) {
		$(this).parent(".calculator-odds__element").hide();
	});
});
$(document).ready(function () {
	$('.betting-tickets__mybets').click(function (event) {
		$('.betting-tickets__mybets').addClass('active');
		$('.betting-tickets__arrow_mybets,.mybets').toggleClass('active');
		$('.betting-tickets__betslip,.betting-tickets__arrow_betslip,.betslip').removeClass('active');
	});
});
$(document).ready(function () {
	$('.navigation-tab').click(function (event) {
		$(this).addClass('active');
		$(this).siblings('.navigation-tab').removeClass('active')
	});
});
$(document).ready(function () {
	$(".view-tabs__item").click(function (event) {
		$(this).siblings(".view-tabs__item").removeClass("active");
		$(this).addClass("active");
	});
});
$(document).ready(function () {
	$('#betslip-single').click(function (event) {
		if ($(this).hasClass('disabled')) {
			event.stopPropagation();
		}
		else {
			$('#betslip-single,.betslip__single').addClass('active');
			$('#betslip-multi,#betslip-special,.betslip__multi,.betslip__special').removeClass('active');
		}

	});
});
$(document).ready(function () {
	$('#betslip-multi').click(function (event) {
		if ($(this).hasClass('disabled')) {
			event.stopPropagation();
		}
		else {
			$('#betslip-multi,.betslip__multi').addClass('active');
			$('#betslip-single,#betslip-special,.betslip__single,.betslip__special').removeClass('active');
		}

	});
});
$(document).ready(function () {
	$('#betslip-special').click(function (event) {
		if ($(this).hasClass('disabled')) {
			event.stopPropagation();
		}
		else {
			$('#betslip-special,.betslip__special').addClass('active');
			$('#betslip-single,#betslip-multi,.betslip__single,.betslip__multi').removeClass('active');
		}

	});
});


$(document).ready(function () {
	$(".dropdown").click(function (event) {
		if ($(this).hasClass('active')) {
			event.stopPropagation();
		}
		else {
			$(this).toggleClass("active");
			$(this).siblings(".dropdown:first").toggleClass("open");
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
	$(".header__optional-dropdown-theme").click(function (event) {
		$(this).siblings(".header__optional-dropdown-theme").removeClass("active");
		$(this).addClass("active");
	});
});
$(document).ready(function () {
	$(".left-section__remove").click(function (event) {
		$(this).parent(".left-section__card").addClass("hidden");
	});
});
$(document).ready(function () {
	$(".asian-outright-table__price").click(function (event) {
		$(this).toggleClass("active");
	});
});
$(document).ready(function () {
	$(".live-overview-spoiler__icon_close").click(function (event) {
		$(this).parent().parent().parent().parent(".live-overview-spoilers__content").hide();
	});
});
$(document).mouseup(function (e) {
	var container = $(".header__dropdown-content");
	if (container.has(e.target).length === 0) {
		$(this).siblings(".dropdown").removeClass("active");
		$(this).removeClass("open");
	}
});
$(document).mouseup(function (e) {
	var container = $(".header__optional-dropdown-content");
	if (container.has(e.target).length === 0) {
		$(this).siblings(".dropdown").removeClass("active");
		$(this).removeClass("open");
	}
});
$(document).mouseup(function (e) {
	var container = $(".filter__dropdown");
	if (container.has(e.target).length === 0) {
		$(this).find(".dropdown").removeClass("open");
		$(this).find(".dropdown").removeClass("active");
	}
});
$(document).ready(function () {
	$(".filter__dropdown-theme").click(function (event) {
		$(this).siblings(".filter__dropdown-theme").removeClass("active");
		$(this).addClass("active");
	});
});

$(document).ready(function () {
	$(".filter").click(function () {
		$(".filter__dropdown-content").addClass("open");
	});
});

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
		document.querySelector('.header__hidden').classList.add("visible");
		document.querySelector('.header__buttons').classList.remove("active");
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

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

(function () {

	if (!Element.prototype.closest) {

		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {

	if (!Element.prototype.matches) {

		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
