import '../App.css'

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

              </span>
            );
          })}
        </div>
      </div>
    </>
  )
}