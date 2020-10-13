//1 
const {Sequelize} = require('sequelize');

       //2                //3      //4            //5     //6
const sequelize = new Sequelize('workoutlog', 'postgres', 'Letmein1234!', {
    host: 'localhost', //7
    dialect: 'postgres', //8
});

    //9     //10           //11


                //14
module.exports = sequelize;