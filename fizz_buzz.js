/* 
 * Implementation of the FizzBuzz challenge using jQuery
 * to add the results to the DOM.
 */
$(document).ready(function() {
	printNumbers('fizz', 'buzz', 100);
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