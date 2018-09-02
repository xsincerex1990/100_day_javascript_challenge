
const PI = 3.14 

function add(x,y) { 
  result = x + y // implicit global 
  return result 
}


add(3, 4)

console.log(result)

function sub(x, y) {
  let val = x + y 
  return val 
}


sub(42, 2)

console.log(val)


// scoping 

function scopetest()  { 
  console.log(1, x)
  let x
  console.log(2, x)
  x = 42
  console.log(3, x) 
  if (true) {
    console.log(4, x)
    let x
    console.log(5, x)
    x = 17
    console.log(6, x) 
   }
    console.log(7, x)
  }
}

scopetest() 
