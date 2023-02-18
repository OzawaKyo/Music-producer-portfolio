import React, { useState } from "react";
import './Tracks.css'
import track1 from './assets/img/on.jpg'
import track2 from './assets/img/on2.jpg'
import track3 from './assets/img/on5.jpg'


export default function Tracks(){

    const [selectedTrack, setSelectedTrack] = useState(null);

    const handleTrackClick = (track) => {
        if (selectedTrack === track) {
            setSelectedTrack(null);
        } else {
            setSelectedTrack(track);
        }
    }

    return(
        <div>
            <h1 className="tracks">Tracks :</h1>
            <div className="track-container">
                <img className="track-img" src={track1} alt="" onClick={() => handleTrackClick(track1)} style={{ display: selectedTrack !== track1 && selectedTrack !== null ? 'none' : 'block' }} />
                <img className="track-img" src={track2} alt="" onClick={() => handleTrackClick(track2)} style={{ display: selectedTrack !== track2 && selectedTrack !== null ? 'none' : 'block' }} />
                <img className="track-img" src={track3} alt="" onClick={() => handleTrackClick(track3)} style={{ display: selectedTrack !== track3 && selectedTrack !== null ? 'none' : 'block' }} />
            </div>
        </div>   
    )
}
