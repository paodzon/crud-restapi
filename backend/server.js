const express = require('express');
const bodyParser =require('body-parser');
const formRoutes = require('./routes/formRoutes');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization');
    next();
})
app.use('/forms', formRoutes)


mongoose
  .connect(
    "mongodb+srv://paodzon:pawpaw@cluster0.8tcex.mongodb.net/forms?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
