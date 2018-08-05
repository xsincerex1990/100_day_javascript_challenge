/**the void operator can be useful in a few other circumstances, if you need to ensure that an expression has no result value (even if it has side effects) example below.**/

var x = 20
typeof(x); //number

var a = void x;
a; //undefined

/** SPECIAL NUMBERS
 * Any mathematic operation you perform without both operands being numbers, will give  NaN
 
 * NaN IS NOT "Not a Number" instead think of its better to think of it as "invalid number," "failed number," or even "bad number".
 *
 * BUT REMEMBER!! "the type of not-a-number is 'number'!"
 * CONFUSING SHIT
 **/

var jet = 2 / "foo"; //NaN
typeof jet === "number"; //True

/**NaN is a "sentinel value" which means "I tried to perform a mathematic operation but failed, so here's the failed number result instead."**/

/**You CANNOT test NaN like undefined or null.
NaN is never another NaN value. so NaN !== NaN**/

var a = 2 / "foo";

a == NaN; //false
a === NaN; //false

/**One method to test if a value is equal to NaN is written below.**/
var a = 2 / "foo";
isNaN( a ); //True

/**But isNaN() has a fatal flaw. it tried to take the meaning
of NaN ("Not a Number") too literally. basically what it
does: "test if the thing passed in is either not a number o
r is a number." But that's not quite accurate.**/

var a = 2 / "foo";
var b = "foo";

a; // NaN
b; // "foo"

/**
window.isNaN( a ); //true
window.isNaN( b ); // true wtf? Took too literally.
this is a 19 year old bug. 
**/


/**
 * For ES6 a utility has been provided: Number.isNaN(). 
 * A simple polyfill to safely check in preES-6 browsers:**/

if (!Number.isNaN) { 
	Number.isNaN = function(n) {
		return ( 
			typeof n === "number" && window.isNaN( N )
		);
	};
}

var x = 5 / "foo"; 
var z = "foo"; 

Number.isNaN(x); //true
Number.isNaN(z); //false 


/**we can take advantage of that peculiar fact that NaN isn't equal to itself**/
typeof NaN; //"number"

if (!Number.isNaN) {
	Number.isNaN = function(n) {
		return n !== n;
	};
}

























