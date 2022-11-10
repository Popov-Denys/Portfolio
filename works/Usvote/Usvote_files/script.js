$(document).mouseup(function (e) {
	var container = $(".voter-account-links");
	if (container.has(e.target).length === 0) {
		$(".voter-account-links").removeClass('active');
	}
});
$('.usvote-account').click(function () {
	$(".voter-account-links").toggleClass('active');
});