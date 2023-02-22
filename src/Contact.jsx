import React from "react";
import './Contacts.css'
import ozawa from './assets/img/ozawa.png'
import headphones from './assets/img/headphones.jpg'

export default function Contact(){
    return(
        <div id="Contact" className="contact-container">
            <h1 className="Contact-h1">Contact :</h1>
            <section className="card-list" >
            <article className="card">
                <header className="card-header">
                    <p>FullTime</p>
                    <h2>Creative Developer</h2>
                </header>
                    <div className="card-author">
                        <a className="author-avatar" href="#Home">
                            <img src={ozawa} />
                        </a>
                        <svg className="half-circle" viewBox="0 0 106 57">
                            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                        </svg>
                        <div className="author-name">
                            <div className="author-name-prefix">Dev Student
                            </div>
                            Mohamed Amarcha
                        </div>
                    </div>
                    <div className="tags">
                        {/* <div className="tags-item"> */}
                            <a href="https://github.com/OzawaKyo" target='_blank'>Github</a>
                            <a href="https://www.instagram.com/simoamarcha/" target='_blank'>instagram</a>
                        {/* </div> */}
                    </div>
                    <div className="author-name-prefix">Simoamarcha@icloud.com</div>
                </article>

                <article className="card">
                    <header className="card-header">
                        <p>PartTime</p>
                        <h2>Music Producer</h2>
                    </header>
                    <div className="card-author">
                        <a className="author-avatar" href="#">
                            <img src={headphones} />
                        </a>
                        <svg className="half-circle" viewBox="0 0 106 57">
                            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                        </svg>
                        <div className="author-name">
                            <div className="author-name-prefix">BeatMaker</div>
                            OzawaKyo
                        </div>
                    </div>
                    <div className="tags">
                        {/* <div> */}
                            <a href="https://www.beatstars.com/ozawakyo" target='_blank'>BeatStars</a>
                            <a href="https://www.youtube.com/@ozawakyo6320" target='_blank'>Youtube</a>
                        {/* </div> */}
                        {/* <div> */}
                            <a href="https://www.instagram.com/simoamarcha/" target='_blank'>Instagram</a>
                        {/* </div> */}
                    </div>
                    <div className="author-name-prefix">ProdByOzawaKyo@gmail.com</div>
                </article>
            </section>
        </div>
    )
}