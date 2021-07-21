const { response } = require("express");
const { Connection, Request } = require("tedious");
const config = require('../../../../config/config.js')

function connectToDB(dataRequest) {
    var data = []
    console.log("hit this")
      // database conn
    
      const connection = new Connection(config.DATABASE);
  
      // Attempt to connect and execute queries if connection goes through
      connection.on("connect", err => {
        if (err) {
          console.error(err.message);
        } else {
            queryDatabase(dataRequest, connection)
        }
      });
      
      connection.connect();
    
  }

// query the database with the request input from the api route
function queryDatabase(dataRequest, connection) {
  console.log("querying database");
  data = []

  // handle request
  const request = new Request(
    dataRequest
    ,
    (err, rowCount, row) => {
      if (err) {
        console.error(`error is ${err.message}`);
      } else {
        console.log(`row received\n`);
        response.send(row)
        console.log(`rowcout is ${rowCount}`)
      }
    }
  );

  request.on("row", row => {
    // handle the data
    console.log(`row received\n`);
  });

  connection.execSql(request);
};

module.exports = {
    connectToDB
}