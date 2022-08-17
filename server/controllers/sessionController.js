const Feedback = require("../models/Feedbacks");
const Question = require("../models/Question");
const QuestionsType = require("../models/QuestionsTypes");
const Session = require("../models/Session");

exports.findAll = (req, res) => {
    Session.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving sessions."
        });
      });
};
 
exports.findOne = (req, res) => {
  const userId = req.params.userId;
  const sessionId = req.params.sessionId;
  Question.findAll({ where: { session_id:sessionId}, include: [Session , QuestionsType]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find session with id=${sessionId}.`
        });
      }
    })
    .catch(err => {
      console.error(err)
      res.status(500).send({
        message: "Error retrieving session with id=" + sessionId
      });
    });
}; 