function info() {
	console.log(this.colors)
	console.log(this.speed)
}




let bridge = {info}

let cat_a = {
	colors: {Honda: "red", Sapito: "blue", Sakura: "green"},
	speed: {Honda: 145, Sapito: 140, Sakura: 160}
}

Object.setPrototypeOf(cat_a, bridge)


/**With cat_a.info() we access the data by setting the prototype of info() (bridge), 
to the object cat_a using setPrototypeOf() **/

cat_a.info(); // { Honda: 'red', Sapito: 'blue', Sakura: 'green' } { Honda: 145, Sapito: 140, Sakura: 160 } 
console.log(cat_a.speed.Honda) // 145



