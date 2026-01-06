import '../App.css'
import StatusBar from './statusbar.jsx'
import Controls from './controls.jsx'
import Sec_controls from './sec-controls.jsx'
import Banner from './banner.jsx'
import Canvas from './canvas.jsx'
import Results from './results.jsx'
import React from 'react'
import { useState } from 'react'
import { easyWords, mediumWords, hardWords } from '../data/wordList.js'



export default function Playground() {
  // State variables
  const [testStarted, setTestStarted] = useState(false);
  const [testEnded, setTestEnded] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [timeLimit, setTimeLimit] = useState(60);
  const [status, setStatus] = useState("waiting"); // waiting( beofre test starts) , running( test ongoing ) , ended ( test ended )

  // Event Handlers 
  function startTest() {
    setTestStarted(true);

  }

  function handleDifficultyChange(level) {
    setDifficulty(level);
  }

  function handleTimeChange(time) {
    setTimeLimit(time);
  }

  function resetTest() {
    setTestStarted(false);
    // code to reset timer and other data and states
  }

  function endTest(){
    setTestEnded(true);
    setTestStarted(false);

  }

  // TImer Logic
  // Removed setTimeout as timer is now handled in StatusBar



  return (
    <>
      <div className="playground">
        {/* Render Control bar if test not started or render status bar */}
        {(!testStarted && !testEnded) && <Controls difficulty={difficulty}
          timeLimit={timeLimit}
          onDifficultyChange={handleDifficultyChange}
          onTimeChange={handleTimeChange}
          disabled={testStarted} />}
        {(testStarted && <StatusBar timer_value={timeLimit} diff={difficulty} onEnd={endTest} />)}

        {/* Render Banner if test not started */}
        {(!testStarted && !testEnded) && <Banner onStart={startTest} />}

        {/* Render Canvas if test started and not ended */}
        {(testStarted && !testEnded) && <Canvas />}

        {/* Render Results if test ended */}
        {(testEnded) && <Results />}

        {/* Render Secondary Controls if test started and not ended */}
        {(testStarted && !testEnded) && <Sec_controls onReset={resetTest} />}
      </div>
    </>
  )
}

