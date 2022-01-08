
$(document).ready(function () {
	$("#slider-1").slider({
		animate: true,
		range: "min",
		value: 1,
		min: 1,
		max: 100,
		step: 1,
		opacity: 0.5,
		slide: function (event, ui) {
			$("#betslip-range-result-1").html(ui.value);
		},
		change: function (event, ui) {
			$('#znch1').attr('value', ui.value);
		}

	});
});
$(document).ready(function () {
	$("#slider-2").slider({
		animate: true,
		range: "min",
		value: 1,
		min: 1,
		max: 100,
		step: 1,
		opacity: 0.5,
		slide: function (event, ui) {
			$("#betslip-range-result-2").html(ui.value);
		},
		change: function (event, ui) {
			$('#znch2').attr('value', ui.value);
		}

	});
});
$(document).ready(function () {
	$("#slider-3").slider({
		animate: true,
		range: "min",
		value: 1,
		min: 1,
		max: 100,
		step: 1,
		opacity: 0.5,
		slide: function (event, ui) {
			$("#betslip-range-result-3").html(ui.value);
		},
		change: function (event, ui) {
			$('#znch3').attr('value', ui.value);
		}

	});
});
$(document).ready(function () {
	$("#slider-4").slider({
		animate: true,
		range: "min",
		value: 1,
		min: 1,
		max: 100,
		step: 1,
		opacity: 0.5,
		slide: function (event, ui) {
			$("#betslip-range-result-4").html(ui.value);
		},
		change: function (event, ui) {
			$('#znch4').attr('value', ui.value);
		}

	});
});
