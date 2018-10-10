// write a function that takes a string and pulls all the numbers from the string and returns the in string format

let x;
let x1 = '';
let r = /[0-9]/

function checker(str) {
	x = str.split('')
	x.forEach(function(val) {
		if (r.test(val)) {
			x1 += val;
		}
	})

	if (x1) {
		console.log(x1);
	} else {
		console.log("No nums in this shit");
	}
}

checker("dsj7f");

