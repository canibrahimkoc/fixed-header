// Fixed Header
$(document).ready(function () {
	if (viewport.is('>md')) {
		$(window).scroll(function () {
		  //var topIndex = header.css("zIndex") + 1;
			var topIndex = 100;
			var sticky = $('.header-menu');
			var header = sticky.parent();
			var background = header.css("background-color");
			var height = header.outerHeight();
			scroll = $(window).scrollTop();
			if (scroll >= height) sticky.css({"top": "0","right": "0", "left": "0", "position": "fixed", "background": background, "z-index": topIndex});
			else sticky.css({"position": "unset"})
		});
	}
});