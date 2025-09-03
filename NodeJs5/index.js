const http = require('http')
const fs = require('fs')

//Create a server
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/photo') {
       res.writeHead(200, { "Acboss": "acboss", 'content-type': 'image/png' })
       fs.readFile('abc.png', (error, data)=>{
        res.end(data)
       })
    }

    else if (req.url === '/website') {
        fs.readFile('index.html', (error, data)=>{
            res.end(data)
        })
        
    }

    else {
       
        res.end('Page not Found!')
    }
})

server.listen(3000, () => {
    console.log('My server is running on http://localhost:3000/ port')
})
