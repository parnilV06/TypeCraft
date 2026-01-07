import '../App.css'
import React from 'react';
import { useState, useEffect } from 'react';

export default function StatusBar({ timer_value, diff , onEnd }){
    const [timeremaining, setTimeRemaining] = useState(timer_value);

    useEffect(() => {
        setTimeRemaining(timer_value);
    }, [timer_value]);

    useEffect(() => {
        if (timeremaining <= 0) {
            onEnd();
            return;
        }
        const timer = setTimeout(() => setTimeRemaining(timeremaining - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeremaining, onEnd]);

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
                    <span id="time-remaining">  {timeremaining}   </span>
                </span>
                <span id="time"> / {timer_value}s</span>
            </div>
        </div>
        </>
    )
}