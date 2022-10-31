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
});

server.listen(3000);