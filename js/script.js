$(document).ready(function(){

	
	// $('section.epigraph > h2').mouseenter(function(event){
	// 	console.log("Hovering Over");
	// 	$('section.epigraph h2').hide();
	// }).mouseleave(function(event){
	// 	console.log("Hovering Out");
	// 	$('section.epigraph span').show();
	// });


	$( "section.epigraph" ).hover(function(event) {
	    $("section.epigraph h2").hide(event).fadeOut( 500 );
	    $("section.epigraph span").show(event).fadeIn( 500 );
	});

	$( "section.epigraph" ).mouseleave(function(event) {
	    $("section.epigraph h2").show(event).fadeOut( 500 );
	    $("section.epigraph span").hide(event).fadeIn( 500 );
	});


});