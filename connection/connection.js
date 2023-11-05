const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgres://nfdltxov:MqAFcDUM22k8l6k0KRZphFJAVWpglqKq@floppy.db.elephantsql.com/nfdltxov", 
 {
   logging: false,
 }
 );

 module.exports = sequelize;


// const sequelize = new Sequelize( "postgres://postgres:1001@localhost:5432/todo_db",
//   {
//     logging: false,
//   }
// );

// module.exports = sequelize;
