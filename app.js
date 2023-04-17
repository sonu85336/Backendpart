 //const http = require('http');

 const express = require('express');

 const app = express();
 app.use((req,res,next)=>{
    console.log(('in the middlewqj'));
    next() //allows the requist to continues next middleware
 })
 app.use((req,res,next)=>{
    console.log('In another middleware')
res.send('<h1>sonu kushwah</h1><p> Welecome to the World</p>')
})
 //const server = http.createServer(app);
 //server.listen(4000);
 app.listen(4000)