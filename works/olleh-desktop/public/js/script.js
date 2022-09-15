// Menu link active 
$(document).ready(function () {
	const menuLink = $(".header__menu-link");

	menuLink.on("click", function (event) {
		// event.preventDefault();
		menuLink.removeClass("active");
		$(this).addClass("active");

	});
});

// Header dropdown lang 
$(document).ready(function () {
	const selectDefault = $(".header__navigation-select > .default-option");
	const numberDefault = $(".header__navigation-numbers > .default-option");

	selectDefault.on("click", function () {
		$(this).parent().toggleClass("active");
	});
	numberDefault.on("click", function () {
		$(this).parent().toggleClass("active");
	});

	const selectDropdown = $(".header__navigation-select .dropdown li");
	const numberDropdown = $(".header__navigation-numbers .dropdown li")
	selectDropdown.on("click", function () {
		var currentele = $(this).html();
		$(".header__navigation-select .default-option li").html(currentele);
		$(this).parents().removeClass("active");
	});
	numberDropdown.on("click", function () {
		var currentele = $(this).html();
		$(".header__navigation-numbers .default-option li").html(currentele);
		$(this).parents().removeClass("active");
	});
});

// Right Tabs
$(document).ready(function () {
	$(".right__column-tabs-list li").on("click", function () {
		var index = $(this).closest("li").index();

		$(".right__column-tabs-list > li").removeClass("active");
		$(this).closest("li").addClass("active");
		console.log(index);

		$('.right__column-tabs-content').find('.right__column-tabs-item').not('.right__column-tabs-item:eq(' + index + ')').slideUp();

		$('.right__column-tabs-content').find('.right__column-tabs-item:eq(' + index + ')').slideDown();
	});
});

// Selected ranger number
$(document).ready(function () {
	const rangeNumber = $(".virtual__details-range a");
	rangeNumber.click(function (event) {
		event.preventDefault();
		rangeNumber.removeClass("active");
		$(this).addClass("active");
	});
});

// Selected bet resualt
$(document).ready(function () {
	$(".games__list-bet").click(function (event) {
		event.preventDefault();
		$(this).toggleClass("selected");
	});
});

// Selected bet resualt
$(document).ready(function () {
	$(".sport__spoiler-item").click(function (event) {
		event.preventDefault();
		$(this).toggleClass("active");
	});
});

// Selected button
$(document).ready(function () {
	const titleRightBtn = $(".sport__spoiler-title-right button");
	titleRightBtn.click(function (event) {
		event.preventDefault();
		titleRightBtn.removeClass("active");
		$(this).addClass("active");
	});
});

// Accordion
$(document).ready(function () {
	$(".sport__spoiler-title").on("click", function (event) {
		if ($(event.target).is(".sport__spoiler-title")) {
			$(this).toggleClass("active").next().slideToggle();
		}
	});
});
// Selected accordion view
$(document).ready(function () {
	const viewBtn = $(".view__btns button");
	viewBtn.click(function (event) {
		event.preventDefault();
		viewBtn.removeClass("active");
		$(this).addClass("active");
	});
});

/* ============ Calendar Page ================ */
$(document).ready(function () {
	let leftSportBtn = $(".left__column-buttons button");
	leftSportBtn.click(function (event) {
		event.preventDefault();
		leftSportBtn.removeClass("active");
		$(this).addClass("active");
	});
});
// Calendar Tabs
// Right Tabs
$(document).ready(function () {
	let calendarTabBtn = $(".calendar__wrapper-buttons .tab-button");
	calendarTabBtn.on("click", function () {
		calendarTabBtn.removeClass("active");
		$(this).addClass("active");
	});
});

