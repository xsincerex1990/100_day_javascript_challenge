var orders = [
	{ amount: 250 },
	{ amount: 400 },
	{ amount: 100 },
	{ amount: 325 }
]
/*The loop below is one of the things reduce does behind the scenes...
 
var total = 0
for (var i = 0; i < orders.length; i++) {
	total += orders[i].amount
}
console.log(total) // 1075 
*/


/*Much easier with reduce..like map & filter, reduce takes a callback function but it wants an object in this the zero.
You can think of this zero as the  starting point for reduce to start its count */



var total = orders.reduce(function(sum, order) {
	return sum + order.amount}, 0)
console.log(total) // 1075 


// above, the reduce function takes two arguments the first is where you will store your new values in this case the sum of the amounts. the second is the current element being processed in the array. 
