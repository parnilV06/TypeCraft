import '../App.css'
import React from 'react';
import { useState, useEffect , useRef} from 'react';

export default function StatusBar({ timer_value, diff , timeRemaining }){

    return(
        <>
        <div className="status-bar">
            <div className="status-title">
                Typing Speed Test :
            </div>
            <div className="status-item">
                <span>Difficulty:</span>
                <span id="difficulty"> {diff}</span>
            </div>
            <span className="seperator"></span>
            <div className="status-item">
                <span>Time:</span>
                <span className="active-time active">
                    <span id="time-remaining">  {timeRemaining}   </span>
                </span>
                <span id="time"> / {timer_value}s</span>
            </div>
        </div>
        </>
    )
}