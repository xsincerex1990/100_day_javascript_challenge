/**Converting js objects to json**/

var accObj = {
	name: "Fight Night",
	number: 2,
	members: ["Jason", "Freddy"],
	location: "Hell" 
};

var accStr = JSON.stringify(accObj);
console.log(accStr); 
// {"name":"Fight Night","number":2,"members":["Jason","Freddy"],"location":"Hell"}
