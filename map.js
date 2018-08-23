var animals = [ 
  { name: 'DoggoRuff', species: 'Rottweiler' },
  { name: 'Dory', species: 'fish' },
  { name: 'Nemo', species: 'fish' },
  { name: 'B-rabbit', species: 'Rabbit' },
  { name: 'Marciel', species: 'Duck' } ]

/* What map does but with a for loop */
var names = []
for (var i = 0; i < animals.length; i++) {
	names.push(animals[i].name)
}

console.log(names) // [ 'DoggoRuff', 'Dory', 'Nemo', 'B-rabbit', 'Marciel' ]


/* Now to see the beauty of map & es6 arrow functions */

var names = animals.map((x) => {console.log(x.name )})

/* this single line aboves gives you the output below

DoggoRuff
Dory
Nemo
B-rabbit
Marciel
*/

/* This will also work but its longer & does not use the arrow function
 * it outputs the same as above*/

var names = animals.map(function(x) {console.log(x.name)})



