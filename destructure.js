makeSound({
	weight: 23,
	sound: 'woof'
})

function makeSound({ species = 'animal', sound}) {
	console.log('The ' + species + ' says ' + sound + '!')
}
