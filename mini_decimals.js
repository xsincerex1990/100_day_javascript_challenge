/*Side effect of using binary floating-point numbers
Mathematically, we know that first statement below should be true. Why is it false?
the representations for 0.1 and 0.2 in binary floating-point are not exact, 
so when they are added,
the result is not exactly 0.3. It's really close: 0.30000000000000004,
but if your comparison fails, "close" is irrelevant.*/


0.1 + 0.2 === 0.3; // false
0.4 + 0.5 === 0.9; //true
0.3 + 0.6 === 0.9; //false


/*What if we did need to compare two numbers, like 0.1 + 0.2 to 0.3, 
knowing that the simple equality test fails?
The Number.EPSILON property represents the difference between
1 and the smallest floating point number greater than 1.

The most commonly accepted practice is to use a tiny "rounding error" value as the tolerance 
for comparison. This tiny value is often called "machine epsilon," 
which is commonly 2^-52 (2.220446049250313e-16) 
for the kind of numbers in JavaScript
As of ES6 Number.EPSILON is predefined with this tolerance value but if you
want to use pre-ES6 you can safely, although is better to be future friendly

POLYFILLED DEFINITION FOR PRE-ES6 BELOW.*/


if (!Number.EPSILON) {
    number.EPSILON = Math.pow(2,-52);
}

//USING NUMBER.EPSILON TO COMPARE FOR "EQUALIY"
function get_close(number1, number2) {
    return Math.abs(number1 - number2) < Number.EPSILON;
}
 
var a = 0.1 + 0.2;
var b = 0.3;

get_close(a, b); // true
get_close(0.0000001, 0.0000002); //false


/*Good to note that the maximum floating-point value that can be represented is roughly
1.798e+308 (which is really, really, really huge!), predefined for you as Number.MAX_VALUE.
On the small end, Number.MIN_VALUE is roughly 5e-324, 
which isn't negative but is really close to zero!*/




















