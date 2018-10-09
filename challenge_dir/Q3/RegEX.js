const r = /[0-9]/;
let rt;
let lt;
function check(pin) {
        let x = pin.split('');


        for (let i = 0; i < x.length; i++) {
                 rt = r.test(x[i]);
        }
        if  (x.length == 4 || x.length ==  6 ) {
                lt = true
                
        } else {
                lt = false
        }

        if (rt == true && lt == true) {
                console.log("Good")
        } else {
                console.log("Give me a valid pin!")
        }
}
check("443777");


