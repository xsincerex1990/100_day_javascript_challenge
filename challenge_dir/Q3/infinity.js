/**In javascript we have the value "Infinity" aka 
  NUMBER.POSITIVE_INFINITY & NUMBER.NEGATIVE_INFINITY**/

var a = 1 / 0; //infinity
var b = -1 / 0;// -Infinity 
/** -infinity comes up when any of the values are negative**/

/** Since javascript uses finite numeric represantions it is 
 * possible to overflow even with an operation like addition or
 * subtraction in which youll get infinity**/

var a = Number.MAX_VALUE;	// 1.7976931348623157e+308
a + a;						// Infinity
a + Math.pow( 2, 970 );		// Infinity
a + Math.pow( 2, 969 );		// 1.7976931348623157e+308

/** Question this to CEO Solomon **/

