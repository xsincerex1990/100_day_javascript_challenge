/** FUNCTION WITHOUT DESTRUCTURING.
 
 
makeSound({i
	species: 'dog' 
        weight: 23,
        sound: 'woof'
})
 
  function makeSound(options) {
  console.log('The ' + options.species + ' says ' + options.sound + '!')
}

**/

//Here we call makeSound() and pass it an object

makeSound({
        weight: 23,
        sound: 'woof'
})


//here it shows how you can destructure inside the methods signature and assign default values in it....
function makeSound({ species = 'animal', sound}) {
	console.log('The ' + species + ' says ' + sound + ' MFkR!')
}


/** 
 THIS WILL ALSO WORK BUT AS U SEE THE FUNCTION ABOVE IS SUPERIOR
 
  makeSound({i
        weight: 23,
        sound: 'woof'
})
 
  function makeSound(options) {
  var (species, sound} = options 
  species = species || "animal"
  console.log('The ' + species + ' says ' + sound + '!')
}

**/ 
