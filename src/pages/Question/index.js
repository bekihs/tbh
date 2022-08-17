import { useState } from "react";
import "../../styles/session.css"
import QuestionInput from "./QuestionInput";

function Question({question , ...props}) {

    const {question_text , QuestionsType } = question;
    return (
        <div className="question">
            {question_text}
            <QuestionInput questionType={QuestionsType} {...props}></QuestionInput>
        </div>
    );
}

export default Question;
