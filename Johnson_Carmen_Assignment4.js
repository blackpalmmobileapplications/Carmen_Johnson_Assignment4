//Carmen Earl Johnson
//SDI Project 4
//05/24/2012

alert("JavaScript works!");



/********* STRING LIBRARY ********************/

StringLibrary = function() {
  emailPattern = /[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
}

/* PUBLIC METHODS OF THE STRING LIBRARY */
// Log function
StringLibrary.prototype.log = function(output) {
  return console.log(output);
};

// Function to check whether given string is in form of a phone number: ###-###-####
StringLibrary.prototype.isPhoneNumber = function(arg) {
  var numbers = arg.split('-');
	if (numbers.length == 3  &&  numbers[0].length == 3 && numbers[1].length == 3 && numbers[2].length == 4)
		return true;
	else
		return false;
};

// Function to check whether given string is an e-Mail address
StringLibrary.prototype.isEmail = function(arg) {
	var lower = arg.toLowerCase();
	if ( emailPattern.test(lower) )
		return true;
	else
		return false;
};