const http = require('http'); /* Declarado de esta manera buscara un modulo global llamado http, que node js ya lo incluye*/
// const fs = require('fs');
const routes = require('./routes')

//const server = http.createServer((req, res) => {    
//const server = http.createServer(routes);
console.log(routes.someText);
const server = http.createServer(routes.handler);
    
    //console.log(req.url, req.method, req.headers);
    // const url = req.url; 
    // const method = req.method;

    // if(url === '/'){
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>Enter message</title><head>');
    //     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    //     res.write('</html>');
    //     return res.end();
    // }

    // if(url == '/message' && method === 'POST'){
    //     const body = [];
    //     req.on('data',(chunck) => {
    //         console.log(chunck);
    //         body.push(chunck);            
    //     });
    //     req.on('end', () => {
    //        const parsedBody = Buffer.concat(body).toString();
    //        console.log(parsedBody);
    //        const message = parsedBody.split('=')[1];
    //        //fs.writeFileSync('message.txt',message); /*No usar codigo sincrono */
    //        fs.writeFile('message.txt',message, (err) => {
    //         res.statusCode = 302;
    //         res.setHeader('Location','/');
    //         return res.end();
    //        });
    //     });
    //     //fs.writeFileSync('message.txt','DUMMY');
        
    // }

    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My first page</title><head>');
    // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    // res.write('</html>');
    // res.end();
//});

server.listen(3000);