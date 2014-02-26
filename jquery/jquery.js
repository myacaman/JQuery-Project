$(function(){
	// Call by TagName
	$('h3').css('color', '#000066');

	// Call by ClassName
	$('.square').fadeOut(3000).fadeIn(3000);
	
	// Call by ID
	$("#tableimage" )

		// Event Call
  		.mouseenter(function() {
    		$(this).animate({width:"110%"});
  		})

  		.mouseleave(function() {
    		$(this).animate({width:"100%"});
  	});

  	// Manipulation Call
    $("h2 + p").append(" Click on each title to see more information about each stage.")

  	$("ol").append("<li> They are fearless and creative when it comes to User Experience.</li>");

  	// JQuery UI Call 
    $( "#accordion" ).accordion();
});
