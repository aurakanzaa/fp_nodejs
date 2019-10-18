const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{ // to start server the important part
//  console.log(req.url, req.method, req.headers);
//  process.exit(); // proses mematikan server
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html></html>');
        res.write('<head><title>my first page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit" name="message">send</button></form></body>');
        res.write('</html>');
        return res.end();    
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () =>{
            const parsedBody =Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            // console.log(parsedBody);
        });
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html></html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>hai dr node.js</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
