import './navbar.css';

function Navbar(){
    return(
        <nav>
            <div className='nav-title'>
                <a href='#'><h1>ProjectName</h1></a>
            </div>
            <div className='nav-body'>
                <div className='nav-link'>
                    <a href='#' className='link'>Play</a>
                    <a href='#' className='link'>Contact</a>
                </div>
                <div className='nav-buttons'>
                    <a href='#'>Sign-Up</a> 
                    <a href='#'>Log-In</a>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;