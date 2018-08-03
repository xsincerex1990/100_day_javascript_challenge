//Arrays are numerically but are also
//objects that can have keys/properties added to them
// BUT they dont count towards the length of the array

var x = [];

x[0] = 1;
x["foo"] = 5
x; // [1, foo: 5]
x.length; // 1

x["foo"]; // 5
x.foo; // 5

//BEWARE if a string value intended as a key can be coerced to
//a standard base-10 number, then js assumes you wanted to
//use it as a number index rather than as a string key

var x = [];

x["13"] = 42 //adding string keys is generally not a good idea

x.length; // 14

//ARRAY LIKES EXPLAINED BELOW
//In the oocassions where you need to convert an "array-like" into
//a TRUE array to call utilities, one common way is slice()

function foo() {
    var x = Array.prototype.slice.call( arguments );
    x.push( "hello" );
    console.log( x )
}

foo( "black", "seed" ); //["black", "seed", "hello"]

// AS OF ES6 theres also a built-in feat called Array.from(..)
// that can do the same task
 
var x = Array.from( arguments );  