/* ============ Live Page ================ */
// Active Live Sport
$(document).ready(function () {
	let liveItem = $(".left__column-lives .live__item");
	liveItem.on("click", function () {
		// liveItem.removeClass("active");
		// $(this).addClass("active");
		$(this).toggleClass("active");
		$(this).next().toggleClass("open");
	});
});
// Active Small Live Sport
$(document).ready(function () {
	let liveItem = $(".left__column-lives .live__item--tb");
	liveItem.on("click", function () {
		let offset = $(this).offset().top;
		let height = $(this).height() * 2;
		console.log(offset);
		if ($(this).hasClass("active")) {
			console.log("hello");
			$(this).removeClass("active");
			$(this).next().removeClass("open");
			$(this).next().children(".live__item").removeClass("active");
		} else {
			liveItem.removeClass("active");
			liveItem.next().removeClass("open");
			$(this).addClass("active");
			$(this).next().addClass("open");
			$(this).next().css("top", offset - height + "px");
			$(this).next().children(".live__item").addClass("active");
			$(this).next().children(".live__item").addClass("active");
		}


		// $(this).toggleClass("active");
		// $(this).next().toggleClass("open");
	});
});
// Active Live Sport Bet - Center Column
$(document).ready(function () {
	let liveSportBet = $(".live__sports .live__sport-header");
	liveSportBet.on("click", function (event) {
		// if($(event.target).is(liveSportBet)) {
		// 	$(this).toggleClass("active");
		// 	$(this).next().toggleClass("open");
		// }
		$(this).toggleClass("active");
		$(this).next().toggleClass("open");
		$(".live__sport-star").click(function (event) {
			event.stopPropagation();
		});
	});
});
// Active Star
// $(document).ready(function () {
// 	$(".live__sport-star svg").on("click", function() {
// 		$(this).parent.toggleClass("is-active");
// 	});
// });
// Active Navigation Button
$(document).ready(function () {
	$(".league__spoiler-header").on("click", function (event) {
		$(this).children(".league__spoiler-arrow").toggleClass("active");
		$(this).siblings(".league__spoiler-body").toggleClass("open");
	});
	$(".league__spoiler-cross").on("click", function (event) {
		event.stopPropagation();
		$(this).parent().parent(".league__spoiler").addClass("closed");
	});
});
$(document).ready(function () {
	$(".league__tab").on("click", function () {
		$(this).parent().siblings(".league__spoilers").toggleClass("active");
		$(this).children(".league__open,.league__arrow,.league__close").toggleClass("active");
	});
});
$(document).ready(function () {
	$(".live__sports-navigation button").on("click", function () {
		$(".live__sports-navigation button").removeClass("active");
		$(this).addClass("active");
	});
});
$(document).ready(function () {
	$(".live__scoreboard-sport-bet__item").on("click", function () {
		$(this).toggleClass("selected");
	});
});
$(document).ready(function () {
	$(".live__sport-content-draw,.live__sport-content-left,.live__sport-content-right").click(function (event) {
		$(this).toggleClass("selected");
		$(this).siblings(".live__sport-content-draw,.live__sport-content-left,.live__sport-content-right").removeClass("selected");
	});
});
$(document).ready(function () {
	$(".card__icon").click(function (event) {
		$(this).toggleClass("selected");
		$(this).parent().parent().parent(".card").toggleClass("selected");
	});
});
$(document).ready(function () {
	if ($(".jersey__item").hasClass("jersey__item_2")) {
		$(".jersey__item_2").find("[data-sleeve_detail]").css({ fill: "#000000" });
		$(".jersey__item_2").find("[data-sleeve]").css({ fill: "#000000" });
		$(".jersey__item_2").find("[data-stripes]").css({ fill: "#ffff00" });
		$(".jersey__item_2").find("[data-base]").css({ fill: "#ffff00" });
		$(".jersey__item_2").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_1")) {
		$(".jersey__item_1").find("[data-sleeve_detail]").css({ fill: "#000000" });
		$(".jersey__item_1").find("[data-sleeve]").css({ fill: "#ffffff" });
		$(".jersey__item_1").find("[data-stripes]").css({ fill: "#ffffff" });
		$(".jersey__item_1").find("[data-base]").css({ fill: "#000000" });
		$(".jersey__item_1").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_3")) {
		$(".jersey__item_3").find("[data-sleeve_detail]").css({ fill: "#006600" });
		$(".jersey__item_3").find("[data-sleeve]").css({ fill: "#006600" });
		$(".jersey__item_3").find("[data-stripes]").css({ fill: "#000000" });
		$(".jersey__item_3").find("[data-base]").css({ fill: "#006600" });
		$(".jersey__item_3").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_4")) {
		$(".jersey__item_4").find("[data-sleeve_detail]").css({ fill: "#ff0000" });
		$(".jersey__item_4").find("[data-sleeve]").css({ fill: "#ff0000" });
		$(".jersey__item_4").find("[data-stripes]").css({ fill: "#008000" });
		$(".jersey__item_4").find("[data-base]").css({ fill: "#ff0000" });
		$(".jersey__item_4").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_5")) {
		$(".jersey__item_5").find("[data-sleeve_detail]").css({ fill: "#e60000" });
		$(".jersey__item_5").find("[data-sleeve]").css({ fill: "#e60000" });
		$(".jersey__item_5").find("[data-stripes]").css({ fill: "#e60000" });
		$(".jersey__item_5").find("[data-base]").css({ fill: "#ffffff" });
		$(".jersey__item_5").find(".jersey__number").css("color", "#e60000");
	}
	if ($(".jersey__item").hasClass("jersey__item_6")) {
		$(".jersey__item_6").find("[data-sleeve_detail]").css({ fill: "#db0a0a" });
		$(".jersey__item_6").find("[data-sleeve]").css({ fill: "#ef0b0b" });
		$(".jersey__item_6").find("[data-stripes]").css({ fill: "#f2e9e9" });
		$(".jersey__item_6").find("[data-base]").css({ fill: "#ec0e0e" });
		$(".jersey__item_6").find(".jersey__number").css("color", "#000000");
	}
	if ($(".jersey__item").hasClass("jersey__item_7")) {
		$(".jersey__item_7").find("[data-sleeve_detail]").css({ fill: "#000000" });
		$(".jersey__item_7").find("[data-sleeve]").css({ fill: "#000000" });
		$(".jersey__item_7").find("[data-stripes]").css({ fill: "#ce0000" });
		$(".jersey__item_7").find("[data-base]").css({ fill: "#000000" });
		$(".jersey__item_7").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_8")) {
		$(".jersey__item_8").find("[data-sleeve_detail]").css({ fill: "#0a27ff" });
		$(".jersey__item_8").find("[data-sleeve]").css({ fill: "#ff740a" });
		$(".jersey__item_8").find("[data-stripes]").css({ fill: "#ffa21f" });
		$(".jersey__item_8").find("[data-base]").css({ fill: "#ff740a" });
		$(".jersey__item_8").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_9")) {
		$(".jersey__item_9").find("[data-neckline]").css({ fill: "#000000" });
		$(".jersey__item_9").find("[data-sleeve]").css({ fill: "#000000" });
		$(".jersey__item_9").find("[data-stripes]").css({ fill: "#ffff00" });
		$(".jersey__item_9").find("[data-base]").css({ fill: "#000000" });
		$(".jersey__item_9").find("[data-top-litter]").css({ fill: "transparent" });
		$(".jersey__item_9").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_10")) {
		$(".jersey__item_10").find("[data-neckline]").css({ fill: "#caca00" });
		$(".jersey__item_10").find("[data-sleeve]").css({ fill: "#caca00" });
		$(".jersey__item_10").find("[data-stripes]").css({ fill: "#c0c0c0" });
		$(".jersey__item_10").find("[data-base]").css({ fill: "#ffffff" });
		$(".jersey__item_10").find("[data-top-litter]").css({ fill: "transparent" });
		$(".jersey__item_10").find(".jersey__number").css("color", "transparent");
	}
	if ($(".jersey__item").hasClass("jersey__item_11")) {
		$(".jersey__item_11").find("[data-neckline]").css({ fill: "#ff0000" });
		$(".jersey__item_11").find("[data-sleeve]").css({ fill: "#ff0000" });
		$(".jersey__item_11").find("[data-stripes]").css({ fill: "transparent" });
		$(".jersey__item_11").find("[data-base]").css({ fill: "#ff0000" });
		$(".jersey__item_11").find("[data-top-litter]").css({ fill: "#ffffff" });
		$(".jersey__item_11").find(".jersey__number").css("color", "transparent");
	}
});