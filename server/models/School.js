const Sequelize = require("sequelize-cockroachdb");
const connection= require('./connection');

const School = connection.define("School", {
    school_name: {
      type: Sequelize.STRING,
    },
    school_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  });

  module.exports = School