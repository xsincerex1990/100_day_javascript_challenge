//You can think of map() as a for loop that CHANGES the values on a array

var arr = [1, 2, 3, 4]
var five = [];

for (var i = 0; i < arr.length; i++) {
	five[i] = arr[i] + 5;
	
}

five; // [6, 7, 8, 9]

//Now to use Map() 
// we will map over arr
var arr = [1, 2, 3, 4]

var plus5 = arr.map((val, i, arr) => {
	return val + 5;
});
console.log(arr)
console.log(plus5)



//In this example we’ll utilize both the value and index arguments.
//This time we'll return an object
let arr1 = [1, "a", "b"];

let newArr = arr1.map((val, i, arr1) => {
	return {
		value: val,
		index: i
	};
});

newArr; 
/*
 [ { value: 1, index: 0 },
  { value: 'a', index: 1 },
  { value: 'b', index: 2 } ]
*/

/** Whatever we return within our map array is what is used to create our 
new array**/


// What if we only want to transform some of the values in our array? 

var arr2 = [1, 2, 3, 4]

// Say We want to double the even numbers and leave the odd numbers the same
var arr2 = arr2.map((v,i,a) => {
  if (v % 2 === 0){
    return v * 2;
  } else {
    return v;
  }
});
// arr2 = [1,4,3,8];







