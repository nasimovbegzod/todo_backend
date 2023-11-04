const sequelize = require( "../../connection/connection" );
const Task = require( "../models/task" );


module.exports = {
  POST_TASK: async ( req, res ) => {
    try {
      const { created_at, task_description, pariod } = req.body;
      const a = await Task.create( { created_at, task_description, pariod } );
      res.status( 201 ).json(a)
    } catch ( error ) {
      res.status( 404 ).json( error.message );
    }
  },

  GET_TASK: async ( req, res ) => {
    try {
      const task = await Task.findAll( { raw: true } );
      res.status( 201 ).json( task )
    } catch ( error ) {
      res.status( 404 ).json( error.message )
    }
  }
}