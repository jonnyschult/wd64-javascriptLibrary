const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const AuthTestModel = sequelize.define('authtestdata', {
    authtestdata: {
        type: DataTypes.STRING,
        allowNull: false
        },  
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false
        }
});

module.exports = AuthTestModel;
