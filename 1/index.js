const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("hello from home page")
    } else if(req.url === '/about') { 
        res.end("hello from about page")
    } else if(req.url === '/contact') {
        res.end("hello from contact page")
    } else if(req.url === '/booking') {
        res.end("hello from booking page")
    } else {
        res.end("Error page not found");
    }
});

server.listen(4000, () => {
    console.log("i am listening on port 4000");
});