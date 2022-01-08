var empty = true;
$(document).ready(function () {
	$('.login__button').click(function (event) {
		$('input').each(function () {
			if ($(this).val() != "") {
				$('.login__error').removeClass('active');
				$('.login__input').removeClass('invalid');
			}
			else {
				$('.login__button').addClass("error");
				$('.login__error').addClass('active');
				$('.login__input').addClass('invalid');
				empty = false;
				return false;
			}
		});
	});
});
$('body').on('click', '.login__icon_password', function () {
	if ($('#password').attr('type') == 'password') {
		$(this).addClass('view');
		$('#password').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password').attr('type', 'password');
	}
	return false;
});

var userName = document.getElementById('username');
var password = document.getElementById('password');
var box = document.getElementById('login__item_username');
var box2 = document.getElementById('login__item_password');
var button = document.getElementById('login__confirm');
var form = document.getElementById('form');
var elem = document.createElement('div');
var elem2 = document.createElement('div');
elem.style.display = 'none';
box.appendChild(elem);
elem2.style.display = 'none';
box2.appendChild(elem2);

userName.addEventListener('invalid', function (event) {
	event.preventDefault();
	if (!event.target.validity.valid) {
		elem.textContent = 'Invalid name. Please try again.';
		elem.className = 'login__error';
		userName.className = 'invalid';
		elem.style.display = 'block';
		button.className = 'login__button error';
	}
});
password.addEventListener('invalid', function (event) {
	event.preventDefault();
	if (!event.target.validity.valid) {
		elem2.textContent = 'The password was not correctly confirmed.';
		elem2.className = 'login__error';
		password.className = 'invalid';
		elem2.style.display = 'block';
		button.className = 'login__button error';
	}
});
userName.addEventListener('input', function () {
	if ('block' === elem.style.display) {
		userName.className = '';
		elem.style.display = 'none';
		button.className = 'login__button';
	}
});
password.addEventListener('input', function () {
	if ('block' === elem2.style.display) {
		password.className = '';
		elem2.style.display = 'none';
		button.className = 'login__button';
	}
});
