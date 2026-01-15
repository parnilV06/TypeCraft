// this file contains the core functions for the typing test engine and resutl calculations

// Function to perform character level comparision and assign the status to char .
export function classifyChar({ expectedChar, typedChar, position ,wordLength }) {
    if (typedChar == null) {
        `return 'notAttempted'`;
    }
    if (typedChar === expectedChar) {
        return 'correct';
    } 
    else if (position >= wordLength) {
        return 'extra';
    }
    else {
        return 'incorrect';
    }
}

// Function to compare the entire word typed , and when space key is pressed finalize the current word , increament the total word typed counter and move to the next word .
export function finalizeWord(expectedWord, typedWord) {
  let missed = 0;

  for (let i = typedWord.length; i < expectedWord.length; i++) {
    missed++;
  }

  return { missed };
}
