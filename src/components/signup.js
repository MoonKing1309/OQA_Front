import axios from "axios";
import "./form.css";
import {  useNavigate } from "react-router-dom";

function Signup(props) {

    const navigate = useNavigate()
    const loginVal = props.loginState[0];
    const setLoginVal = props.loginState[1];

    const onSubmit = async (event)=>{
        event.preventDefault()
        var uname = document.querySelector("input[name='uname']").value
        var pwd = document.querySelector("input[name='pwd']").value
        var rpwd = document.querySelector("input[name='rpwd']").value
        var pwdNotMatch = document.querySelector('#pwdNotMatch')
        var unameTaken = document.querySelector('#unameTaken')
        unameTaken.style.display='none'
        var circleLoader = document.querySelector('.circle-loader')
        
        if(pwd!=rpwd)
        {
            pwdNotMatch.style.display='block'
            //add event listener that will remove the warning without pressing submit button
            return
        }
        else
        {
            pwdNotMatch.style.display='none'
            circleLoader.style.display='inline-block'
        }
        try {
            await axios.post(`https://qmi.onrender.com/signup`,{uname,pwd})
                .then((res)=>{
                    if(res.status==201)
                    {
                        axios.post(`https://qmi.onrender.com/login`,{uname,pwd})
                        .then((res)=>{
                            if(res.status==201)
                            {
                                setTimeout(()=>{
                                    setLoginVal(res.data.msg)
                                    localStorage.setItem('loginVal', JSON.stringify(res.data.msg));
                                    navigate('/play')
                                    },500)
                                
                            }
                    })
                        
                    }
                })
                .catch((err)=>{
                    if(err.response.status==409)
                    {
                        circleLoader.style.display='none'
                        unameTaken.style.display='block'
                    }
                })
            
        } catch (error) {
            console.log(error)
        }
    }
    return (  
        <div className='content'>
            <div className='formbox'>
               
                <h1>Signup  <div className="circle-loader"></div> </h1>
                <form>
                    <table id='tableForm'>
                        <tr>
                            <td><label for='uname'><b>Username</b></label></td>
                            <td><input name='uname' required></input></td>
                            <h5 id='unameTaken' style={{display:'none',color:"red"}}>Username Already taken</h5>
                        </tr>
                        <tr>
                            <td><label for='pwd'><b>Password</b></label></td>
                            <td><input name='pwd' required></input></td>
                        </tr>
                        <tr>
                            <td><label for='rpwd'><b>Confirm Password</b></label></td>
                            <td><input name='rpwd' required></input></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button id='btn' type='submit' onClick={onSubmit}>Signup</button></td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <h4 id='pwdNotMatch' style={{display:'none',color:"red"}}>Password does not match</h4></td>
                        </tr>

                    </table>
                </form>
            </div>
            
            

        </div>
    )
}

export default Signup ; 
