
var password = document.getElementById('password');
var newPassword = document.getElementById('newPassword');
var confirmPassword = document.getElementById('confirmPassword');
var box = document.getElementById('passwordBox');
var box2 = document.getElementById('newPasswordBox');
var box3 = document.getElementById('confirmPasswordBox');
var button = document.getElementById('fields__confirm');
var form = document.getElementById('fields-form');
var elem = document.createElement('div');
var elem2 = document.createElement('div');
var elem3 = document.createElement('div');
elem.style.display = 'none';
box.appendChild(elem);
elem2.style.display = 'none';
box2.appendChild(elem2);
elem3.style.display = 'none';
box3.appendChild(elem3);

password.addEventListener('invalid', function (event) {
	event.preventDefault();
	if (!event.target.validity.valid) {
		elem.textContent = 'only use numbers';
		elem.className = 'field__error';
		password.classList.add("invalid");
		elem.style.display = 'block';
	}
});
newPassword.addEventListener('invalid', function (event) {
	event.preventDefault();
	if (!event.target.validity.valid) {
		elem2.textContent = 'only use numbers';
		elem2.className = 'field__error';
		newPassword.classList.add("invalid");
		elem2.style.display = 'block';
	}
});
let check = function (event) {
	if (newPassword.value ==
		confirmPassword.value) {
	} else {
		event.preventDefault();
		confirmPassword.classList.add("invalid");
		elem3.className = 'field__error';
		elem3.textContent = 'Passwords do not match.';
		elem3.style.display = 'block';
	}

}