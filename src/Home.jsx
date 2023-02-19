import React from "react";
import './Home.css'
import ozawa from './assets/img/ozawa.png'

export default function Home(){
    return (
        <div className="home-container" id="Home">
            <br /><br />
            <h1 className="home-h1 creative">Creative</h1>
            <h1 className="home-h1">Developer</h1>
            <img src={ozawa} alt="ozawa" className="img-ozawa"/>
            <h1 className="home-h1">Ozawa</h1>
        </div>
    )
}