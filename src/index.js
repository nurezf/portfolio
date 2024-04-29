const express=require("express");
const bodyParser=require("body-parser");
const nodemailer = require('nodemailer');


const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/', (res,req)=>{
    res.sendFile(__dirname + '/index.html');
});
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3002,()=>console.log("listening on port 3002"));
