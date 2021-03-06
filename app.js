const express = require('express');
const app = express();
const port = 3031;
const path = require('path');

app.use(express.static('public'))

app.listen(port,() => console.log('servidor corriendo en http://localhost:'+ port));

app.get('/',(req, res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/login',(req, res) => res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/register',(req, res) => res.sendFile(path.join(__dirname,'views','register.html')));