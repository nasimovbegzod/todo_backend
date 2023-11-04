const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:1001@localhost:5432/todo_db", 
 {
   logging: false,
 }
 );

 module.exports = sequelize;
