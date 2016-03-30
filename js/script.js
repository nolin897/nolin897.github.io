$(document).ready(function(event){

	$("section.epigraph").mouseenter(function(event){
		// console.log(mouseenter);
	    $("section.epigraph h2#greek").hide(event).fadeOut(500);
	    // console.log(hide).log(fadeOut);
	    $("section.epigraph h2#translation").show(event).fadeIn(500);
		// consol.log(show).log(fadeIn);
	});

	$("section.epigraph").mouseleave(function(event){
		// console.log(mouseleave);
	    $("section.epigraph h2#greek").show(event).fadeOut(500);
	    // console.log(show).log(fadeOut);
	    $("section.epigraph h2#translation").hide(event).fadeIn(500);
	    // console.log(hide).log(fadeIn);
	});

});	


