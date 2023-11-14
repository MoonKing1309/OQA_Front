import { useEffect, useState } from 'react';
import style from './adminquiz.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Adminquiz(props) {
    const loginVal = props.loginState[0];
    const setLoginVal = props.loginState[1];
    const [qcount, setQcount] = useState(0);
    const [add,setAdd] = useState(0)
    const navigate = useNavigate();
    const addRow = () => {
        setQcount(qcount + 1)
    }



    const postQuiz = async (event) =>{
        event.preventDefault()
        if(add!=1)
        {

            const qname = document.getElementsByName("qname");
            const qdesc = document.getElementsByName("qdesc");
            const qimg = document.getElementsByName("qimg");
            const quesinputs = document.getElementsByClassName('quesInputs');
            const optioninputs = document.getElementsByClassName('optionInputs');
            const radioinputs = document.getElementsByClassName('radioInputs')
    
            // console.log(radioinputs)
            
            let question =[];
            let optionA = [];
            let optionB = [];
            let optionC = [];
            let optionD = [];
            let optionSolution = []
            let counter=0
            let questionJson = []
            
            for(let ques =0; ques<qcount;ques++)
            {
                question.push(quesinputs[ques].value);
    
                
                optionA.push(optioninputs[counter].value);
                if(radioinputs[counter].checked)
                    optionSolution.push('optionA')
                counter=counter+1;
    
                optionB.push(optioninputs[counter].value);
                if(radioinputs[counter].checked)
                    optionSolution.push('optionB')
                counter=counter+1;
    
                optionC.push(optioninputs[counter].value);
                if(radioinputs[counter].checked)
                    optionSolution.push('optionC')
                counter=counter+1;
    
                optionD.push(optioninputs[counter].value);
                if(radioinputs[counter].checked)
                    optionSolution.push('optionD')
                counter=counter+1;
    
                questionJson.push({
                    questionID:ques,
                    questionText:question[ques],
                    optionA:optionA[ques],
                    optionB:optionB[ques],
                    optionC:optionC[ques],
                    optionD:optionD[ques],
                    optionSolution:optionSolution[ques],
                    isQuiz:false
                    
                    
                })
                
            }
            if(!qimg[0]){
                qimg[0]="https://img.freepik.com/free-photo/mystery-box-collage_23-2150061724.jpg?w=1800&t=st=1699634973~exp=1699635573~hmac=55247d12e201c1ac56a274a3fd834b07e4cbb8150d55bf0315f5904aaed189c6"
            }
            let quizJson={
                quizTitle:qname[0].value,
                quizDesc:qdesc[0].value,
                quizImg:qimg[0].value,
                isQuiz:true,
                quesCount:qcount
            }
            try {
            await axios.post('https://qmi.onrender.com/play/adminQuiz',{
                quizJson,
                questionJson
            },{ 
                headers: {
                    'Content-Type': 'application/json'
                }}).then((res)=>{
                    setAdd(1)
                    navigate('/play')
                }).catch((rej)=>navigate("/play"))}
            catch (error) {
            console.log(error)
        }
        
        }

    }
    return (
        <div className={style.container}>
            {/* change to edit Quiz if coming from quiz->edit */}
            <h1>Add a Quiz</h1>  
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='qname'>Quiz Name</label>
                            </td>
                            <td>
                                <input name='qname'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='qimg'>Quiz Image</label>
                            </td>
                            <td>
                                <input name='qimg'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='qdesc'>Quiz Description</label>
                            </td>
                            <td>
                                <textarea name='qdesc'></textarea>
                            </td> 
                            
                        </tr>
                        
                        {Array.from(Array(qcount)).map((c, index) => {
                            //try to implement remove question button
                            return (
                                <>
                                <tr>
                                    <td>
                                        <label htmlFor={'ques'+`${index+1}`} style={{color:'blueviolet',fontWeight:'900'}}>Question {`${index+1}`}</label>
                                    </td>
                                    <td>
                                        <input name={'ques'+`${index+1}`} className='quesInputs' style={{width:'250px'}}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor={'optionA'+`${index+1}`}>Option A</label>
                                    </td>
                                    <td> 
                                        <input name={'optionA'+`${index+1}`} className='optionInputs'></input>
                                    </td>
                                    <td>
                                        <input type='radio' name={'solution'+`${index+1}`} className='radioInputs'></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor={'optionB'+`${index+1}`}>Option B</label>
                                    </td>
                                    <td>
                                        <input name={'optionB'+`${index+1}`} className='optionInputs'></input>
                                    </td>
                                    <td>
                                        <input type='radio' name={'solution'+`${index+1}`} className='radioInputs'></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor={'optionC'+`${index+1}`}>Option C</label>
                                    </td>
                                    <td>
                                        <input name={'optionC'+`${index+1}`} className='optionInputs'></input>
                                    </td>
                                    <td>
                                        <input type='radio' name={'solution'+`${index+1}`} className='radioInputs'></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor={'optionD'+`${index+1}`}>Option D</label>
                                    </td>
                                    <td>
                                        <input name={'optionD'+`${index+1}`} className='optionInputs'></input>
                                    </td>
                                    <td>
                                        <input type='radio' name={'solution'+`${index+1}`} className='radioInputs'></input>
                                    </td>
                                </tr>
                                
                                </>
                                
                            )
                        })}
                    </tbody>
                </table>
                <button id={style.addQuestion} className={style.btn} onClick={addRow} type='button'>Add Question</button>
                <button id={style.submitQuiz} className={style.btn} type='submit' onClick={postQuiz} style={add==1?{backgroundColor:'yellowgreen'}:{backgroundColor:'blueviolet'}}>Submit</button>
            </form>
        </div>
    );
}

export default Adminquiz;
