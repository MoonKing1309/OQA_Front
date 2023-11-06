import { useState } from 'react';
import style from './adminquiz.module.css'

function Adminquiz(props) {

    const [qcount, setQcount] = useState(0);
    const addRow = () => {
        setQcount(qcount + 1)

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
                                        <input type='radio' name={'solution'+`${index+1}`}></input>
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
                                        <input type='radio' name={'solution'+`${index+1}`}></input>
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
                                        <input type='radio' name={'solution'+`${index+1}`}></input>
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
                                        <input type='radio' name={'solution'+`${index+1}`}></input>
                                    </td>
                                </tr>
                                
                                </>
                                
                            )
                        })}
                    </tbody>
                </table>
                <button id={style.addQuestion} className={style.btn} onClick={addRow} type='button'>Add Question</button>
                <button id={style.submitQuiz} className={style.btn} type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Adminquiz;