/**
 * This script explains the reduce functionality Think of reduce like adding 
 * all the total value of many items in a cart (array). 
 * below we have a simple algorithm for calculating the sum of the array
 * with out the reduce method
**/


let numbers = [1, 5, 6, 7];
//here we loop through numbers and add the value to sum
//this is basically what reduce does behind the scenes

let sum = 0;
for (let n of numbers)
	sum += n;
console.log(sum); // 19

/**
  
  Now to use reduce method. The reduce method takes a "callback" function 
  with two parameters in this case "acc"(accumulator to collect the sum) 
  & a "cv"(current value) to hold the current value.
 
  initially we set reduce to 0 which made "acc" 0.
  in the first round "cv" is set to the first value in array "2". so...

  1st round: acc = 0, cv = 2, acc = 2
  2nd round: acc = 2, cv = 4, acc = 6
  3rd round: acc = 6, cv = 6, acc = 12
  4th round: acc = 12, cv = 8, acc = 20
  5th round: acc = 20, cv = 10 acc = 30 

**/


let array = [2, 4, 6, 8, 10]

let sum2 = array.reduce((acc, cv) => {
	return acc + cv;
}, 0); //if we change the 0 value to 1 it would start on the "4" on the array

console.log(sum2); //30

