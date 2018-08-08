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


/** This example below is a common confusion with function parameters**/
 function foo(x) {
	 x.push(4);
	 x; //[1, 2, 3, 4]

	 x = [4, 5, 6]
	 x.push(7);
	 x; //[4, 5, 6, 7]
}

var a = [1, 2, 3]
foo(a);// [1, 2, 3, 4] [4, 5, 6, 7]

a; /** [1, 2, 3, 4] (not the same as foo(a) output) see Kyles types & grammar 
for more info (ch2)**/

/** To accomplish changing a to have [4, 5, 6, 7] you cant create a new array, 
 * YOU MUST MODIFY the existing array**/

function foo(x) {
	x.push(4);
	x; // [1,2,3,4]
        
        // x.length & x.push(4,5,6,7) were not creating a new array!!
	// IT WAS MODIFYING THE EXISTING ARRAY

	x.length = 0; // empty existing array in-place
	x.push(4, 5, 6, 7);
	x; // [4,5,6,7]
}

var soup = [1,2,3];

foo( soup );

soup; // [4,5,6,7]   

/** To effectively pass a value like array by value-copy you need to manually
 * make a copy of it so that the reference passed doesn't still point 
 * to the original. For example: **/


//Be RIGHT BACK


































