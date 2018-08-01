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


















