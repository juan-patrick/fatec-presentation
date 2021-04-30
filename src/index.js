require('dotenv');
const express = require('express');
const cors = require('cors');
const connection = require('./database/sequelize');
const routes = require('./routes');

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(3333, () => {
  console.log({
    server: "running"
  })
});

module.exports = server;