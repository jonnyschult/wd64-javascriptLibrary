
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('workoutlog', 'postgres', 'Letmein1234!', {
    host: 'localhost', 
    dialect: 'postgres', 
});

module.exports = sequelize;