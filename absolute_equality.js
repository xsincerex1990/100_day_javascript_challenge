/** As we know NaN and -0 have special behavior, 
 * NaN is never equal to itself so you have to use 
 * Number.isNaN() or a polyfill and -0 prentends to be 0.
 *
 * As of ES6 Object.is() can be used to test two values for 
 * absolute equality**/

var a = 2 / "foo";
var b = -3 * 0;

Object.is( a, NaN ); //true
Object.is(b, -0); //true
Object.is(b, 0); //false

//polyfill

if (!Object.is) {
	Object.is = function(v1, v2) {
		//test for -0
		if (v1 === 0 && v2 === 0) {
			return 1/ v1 === 1 / v2;
		}

		//test for NaN
		if (v1 !== v1) {
			v2 !== v2;
		}
		//everything else
		return v1 === v2;
	};

