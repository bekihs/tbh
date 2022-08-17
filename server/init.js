const Feedback= require('./models/Feedbacks');
const Question= require('./models/Question');
const QuestionAnswer= require('./models/QuestionAnswer');
const connection= require('./models/connection');
const QuestionConditions= require('./models/QuestionConditions');
const QuestionsType= require('./models/QuestionsTypes');
const School = require('./models/School');
const Session= require('./models/Session');
const User= require('./models/User');



(async () => {
    try {
        await School.sync({alter:true,force:true});
        await User.sync({alter:true,force:true});
        await Session.sync({alter:true,force:true});
        await QuestionsType.sync({alter:true,force:true});
        await Question.sync({alter:true,force:true});
        await Feedback.sync({alter:true,force:true});
        await QuestionAnswer.sync({alter:true,force:true});
        await QuestionConditions.sync({alter:true,force:true});

const school1 = new School()
school1.school_name="1"
await school1.save()
const school12 = new School()
school12.school_name="2"
await school12.save()
const school3 = new School()
school3.school_name="3"
await school3.save()

const user1 = new User()
user1.user_name = "1"
user1.birth_date = new Date(1980,4,3)
user1.school_id = school1.school_id;
await user1.save()
const user2 = new User()
user2.user_name = "2"
user2.birth_date = new Date(1990,4,3)
user2.school_id = school12.school_id;
await user2.save()
const user3 = new User()
user3.user_name = "3"
user3.birth_date = new Date(1995,4,3)
user3.school_id = school3.school_id;
await user3.save();



  const qt1 = new QuestionsType()
  qt1.question_type_title = "radio"
  await  qt1.save()
  const qt12 = new QuestionsType()
  qt12.question_type_title = "checkbox"
  await qt12.save()
  const qt13 = new QuestionsType()
  qt13.question_type_title = "text"
  await qt13.save()


  const session1 = new Session()
  session1.session_title = "1"
  await  session1.save();


  
  const q1 = new Question();
  q1.question_text = "How are you feeling after the session today?";
  q1.session_id = session1.session_id
  q1.question_type_id = qt13.question_type_id,
  q1.question_size=5,
  await q1.save()
  
  const q12 = new Question();
  q12.question_text = "Are there any topics you would like covered next week?";
  q12.session_id = session1.session_id
  q12.question_type_id = qt13.question_type_id
  q1.question_size=3,
  await q12.save()


const session2 = new Session()
session2.session_title = "2"
await  session2.save();


const q2 = new Question();
q2.question_text = "How are you feeling after the session today?1";
q2.session_id = session2.session_id
  q1.question_size=5,
  q2.question_type_id = qt13.question_type_id
await q2.save()

const q3 = new Question();
q3.question_text = "Are there any topics you would like covered next week?1";
q3.session_id = session2.session_id
q3.question_type_id = qt12.question_type_id
await q3.save()


  

console.log();
} catch (err) {
    console.error("error executing query:", err);
} finally {
    await connection.close();
}
})();
         
// create the connection to database
// const connection = mysql.createConnection(//{uri:"postgresql://hadas:ELMqpLVpKpyTXdCaVbO2oA@free-tier13.aws-eu-central-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dragged-ent-2876"})
// config.db);
// simple query
// connection.connect();
// sequelize.execute(
//     `CREATE TABLE Sessions
//     (
//         'sessionId'       INT(11) NOT NULL,
//         'title'            VARCHAR(255)   ,
//         PRIMARY KEY ('sessionId' )
//       )`,
//     function (err, results, fields) {
//         console.log(err); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available

//         connection.execute(
//             `CREATE TABLE QuestionsTypes
//     (
//         'questionTypeId'       TINYINT  NOT NULL,
//         'title'                 VARCHAR(255)   ,
//         PRIMARY KEY ('questionTypeId' )
//       )`,
//             function (err, results, fields) {
//                 console.log(err); // results contains rows returned by server
//                 console.log(fields); // fields contains extra meta data about results, if available

//                 connection.execute(
//                     `CREATE TABLE Questions
//     (
//         'questionId'      INT(11) NOT NULL ,
//         'sessionId'       INT(11) NOT NULL ,
//         'questionTypeId'  TINYINT  NOT NULL ,
//         'questionText'    VARCHAR(255)   ,

//         PRIMARY KEY ('questionId'),
//         FOREIGN KEY ('sessionId') REFERENCES Sessions('sessionId'),
//         FOREIGN KEY ('questionTypeId') REFERENCES QuestionsTypes('questionTypeId')
//       )`,
//                     function (err, results, fields) {
//                         console.log(err); // results contains rows returned by server
//                         console.log(fields); // fields contains extra meta data about results, if available

//                         connection.execute(
//                             `CREATE TABLE Schools
//     (
//         'schoolId'       INT(11) NOT NULL ,
//         'name'                 VARCHAR(255)   ,
//         PRIMARY KEY ('schoolId' )
//       )`,
//                             function (err, results, fields) {
//                                 console.log(err); // results contains rows returned by server
//                                 console.log(fields); // fields contains extra meta data about results, if available

//                                 connection.execute(
//
//                                     function (err, results, fields) {
//                                         console.log(err); // results contains rows returned by server
//                                         console.log(fields); // fields contains extra meta data about results, if available

//                                         connection.execute(
//                                             `CREATE TABLE Feedbacks
//     (
//         'feedbackId'       INT(11)   NOT NULL,
//         'sessionId'       INT(11) NOT NULL ,
//         'userid'       INT(11) NOT NULL ,
//         'date'       DATE NOT NULL ,

//         PRIMARY KEY ('feedbackId' )
//         FOREIGN KEY ('sessionId') REFERENCES Sessions('sessionId')
//         FOREIGN KEY ('userId') REFERENCES Users('userId')
//     )`,
//                                             function (err, results, fields) {
//                                                 console.log(err); // results contains rows returned by server
//                                                 console.log(fields); // fields contains extra meta data about results, if available

//                                                 connection.execute(
//                                                     `CREATE TABLE QuestionAnswer
//     (
//         'questionId'       INT(11) NOT NULL,
//         'feedbackId'       INT(11) NOT NULL ,
//         'anwser'            VARCHAR(255)   ,
//         PRIMARY KEY ('questionId' , 'feedbackId'),
//         FOREIGN KEY ('questionId') REFERENCES Questions('questionId')
//         FOREIGN KEY ('feedbackId') REFERENCES Feedbacks('feedbackId')
//       )`,
//                                                     function (err, results, fields) {
//                                                         console.log(err); // results contains rows returned by server
//                                                         console.log(fields); // fields contains extra meta data about results, if available

//                                                         connection.execute(
//                                                             `CREATE TABLE QuestionConditions
//     (
//         'questionId'      INT(11) NOT NULL ,
//         'orderNumber'     TINYINT NOT NULL ,
//         'column'    VARCHAR(64)   ,
//         'value'    VARCHAR(255)   ,
//         'operand'    VARCHAR(1)   ,
//         'operator'    VARCHAR(3)   ,

//         PRIMARY KEY ('questionId' , 'orderNumber),
//         FOREIGN KEY ('questionId') REFERENCES Questions('questionId'),
//       )`,
//                                                             function (err, results, fields) {
//                                                                 console.log(err); // results contains rows returned by server
//                                                                 console.log(fields); // fields contains extra meta data about results, if available

//                                                             }
//                                                         );

//                                                     }
//                                                 );

//                                             }
//                                         );

//                                     }
//                                 );

//                             }
//                         );

//                     }
//                 );

//             }
//         );

//     }
// );
