var total = 0;

// When we click addItem
$("#addItem").click(function() {
	// Get the values from the item and price textboxes
	var item = $("#item").val();
	var price = parseFloat($("#price").val());

	// Append the item to the item list
	$("#itemList").append('<li>' + item + ' $' + price.toFixed(2) + '</li>');

	// Add the price to the total
	total += price;

	// Display the total
	$("#cost").html(total.toFixed(2));
});
//