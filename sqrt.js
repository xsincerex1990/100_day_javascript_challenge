function sqrt(x) {
	try {
		if (x == "") throw { message: "Cant square root nothing" };
		if (isNaN(x)) throw {message: "Cant square root strings" };
		if (x < 0 ) throw { message: "Sorry no imagination"}; 
		return "sqrt ("+x+") = " + Math.sqrt(x);
	} catch(err) {
		return err.message;
	}
	}
function writeIt() {
	console.log(sqrt("four"));
	console.log(sqrt(""));
	console.log(sqrt("50"));
	console.log(sqrt("-4"));
}
writeIt();
