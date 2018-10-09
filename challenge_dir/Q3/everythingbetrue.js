//Truth checker

function icheck(collection, pre) {
	//Create a counter to check how any are true
	var count = 0

	for (var c in collection) { 
		//if it has property and value its true
		if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
		 count++;
		}
	}

	return count == collection.length;
}
console.log(icheck(([{"user": "Mountain Man", "sex": "male"}, {"user": "Invisible", "sex": "Female"}, {"user": "Cat", "sex": "Female"}], "sex")));
