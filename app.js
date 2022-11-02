//const http = require('./http'); /* Declarado de esta manera buscara un archivo en la ruta relativa*/
const http = require('http'); /* Declarado de esta manera buscara un modulo global llamado http, que node js ya lo incluye*/

/*
function rqListener(req, res){
}
http.createServer(rqListener);
*/

/*
http.createServer(function(req, res){    
});
*/

const server = http.createServer((req, res) => {    
    //console.log(req);
    console.log(req.url, req.method, req.headers);
    //process.exit(); 
    const url = req.url;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);