const express = require("express");
const sequelize = require("../connection/connection");
const routes = require("./routes/task.routes");
const cors = require("cors")
require("dotenv").config()





const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);



const PORT = process.env.PORT || 3000

const bootstrap = async () => {
  await sequelize.authenticate( {
    logging: false,
  }
  );
  // Realtion()
  await sequelize.sync(
    {
      alter: true,
    }
  )
  console.log( "serverga ulandi..." );

  app.listen( PORT, () => {
    console.log( "Server... " + PORT );
  } )
}; bootstrap()
