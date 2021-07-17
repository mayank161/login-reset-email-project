const Sequelize = require('sequelize');
const db = require('./database');

const user = db.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    resetToken: { type: Sequelize.STRING }
})

module.exports = user;