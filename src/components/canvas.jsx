import '../App.css'

export default function Canvas({ testWords, viewportStart, currentWordIndex ,currentCharIndex , typedHistory }){
    return(
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
            {word}
          </span>
        );
      })}
                </div>
            </div>
        </>
    )
}