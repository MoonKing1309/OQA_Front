import { useEffect, useState} from 'react';
import style from './timer.module.css'

function Timer(props) {
    
    const time = props.time[0];
    const setTime = props.time[1];
    

    useEffect(()=>{
        document.getElementById(style.content).classList.add(style.contentShow)
        setInterval(()=>{
            setTime(time=>time+1);
        },1000)
    },[])
    return ( 
        <div id={style.content}>
            {new Date(time * 1000).toISOString().slice(14, 19)}
        </div>
     );
}

export default Timer;
