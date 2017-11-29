$(document).ready(function() {
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	$(window).resize(function() {
		heightDetect();
	})
		heightDetect();


	$(".menu_btn").click(function() {
		$(".menu_btn").toggleClass("active");
	});

	$(".top_menu ul").click(function() {
		$(".top_menu").fadeOut(600);
		$(".menu_btn").toggleClass("active");
	});

	$(".menu_btn").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInDown animated")
		} else {
		$(".top_menu").fadeIn(600);
		$(".top_menu li a").addClass("fadeInDown animated")
		}
	});

			$(".meat_btn").click(function() {
				if ($(".menu_meat").is(":visible")) {
					$(".menu_meat").fadeOut(600)
				} else {
					$(".menu_meat").fadeIn(100)
				} 
			});

			$(".sushi_btn").click(function() {
				if ($(".menu_sushi").is(":visible")) {
					$(".menu_sushi").fadeOut(600);
				} else {
				$(".menu_sushi").fadeIn(600);
				}
			});
			$(".salads_btn").click(function() {
				if ($(".menu_salads").is(":visible")) {
					$(".menu_salads").fadeOut(600);
				} else {
				$(".menu_salads").fadeIn(600);
				}
			});
			$(".burgers_btn").click(function() {
				if ($(".menu_burgers").is(":visible")) {
					$(".menu_burgers").fadeOut(600);
				} else {
				$(".menu_burgers").fadeIn(600);
				}
			});
			$(".pizza_btn").click(function() {
				if ($(".menu_pizza").is(":visible")) {
					$(".menu_pizza").fadeOut(600);
				} else {
				$(".menu_pizza").fadeIn(600);
				}
			});
			$(".cakes_btn").click(function() {
				if ($(".menu_cakes").is(":visible")) {
					$(".menu_cakes").fadeOut(600);
				} else {
				$(".menu_cakes").fadeIn(600);
				}
			});
			$(".closeBtn").click(function() {

				$(".menu_meat").fadeOut(600);
				$(".menu_sushi").fadeOut(600);
				$(".menu_salads").fadeOut(600);
				$(".menu_burgers").fadeOut(600);
				$(".menu_pizza").fadeOut(600);
				$(".menu_cakes").fadeOut(600);
				
			});

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});
	/*preloader*/
$(window).load( function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
	
	/*scrolling parallax effect*/
$(window).scroll( function() {

		var wScroll = $(this).scrollTop();
			
		$(".keyboard_1").css(
			"top" , (wScroll*0.009)-4+"em");
		
		$(".mouse_1").css(
			"top" , (wScroll*0.012)-5+"em");

		$(".site_name").css({
			"transform" : "translate(0px, "+(wScroll)/4 +"%)"});
		
});
