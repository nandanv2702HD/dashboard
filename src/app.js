const express = require('express');
const sql = require('mssql');
const config = require('../config/config.js')
const api = require('./api/v1');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));  

app.get('/', (req, res) => {
  res.json({'message': "got it"});
  
})

app.use('/api/v1', api);

function conns(){
    // database conn
    const pool = new sql.ConnectionPool(config.DATABASE)
    .connect()
    .then(pool => {
    console.log('Connected to MSSQL...')
    pool.connect();
    const request = pool.request()
    let result = request.query(`    
        select table_name from INFORMATION_SCHEMA.TABLES
    `);
    if (result !== null) {
            console.log(`result is ${result.recordset}`);
    }
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  conns()
});