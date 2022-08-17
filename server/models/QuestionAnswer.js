const Sequelize = require("sequelize-cockroachdb");
const connection = require('./connection');
const Feedback = require('./Feedbacks');
const Question = require('./Question');

const QuestionAnswer = connection.define("QuestionAnswer", {
  anwser: {
    type: Sequelize.STRING,
  },
  question_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,

    references: {
      model: 'Questions',
      key: 'question_id'
    }
  },
  feedback_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,

    references: {
      model: 'Feedbacks',
      key: 'feedback_id'
    }
  },
});

// Feedback.hasMany(QuestionAnswer);
// QuestionAnswer.hasOne(Feedback);

// Question.hasMany(QuestionAnswer);
// QuestionAnswer.hasOne(Question);
module.exports = QuestionAnswer 