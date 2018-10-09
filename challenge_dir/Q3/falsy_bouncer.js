var falsyarr = [0, 1, 2, 3, null, 5, '', 7, false, undefined, NaN];

function bouncer(arr) {
	return arr.filter(Boolean);
}

console.log(bouncer(falsyarr));
