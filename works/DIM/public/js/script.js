
function removeLoader() {
	body.classList.add("hidden");
	setTimeout(() => {
		let loader = document.getElementById('loader');

		body.classList.remove("hidden");
		loader.classList.add("hidden");
	},
		3000);
}
$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});
function reveal() {
	var reveals = document.querySelectorAll(".reveal");
	window.onscroll = function () {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			executed = true;
		}
	};
	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 0;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}

	}


}

window.addEventListener("scroll", reveal);


$(document).ready(function (e) {
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
$('.anchor').on('click', function () {
	let href = $(this).attr('href'), elem = $(document).find(href);
	if (elem.length > 0) {
		let posY = elem.eq(0).offset().top;
		$('html, body').animate({
			scrollTop: posY - 120,
		}, 1000);
	}
	return false;
});

$(document).mouseup(function (e) {
	$('.hamburger').click(function () {
		$('.hamburger,.header__box,.header__menu').toggleClass('active');
		$('body').toggleClass('locked');
	});
	var container = $(".header__box");
	if (container.has(e.target).length === 0) {
		$('.hamburger,.header__menu,.header__box').removeClass('active');
		$('body').removeClass('locked');
	}
});
$('.introduction__button').click(function () {
	$(this).toggleClass('active');
});
$('.help__button').click(function () {
	$(this).toggleClass('active');
	$(this).siblings().removeClass('active');
});
$('.popup-map-activator').click(function () {
	$(".popup-map").addClass('active');
});
$('.popup-map__cross').click(function () {
	$(".popup-map").removeClass('active');
});
$('.form__button').click(function () {
	$(".form__form").addClass('hidden');
	$(".form__success").addClass('active');
});
$('#first-button').click(function () {
	$('#first').addClass('active');
	$('#second').removeClass('active');
	$('#third').removeClass('active');
	$('#fourth').removeClass('active');
});
$('#second-button').click(function () {
	$('#second').addClass('active');
	$('#first').removeClass('active');
	$('#third').removeClass('active');
	$('#fourth').removeClass('active');
});
$('#third-button').click(function () {
	$('#third').addClass('active');
	$('#first').removeClass('active');
	$('#second').removeClass('active');
	$('#fourth').removeClass('active');
});
$('#fourth-button').click(function () {
	$('#fourth').addClass('active');
	$('#first').removeClass('active');
	$('#second').removeClass('active');
	$('#third').removeClass('active');
});
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');


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
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
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

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.parentElement.classList.toggle("active");
	});
}

function closeAllSelect(elmnt) {
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].parentElement.classList.remove("active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
document.addEventListener("click", closeAllSelect);

$(document).ready(function () {
	$('.team__slider').slick({
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
				settings: {
					slidesToShow: 4,
				},

			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			}
		]

	});

});


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
				settings: "unslick"

			}
		]
	});

});
$(window).on('resize', function () {
	$('.cards-slider').slick('resize');
});