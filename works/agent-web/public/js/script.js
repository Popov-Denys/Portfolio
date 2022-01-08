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
	$(".summary-table__item").click(function (event) {
		$(this).toggleClass("active");
		$(this).parent().siblings().children(".summary-table__item").removeClass("active")

		if ($(this).hasClass("active")) {
			$(this).parent().parent(".summary-table__row").addClass("active");
		}
		else {
			$(this).parent().parent(".summary-table__row").removeClass("active");
		}
	});
});

$(document).ready(function () {
	$(".dropdown").click(function (event) {
		if ($(this).siblings(".dropdown:first").hasClass('active')) {
			event.stopPropagation();
		}
		else {
			$(this).toggleClass("active");
			$(this).siblings(".dropdown:first").toggleClass("open");
		}
	});
});
$(document).ready(function () {
	$(".login-dropdown__theme").click(function (event) {
		$(this).siblings(".login-dropdown__theme").removeClass("active");
		$(this).addClass("active");
	});
});
$(document).ready(function () {
	$(".export__item").click(function (event) {
		$(this).siblings(".export__item").removeClass("active");
		$(this).addClass("active");
	});
});
$(document).ready(function () {
	if ($('.summary-table').find('.summary-table__row').length !== 0) {
	}
	else {
		$('.summary-table__empty').addClass('active');
		$('.export').addClass('hidden');
		$('.add').addClass('active');
	}
});

$(document).ready(function () {
	$(".summary-table-first").find(".summary-table__title_special").css({
		'min-width': ($(".summary-table-second").find(".summary-table__title_special").width() + 40 + "px")
	});
});
$(document).ready(function () {
	$(".summary-table-second").find(".summary-table__title_special").css({
		'min-width': ($(".summary-table-first").find(".summary-table__title_special").width() + 40 + "px")
	});
});
$(document).on('mouseup', function (e) {
	var container = $(".dropdown-box");
	if (!container.is(e.target) && container.has(e.target).length === 0) {
		$(this).find(".dropdown").removeClass("active");
		$(this).find(".dropdown").removeClass("open");
	} else {
	}
});
$(document).ready(function () {
	$(".field-dropdown__theme").click(function (event) {
		$(this).siblings(".field-dropdown__theme").removeClass("active");
		$(this).addClass("active");
	});
});
$(document).ready(function () {
	$(".new-row").click(function (event) {
		$(".hidden-row").toggleClass("visible");
	});
});
$('body').on('click', '.field__icon_password', function () {
	if ($(this).siblings('.password').attr('type') == 'password') {
		$(this).addClass('view');
		$(this).siblings('.password').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$(this).siblings('.password').attr('type', 'password');
	}
	return false;
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
