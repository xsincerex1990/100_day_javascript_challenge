/** assigning by value-copy or by reference-copy.
 * scalar primitives(simple values) are always passed by value copy
 * null, undefined, string, number, boolean, and ES6's symbol.
 
 *Comound values like arrays & boxed object wrappers always create
 *a COPY of the reference on assigment or passing
 **/


var x = 5;
var y = x; // "y" is a COPY of the VALUE in "x"
y++;
x;//5
y;//6

var c = [1, 2, 3]
var d = c; //'d' is a REFERENCE to the SHARED [1, 2, 3] value

d.push( 4 );

c; //[1, 2, 3, 4]
d; //[1, 2, 3, 4]

/**You cannot use one reference to change where another reference is pointed:**/

var x = [1, 2, 3]
var b = a;

a; // [1,2,3]
b; // [1,2,3]

b = [4,5,6]; //cannot change "b" (the reference) to change "a"
a; // [1,2,3]
b; // [4,5,6] "b" is NOT a POINTER to an array theres no such capability.





