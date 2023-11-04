import './navbar.css';
import {useState} from 'react';
function Navbar(props)
{

    const [loginState,setLoginState] = useState(props.loginState)

    function handleLogOut(){
        setLoginState(0)
    }
    if(loginState===0)
    return(
        <nav>
            <div className='nav-title-0'>
                <a href='#'><h1>ProjectName</h1></a>
            </div>
            <div className='nav-body-0'>
                <div className='nav-link-0'>
                    <a href='#' className='link'>Play</a>
                    <a href='#' className='link'>Contact</a>
                </div>
                <div className='nav-buttons-0'>
                    <a href='#'>Sign-Up</a> 
                    <a href='#'>Log-In</a>
                </div>
            </div>
            
        </nav>
    )

    else
    return(
        <nav>
            <div className='nav-title-1'>
                <a href='#'><h1>ProjectName</h1></a>
            </div>
            <div className='nav-body-1'>
                <div className='nav-link-1'>
                    <a href='#' className='link'>Play</a>
                    <a href='#' className='link'>Contact</a>
                </div>
                <div className='nav-buttons-1'>
                    <a href='#' onClick={handleLogOut}>Log-Out</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;