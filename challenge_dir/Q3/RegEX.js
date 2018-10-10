console.time("time");
const r = /[0-9]/g;
let lt;
let rt = '';
function check(pin) {
    
	if (parseInt(pin) > 0 && r.test(pin)) {
		rt = pin.match(r);
	} 

        if  (rt.length == 4 || rt.length ==  6 ) {
                lt = true;        
        } 
        if (rt && lt) {
                return true;
        } else {
                return false;
        }
}
check("888J"); // 877J hacked solved
console.timeEnd("time"); // approximately  0.135 ms with "888j" as a pin number && with  
