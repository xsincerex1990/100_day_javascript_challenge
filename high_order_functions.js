//High order functions are used because its easier to reason about, has less bugs, take less time to write programs & open to RE-using code.
 

var triple = function(x) {
	console.log(x * 3)
}

//Above we create a function and assign it to a variable, and we can pass it around just like a variable... for example..

var toast = triple
toast(30); // 90

/*functions can also be passed INTO other functions, these are called higher order functions...High order functions are good for composition. 
 
 The fact that we can take functions and pass them to higher order functions allows us to compose many SMALL functions into bigger functions.*/

var animals = [
	{name: "DoggoRuff", species: "Rottweiler"},
	{name: "B-rabbit", species: "Rabbit"},
	{name: "Marciel", species: "Duck"},
	{name: "Nemo", species: "fish"},
	{name: "Jason", species: "Bird"}
	{name: "Dory", species: "fish"},
]

/* we will remove the fishes below in the comment as an example using a normal for loop
 
 var fish = []
 for (var i = 0; i < animals.length; i++) {
   if (animals[i].species === 'fish')
     fish.push(animals.[i])
     } 
*/

/* Now to use the higher order filter function below,
   The callback function & filter function are composed together
*/


var fish = animals.filter(function(animal) {
	return animal.species === 'fish'
})






