// Build a User Authentication System

// Using Node.js and MySQL/PostgreSQL, create a user authentication system.
// Implement the Refresh Token mechanism to handle session expiration securely.
// Set up Triggers in the Database to perform automated tasks.
// Create an authenticated REST API for CRUD operations on user data and refresh token implementation. 
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require('fs');
const path = require('path');
const adminrouter  = require ('./routes/admin.js')
const userrouter = require ('./routes/user.js')



const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "jwtpasskey";

// Middlewares
app.use(bodyParser.json());
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', {stream: accessLogStream } ));
app.use(morgan("dev"));


// app.use('/admin' , adminrouter);
app.use('/user' , userrouter);
app.get('/' , (req,res) => {
    res.send("LANDING PAGE")
})

app.listen ( 3000 )