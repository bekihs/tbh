const Feedback = require("../models/Feedbacks");
const Question = require("../models/Question");
const QuestionAnswer = require("../models/QuestionAnswer");
const QuestionsType = require("../models/QuestionsTypes");
const Session = require("../models/Session");

exports.create = async(req, res) => {
  try {
    const { userId, sessionId, data } = req.body;
    const feedback = new Feedback();
    feedback.session_id = sessionId;
    feedback.user_id = userId;
    await feedback.save();
    const promises = Object.keys(data).map(questionId => {
      const qa = new QuestionAnswer();
      qa.anwser = data[questionId];
      qa.question_id = questionId;
      qa.feedback_id = feedback.feedback_id;
      return qa.save()
    })
    const questionsAnswers = await Promise.all(promises)
    feedback.questionsAnswers = questionsAnswers;

    res.send(feedback);
    
  } catch (err) {
    console.error(err)
    res.status(500).send({
      message: "Error retrieving session with id=" + sessionId
    });
  } finally {
  }
};
