import React from "react";
import './Home.css'
import ozawa from './assets/img/ozawa.png'

export default function Music(){
    return (
        <div className="home-container">
            <h1 className="home-h1">Creative</h1>
            <h1 className="home-h1">Developer</h1>
            <img src={ozawa} alt="ozawa" className="img-ozawa"/>
            <h1 className="home-h1">Ozawa</h1>
        </div>
    )
}