/* 
 * Hybrid of the original FizzBuzz challenge. 
 * This script takes user input for the two words and the number 
 * of iterations. The premise is the same, I just use jQuery to 
 * retrieve user input and print the results to the page.
 */
$(document).ready(function() {
	$('#preferences').submit(function() {
		$('#printout').empty(); //Clear the contents of the section
		printNumbers($('#divBy3Word').val(), $('#divBy5Word').val(), $('#numToPrint').val());
		event.preventDefault();
	});
});

var printNumbers = function(divisibleBy3, divisibleBy5, loopNum) {
	for(var i = 1; i <= loopNum; i++) {
		if(!(i % 3) && !(i % 5)) {
			$("#printout").append('<p>' + divisibleBy3 + divisibleBy5 + '</p>');
		} else if(!(i % 3)) {
			$("#printout").append('<p>' + divisibleBy3 + '</p>');
		} else if(!(i % 5)) {
			$("#printout").append('<p>' + divisibleBy5 + '</p>');
		} else {
			$("#printout").append('<p>' + i + '</p>');
		}
	}
}