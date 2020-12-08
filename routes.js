
const fs = require('fs')

function requestHandler(req, res){
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type ="text" name="message" placeholder="Enter the message"><button type = "submit">Send</button></body>');
        res.write('</html>');
        return res.end();
    };
    // to quit the server
    // process.exit()
    
    // sending the RESPONSE
    if(url === "/message" && method ==="POST"){
        const body = [];
        req.on("data",(chunk) =>{
            console.log(chunk);
            body.push(chunk)
        });
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(Buffer.concat(body))
            const message = parsedBody.split('=')[1]            
            fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302
                res.setHeader('Location','/')
                return res.end()
            })
        })
        
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title> My First page with node.js</title></head>')
    res.write('<body><h1>Vishwanath Pratap Singh</h1></body>')
    res.write('</html>')
    res.end()
}


module.exports = requestHandler
// can also exports the request handlers using the object methods.