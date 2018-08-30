function watch(value) { 
		if (value < 0) {

		    throw "too small";

		} else if (value > 10) {

		    throw "too big";

		} else {
			console.log("Good job");
		}
}
watch(9);
	
