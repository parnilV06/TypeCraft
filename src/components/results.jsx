import '../App.css'

export default function Results(){
    return(
        <>
        <div className="results">
            <div className="wpm main-res">
                <span className="wpm-value">
                    45
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
                    90%
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
                    50
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
                        200
                    </span>
                    |
                    <span id='incorrect'>
                        20
                    </span>
                    |
                    <span id='missed'>
                        5
                    </span>
                    |
                    <span id='extra'>
                        2
                    </span>
                </div>
                <span className="char-text">
                    correct | incorrect | missed | extra characters
                </span>
            </div>
        </div>
        </>
    )
}