const Sequelize = require("sequelize-cockroachdb");
const connection= require('./connection');
const School= require('./School');

const User = connection.define("User", {
  user_name: {
    type: Sequelize.STRING,
  },
  birth_date: {
    type: Sequelize.DATE,
  },
  school_id:{
    type: Sequelize.INTEGER,
    references: {
     model: 'Schools',
     key: 'school_id'
    }
  },
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  }); 
  
// User.hasOne(School);
// School.hasMany(User);
module.exports = User