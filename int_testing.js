/* "Safe" values
 * Number.MAX.SAFE.INTERGER is predefined in ES6 
 * -9007199254740991 = Number.MIN_SAFE_INTEGER
 *  Remember theres a "big number" utility if you need it
 */

//To test if a value is an integer ..
Number.isInteger( 23 ); //true
Number.isinteger( 23.000 ); //true
Number.isInteger( 23.01 ); //false
Number.isInteger( 23.00001);//false

//polyfill Number.isInteger() for pre-ES6
if (!Number.isInteger) {
	Number.isInteger = function(number) {
		return typeof number == "number" && number % 1 == 0;
	};
}

//Testing if a value is a "safe integer" with Number.isSafeInteger()
Number.isSafeInteger( Number.MAX_SAFE_INTEGER);	// true


Number.isSafeInteger( Math.pow( 2, 53 )) //false...remember max safe integer is 9007199254740991
// and Math.pow( 2, 53) = 9007199254740992


Number.isSafeInteger( Math.pow( 2, 53 ) - 1);//which is why this is true because 
//9007199254740991 is safe


//To polyfill Number.isSafeInteger() in pre-ES6 browsers:

if (!Number.isSafeInteger) {
	Number.isSafeInteger = function(num) {
		return Number.isInteger( num ) &&
			Math.abs( num ) <= Number.MAX_SAFE_INTEGER;
	};
}
