 //const http = require('http');

 const express = require('express');
const bodyParser = require('body-parser');

 const app = express();
app.use(bodyParser.urlencoded({extended:false})); 
 app.use('/add-product',(req,res,next)=>{
  
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><input type="text" name="size" /><button type="submit">Add Product</button></form>')
    
   //allows the requist to continues next middleware
 })

 app.use("/product",(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
 })
 app.use('/',(req,res,next)=>{
  
    
res.send('<h1>in the project page</h1>')
})
 //const server = http.createServer(app);
 //server.listen(4000);
 app.listen(4000)