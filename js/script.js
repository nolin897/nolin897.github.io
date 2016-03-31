$(document).ready(function(event){

	$("section.epigraph").mouseenter(function(){
	    $("section.epigraph > h2#greek").hide(event).fadeOut(3000);
	    $("section.epigraph > h2#translation").show(event).fadeIn(3000);
		});

	$("section.epigraph").mouseleave(function(){
	    $("section.epigraph > h2#translation").hide(event).fadeOut(3000);
	    $("section.epigraph > h2#greek").show(event).fadeIn(3000);

	return false;

	});

});	


