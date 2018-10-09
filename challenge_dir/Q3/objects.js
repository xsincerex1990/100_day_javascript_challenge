/**This script  shows how there can be multiple levels... by tying DOG to ANIMAL, ANIMAL to talk()...
and then using DOG to output the bigBark's and connecting it to sound from dog**/  


function talk() {
	console.log(this.sound)
}
let animal = {
	talk
}

let dog = {
	sound: 'woof'
}

let rottweilers = {
	bigBark: function () {
		console.log(this.sound)
	}
}

Object.setPrototypeOf(dog, animal)
dog.talk() //woof

// rottweilers.bigBark()  will output UNDEFINED!!

/** But if we set prototype...**/

Object.setPrototypeOf(rottweilers, dog)
rottweilers.bigBark() // will give output 'woof'
