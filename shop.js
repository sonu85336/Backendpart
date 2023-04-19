const express = require('express')
const { route } = require('./admin')
 
const router  = express.Router()



router.get('/',(req,res,next)=>{
  
    
    res.send('<h1>in the project page</h1>')
    })

    module.exports =router;
