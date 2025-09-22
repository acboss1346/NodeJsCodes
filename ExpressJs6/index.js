const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// Logger middleware
function Logger(req, res, next) {
    const timesStamp = new Date().toISOString();
    console.log('TimeStamp:', timesStamp, 'URL:', req.url, 'Method:', req.method);
    next();
}
app.use(Logger);

// Protected middleware
function isProtected(req, res, next) {
    console.log('Only Running for protected route ==> ', req.url);
    if (req.query?.password === 'abc') {
        next();
    } else {
        res.status(403).send('You are not authorized');
    }
}

// Routes
app.get('/', (req, res) => {
    res.send('Hello! This is My first express.js server');
});

app.get('/protected', isProtected, (req, res) => {
    res.send('You are authorized...');
});

app.get('/home', (req, res) => {
    res.send('<h2>Home Page</h2>');
});

app.get('/products/:productId', (req, res) => {
    const id = req.params.productId;
    res.send(`Product ID: ${id}`);
});

app.get('/json', (req, res) => {
    res.status(400).json({ name: 'Acboss' });
});

app.get('/query', (req, res) => {
    res.send(`Hey Welcome Back !! ${req.query.name}`);
});

// ✅ Basic POST route
app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    res.send(`Received data - Name: ${name}, Age: ${age}`);
});

// ✅ POST route for login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '1234') {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Start server
app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000');
});
