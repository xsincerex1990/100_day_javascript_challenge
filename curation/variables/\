// scoping 

function scopetest()  { 
  let x
  console.log(1, x) // undefined-- because x was declared but not defined
  x = 42
  console.log(2, x) // 2, 42--because JS reads line by line and ir read the x definition
  if (true) {
    let x;
    console.log(3, x) // undefined  
    x = 17
    console.log(4, x) // 4, 17 
   }
    console.log(5, x) // 5, 42-- because its the last line on the scope of sopetest()
}

scopetest() 
