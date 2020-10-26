const { DataTypes } = require('sequelize');
const sequelize = require('../db');

 const User = sequelize.define('user', {
     username: {
        type: DataTypes.STRING,
        allowNull: false
    },
     passwordhash: {
        type: DataTypes.STRING,
        allowNull: false
    }
 })
 
//  function (sequelize, DataTypes) {
//     return sequelize.define('user', {
//         username: DataTypes.STRING,
//         passwordhash: DataTypes.STRING
//     })
// };

module.exports = User; 