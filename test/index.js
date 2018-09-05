const express = require('express')
const app = express() 
const path = require('path')
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

// response 
app.get('/', function(req, res) { 
  res.sendFile(path.join(__dirname + '/index.html')); 
});  

app.get('/api', function(req, res) { 
  res.send('This would be an api here')

});  
app.get('/api/muhsinah', function(req, res) { 
  res.send('I guess that means I should speak freely all the time')

});  

app.get('/welcome', function(req, res) { 
  res.send('This is a welcome page & about.')

});  

const PORT = 9000

app.listen(PORT)


