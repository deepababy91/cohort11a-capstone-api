const {Sequelize} = require('sequelize');
//use your own database , no password
const sequelize = new Sequelize('mysql://root:Rayichal12@localhost/cohort11a-capstone-api', {logging: false});
module.exports = {sequelize};