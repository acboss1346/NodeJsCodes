const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json()); // To parse JSON bodies

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Akshat@1346',
  database: 'babbage_2',
  port: '3306'
});

db.connect(error => {
  if (error) {
    console.log('Some error occurred!', error);
  } else {
    console.log('DB Connected Successfully.');
  }
});

// Get all users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Something went wrong!' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [userId], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Something went wrong!' });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

// Create a new user
app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Error creating user', error });
    } else {
      res.status(201).json({ message: 'User created', userId: results.insertId });
    }
  });
});

// Update user by ID
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;
  const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
  db.query(query, [name, email, password, userId], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Error updating user', error });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User updated' });
    }
  });
});

// Delete user by ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [userId], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server Initiated');
});