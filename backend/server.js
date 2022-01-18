const express = require('express');
const bodyParser =require('body-parser');
const formRoutes = require('./routes/formRoutes');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization');
    next();
})
app.use('/forms', formRoutes);
app.use('/auth', authRoutes);

app.use((error, req,res,next) =>{
    console.log(error);
    const status = error.statusCode;
    const message = error.message;
    res.status(status).json({error: message});
})

mongoose
  .connect(
    "mongodb+srv://paodzon:pawpaw@cluster0.8tcex.mongodb.net/forms?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
