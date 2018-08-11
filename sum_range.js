//this algorithm Sums all numbers in a range (eg:[1, 7])

function isum(arr) { 
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);
	var temp = 0;

	for (var i = min; i <= max; i++) {
		temp += i;
	}
	return temp;
}

console.log(isum([4,1]))

//intermediate method

function isum1(arr) {
	var sar = arr.sort((a, b) => a-b);
	var fnum = arr[0];
	var lnum = arr[1];

	var sum = (lnum - fnum) * (fnum + lnum) / 2;
	return sum;
};
console.log(isum1([4,1]));



//advanced way

function isum2(arr) {
	var sum = 0;
	for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
		sum += i;//sum = sum + i
	}
	return sum;
}
console.log(isum2([4, 9]));

