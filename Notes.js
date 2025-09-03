// ----------------------------------------------------------
// 📘 Node.js Notes
// ----------------------------------------------------------

// 0. What is Node.js?
// - JS runtime built on Chrome’s V8 engine
// - Runs JavaScript outside the browser
// - Useful for servers, APIs, file handling, real-time apps

// ----------------------------------------------------------
// 1. HTTP SERVER
// ----------------------------------------------------------

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log("Request URL:", req.url)

    if (req.url === '/photo') {
        res.writeHead(200, { 'Content-Type': 'image/png' })
        fs.readFile('abc.png', (err, data) => {
            if (err) res.end("Error loading image")
            else res.end(data)
        })
    }
    else if (req.url === '/website') {
        fs.readFile('index.html', (err, data) => {
            if (err) res.end("Error loading website")
            else res.end(data)
        })
    }
    else {
        res.end('Page not Found!')
    }
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
})

// Alternate version with custom header
const server2 = http.createServer((req, res) => {
    if (req.url === '/photo') {
        res.writeHead(200, { "Acboss": "acboss", 'Content-Type': 'image/png' })
        fs.readFile('abc.png', (error, data) => {
            res.end(data)
        })
    } else {
        res.end("Page not Found!")
    }
})
server2.listen(3000, () => console.log("Custom server running..."))

// ----------------------------------------------------------
// 2. FILE SYSTEM MODULE (fs)
// ----------------------------------------------------------

// Write File
fs.writeFileSync('note.txt', 'Hello Acboss')

// Append File
fs.appendFileSync('note.txt', '\nNew Acboss Hello')

// Async Write
fs.writeFile('async.txt', 'Async File write', (err) => {
    if (err) console.log("Error writing async file")
    else console.log("Async Write Done")
})

// Sync Read
const syncData = fs.readFileSync('note.txt', 'utf-8')
console.log("Sync Read ->", syncData)

// Async Read
fs.readFile('note.txt', 'utf-8', (err, data) => {
    if (err) console.log("Error reading async")
    else console.log("Async Read ->", data)
})

// ----------------------------------------------------------
// 3. LOCAL MODULES
// ----------------------------------------------------------
// localmodule.js
// exports.max = (a, b) => (a > b ? a : b)
// exports.sum = (a, b) => a + b
//
// localmodule2.js
// module.exports = () => Math.floor(Math.random() * 100)

const { max, sum } = require('./localmodule')
const randomNumber = require('./localmodule2')
console.log("Local Module -> max:", max(20, 30), "sum:", sum(20, 30))
console.log("Random Number ->", randomNumber())

// ----------------------------------------------------------
// 4. NPM PACKAGES
// ----------------------------------------------------------
// Run: npm install figlet

const figlet = require('figlet')
console.log(figlet.textSync('Hello Acboss'))

// ----------------------------------------------------------
// 5. process.argv (CLI Arguments)
// ----------------------------------------------------------

const args = process.argv
console.log("All CLI Args:", args)

let sumArgs = 0
for (let i = 2; i < args.length; i++) {
    const num = Number(args[i])
    if (!isNaN(num)) sumArgs += num
}
if (sumArgs > 0) console.log("Sum of Numeric Args:", sumArgs)

// ----------------------------------------------------------
// 6. async/await with fs.promises
// ----------------------------------------------------------

const fsPromises = require('fs').promises
async function readMultiFile() {
    try {
        const data1 = await fsPromises.readFile('a.txt', 'utf-8')
        const data2 = await fsPromises.readFile('b.txt', 'utf-8')
        await fsPromises.writeFile('result.txt', data1 + data2)
        console.log("Files combined successfully")
    } catch {
        console.log("Error reading files")
    }
}

// ----------------------------------------------------------
// 7. CALLBACK HELL EXAMPLE
// ----------------------------------------------------------
// Nested callbacks → messy
// Solution → Promises or async/await

// ----------------------------------------------------------
// 8. PROMISES
// ----------------------------------------------------------

const promise = new Promise((resolve) => resolve(20))
promise.then(data => console.log("Promise resolved:", data))

const promise1 = new Promise((_, reject) => reject("Error::"))
promise1.catch(error => console.log("Promise rejected:", error))

// ----------------------------------------------------------
// 9. PROMISE-BASED FILE READ/WRITE
// ----------------------------------------------------------

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

function writeFilePromise(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

let result = ''
readFilePromise('x.txt')
  .then(data => { result += data; return readFilePromise('y.txt') })
  .then(data => { result += data; return readFilePromise('z.txt') })
  .then(data => { result += data; return writeFilePromise('result.txt', result) })
  .then(() => console.log("Data combined successfully"))
  .catch(err => console.log("Error:", err.message))

// ----------------------------------------------------------
// 10. fs.promises Direct
// ----------------------------------------------------------

fsPromises.readFile('note.txt', 'utf-8')
  .then(data => console.log("fs.promises read ->", data))
  .catch(err => console.log("fs.promises error:", err))
