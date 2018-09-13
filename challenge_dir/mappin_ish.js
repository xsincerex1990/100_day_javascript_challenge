//returning odd numbers of top of the head


let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10]

let arr2 = arr.map((v, i) => {
	if (v % 2 === 0) {
		console.log(v);
	}
})
