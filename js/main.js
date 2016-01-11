$(document).ready(function(){

	// Ready For Action.

	$('.carousel').slick({
		autoplay:true,
		dots:true,
		infinite:false,
		fade: true,
  		cssEase: 'linear'
	});
	
});

function init() {
	
	// start up after 2sec no matter what
    window.setTimeout(function(){
        start();
    }, 2000);
}

// fade in experience
function start() {
	
	$('body').removeClass("loading").addClass('loaded');
	
}

$(window).load(function() {
	
	// fade in page
	init();
	
});
