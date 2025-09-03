const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('My First Nodejs server')
})

server.listen(()=>{
    console.log("Server running at http://localhost:3000")
})