function variablescoping()  { 
  console.log(1, x)// 
  var x
  console.log(2, x)
  x = 42
  console.log(3, x) 
  if (true) {
  console.log(4, x)
    var x
    console.log(5, x)
    x = 17
    console.log(6, x) 
   }
    console.log(7, x)
}
variablescoping()
