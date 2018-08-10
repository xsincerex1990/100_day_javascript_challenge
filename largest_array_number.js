//This algorithm will find the largest number in an array

var arr = [
	[845, 745, 935, 124],
	[647, 638, 345, 035],
	[777, 666, 1111, 555],
	[369, 111, 222, 333]
];

function ifind(arr) {
	var results = [];
	for (var n = 0; n < arr.length; n++) {
		var bignum = arr[n][0];
		for (var sn = 1; sn < arr[n].length; sn++) {
			if (arr[n][sn] > bignum) {
				bignum = arr[n][sn];
			}
		}
	results[n] = bignum;
	}
	return results;
}
console.log(ifind(arr))



//Intermediate solution

function ifind2(arr) {
	return arr.map(function (group) {
		return group.reduce(function(prev, current) {
			return (current > prev) ? current:prev;
		});
	});
}

console.log(ifind2(arr))
