import './form.css'
import Navbar from '../components/navbar'
import { useEffect } from 'react';
import Home from '../components/home';
import {Link,useNavigate} from 'react-router-dom'

export default function Login(props){
    
    const loginVal = props.loginState[0];
    const setLoginVal = props.loginState[1];
    const navigate = useNavigate()
    function handleSubmit(event)
    {
        event.preventDefault();
        if(document.getElementsByName('uname')[0].value==='root' && document.getElementsByName('pwd')[0].value==='root')
        {
            setLoginVal(1);
            navigate('/home')
        }
    }


    return(
        <div className='content'>
            <div className='formbox'>
                <h1>Login</h1>
                <form >
                    <table id='tableForm'>
                        <tbody>
                            <tr>
                                <td><label htmlFor='uname'><b>Username</b></label></td>
                                <td><input name='uname'></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='pwd'><b>Password</b></label></td>
                                <td><input name='pwd'></input></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><button id='btn' onClick={handleSubmit} to="/home">Login</button></td>
                            </tr>
                        </tbody>
                        

                    </table>
                </form>
            </div>
            
            

        </div>
    )
}