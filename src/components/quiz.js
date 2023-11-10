import { useEffect, useState ,useRef } from 'react';
import './quiz.css';
import Question from './question'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Adminquiz from './adminquiz';
function Quiz(props)
{
    const [quizid,setQuizid] = useState(props.quizId);
    const [questionId,setquestionId] = useState(0);
    const [choices,setChoices] = useState(new Map());
    const didMount = useRef(false);
    const navigate = useNavigate()
    const {id} = useParams();

    const location =useLocation();
    const [quizData,setQuizData] = useState(location.state)


    const loginVal = props.loginState[0];
    const setLoginVal = props.loginState[1];

    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    function onEdit(){
        navigate('adminQuiz')
    }

    function onNext(){
        console.log(Number(quizData[0]))
        if(questionId <Number(quizData[0].quesCount)-1)
            setquestionId(questionId+1)
        //remeber to blackout the button if questionnumber reaches upper limit
    }



    function onPrev(){
        if(questionId!=0)
            setquestionId(questionId-1)
        
    }

    function onSubmit(){
        
    }

    const radio = document.getElementsByName("options");

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
            if(questionId == Number(quizData[0].quesCount)-1)
            {
                next.style.backgroundColor='Yellowgreen';
                next.innerText='Submit'
                next.onclick={onSubmit}
            }
            if(questionId < Number(quizData[0].quesCount)-1)
            {
                next.removeAttribute("disabled")
                next.innerText='Next'
                next.onclick={onNext}
                next.style.backgroundColor='blueviolet';
            }
            
        },[questionId])
        
    useEffect(()=>{
        
    },[questionId])

    //client side logic to get the quiz details and question
 
    return(
        <div className='content'>
            <div className='quiz-title'>
                <h1>{quizData[0].quizTitle}<button className='edit' style={{display:(loginVal>0)? 'inline-block':'none'}} onClick={onEdit}> Edit</button></h1>
                
            </div>
            <div className='question-box'>
                 <Question quizID={quizData[0]._id} questionId={questionId} choices={[choices,setChoices]} />
            </div>
            <div className='navigation'>
                <div className='prev'>
                    <button onClick={onPrev} id='prev'>
                        Previous
                    </button>
                </div>
                <div className='next'>
                    <button onClick={onNext} id='next'>
                        Next
                    </button>
                </div>

            </div>
        </div>
    )
    
}

export default Quiz;