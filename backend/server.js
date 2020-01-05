//Imports
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const person = require('./routes/api/person');
app.use(express.json());

//Create and init DB
const db = require('./config/key.js').mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('MongoDB Connected!'))
.catch(err=> console.log(err));

//Setting up route
app.use('/api/person', person);

//Connect to port
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log("Server started successfully on port 5000"));
