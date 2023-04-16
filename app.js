 const http =  require('http');
  const fs = require('fs');
 const server = http.createServer((req,res)=>{
  //console.log(req.url,req.method,req.headers)
  const url = req.url;
  const method = req.method;
   //process.exit()
  if(url=== '/'){
   // const filePath = path.join(__dirname,'message.txt')
    fs.readFile("./message.text", 'utf8',(err,data)=>{
      if(err){
        console.log(err)
      }
      console.log(data)
      res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body><p>${data}</p></body>`)
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    })
    
  }
 else if(url === '/message' && method==='POST'){
    const body = [];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk)
    })
    return req.on('end',()=>{
      const parseBody = Buffer.concat(body).toString();
console.log(parseBody)
      const message = parseBody.split('=')[1];
   fs.writeFile('message.text',message,err=>{
 
    res.statusCode = 302;
    res.setHeader('Location','/');
    
    return res.end()
   });   
    })
    
   
  }
  else{
    res.setHeader('Content-Type','text/html')
res.write('<html>');
res.write('<head><title>Hello World</title></head>')
res.write('<body><h1>Welcome To My World</h1><p>sonu kushwaha</p></body>')
 
res.write('</html>')
res.end();
  }
  

 
   
 })

 
 server.listen(4000)