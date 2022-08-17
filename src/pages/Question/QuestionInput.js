

function QuestionInput({questionType , value , setValue}) {
  
    switch(questionType.question_type_title){
        case "radio":
            //todo - add options to datamodel and here. 
            return <input type="radio"></input>
            
        case "checkbox": 
            return <input type="checkbox" value={value} onChange={(e)=>setValue(e.target.checked)}></input>
        case "text":
        default:
            return <textarea value={value} placeholder="Type your answer" onChange={(e)=>setValue(e.target.value)}></textarea>
    }
}

export default QuestionInput;
