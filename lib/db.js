const {Sequelize} = require('sequelize');
//use your own database
//const sequelize = new Sequelize('mysql://root:password@localhost/cohort11a-capstone-api', {logging: false});
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 'mysql://root:password@localhost/cohort11a-capstone-api', {logging: false});
module.exports = {sequelize};