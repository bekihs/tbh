const Sequelize = require("sequelize-cockroachdb");
const connection= require('./connection');

const Session = connection.define("Session", {
    session_title: {
      type: Sequelize.STRING,
    },
    session_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  });

module.exports = Session 