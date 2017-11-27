const Sequelize = require('sequelize');
const config = require('../config');
var lodash  = require('lodash');
var fs = require('fs');
var path  = require("path");
var db = { }


const sequelize = new Sequelize(config.database, config.user, config.passworld, {
  host: config.url,
  port: config.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false

});

fs
.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf(".") !== 0) && (file !== "index.js");
})
.forEach(function(file) {
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;