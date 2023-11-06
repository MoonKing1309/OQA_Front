import { Link } from 'react-router-dom';
import style from './footer.module.css';

function Footer() {
    return ( 
        <div className={style.footerBox}>
            <div className={style.footerContent}>

                <div className={style.footerColumn1}>
                    <h1 >ProjectName</h1>
                    <p>
                    Put your knowledge to <br></br>the test under the ticking clock. 
                    </p>
                </div>
                <div className={style.footerColumn2}>
                    <h1>Leave a Review</h1>
                    <p>
                        <Link to='/contact'>Email us</Link> <br></br> <br></br>  
                        Ph no : +xyz abc
                    </p>
                </div>
                <div className={style.footerColumn3}>
                    <h1>Footer Title</h1>
                    <p>
                        Footer Text to display here 
                    </p>
                </div>

 
            </div>
        </div>
     );
}

export default Footer;