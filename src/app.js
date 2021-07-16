
///////////////////////////////////////////////////////////////////////
///// IMPORT STATEMENTS AND REQUIREMENTS 
//////////////////////////////////////////////////////////////////////


const { raw } = require('express');
const express = require('express');
const fs = require('fs');
const logger = require('morgan');
const config = require('../config/config.js')
const api = require('./api/v1');
const { connectToDB } = require('./api/v1/services/connectToDB.js');
const { transformData } = require('./api/v1/services/transformData')
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));  
app.use(logger('tiny'));
app.use('/api/v1', api); // sets API path
app.use('/api/v1/services', connectToDB)


////////////////////////////////////////////////////////////////////////
///// APP START 
///////////////////////////////////////////////////////////////////////


app.get('/', (req, res) => {
  transformData()
  // connectToDB()
  //   .then(data => { 
  //     if(data){
  //       res.json(data);
  //       console.log("hit here")
  //     } else {
  //       res.json({message: "something happened here"})
  //       console.log("hit someting")
  //     }
  //   })
  //   .catch(e => {
  //     console.log(e.message)
  //   })


  // TODO: render homepage
  
})

// Temp SQL conn used to be here

// app listens on process.ENV.PORT
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});