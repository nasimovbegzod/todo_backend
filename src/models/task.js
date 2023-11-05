const {Model, Op, DataTypes} = require("sequelize");
const sequelize = require("../../connection/connection");

class Task extends Model{};

Task.init(
  {
   task_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
   },
   task_description:{
     type: DataTypes.STRING( 10000 )
   },
   pariod:{
    type: DataTypes.STRING(100)
   },
    created_at:{
      type: DataTypes.DATE,
      defaultValue: sequelize.literal( 'CURRENT_TIMESTAMP AT TIME ZONE \'Asia/Tashkent\'' )
    }
  },
  {
    tableName: "todo_data",
    sequelize,
    timestamps: true,
    updatedAt: false,
    createdAt: "created_at",
  }
);

module.exports = Task;
