console.time("time");
const r = /[0-9]/;
let rt;
let lt;
function check(pin) {
    
	if (parseInt(pin) > 0) {
		rt = true;
	} else {
		rt = false;
	}

        if  (pin.length == 4 || pin.length ==  6 ) {
                lt = true;        
        } else {
                lt = false;
        }

        if (rt == true && lt == true) {
                return true;
        } else {
                return false;
        }
}
check("1.234"); // hacked with 877J

console.timeEnd("time"); // approximately  0.077 ms with "1.234" as a pin number && with  
