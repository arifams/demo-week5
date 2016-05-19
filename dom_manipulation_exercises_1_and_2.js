$("#btn1").click(function() {
	$("#hello__output").removeClass().addClass('green');
});

$("#btn2").click(function(){
	$("#hello__output").removeClass().addClass('purple');
});

// DOM Manipulation
$("#hello button").click(function() {
	// Get the value from the textbox
	var name = $("#hello input").val();

	// Do stuff with it
	var result = 'Hello ' + name;

	// Put output on page
	$("#hello__output").html(result);
});

$("#fortune button").click(function() {
	// Get the values from the textboxes
	var numChildren = $("#fortune__numchildren").val();
	var partner = $("#fortune__partner").val();
	var place = $("#fortune__place").val();
	var job = $("#fortune__job").val();

	// if(!numChildren) {
	// 	alert("Please enter a number of children");
	// }

	if(!numChildren || !partner || !place || !job) {
		alert("Please make sure all form fields have been filled out.");
	}

	// if(typeof numChildren !== "number") {

	// }

	// Do stuff with them 
	var result = "You will have " + numChildren + " kids with " + partner + " and live in " + place + " and be a " + job + ".";

	// Put the output on the page
	$("#fortune__output").html(result);
});

$("#age-calculator button").click(function() {
	// Get the value from the textbox
	var birthYear = $("#birthYear").val();

	// Do stuff with it
	var age = new Date().getFullYear() - birthYear;

	// Output to HTML
	$("#age").html("You are either " + age + " or " + (age - 1));
});
