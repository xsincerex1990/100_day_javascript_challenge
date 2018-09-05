let str = "uchnui5487ywh54guhghuirt854h"
let arr = str.split('')
let c_arr = arr.filter(function (item) {
        return !(parseInt(item) == item); 
})
console.log(c_arr)

