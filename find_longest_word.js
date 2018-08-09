//Basic solution to finding longest word
function ifind(str) {
	var words = str.split(' ');
	var maxlength = 0;
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > maxlength) {
			maxlength = words[i].length
		}
	}
	console.log(maxlength)
}

ifind("This a super sentenceindjfhcuibf")


//Intermediate Solution

function ifind2(sem) {
	return sem.split(' ').reduce((acc, cv) => {
		return Math.max(acc, cv.length)
	}, 0);

}
console.log(ifind2("This a super magnificentartulimpiostree string"))






