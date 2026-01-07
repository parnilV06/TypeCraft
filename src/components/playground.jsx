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
  // const [status, setStatus] = useState("waiting"); // waiting( beofre test starts) , running( test ongoing ) , ended ( test ended )
  const max_word = 30;
  const wordsPerView = 20;

  const[words , setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  // funnction to find word count based on time limit and difficulty
  function findWordCount(timeLimit, diff){
    let wpm = 2*timeLimit+10;
    if(diff === "medium"){
      wpm = wpm - 5;
    }
    else if(diff === "hard"){
      wpm = wpm - 10;
    }
    return wpm;
  }

  // Function to Set source list based on difficulty
  function setSource(diff){
    let sourceList;
    if(diff === "easy"){
      sourceList = easyWords;
    }
    else if(diff === "medium"){
      sourceList = mediumWords;
    }
    else{
      sourceList = hardWords;
    }
    return sourceList;
  }

  // function to get random words from source list
function generateWordsList(diff){
    let sourceList = setSource(diff);
    let Totalcount = findWordCount(timeLimit, difficulty);
    let generatedWords = [];
    for(let i=0; i<Totalcount; i++){
      let randomIndex = Math.floor(Math.random() * sourceList.length);
      generatedWords.push(sourceList[randomIndex]);
    }
    return generatedWords;
}

  // Event Handlers 
  function startTest() {
    setTestStarted(true);
    setTestEnded(false);
    setWords(generateWordsList(difficulty));
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);

  }

  function calculateViewport(){
    const start = Math.floor(currentWordIndex / wordsPerView) * wordsPerView;
const visibleWords = words.slice(start, start + wordsPerView);
return { start, visibleWords };
  }
const { start: viewportStart, visibleWords } = calculateViewport();

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
        {(testStarted && !testEnded) && <Canvas testWords={visibleWords} viewportStart={viewportStart} currentWordIndex={currentWordIndex} />}

        {/* Render Results if test ended */}
        {(testEnded) && <Results />}

        {/* Render Secondary Controls if test started and not ended */}
        {(testStarted && !testEnded) && <Sec_controls onReset={resetTest} />}
      </div>
    </>
  )
}

