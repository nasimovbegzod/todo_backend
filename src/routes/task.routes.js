const {Router} = require("express");
const { POST_TASK, GET_TASK } = require( "../controller/task" );


const routes = Router();


routes.post("/post_task", POST_TASK);
routes.get("/get_task", GET_TASK);

module.exports = routes