import '../App.css'

// Main typing test canvas component 

export default function Canvas({ testWords, viewportStart, currentWordIndex, currentCharIndex, typedHistory }) {
  return (
    <>
      <div className="canvas">
        <div className="text-display">
          {testWords.map((word, localIndex) => {
            const globalWordIndex = viewportStart + localIndex;

            const isPast = globalWordIndex < currentWordIndex;
            const isCurrent = globalWordIndex === currentWordIndex;
            const isFuture = globalWordIndex > currentWordIndex;

            // logic implementation for rendering extra charecters typed for the current word 
            const extraChars =[];

            if(isCurrent){
              Object.keys(typedHistory).forEach(key => {
                const [wordIndex , charIndex] = key.split("-").map(Number);

                if(wordIndex === globalWordIndex && charIndex >= word.length){
                  extraChars.push({charIndex,char:typedHistory[key].char});
                }
              });

              extraChars.sort((a,b) => a.charIndex - b.charIndex);
            }
            return (
              <span
                key={globalWordIndex}
                className={`word
              ${isPast ? "past" : ""}
              ${isCurrent ? "activeWord" : ""}
              ${isFuture ? "future" : ""}
            `}
              >
                {word.split("").map((char, charIndex) => {
                                  const charKey = `${globalWordIndex}-${charIndex}`;
                const history = typedHistory[charKey];

                let charClass = "char";

                if (history) {
                  charClass += ` ${history.result}`;
                } else if (isPast) {
                  charClass += " missed";
                } else if (
                  isCurrent &&
                  charIndex === currentCharIndex
                ) {
                  charClass += " active";
                }
                  return (
                    <span key={charIndex} className={charClass}>
                      {char}
                    </span>
                  );
                })}

                {/* render extra char */}
                {isCurrent &&
                extraChars.map(({ char, charIndex }) => (
                  <span
                    key={`extra-${charIndex}`}
                    className="char extra"
                  >
                    {char}
                  </span>
                ))}
              </span>
            );
          })}
        </div>
      </div>
    </>
  )
}