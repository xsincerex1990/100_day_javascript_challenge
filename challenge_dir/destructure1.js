//Destructing is a js expression that allows you to unpack values from arrays...
//or it can unpack properties from objects

var a, b, rest;

[a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // [30, 40, 50]

({a, b} ={a: 10, b: 20,});
a; //10
b; //20

({a, b, ...rest} = {a: 15, b: 25, c: 40, d: 50});
a; // 15
b; // 25

rest; // {c: 40, d: 50}


