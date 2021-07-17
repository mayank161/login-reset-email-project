const Sequelize = require('sequelize');

const db = new Sequelize('max','postgres','mayank', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = db;