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

// Function to check whether given string is a URL
StringLibrary.prototype.isURL = function(arg) {
	if ( arg.search("http:") == 0 || arg.search("https:") == 0 )
		return true;
	else
		return false;
};

// Function to capitalize first letter of each word in a given string
StringLibrary.prototype.makeTitleCase = function(arg) {
	var string = "";
	var words = arg.split(" ");
	for (i=0; i<words.length; i++) {
		var word = words[i];
		string += word.substr(0,1).toUpperCase() + word.substr(1, word.length) + ' ';
	}
	return string;
}

// Function to replace a character with another in a given string
StringLibrary.prototype.replaceInString = function( arg, character, replacementChar ) {
	var string = "";
	
	for (i=0; i<arg.length; i++) {
		if (arg[i] === character)
			string += replacementChar;
		else
			string += arg[i];
	}
	return string;
}
