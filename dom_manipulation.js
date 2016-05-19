$(document).ready(function() {
	// function squareNumber(num) {
	// 	var result = num * num;

	// 	console.log(result);

	// 	return result;
	// }


	function squareNumber(num) {
		return num * num;
	}

	// var myAnswer = squareNumber(5);

	///////

	$("#squareNumber").click(function() {
		// Get value from textbox
		var num = $("#numToSquare").val(); 

		// Do something with it
		var result = squareNumber(num);

		// Print it to the page
		$("#originalNum").html(num);
		$("#outputNum").html(result);
	});

	$("#madLibs-btn").click(function() {
		// Get values from textboxes
		var noun = $("#noun").val();
		var verb = $("#verb").val();
		var adj = $("#adjective").val();

		// Do nothing with it

		// Print them to the page
		$("#noun-placeholder").html(noun);
		$("#verb-placeholder").html(verb);
		$("#adj-placeholder").html(adj);
	});

	function pigLatin(input) {
		// returns input in pig latin
	}

	// Click event

	

});
