const Sequelize = require("sequelize-cockroachdb");
const connection = require('./connection');
const Session = require('./Session');
const QuestionsType = require('./QuestionsTypes');

const Question = connection.define("Question", {
  question_text: {
    type: Sequelize.STRING,
  },
  session_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Sessions',
      key: 'session_id'
    }
  },
  question_type_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'QuestionsTypes', // <<< Note, its table's name, not object name
      key: 'question_type_id'
    }
  },
  question_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  question_size: Sequelize.SMALLINT,
});

// QuestionsType.hasMany(Question);
Question.hasOne(QuestionsType, {foreignKey:"question_type_id",constraints:"question_type_id" , foreignKey: "question_type_id", sourceKey: "question_type_id" });
Question.hasOne(Session , {foreignKey:"session_id",constraints:"session_id" , foreignKey: "session_id", sourceKey: "session_id"});
// Session.hasMany(Question);
module.exports = Question
