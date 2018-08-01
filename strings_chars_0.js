//Borrowing dosent work on array mutators, because strings are immu

var a = "foo"
var b = ["f", "o", "o"]

//Array.prototype.reverse.call( a ) returns object wrapper type error
//A dirty work around is the split, reverse, join method

var c = a.split("") // ["f", "o", "o"]
c.reverse(); // ["o", "o", "f"]
c.join("") // "oof"

//a.reverse(); TYPE ERROR
