function QM(str) {
	let numArr = [];
	let flag = false;

	// push ints into numArr
	
	for (let i = 0;  i < str.length; i++) {
		if (/\d/.test(str[i])) {
			numArr.push(i);
		}
	}

	for (let i = 0; i < numArr.length; i++) {
		if ( parseInt(str[numArr[i]], 10) + parseInt(str[numArr[i + 1]], 10) === 10) { 
			flag = true;
			let strSeg = str.slice(numArr[i], numArr[1 + i]);

			strSeg = strSeg.replace(/[^\?]/g, '');
			if (strSeg !== '???') {
				return false;
			}
		}
	}
	return console.log(flag)
}

QM("acc?7??sss?3rr1??????5");
