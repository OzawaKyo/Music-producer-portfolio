import React from "react";
import './Projects.css'
import face from './assets/img/face4.jpg'
import face2 from './assets/img/face222.jpg'
import orange from './assets/img/orange3.jpg'


export default function Projects(){
    return(
<div className="container" id="Projects">
    <div className="margin">
        <h1 className="Projects">Projects :</h1>
        <div className="row">
            <div className="flip-card-container" style={{ "--hue": 220 }}>
                <div className="flip-card">
                    <div className="card-front">
                        <figure>
                        <div className="img-bg"></div>
                            <img className='projects-img' src={face2} />
                            <figcaption>Business Website</figcaption>
                            </figure>
                        </div>
                        <div className="card-back">
                            <figure>
                                <div className="img-bg"></div>
                                <img className='projects-img' src={face2} />
                            </figure>
                            <form target="_blank" action="https://blooming-flowers-f1591.web.app">
                                <button className='projects-button'>Blooming Flowers</button>
                            </form>
                            <div className="design-container">
                                <span className="design design--1"></span>
                                <span className="design design--2"></span>
                                <span className="design design--3"></span>
                                <span className="design design--4"></span>
                               <span className="design design--5"></span>
                               <span className="design design--6"></span>
                               <span className="design design--7"></span>
                               <span className="design design--8"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flip-card-container" style={{ "--hue": 170 }}>
                        <div className="flip-card">
                        <div className="card-front">
                            <figure>
                            <div className="img-bg"></div>
                            <img className='projects-img' src={orange} />
                            <figcaption>Web App</figcaption>
                            </figure>
                        </div>
                        <div className="card-back">
                            <figure>
                            <div className="img-bg"></div>
                            <img className='projects-img' src={orange} />
                            </figure>
                            <form target="_blank" action="https://orange-b2b.web.app/login">
                            <button className='projects-button'>Orange B2B</button>
                            </form>
                            <div className="design-container">
                            <span className="design design--1"></span>
                            <span className="design design--2"></span>
                            <span className="design design--3"></span>
                            <span className="design design--4"></span>
                            <span className="design design--5"></span>
                            <span className="design design--6"></span>
                            <span className="design design--7"></span>
                            <span className="design design--8"></span>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="flip-card-container" style={{ "--hue": 350 }}>
                        <div className="flip-card">
                        <div className="card-front">
                            <figure>
                            <div className="img-bg"></div>
                            <img className='projects-img' src={face} />
                            <figcaption>Application</figcaption>
                            </figure>
                        </div>
                        <div className="card-back">
                            <figure>
                            <div className="img-bg"></div>
                            <img className='projects-img' src={face} />
                            </figure>
                            <form target="_blank" action="https://github.com/OzawaKyo/Lol-Login">
                            <button className='projects-button'>Lol Login</button>
                            </form>
                            <div className="design-container">
                            <span className="design design--1"></span>
                            <span className="design design--2"></span>
                            <span className="design design--3"></span>
                            <span className="design design--4"></span>
                            <span className="design design--5"></span>
                            <span className="design design--6"></span>
                            <span className="design design--7"></span>
                            <span className="design design--8"></span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>









    )
}