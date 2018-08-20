function talk() {
	console.log(this)
	console.log(this.sound)
}

let animal = {
	talk 
}

animal.talk() // undefined

let cat = {
	sound: 'meow',
}

//cat.talk() gives ERROR because cat doesn't have a function. So we set prototype below...

Object.setPrototypeOf(cat, animal)

cat.talk(); /** Now... we get "meow" notice 'this' in talk still points to cat even though its not assigned to cat,
but since we accessed using cat., this in talk  points to cat **/



