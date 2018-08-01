// JS has some string, array & numbers charasteristics that might delight or//confound you.  
var a = [1, "2", [5, 6, "a"] ];

a.length; //returns 3
a[1] === "2"; //returns true
a[2][2] == "a"; // returns true


//You can just declare them and add values as you see fit
var a = [];

a.length; // 0

a[0] = 1;
a[1] = "2";
a[2] = ["my_array", 1]

a.length; //3
console.log(a) // [1, "2", ["my_array", 1]]

// using delete on an array value will remove that slot 
// from the array but it does not update the length property.
// PRACTICE CAUTION & beware of skipping slots this can lead to trouble

var a = [];

a [0] = 1;
a[2] = [3]; // a[1] was skipped
a[1]; // UNDEFINED!!
a.length; // WILL GIVE YOU 3


