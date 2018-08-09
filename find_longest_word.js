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

ifind("This a super sentenceindjfhcuibf") // 19


//Intermediate Solution

function ifind2(sem) {
	return sem.split(' ').reduce((acc, cv) => {
		return Math.max(acc, cv.length)
	}, 0);

}


console.log(ifind2("This a super sentenceindjfhcuibf")) // 19

//More advanced method

function ifind3(str) {
	str = str.split(' ');

	if (str.length == 1) {
		return str[0].length;
	}

	if (str[0].length >= str[1].length) {
		str.splice(1, 1);
		return ifind3(str.join(' '));
	}
        //I think i clearly understand splice & slice but i dont fully grasp
	//why "str.slice(1, str.length)" is making the whole function work..
	//if value at str[0] <= str[1] then im consufed why 
	//slice (1, str.length) isnt this slicing words that havent been counted??
	//Idk. Ask larry. 
	if (str[0].length <= str[1].length) {
		return ifind3(str.slice(1, str.length).join(' '));
	}
        
}


console.log(ifind3("This a super sentenceindjfhcuibf"))
