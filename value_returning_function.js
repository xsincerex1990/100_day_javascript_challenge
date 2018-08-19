function factorial(num) {
	var product = 1
	for (var i = num; i >= 1; --i) {
		console.log(product *= i)
		console.log(product)
	}
	return product
}
console.log(factorial(10))
