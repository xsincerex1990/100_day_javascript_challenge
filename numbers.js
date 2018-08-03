//toFized() method alows you to specify how many
//fractional decimal places youd like the value to show
//Notice how they are outputted as a string representation
// on my grind
var a = 32.59

a.toFixed( 0 ); //32
a.toFixed( 1 ); //32.6
a.toFixed( 2 );//32.59
a.toFixed( 3 );//32.590
a.toFixed( 4 );//32.5900

//toPrecision() is similar but specifies how many significant  digits 
//should be used to represent the value

var a = 42.59;

a.toPrecision( 1 ); //"4e+1"
a.toPrecision( 2 ); //43
a.toPrecision( 3 );//42.6
a.toPrecision( 4 );//42.59
a.toPrecision( 5 );//42.590
a.toPrecision( 6 );//42.5900

//You can access these methods DIRECTLY on number literals
//Careful with . Operator. Since . is a valid numeric character
//it will first be interpreted as part of the object literal,
// if possible, instead of being interpreted as a property accessor

42.toFixed(3); // SYNTAX ERROR because the . is swallowed as
//of the 42 and so then theres no . for access to .toFixed

//these are correct
(42).toFixed(3); //42.000
0.42.toFixed(3); //0.420
42..toFixed(3); //42.000
42 .toFixed(3); //Notice the space this is valid but confusing

//Numbers can be specified in exponent form
//which is common for large numbers

var onethousand = 1E3; // means 1 * 10^3
var onemillionhundredthousand = 1.1E6 // means 1.1 * 10^6
 

