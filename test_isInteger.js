
if (!Number.isInteger) {
	Number.isInteger = function(number) {
		console.log(typeof number == "number" && number % 1 == 0);
	};
} 


