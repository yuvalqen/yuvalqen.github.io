function random_range(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function randomize_position(i, obj) {

	$(obj).css('margin-top', random_range(20, 50) + "px");
	tilt_degs = "rotate(" + random_range(-40, 41) + "deg)";
	$(obj).css('transform', tilt_degs);
	$(obj).css('-webkit-transform', tilt_degs);
	$(obj).css('-moz-transform', tilt_degs);
	$(obj).css('-o-transform', tilt_degs);
	$(obj).show();
}

$(document).ready(function()
{
    $.each($(".tool_logo"), randomize_position);

    setTimeout(function () {
    	if ($(window).scrollTop() == 0) {
    		var leap_distance = $("#services h1").offset().top - $(window).height() + 100
			$("#services h1").animate({"margin-top": "-="+leap_distance+"px", "margin-bottom": "+="+leap_distance+"px"}, 300, 'easeOutCubic')
							 .animate({"margin-top": "+="+leap_distance+"px", "margin-bottom": "-="+leap_distance+"px"}, 300, 'easeInCubic')
    	}
    }, 5000);
});