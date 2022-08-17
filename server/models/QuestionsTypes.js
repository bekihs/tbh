const { type } = require("@testing-library/user-event/dist/type");
const Sequelize = require("sequelize-cockroachdb");
const connection= require('./connection');

const QuestionsType = connection.define("QuestionsType", {
    question_type_title: {
      type: Sequelize.STRING,
    },
    question_type_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  });

module.exports = QuestionsType