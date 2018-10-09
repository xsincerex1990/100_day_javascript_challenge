//Algorithm to validate phone number
//?4L

function telCheck(str) {
	var xxx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
	return xxx.test(str);
}

console.log(telCheck("786-555-9112"));
console.log(telCheck("786-555-svsr"));
console.log(telCheck("786-555-9a12"));

