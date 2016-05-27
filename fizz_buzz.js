$(document).ready(function() {
	printNumbers('fizz', 'buzz', 100);
});

var printNumbers = function(divisibleBy3, divisibleBy5, loopNum) {
	
	for(var i = 1; i <= loopNum; i++) {
		if((i % 3 === 0) && (i % 5 === 0)) {
			$("#printout").append('<p>' + divisibleBy3 + ' ' + divisibleBy5 + '</p>');
		} else if(i % 3 === 0) {
			$("#printout").append('<p>' + divisibleBy3 + '</p>');
		} else if(i % 5 === 0) {
			$("#printout").append('<p>' + divisibleBy5 + '</p>');
		} else {
			$("#printout").append('<p>' + i + '</p>');
		}
	}

}