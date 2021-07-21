const { response } = require("express");
// const { Connection, Request } = require("tedious");
const config = require('../../../../config/config.js');
// const Sequelize = require('sequelize');
const AOSmodel = require('../models/AOS');
const db = require('../models');
const sequelize = db.sequelize,
Sequelize = db.Sequelize;

// connects to the SQL database
connectToDB = () => {

  // initializes connection pool
  const sequelize = new Sequelize(config.DATABASE.options.database, config.DATABASE.authentication.options.userName, config.DATABASE.authentication.options.password, {
    host: config.DATABASE.server,
    dialect: 'mssql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  // authenticates connection then connects to AOSmodel table
  sequelize
    .authenticate()
    .then(() => {
      // import model, sync, post
      AOSmodel(sequelize, Sequelize).sequelize
      .sync()
      .then(() => {
        console.log("synced")
        db.AOS.create({
          commodityCode: 'XPLTT',
          makeOrBuy: "F",
          partNumber: "12321A",
          issuingSLoc: "S0348",
          receivingSLoc: "S0349",
          huNumber: 42234324,
          plantCode: 1001,
          currBike: 23,
          highBike: 28,
          rackNumber: 12,
          productionDate: "12/12/2021"
        })
        .then((res) => {
          console.log(res)
        })
      })

      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });


}


module.exports = {
  connectToDB
};