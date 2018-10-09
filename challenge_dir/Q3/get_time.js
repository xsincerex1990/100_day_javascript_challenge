//Output time in this format....
//Sample Output : Today is : Tuesday. 
//Current time is : 10 PM : 30 : 38

let date = new Date();
let days = ["Monday", "Tuesday", "Wensday", "Thurday", "Friday", "Saturday", "Sunday"]
function clock() {
    let time = date.getHours();
    if (time > 12) {
        time = date.getHours() - 12;
    }

    return console.log(" Today is: ", days[date.getDay()],"\n", "Current time is: ", time,  " PM : ", date.getMinutes(), " : ", date.getSeconds() );
}

clock();
        
    
