import React, { useState, useRef } from "react";
import './Tracks.css'
import track1 from './assets/img/on.jpg'
import track2 from './assets/img/on2.jpg'
import track3 from './assets/img/on5.jpg'
import song2 from './assets/songs/told you not with tag.wav'
import song1 from './assets/songs/grr.wav'
import song3 from './assets/songs/kagune.mp3'


export default function Tracks(){

    const [selectedTrack, setSelectedTrack] = useState(null);
    const audioRef1 = useRef(null);
    const audioRef2 = useRef(null);
    const audioRef3 = useRef(null);

    const handleTrackClick = (track, audioRef) => {
        if (selectedTrack === track) {
            setSelectedTrack(null);
            audioRef.current.pause();
        } else {
            setSelectedTrack(track);
            audioRef.current.play();
        }
    }

    return(
        <div id="Tracks" className="track-cont">
            <h1 className="tracks">Tracks :</h1>
            <div className="track-container">
                <img className="track-img" src={track1} alt="" onClick={() => handleTrackClick(track1, audioRef1)} style={{ display: selectedTrack !== track1 && selectedTrack !== null ? 'none' : 'block' }} />
                <img className="track-img" src={track2} alt="" onClick={() => handleTrackClick(track2, audioRef2)} style={{ display: selectedTrack !== track2 && selectedTrack !== null ? 'none' : 'block' }} />
                <img className="track-img last-track-img" src={track3} alt="" onClick={() => handleTrackClick(track3, audioRef3)} style={{ display: selectedTrack !== track3 && selectedTrack !== null ? 'none' : 'block' }} />
            </div>
            <audio ref={audioRef1} src={song1} />
            <audio ref={audioRef2} src={song2} />
            <audio ref={audioRef3} src={song3} />
        </div>   
    )
}
