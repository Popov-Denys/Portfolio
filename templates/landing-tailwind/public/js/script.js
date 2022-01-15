$(document).ready(function () {
	$('.hamburger').click(function () {
		$('.burger-menu').addClass('active');
		$('body').addClass('lock');
	});
});
$(document).ready(function () {
	$('.cross').click(function () {
		$('.burger-menu').removeClass('active');
		$('body').removeClass('lock');
	});
})
$(document).mouseup(function (e) {
	var container = $(".burger-content");
	if (container.has(e.target).length === 0) {
		$('.burger-menu').removeClass('active');
		$('body').removeClass('lock');
	}
});