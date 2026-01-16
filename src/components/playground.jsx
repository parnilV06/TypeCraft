import '../App.css'
import StatusBar from './statusbar.jsx'
import Controls from './controls.jsx'
import Sec_controls from './sec-controls.jsx'
import Banner from './banner.jsx'
import Canvas from './canvas.jsx'
import Results from './results.jsx'
import React from 'react'
import { useState, useRef, useEffect , useCallback } from 'react';
import { easyWords, mediumWords, hardWords } from '../data/wordList.js'
// import typing engine core functions
import { classifyChar } from '../functions/typingEngine.js'
import { finalizeWord } from '../functions/typingEngine.js'



export default function Playground() {
  // State variables
  const [testStarted, setTestStarted] = useState(false);
  const [testEnded, setTestEnded] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [timeLimit, setTimeLimit] = useState(60);
  const [charStatus, setCharStatus] = useState(null); // correct / incorrect / extra / missed - characters
  const max_word = 30;
  const wordsPerView = 20;

  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  //variables and coynters for stats
  const [totalTypedChars, setTotalTypedChars] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [extraChars, setExtraChars] = useState(0);
  const [missedChars, setMissedChars] = useState(0);
  const [wordsCompleted, setWordsCompleted] = useState(0);
  const [typedHistory, setTypedHistory] = useState({});
  const [currentInput, setCurrentInput] = useState("");

  const [results, setResults] = useState(null);

  // State and Ref varaible for timer 
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const startTimeRef = useRef(null);



  // funnction to find word count based on time limit and difficulty
  function findWordCount(timeLimit, diff) {
    let wpm = 2 * timeLimit + 10;
    if (diff === "medium") {
      wpm = wpm - 5;
    }
    else if (diff === "hard") {
      wpm = wpm - 10;
    }
    return wpm;
  }

  // Function to Set source list based on difficulty
  function setSource(diff) {
    let sourceList;
    if (diff === "easy") {
      sourceList = easyWords;
    }
    else if (diff === "medium") {
      sourceList = mediumWords;
    }
    else {
      sourceList = hardWords;
    }
    return sourceList;
  }

  // function to get random words from source list
  function generateWordsList(diff) {
    let sourceList = setSource(diff);
    let Totalcount = findWordCount(timeLimit, difficulty);
    let generatedWords = [];
    for (let i = 0; i < Totalcount; i++) {
      let randomIndex = Math.floor(Math.random() * sourceList.length);
      generatedWords.push(sourceList[randomIndex]);
    }
    return generatedWords;
  }

  // Input Ref using useRef hook to handel input keys using a hidden input field.
  const inputRef = useRef(null)

  // function to handel keydown event

  function handleKeyDown(e) {
    const typedChar = e.key;

    // guard clauses
    if (!testStarted || testEnded) return;
    if (e.key === " ") {
      e.preventDefault();
      handleWordSubmit();
      return;
    }
    if (typedChar.length !== 1) return; // ignore Shift, Ctrl, etc.

    const expectedChar =
      words[currentWordIndex][currentCharIndex];

    const charResult = classifyChar({
      expectedChar,
      typedChar,
      position: currentCharIndex,
      wordLength: words[currentWordIndex].length
    });

    processCharResult(charResult, typedChar);
  }

  function processCharResult(result, typedChar) {
    setTotalTypedChars(c => c + 1);

    if (result === "correct") {
      setCorrectChars(c => c + 1);
      setCurrentCharIndex(i => i + 1);
      setCurrentInput(input => input + typedChar);
    }

    else if (result === "incorrect") {
      setIncorrectChars(c => c + 1);
      setCurrentCharIndex(i => i + 1);
      setCurrentInput(input => input + typedChar);
    }

    else if (result === "extra") {
      setExtraChars(c => c + 1);
      setCurrentInput(input => input + typedChar);
      // DO NOT move currentCharIndex
    }

    // store history for rendering
    setTypedHistory(prev => ({
      ...prev,
      [`${currentWordIndex}-${currentCharIndex}`]: {
        char: typedChar,
        result
      }
    }));
  }

  function handleWordSubmit() {
    const expectedWord = words[currentWordIndex];

    const { missed } = finalizeWord(expectedWord, currentInput);

    setMissedChars(c => c + missed);
    setWordsCompleted(w => w + 1);

    setCurrentWordIndex(i => i + 1);
    setCurrentCharIndex(0);
    setCurrentInput("");
  }

  // Event Handlers 
  function startTest() {
    setTestStarted(true);
    setTestEnded(false);
    setWords(generateWordsList(difficulty));

    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setCurrentInput("");

    setTotalTypedChars(0);
    setCorrectChars(0);
    setIncorrectChars(0);
    setExtraChars(0);
    setMissedChars(0);
    setWordsCompleted(0);
    setTypedHistory({});
    setResults(null);

    startTimeRef.current = Date.now();
    setTimeRemaining(timeLimit);

  }

  function calculateViewport() {
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

  const endTest = useCallback(() => {
  setTestEnded(true);
  setTestStarted(false);

  const timeInMinutes = timeLimit / 60;

  const grossWPM = Math.round(
    (totalTypedChars / 5) / timeInMinutes
  );

  const accuracy =
    totalTypedChars === 0
      ? 0
      : Math.round((correctChars / totalTypedChars) * 100);

  const rawWPM = totalTypedChars === 0 ? 0 : grossWPM - (incorrectChars + extraChars + missedChars) / (timeInMinutes);

  setResults({ grossWPM, accuracy, rawWPM, totalTypedChars, correctChars, incorrectChars, extraChars, missedChars, wordsCompleted });
}, [
  timeLimit,
  totalTypedChars,
  correctChars,
  incorrectChars,
  extraChars,
  missedChars,
  wordsCompleted,
]);



  // logging states and calculated values for char for testing purposes here using useEffect |

  useEffect(() => {
    console.log({
      totalTypedChars,
      correctChars,
      incorrectChars,
      extraChars,
      currentWordIndex,
      currentCharIndex
    });
  }, [
    totalTypedChars,
    correctChars,
    incorrectChars,
    extraChars,
    currentWordIndex,
    currentCharIndex
  ]);

  // useEffect to focus hidden input whenever the test starts
  useEffect(() => {
    if (testStarted && !testEnded) {
      inputRef.current.focus();
    }
  }, [testStarted, testEnded]);

//  useEffect to update and derive time using setInterval
useEffect(() => {
  if (!testStarted || testEnded) return;

  const interval = setInterval(() => {
    const elapsed = Math.floor(
      (Date.now() - startTimeRef.current) / 1000
    );

    const remaining = timeLimit - elapsed;

    if (remaining <= 0) {
      setTimeRemaining(0);
      endTest();
    } else {
      setTimeRemaining(remaining);
    }
  }, 250); // check 4× per second

  return () => clearInterval(interval);
}, [testStarted, testEnded, timeLimit , endTest]);



  return (
    <>
      <div className="playground">
        {/* Render Control bar if test not started or render status bar */}
        {(!testStarted && !testEnded) && <Controls difficulty={difficulty}
          timeLimit={timeLimit}
          onDifficultyChange={handleDifficultyChange}
          onTimeChange={handleTimeChange}
          disabled={testStarted} />}
        {(testStarted && <StatusBar timer_value={timeLimit} diff={difficulty} timeRemaining={timeRemaining} />)}

        {/* Render Banner if test not started */}
        {(!testStarted && !testEnded) && <Banner onStart={startTest} />}

        {/* Render Canvas if test started and not ended */}
        {(testStarted && !testEnded) && <>
          <Canvas testWords={visibleWords} viewportStart={viewportStart} currentWordIndex={currentWordIndex} currentCharIndex={currentCharIndex} typedHistory={typedHistory} /> 
          <input
            ref={inputRef}
            type="text"
            className="hidden-input"
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
        </>
        }


        {/* Render Results if test ended */}
        {testEnded && results && <Results results={results} />}


        {/* Render Secondary Controls if test started and not ended */}
        {(testStarted && !testEnded) && <Sec_controls onReset={resetTest} />}
      </div>
    </>
  )
}

