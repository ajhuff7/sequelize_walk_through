'use strict';
// Requires to be able to write to a file
var fs        = require('fs');

var path      = require('path');
// Allows us to use Sequelize
var Sequelize = require('sequelize');
// Returns the basename (final location) of a path
var basename  = path.basename(module.filename);
// Default environment will be local, if node not available.
var env       = process.env.NODE_ENV || 'development';
// Requires the connection to the database
var config    = require(__dirname + '/../config/config.json')[env];

var db        = {};

// This hides our database password globally and uses the password in config.
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// returns file names filtered that don't start with 0, isn't the base file, and ends in .js
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  // builds a model for each file
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Exports the db file to the other files
module.exports = db;
