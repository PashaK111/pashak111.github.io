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
			$(".top_menu li a").removeClass("fadeInLeft animated")
		} else {
		$(".top_menu").fadeIn(600);
		$(".top_menu li a").addClass("fadeInLeft animated")
		}
	});


	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();


	$(".slider .bd li").first().before( $(".slider .bd li").last() );
$(".slider").hover(function(){
	 $(this).find(".arrow").stop(true,true).fadeIn(300) 
	 },function(){ 
	 	$(this).find(".arrow").fadeOut(300) });				
	 $(".slider").slide(
	 	{ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",autoPlay:true, vis:3,autoPage:true, trigger:"click"}
	);
});
	/*preloader*/
$(window).load( function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
	
	/*scrolling parallax effect*/
$(window).scroll( function() {

		var wScroll = $(this).scrollTop();
			
		$(".logo_site").css({
			"transform" : "translate(0px, "+(wScroll)/3 +"%)"});

		$(".main_icecream").css({
			"transform" : "translate(0px, "+(wScroll)/10 +"%)"});

		$(".main_name").css({
			"transform" : "translate(0px, "+(wScroll)/12 +"%)"});

});
