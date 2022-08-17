const Sequelize = require("sequelize-cockroachdb");
const connection = require('./connection');
const Question = require('./Question');

const QuestionConditions = connection.define("QuestionConditions", {
  order_number: {
    type: Sequelize.SMALLINT,
  },
  column: Sequelize.STRING,
  value: Sequelize.STRING,
  operand: Sequelize.CHAR,
  operator: Sequelize.CHAR,
  question_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Questions',
      key: 'question_id'
    }
  },
  question_conditions_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
});
// Question.hasMany(QuestionConditions);
// QuestionConditions.hasOne(Question);

module.exports = QuestionConditions