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

/*************** NUMBER LIBRARY *************/

NumberLibrary = function() {
}

// Log function
NumberLibrary.prototype.log = function(arg) {
	console.log(arg);
};

// Function to format a number to use a certain precision
NumberLibrary.prototype.formatNumber = function(arg, numberOfDigits) {
	var str = arg.toString();
	var num = str.split('.');
	var decimalPart = "";
	if (num[1] == null)
		num[1] = "";
	if (num[1].length < numberOfDigits) {
		var limit = numberOfDigits - num[1].length;
		for (i=0; i<limit; i++)
			num[1] += '0';
		decimalPart = num[1];
	}
	else if (num[1].length > numberOfDigits) {
		var limit = num[1].length - numberOfDigits;
		var decimal = parseInt(num[1]);
		for (i=0; i<limit; i++)	{
			var temp = decimal%10;
			decimal /= 10;
			decimal = Math.round(decimal);
			if ( temp >= 5)
				decimal++;
		}
		decimalPart = decimal.toString();
	}
	
	return num[0] + '.' + decimalPart;
};

// Function to check whether a number fuzzy matches another!
NumberLibrary.prototype.fuzzyMatch = function(arg, matchNumber, percent) {
	var difference = arg - matchNumber;
	if (Math.abs(difference)/matchNumber <= (percent/100))
		return true;
	else
		return false;
};

// Function to find number of days and hours between two dates
NumberLibrary.prototype.findHoursDays = function(arg1, arg2) {
	var hours = 0;
	var days = 0;
	var oneDay = 1000*60*60*24;
	var date1 = arg1.split('/');
	var date2 = arg2.split('/');
	
	var jDate1 = new Date(date1[2], date1[1]-1, date1[0]);
	var jDate2 = new Date(date2[2], date2[1]-1, date2[0]);
	
	days = Math.abs( (jDate1.getTime()-jDate2.getTime()) / oneDay );
	hours = days * 24;
	
	return [days, hours];
};

// Function to convert a given number in a string to an integer format
NumberLibrary.prototype.toInt = function(arg) {
	return parseInt(arg);
};


/*************** ARRAY LIBRARY *************/

ArrayLibrary = function() {
	nonDigitPattern = /\D/;
}

// Log
ArrayLibrary.prototype.log = function(arg) {
	console.log(arg);
};

// Find out the minimum value greater than a certain number
ArrayLibrary.prototype.minVal = function(arg, greaterThan) {
	var len = arg.length;
	var min = -1;
	
	for (i=0; i<len; i++) {
		if (arg[i] > greaterThan && (arg[i] < min || min == -1))
			min = arg[i];
	}
	
	if (min != -1)
		return min;
	else
		return "No Value Exists";
};

// Sum of all ints in a given array.
ArrayLibrary.prototype.totalValue = function(arg) {
	var len = arg.length;
	var total = 0;
	
	for (i=0; i<len; i++) {
		if (!nonDigitPattern.test(arg[i]))
			total += parseInt(arg[i]);
	}
	return total;
};

ArrayLibrary.prototype.sortArray = function(arg, key) {
	var len = arg.length;
	for (i=0; i<len; i++) {
		for (j=0; j<len-i-1; j++) {
			if (arg[j][key] > arg[j+1][key]) {
				var temp = arg[j];
				arg[j] = arg[j+1];
				arg[j+1] = temp;
			}
		}
	}
	return arg;
}		