const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const SELECT_PRODUCTS_QUERY = "SELECT *,posts.text FROM user LEFT JOIN posts ON user.posts_id = posts.id";

const con = mysql.createConnection({
    host: 'localhost',
    password:'',
    user: 'root',
    database: 'wtalk'
});

con.connect( err => {
    if(err)
        return err;
});

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello from server")
});

app.get('/allposts', (req, res) => {
    con.query(SELECT_PRODUCTS_QUERY, (err, results) => {        
        if(err)
            return res.send(err);
        else
        {
            return res.json({
                data: results
            })
            
        }
    });         
});

app.listen(4000, ()=>{
    console.log("Server running on port 4000")
});