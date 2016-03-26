	
    $('#switcher #grayButton').click(function(){
		    console.log("button clicked");
        $('body').css('backgroundColor','gray');
        $('h1').css('color','white');
        console.log($('h1').css('color'));
        $('p').css('color','white');
        console.log($('p').css('color'));
    });

  	$('#switcher #whiteButton').click(function(){
		    console.log("button clicked");
        $('body').css('backgroundColor','white');
        $('h1').css('color','black');
        console.log($('h1').css('color'));
        $('p').css('color','black');
        console.log($('p').css('color'));
    });