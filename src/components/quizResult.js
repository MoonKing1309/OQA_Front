import { useLocation, useNavigate, useParams } from 'react-router-dom';
import style from './quizResult.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


function QuizResult(props) {
    const loginVal = props.loginState[0];
    const setLoginVal = props.loginState[1];
    console.log('loginVal',loginVal)
    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams()
    const userChoices = useState(location.state)
    const [score,setScore] = useState(0)
    const [total,setTotal] = useState(0)

    const updateScore =()=>{
        setScore(score => score+1)
        console.log("new score is : " , score)
    }
    const updateTotal =()=>{
        setTotal(total => total+1)
        console.log("new score is : " , total)
    }
    
    let correctChoice =[]
   
    
   
    const getResult = async ()=>{
        try {
            
            await axios.get(`https://qmi.onrender.com/play/Quiz/${id}/result`).then((data)=>correctChoice = data.data).catch((err)=>console.log(err))
            console.log(correctChoice,userChoices[0])
            for(let i=0;i<correctChoice.length;i++)
            {
                updateTotal()
                if(userChoices[0].get(i) == correctChoice[i])
                {
                    updateScore()  
                }
            }
        } catch (error) {
            console.log(error)
        }
       
    }


    useEffect(()=>{
        getResult()

    },[])

    async function getQuiz() {
        await axios.get('https://qmi.onrender.com/play').then((data) =>{
            const tempData = data.data;
            navigate(`/play/Quiz/${id}`,{state:tempData.filter((item)=> item._id==id)})
        } ).catch((err) => console.log(err))
    }

    const saveScore = async ()=>{
        var circleLoader = document.querySelector(`.${style.circleLoader}`)
        circleLoader.style.display='inline-block'
        try {
            await axios.post(`https://qmi.onrender.com/play/Quiz/${id}/result`,{userID:loginVal,userScore:`${score}/${total}`})
                .then(()=>{
                    circleLoader.style.display='none'
                })
                .catch(()=>{
                    circleLoader.style.display='none'
                    alert("Could not save data at this time.Contact Admin")
                })
            
        } catch (error) {
            
        }
    }

    return ( 
        <div className={style.container}>
            <h4>Your Quiz Score : </h4>
            <h1>{score}/{total}</h1>
            <div>
            <p className={style.circleLoader}></p>
            <button id ={style.btn} onClick={saveScore}>Save Score</button>
            <button id ={style.btn} onClick={getQuiz}>Try Again</button>
            <button id ={style.btn} onClick={()=>{navigate('/play')}}>Select a Different Quiz</button>
            </div>
           
        </div>
     );

}

export default QuizResult;