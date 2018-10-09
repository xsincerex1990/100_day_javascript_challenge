//if you have an object wrapper and you want to get the underline primitive value out 
//you can use the value of method

var a = new String( "abc" );
var b = new Number( 42 );
var c = new Boolean( true );

a.valueOf(); // "abc"
b.valueOf(); // 42
c.valueOf(); // true 

//uboxing can also happen implicitly, when using an object wrapper when using an object wrapper
//value in a way that requires the primitive value.

var a = new String( "abc" );
var b = a + ""; // "b" has the unboxed primitive value "abc"

typeof a; // "object"
typeof b; // "string"
