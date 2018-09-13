/** Javascript has two types of zeros: 0 & -0(negative zero)
 besides being specified literally as -0, negative zero also 
 results from certain mathematic operations. For example:**/

var a = 0 / -5; //-0
var c = 0 * -3; //-0

/** Addition and subtraction cannot result in negative zero
 * some older browsers you encounter may still report it as 0
 * however, if you try to stringify a negative zero value,
 * it will always be reported as "0", according to the spec.
**/

var x = 0 / 3;
x; // some browsers get it right & give you "-0"

//but spec lies to you
a.toString(); // 0
a + ""; //0
String( a ); //0

//Strangely even Json gets in to deceive you.
JSON.stringify( a ); //"0"

/**Funny though, , the reverse operations (going from string to
 number) don't lie:**/

+"-0"; //-0
Number.("-0"); //-0
JSON.parse("-0"); //-0


/**In addition to stringification of negative zero being 
deceptive to hide its true value, the comparison operators are 
also intentionally configured to lie.**/

var a = 0;
var b = 0 / -3;

a == b; //true
-0 == 0; //true

a === b; //true
-0 === 0; //true

0 > -0; //false
a > b; //false

/** Obviously if u want to tell the difference between a -0 & 0
 * you will have to be more clever.**/

function real_zero(n) {
	n = Number(n);
	return (n === 0) && (1 / n === -Infinity);
}
real_zero( -0 ); //true
real_zero( 0 / -3); //true
real_zero( 0 ); //false













































