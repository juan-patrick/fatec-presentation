const { Sequelize } = require('sequelize');
const Period = require('../models/Period');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

Period.init(connection);

connection.sync({ alter: true });

module.exports = connection;