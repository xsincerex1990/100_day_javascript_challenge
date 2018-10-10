const r = /[0-9]/;
let lt;
let rt;
function validatePIN(pin) {
    
	if (parseInt(pin) > 0 && r.test(pin)) {
		let s = pin.split('');
		for (let i = 0; i < s.length; i++) {
			if (typeof parseInt(s[i]) !== 'number') {
				rt = false;
				break;
			} else {
				rt += s[i]
			}
		}} 

        if  (rt.length == 4 || rt.length ==  6 ) {
                lt = true;        
        } 
        if (rt && lt) {
                return console.log(true);
        } else {
                return console.log(false);
        }
}
validatePIN("1.234");  
