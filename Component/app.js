 //const http = require('http');

 const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin')
const showRoutes = require('./routes/shop')
 const app = express();
app.use(bodyParser.urlencoded({extended:false})); 
 
app.use('/admin',adminRoutes);
  
 app.use(showRoutes)

 app.use((req,res,next)=>{
   res.status(404).send('<h1>Page not found</h1>')
 })
 //const server = http.createServer(app);
 //server.listen(4000);
 app.listen(4000)