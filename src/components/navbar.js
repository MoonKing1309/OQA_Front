import './navbar.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
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
                <Link to='/home'><h1>ProjectName</h1></Link>
            </div>
            <div className='nav-body-0'>
                <div className='nav-link-0'>
                    <Link to='/play' className='link'>Play</Link>
                    <Link to='/contact' className='link'>Contact</Link>
                </div>
                <div className='nav-buttons-0'>
                    <Link to='/signup'>Sign-Up</Link> 
                    <Link to='/login'>Log-In</Link>
                </div>
            </div>
            
        </nav>
    )

    else
    return(
        <nav>
            <div className='nav-title-1'>
                <Link to='/home'><h1>ProjectName</h1></Link>
            </div>
            <div className='nav-body-1'>
                <div className='nav-link-1'>
                    <Link to='/play' className='link'>Play</Link>
                    <Link to='/contact' className='link'>Contact</Link>
                </div>
                <div className='nav-buttons-1'>
                    <Link to='/' onClick={handleLogOut}>Log-Out</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;