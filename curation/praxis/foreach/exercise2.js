// Create an array of numbers
let numbers = [1, 2, 3, 4, 5]



// Create a variable to hold the sum 
let sum = 0
function adder(number) {
    sum += number;
}



// Loop over the array, incrementing the sum variable using forEach method
numbers.forEach(adder); 



//  Print the sume variable 
console.log(sum)

