$(function () {
	$.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;
	$.datepicker._updateDatepicker = function (inst) {
		$.datepicker._updateDatepicker_original(inst);
		var afterShow = this._get(inst, 'afterShow');
		if (afterShow)
			afterShow.apply((inst.input ? inst.input[0] : null), [inst]);
	}
});

$("#custom-input-date").datepicker({
	dateFormat: 'yy/mm/dd',
	beforeShow: function (input, inst) {
		inst.dpDiv.css({
			marginTop: "0px",
			marginLeft: "0px"
		});
	},
	onSelect: function (selectedDate, inst) {
		showDateInTitle(inst);
	},
	afterShow: function (inst) {
		showDateInTitle(inst);
	}
});

function showDateInTitle(picker) {
	var span = picker.dpDiv[0].querySelector('.ui-datepicker-day'),
		df, month;
	if (span === null) {
		month = picker.dpDiv[0].querySelector('.ui-datepicker-month');
		if (!month) return;
		span = document.createElement('span');
		span.setAttribute('class', 'ui-datepicker-day');
		df = document.createDocumentFragment();
		df.appendChild(span);
		df.appendChild(document.createTextNode('\u00a0'));
		month.parentNode.insertBefore(
			df,
			month
		);
	}
	span.textContent = picker.selectedDay;
}