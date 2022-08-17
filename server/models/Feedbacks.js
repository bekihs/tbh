const Sequelize = require("sequelize-cockroachdb");
const connection= require('./connection');
const Session= require('./Session');
const User= require('./User');

const Feedback = connection.define("Feedback", {
    session_id:{
      type: Sequelize.INTEGER,
       references: {
     model: 'Sessions',  
     key:  'session_id' }
    },
    user_id:{
      type: Sequelize.INTEGER,
       references: {
     model: 'Users',  
     key:  'user_id' }
    },
    feedback_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  });

  //   Feedback.hasOne(Session);
  //   Session.hasMany(Feedback);
  
  // User.hasMany(Feedback);
  // Feedback.hasOne(User);
  module.exports = Feedback 