
$(document).ready(function () {
	const selectDefault = $(".header__dropdown > .header__list_default");

	selectDefault.on("click", function () {
		$(this).parent().toggleClass("active");
	});

	const selectDropdown = $(".header__dropdown .header__list li");
	selectDropdown.on("click", function () {
		var currentele = $(this).html();
		$(".header__dropdown .header__list_default li").html(currentele);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(this).parents().removeClass("active");
	});
});

$(document).mouseup(function (e) {
	$('.hamburger').click(function () {
		$('.hamburger,.header__box,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	var container = $(".header__box");
	if (container.has(e.target).length === 0) {
		$('.hamburger,.header__menu,.header__box').removeClass('active');
		$('body').removeClass('lock');
	}
});
$('.introduction__button').click(function () {
	$(this).toggleClass('active');
});
$('.help__button').click(function () {
	$(this).toggleClass('active');
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

$(document).ready(function () {
	$('.cards-slider').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		outerEdgeLimit: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: true,
		speed: 400,
		variableWidth: true,
		autoplay: false,
		autoplaySpeed: 3000,
		infinite: false,
		draggable: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1439,
				settings: 'unslick'
			}
		]

	});

});
