const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    } 
});
