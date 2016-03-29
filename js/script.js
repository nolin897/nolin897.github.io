$(document).ready(function(){

	
	// $('section.epigraph > h2').mouseenter(function(event){
	// 	console.log("Hovering Over");
	// 	$('section.epigraph h2').hide();
	// }).mouseleave(function(event){
	// 	console.log("Hovering Out");
	// 	$('section.epigraph span').show();
	// });


	$( "section.epigraph" ).mouseenter(function(event) {
		console.log(mouseenter);
	    $("section.epigraph h2").hide(event).fadeOut( 500 );
	    console.log(hide).log(fadeOut);
	    $("section.epigraph span").show(event).fadeIn( 500 );
		consol.log(show).log(fadeIn);
	});

	$( "section.epigraph" ).mouseleave(function(event) {
		console.log(mouseleave);
	    $("section.epigraph h2").show(event).fadeOut( 500 );
	    console.log(show).log(fadeOut);
	    $("section.epigraph span").hide(event).fadeIn( 500 );
	    console.log(hide).log(fadeIn);
	});


});