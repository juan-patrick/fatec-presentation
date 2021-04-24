const { Sequelize } = require('sequelize');
const Period = require('../models/Period');

const connection = new Sequelize(
  {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'fatec_test',
    define: {
      timestamps: true,
    }
  }
);

Period.init(connection);

connection.sync({ alter: true });

module.exports = connection;