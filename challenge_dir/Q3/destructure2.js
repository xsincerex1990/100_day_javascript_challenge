//Array destructuring 

//basic assignment
var foo = ['one', 'two', 'three']
var [one, two, three] = foo;
console.log(one) // "one"

//..assign separte from declaration

var a, b;

[a, b] = [1, 2]
console.log(a) // 1

// Js will assign a default in the case of an undefined value

var a, b;

[a=5, b=7] = [1]; // 7 is default, and "b" wasnt defined next to [1]

console.log(a); // 1
console.log(b); // 7


//Variables can be swapped...without destructuring, to swap variables you would need a temporary value

var a = 1;
var b = 2;

[a, b] = [b, a]

console.log(a); // 2
console.log(b); // 1
