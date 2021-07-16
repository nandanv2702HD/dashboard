
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// import statements and requirements
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const express = require('express');
const { map } = require('mssql');
const { Connection, Request } = require("tedious");
const logger = require('morgan');
const config = require('../config/config.js')
const api = require('./api/v1');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));  
app.use(logger('tiny'));
app.use('/api/v1', api); // sets API path


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// App Start - can serve views too
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.get('/', (req, res) => {
  conns()
  res.json({'message': "got it"});
  
})

function conns(){
  console.log("hit this")
    // database conn
  
    const connection = new Connection(config.DATABASE);

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
      if (err) {
        console.error(err.message);
      } else {
        rows = queryDatabase();
      }
    });
    
    connection.connect();
    
    function queryDatabase() {
      console.log("Reading rows from the Table...");
    
      // Read all rows from table
      const request = new Request(
        `SELECT *
        FROM DBO.TRIAL1
         `,
        (err, rowCount) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(`${rowCount} row(s) returned`);
            console.log(`rows are ${rows}`)
          }
        }
      );
    
      request.on("row", row => {
        // handle the data
      });
    
      connection.execSql(request);
    }

}


// app listens on process.ENV.PORT
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  conns()
});