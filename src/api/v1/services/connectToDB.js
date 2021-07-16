const { Connection, Request } = require("tedious");
const config = require('../../../../config/config.js')

async function connectToDB(){
    var data = []
    console.log("hit this")
      // database conn
    
      const connection = new Connection(config.DATABASE);
  
      // Attempt to connect and execute queries if connection goes through
      connection.on("connect", err => {
        if (err) {
          console.error(err.message);
        } else {
          queryDatabase()
        }
      });
      
      connection.connect();
      
      async function queryDatabase() {
        console.log("Reading rows from the Table...");
      
        // Read all rows from table
        const request = new Request(
          `SELECT *
          FROM DBO.TRIAL1
           `,
          (err, rowCount) => {
            if (err) {
              console.error(`error is ${err.message}`);
            } else {
              console.log(`row received`);
            }
          }
        );
      
        Promise(request.on("row", row => {
          // handle the data
          console.log(row)
          data.push(row)
        }))
        .then(data => {
          return data;
        });
      
        connection.execSql(request);
      }

      
  
  }  

module.exports = {
    connectToDB
}