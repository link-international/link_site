$(document).ready(function () {
	
	$(document).foundation({
		equalizer: {
			equalize_on_stack: true
		}
	});
	
	$('.slick-slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: false,
		pauseOnHover: true,
		speed: 700,
		appendArrows: $(".slick-arrow-box"),
		prevArrow: "<i class='fa fa-arrow-left'></i>",
		nextArrow: "<i class='fa fa-arrow-right'></i>"
	});
	
	$('.magazine-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		dots: false,
		slidesToShow: 3,
  	slidesToScroll: 1,
		infinite: true,
		pauseOnHover: true,
		speed: 700,
		appendArrows: $(".slick-arrow-box"),
		prevArrow: "<i class='fa fa-arrow-left'></i>",
		nextArrow: "<i class='fa fa-arrow-right'></i>"
	});
	
	// Causes the model-search-tip to appear when a user selects a Make
	$('.make-search-element > select').bind('change', function () {
		$('.model-search-tip').show();
		$('.model-search-form').addClass('model-search-form-active');
	});
	
	if ($('.prode-combo-box > div').length > 1) {
		$('.combo-display').show();
	} else {
		$('.combo-display').hide();
	}
	
	//Automatically ticks receive marketing box
	$('input[name=receivemarketing]').attr('checked', true);
	
	//if there is only one child element, img thumbnails hide()
//	if ($(".image-thumbnails.whatever-tot-element").children == 1) {
//		$(".image-thumbnails").hide();
//	}
	
});