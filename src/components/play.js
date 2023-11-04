import './play.css'
import elephant from '../img/elephant.jpeg'
import { useEffect } from 'react';
function Play(props)
{
    useEffect(()=>{
        const images = document.getElementsByClassName("card");
        for (let imgno = 0; imgno < images.length; imgno++) {
        let img = images[imgno];
        
        let imgX = img.offsetLeft;
        let imgY = img.offsetTop + 50;

        let imgW = img.offsetWidth;
        let imgH = img.offsetHeight;

        let imgXCenter = (imgX) + (imgW / 2);
        let imgYCenter = (imgY) + (imgH / 2);

        img.onmousemove = (event) => {
            console.log("here")
            img.addEventListener('mouseout', (event) => { })
            img.style.transitionDuration = '0s';
            let clientX = event.clientX;
            let clientY = event.clientY;



            let tempX = (clientX - imgXCenter);
            let tempY = (clientY - imgYCenter);

            let rotateX = (tempY) / (imgH / 2);
            let rotateY = (-1) * (tempX) / (imgW / 2);




            img.style.transform = `rotate3d(${rotateX},${rotateY},0,20deg)`


        }
        img.onmouseout = (event) => {
            img.style.transitionDuration = '1s';
            img.style.transitionProperty = 'transform';
            img.style.transform = `rotate3d(0,0,0,0deg)`;


            }
        
        img.onmouseclick = (event) =>
        {
            //redirect to quiz page
        }
        };
        }
        
    )

    

    return(
        <div className='container'>
            <div className="card" id="card">
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div>
            <div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div><div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div><div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div><div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div><div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div><div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div><div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div><div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div><div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div>
            <div className="card" id="card" >
                <div className="card-img-field" >
                    <img className="card-img" src={elephant} alt="elephant"/>
                </div>
                <div className="card-text-field">
                    <div className="card-text">
                        <h2 className="card-text-title">
                            SAMPLE TITLE
                        </h2>
                        <p className="card-text-content">
                            SAMPLE TEXT
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Play;