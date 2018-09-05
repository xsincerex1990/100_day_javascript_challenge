//Remove all numbers from a string

let str = "uchnui5487ywh54guhghuirt854h"
let arr = str.split('')
let nums = []

for (let i = 0; arr.length > i; i++) {
    if (parseInt(arr[i])) {
        nums.push(arr[i])
    } 
}
console.log(nums)
