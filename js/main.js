$(function () {
	$(".menu a, .logo, .header__link").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr("href"),
			top = $(id).offset().top - $(".menu").outerHeight();
		$('body,html').animate({scrollTop: top}, 1500);
	});

	let menu = $(".menu");
	let menu__btn = $(".menu__btn");
	let headerContent = $(".header__content");
	let menuPadding = $(".menu").outerHeight() - $(".menu").height();
	console.log(menuPadding);
  $(window).scroll(function () {
    if ($(this).scrollTop() > menuPadding - 15) {
      menu.addClass("fixed");
      headerContent.addClass("fixed");
			menu__btn.addClass("fixed");
			} else {
      menu.removeClass("fixed");
      headerContent.removeClass("fixed");
      menu__btn.removeClass("fixed");
    }
  });

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('active');
		$('.burger').toggleClass('active');
		$("body").toggleClass("locked");
	});

	$(".menu__link").on('click', function () {
		$(".menu__list").removeClass("active");
		$(".burger").removeClass("active");
		$("body").removeClass("locked");
	});

	var mixer = mixitup('.portfolio__content');
});
