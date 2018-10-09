var accStr = '{"name": "Jedi", "members": ["Yoda", "Obi Wan"], "number": 34512, "location": "A galaxy far away"}';

var accObj = JSON.parse(accStr);

console.log(accObj.name) // Jedi
console.log(accObj.members) // ["Yoda", "Obi Wan"]

