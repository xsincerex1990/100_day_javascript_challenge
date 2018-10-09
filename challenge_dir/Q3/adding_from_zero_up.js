//Write a function that takes a number and returns the sum of every number behind it..
//(eg: if number is 4 output 10. 1 + 2 + 3 + 4 = 10

function isum(num) {
    let sum = 0
    for (let i = num; i >= 0; --i) {
        sum += i
    }
    return sum;
}

console.log(isum(5)) // 15
