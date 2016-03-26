$('document').ready(function(){ 
	
	$('#submit-btn').click(function(){

		var myCity = $("#city-type").val()
		console.log(myCity.toLowerCase())

		if (myCity === "new york" || myCity === "New York City" || myCity === "nyc" || myCity === "NYC" || myCity === "NY City"|| myCity === "New York"){
				$("body").attr('class', 'nyc');
		}else if 
		(myCity === "sanfran" || myCity === "SF" || myCity === "San Francisco") {
				$("body").attr('class', 'sf');
		}else if
		(myCity === "LA" || myCity === "la" || myCity === "Los Angeles" || myCity === "los angeles") {
				$("body").attr('class', 'la');
		}else if 
		(myCity === "Austin" || myCity === "austin") {
			$("body").attr('class', 'austin');
		}else if 
		(myCity === "Sydney"|| myCity === "sydney") {
			$("body").attr('class', 'sydney');
		}else if 
		(myCity === "") {
			alert("Type in a city name!");
		}else{
			alert("Type in a city name!");
		}	
 
  		return false;

	});

});