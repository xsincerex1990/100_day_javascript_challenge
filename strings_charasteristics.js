//strings have a shallow resemblance to array & array likes
//JS strings are immutable. strings Dont modify in place
//instead they return a new string. Arrays do modify in place

var x = "foo";
var y = ["f", "o", "o"];

x.length; // 3
y.length; // 3

//indexOf searches for the position of a character
x.indexOf( "o" ); // 1
y.indexOf( "f" ); // 0

//concat adds to the end of the object
var c = x.concat( "bar" ); // "foobar"
var a = y.concat( ["b", "a", "r"] ); // ["f", "o", "o", "b", "a", "r"]

x === c; //false
a === y; //false

console.log("this is x >>" + x) //"foo"
console.log(y) //["f", "o", "o"]
console.log("this is c >>" + c)// "foobar"
console.log(a)//["f", "o", "o", "b", "a", "r"]

c = x.toUpperCase();
console.log("this is c in upper >>" + c) // "FOO"

//changed to caps but still not the same string/object
x === c;// false
y === a;//false

//x[1] = "example"; this method only works for arrays
x[1] = "P"; 
x; // "foo"

y[1] = "P";
y;  //["f", "P", "o"] 

//array modify in place
y.push( "!" ); //["f", "P", "o" "!"]
console.log(y)

//Not all array methods are available for strings 
//but we can "borrow" non-mutation methods for our strings

x.join; //undefined
console.log(x) //foo
x.map; //undefined
console.log(x) //foo

var c = Array.prototype.join.call(x, "-");
var d = Array.prototype.map.call( x, function(v){
    return v.toUpperCase() + ".";
} ).join( "" );

console.log(c) //f-o-o
console.log(d) //"F.O.O"


//ARRAYS have a reverse() in place mutator but STRINGS do not.

x.reverse; //undefined
y.reverse();// [ '!', 'o', 'P', 'f' ] 
