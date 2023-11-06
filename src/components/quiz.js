import { useEffect, useState ,useRef } from 'react';
import './quiz.css';
import Question from './question'
import { useNavigate } from 'react-router-dom';
import Adminquiz from './adminquiz';
function Quiz(props)
{
    const [quizid,setQuizid] = useState(props.quizId);
    const [questionId,setquestionId] = useState(0);
    const [choices,setChoices] = useState(new Map());
    const didMount = useRef(false);
    const navigate = useNavigate()

    const loginVal = props.loginState[0];
    const setLoginVal = props.loginState[1];

    const prev = document.getElementById("prev");

    function onEdit(){
        navigate('/adminQuiz')
    }

    function onNext(){
        setquestionId(questionId+1)
        //remeber to blackout the button if questionnumber reaches upper limit
    }



    function onPrev(){
        setquestionId(questionId-1)
    }



    useEffect(()=>
        {
            if ( !didMount.current ) {
                didMount.current = true;
                return(() =>{})
            }
            if(questionId>0)
            {
                prev.removeAttribute("disabled")
                prev.style.backgroundColor='blueviolet';
            }
            if(questionId==0)
            {
                prev.setAttribute("disabled","")
                prev.style.backgroundColor='gray';
            }
            
        },[questionId])
        

    //client side logic to get the quiz details and question
 
    return(
        <div className='content'>
            <div className='quiz-title'>
                <h1>props. quiz title <button className='edit' style={{display:(loginVal>0)? 'inline-block':'none'}} onClick={onEdit}> Edit</button></h1>
                
            </div>
            <div className='question-box'>
                <Question quizId={1} questionId={1} choices={[choices,setChoices]}/>
            </div>
            <div className='navigation'>
                <div className='prev'>
                    <button onClick={onPrev} id='prev'>
                        Previous
                    </button>
                </div>
                <div className='next'>
                    <button onClick={onNext}>
                        Next
                    </button>
                </div>

            </div>
        </div>
    )
    
}

export default Quiz;