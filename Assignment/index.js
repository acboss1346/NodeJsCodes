const express = require('express')   
const mysql = require('mysql2')      
const app = express();

// body parser
app.use(express.json())

const db = mysql.createConnection({
    host: "1277.0.0.1",
    user: "root",
    password: "Akshat@1346",
    database: "ecommerce",
    port: 3306
})

db.connect(error => {
  if (error) {
    console.log('Some error occurred!', error);
  } else {
    console.log('DB Connected Successfully.');
  }
});



app.post('/products', (req, res)=>{
    
    console.log(req.body)
    res.status(200).send({products: []})
})

app.listen(3000, () => {
  console.log('Server Initiated');
});


