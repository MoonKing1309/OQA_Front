import { useEffect, useState } from 'react';
import './question.css';

function Question(props) {

        const choices = props.choices[0];
        const setChoices = props.choices[1];
        const updateMap = (key,value)=>{
        setChoices(choices.set(key,value));
    }

    const onSubmit =(event)=>
    {
        event.preventDefault()
        var radio = document.getElementsByName('options');
            for (let i = 0; i < radio.length; i++) {
                if (radio[i].checked)
                {
                    updateMap(props.questionId,radio[i].value)
                }
            }
    }
  
    
    return ( 
        <div>
            Question goes here

            <form>
                <div className='options'>
                    <div className='option'>
                        {/* replace ooption text with backend value */}
                        <input type='radio' id='a' name='options' ></input>
                        <label htmlFor='a'>
                            Option A
                        </label>
                    </div>

                    <div className='option'>
                        <input type='radio' id='b' name='options'></input>
                        <label htmlFor='b'>
                            Option B
                        </label>
                        
                    </div>

                    <div className='option'>
                        <input type='radio' id='c' name='options'></input>
                        <label htmlFor='c'>
                            Option C
                        </label>
                        
                    </div>

                    <div className='option'>
                        <input type='radio' id='d' name='options'></input>
                        <label htmlFor='D'>
                            Option D
                        </label>
                    </div>

                </div>
                <div className='option'>
                        <button type='submit' id='btn' onClick={onSubmit}>
                            Confirm
                        </button>
                    </div>
            </form>
        </div>
    )
}

export default Question;