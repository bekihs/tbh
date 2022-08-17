import { useEffect, useMemo, useState } from "react";
import {  useParams } from "react-router-dom";
import { useGetSession } from "../hooks/useGetSession";
import { useSaveFeedback } from "../hooks/useSaveFeedback";
import Question from "./Question";
import ThankYou from "./ThankYou";

function Session() {
    const { userId ,sessionId} = useParams();
    const questions = useGetSession(userId ,sessionId);
    const [isLoading, returnData, saveFeedback] =useSaveFeedback();
    const [data, setData] = useState({})

    const isDone = useMemo(()=>!questions.some(q=>((!data[q.question_id]  && q.QuestionsType.question_type_title!=='checkbox'))),[data,questions])

    const onSaveFeedbackClick=()=>{
        if(isDone&& !isLoading){
            saveFeedback({userId ,sessionId,data})
        }
    }
    if(returnData?.feedback_id){
        return <ThankYou />
    }
    return (
        <div className="session">
           {questions.map(q=><Question  value={data[q.question_id]} 
           setValue={(val)=>setData((oldData)=>({...oldData , [q.question_id]:val}))} question={q} key={q.question_id}></Question>)}
       
      <div  className="buttons"> <span onClick={onSaveFeedbackClick} className={`submit-button ${(isDone&&!isLoading)?'ready':'disables'}`}>Submit</span></div>
        </div>
    );
}

export default Session;
