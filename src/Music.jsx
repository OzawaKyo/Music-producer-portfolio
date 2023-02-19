import React from "react";
import './Music.css'
import headphones from './assets/img/headphones.jpg'

export default function Music(){
    return (
        <div className="music-container" id="Music">   
            <br />  <br /><br />
            <h1 className="music-h1">Creative</h1>
            <h1 className="music-h1">Music</h1>
            <img src={headphones} alt="ozawa" className="img-headphones"/>
            <h1 className="music-h1">Producer</h1>
        </div>
    )
}