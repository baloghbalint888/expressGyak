const express = require('express');
const port = 5555;
const path = require('path');
const adatok = require('./myModules/adatok.js');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('css'));
app.use(express.static('images'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'));
})



app.get('/json',(req,res)=>{
    adatok.jsonRender(req,res);
})

app.get('/mysql',(req,res)=>{
    adatok.dbRender(req,res);
})

app.listen(port);