import '../App.css'

export default function Results({results , onBack}){
    return(
        <>
        <div className="results">
            <div className="wpm main-res">
                <span className="wpm-value">
                {results.grossWPM}
                </span>
                <span className="wpm-text">
                    Words Per Minute
                </span>
            </div>
            <div className="accuracy res-sec">
                <p className="result-label">
                    Accuracy
                </p>
                <div className="accuracy-value">
                    {results.accuracy} %
                </div>
                <span className="accuracy-text">
                    Accuracy
                </span>
            </div>
            <div className="raw-wpm res-sec">
                 <p className="result-label">
                    Raw WPM
                </p>
                <div className="raw-wpm-value">
                    {results.rawWPM}
                </div>
                <span className="raw-wpm-text">
                    Words per Min
                </span>
            </div>
            <div className="char res-sec">
                 <p className="result-label">
                    Characters
                </p>
                <div className="char-value">
                    <span id='correct'>
                        {results.correctChars}
                    </span>
                    &nbsp;| &nbsp;
                    <span id='incorrect'>
                        {results.incorrectChars}
                    </span>
                    &nbsp;|&nbsp;
                    <span id='missed'>
                        {results.missedChars}
                    </span>
                     &nbsp;|&nbsp;
                    <span id='extra'>
                        {results.extraChars}
                    </span>
                </div>
                <span className="char-text">
                    correct | incorrect | missed | extra characters
                </span>
            </div>
        </div>

        <div className="back_btn">
            <button onClick={onBack}>
                <img src="/back.svg" className='back-img' alt="back-arrow" />
                <span>Back to Home</span>
            </button>
        </div>
        </>
    )
}