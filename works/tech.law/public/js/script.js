$('.hamburger').click(function () {
	$('.hamburger,.header__box,.header__menu').toggleClass('active');
	$('body').toggleClass('locked');
});
const observer = new IntersectionObserver(intersections => {
	intersections.forEach(({
		target,
		isIntersecting
	}) => {
		target.classList.toggle('animate', isIntersecting);
	});
}, {
	threshold: 0
});

document.querySelectorAll('.approach__number').forEach(div => {
	observer.observe(div);
});
document.addEventListener('DOMContentLoaded', function (event) {
	// array with texts to type in typewriter
	var dataText = ["Telecommunications Law", "Technology", "Media", "Machine Learning"];

	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {
		// chekc if text isn't finished yet
		if (i < (text.length)) {
			// add next character to h1
			document.querySelector(".insights__title").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

			// wait for a while and call this function again for next character
			setTimeout(function () {
				typeWriter(text, i + 1, fnCallback)
			}, 100);
		}
		// text finished, call callback if there is a callback function
		else if (typeof fnCallback == 'function') {
			// call callback after timeout
			setTimeout(fnCallback, 700);
		}
	}
	// start a typewriter animation for a text in the dataText array
	function StartTextAnimation(i) {
		if (typeof dataText[i] == 'undefined') {
			setTimeout(function () {
				StartTextAnimation(0);
			}, 20000);
		}
		// check if dataText[i] exists
		if (i < dataText[i].length) {
			// text exists! start typewriter animation
			typeWriter(dataText[i], 0, function () {
				// after callback (and whole text has been animated), start next text
				StartTextAnimation(i + 1);
			});
		}
	}
	// start the text animation
	StartTextAnimation(0);
});
let mySlider = $('.story__slider').slick({
	arrows: true,
	dots: true,
	centerMode: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	waitForAnimate: false,
	speed: 400,
	//responsive: [{
	//breakpoint: 920,
	//settings: {
	//vertical: true,
	//verticalSwiping: true,
	//}
	//}]
});

// our mySlider dots
let dots = $('.slick-dots > LI', mySlider);

// before mySlider change slick event
mySlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

	// remove dot past classes on dots after next slide dot
	$(dots[nextSlide]).nextAll().removeClass('past');

	// add dot past classes on dots before next slide dot
	$(dots[nextSlide]).prevAll().addClass('past');

});