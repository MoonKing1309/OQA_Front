import './home.css'
import clockimg from '../img/clockimg.avif'
import newimg from '../img/newimg.avif'
import cupimg from '../img/cupimg.jpg'
function Home() {
    return (  
        <div className='homebg'>
            <div className='card1'>
                <div>
                    <div className="card" id="card">
                    <div className="card-img-field" >
                        <img className="card-img" src={cupimg} alt="elephant"/>
                    </div>
                    <div className="card-text-field">
                        <div className="card-text">
                            <h2 className="card-text-title">
                                Competitive Edge
                            </h2>
                            <p className="card-text-content">
                            Compete with friends, family, or the global community to see who reigns supreme in the world of quizzing.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card2'>
                <div>
                        <div className="card" id="card">
                        <div className="card-img-field" >
                            <img className="card-img" src={clockimg} alt="elephant"/>
                        </div>
                        <div className="card-text-field">
                            <div className="card-text">
                                <h2 className="card-text-title">
                                    Time Pressure
                                </h2>
                                <p className="card-text-content">
                                    Put your knowledge to the test under the ticking clock. Many of our quizzes come with time limits.Enriching your quizzing experince.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='card3'>
            <div>
                        <div className="card" id="card">
                        <div className="card-img-field" >
                            <img className="card-img" src={newimg} alt="elephant"/>
                        </div>
                        <div className="card-text-field">
                            <div className="card-text">
                                <h2 className="card-text-title">
                                    Learning Reinvented
                                </h2>
                                <p className="card-text-content">
                                Our quizzes aren't just about entertainment – they're a fun way to learn and expand your knowledge.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='textarea'>
                <h1>
                    Welcome to Project Name!
                </h1>
                <h2>
                    Unlock the Power of Knowledge
                </h2>
                <h4>
                    Are you ready to challenge your mind, expand your horizons, and have some fun along the way? Look no further! ProjectName is here to provide you with a world of captivating quizzes that cater to every interest, age, and knowledge level.
                </h4>

            </div>
        </div>
    );
}

export default Home;