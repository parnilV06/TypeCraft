import '../App.css'
import StatusBar from './statusbar.jsx'
import Controls from './controls.jsx'
import Sec_controls from './sec-controls.jsx'
import Banner from './banner.jsx'
import Canvas from './canvas.jsx'
import Results from './results.jsx'
import React from 'react'
import { useState } from 'react'

export default function Playground(){
    const [testStarted, setTestStarted] = useState(false);
    const [testEnded, setTestEnded] = useState(false);
    const [difficulty, setDifficulty] = useState("easy");
    const [timeLimit, setTimeLimit] = useState(60);
    const [status , setStatus] = useState("waiting"); // waiting( beofre test starts) , running( test ongoing ) , ended ( test ended )

    return(
        <>
        <div className="playground">
            {/* Render Control bar if test not started or render status bar */}
           {(!testStarted && !testEnded) && <Controls />}
           {(testStarted &&  <StatusBar /> )}

            {/* Render Banner if test not started */}
           {(!testStarted && !testEnded) && <Banner />}

            {/* Render Canvas if test started and not ended */}
           {(testStarted && !testEnded) && <Canvas />}

            {/* Render Results if test ended */}
              {(testEnded) && <Results />}

            {/* Render Secondary Controls if test started and not ended */}
              {(testStarted && !testEnded) && <Sec_controls />}
        </div>
        </>
    )
}