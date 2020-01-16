$(document).ready(function(){

    // Carousel

    $('.carousel__inner').slick({
        speed: 600,
        slidesToShow: 1,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        responsive: [{
			breakpoint: 950,
			settings: {
			speed: 1200,
			autoplay: true,
			autoplaySpeed: 2400,
			arrows: false,
			slidesToShow: 1,
			mobileFirst: true
			}
		}]
    });

	// Active Tabs

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	// Slide Catalog-Item

	function toggleSlide(item) {
		$(item).each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
		});
	};

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal PopUp

    $('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});

    $('.button_mini').each(function(i) {
		$(this).on('click', function() { 
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});

    $('.modal__close').on('click', function() {
		$('.overlay, .modal').fadeOut('slow');
	});
	
	// Validate Forms

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: {
					required: true
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символа!")
				},
				phone: "Введите свой номер телефона",
				email: {
					required: "Пожалуйста введите свою почту",
					email: "Неправильно введен адрес"
				}
			}
		});
	};

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order');

	// Masked Input

	$('input[name=phone]').mask("+7 (999) 999-9999");

	// PHPMailer.php

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlat, #thanks').fadeIn('slow');			


			$('form').trigger('reset');
		});
		return false;
	});

	// PageUp

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	// Smooth Scroll

	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

});


// Owl-Carousel, Tiny Slider, Slick Slider, Bootstrap Carousel