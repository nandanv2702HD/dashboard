const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../../../config/config.js');

// connection code reference - http://nataliesmith.ca/blog/2018-05-01-sqlserver-node-sequelize/

let db = {};
const sequelize = new Sequelize(config.DATABASE.options.database, config.DATABASE.authentication.options.userName, config.DATABASE.authentication.options.password, {
    host: config.DATABASE.server,
    dialect: 'mssql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

fs
   .readdirSync(__dirname)
   .filter(file => (file.indexOf(".") !== 0) && (file !== 'index.js'))
   .forEach(file => {
       let model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
       db[model.name] = model;
   });

Object.keys(db).forEach(modelName => {
   if("associate" in db[modelName]) {
       db[modelName].associate(db);
   }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;