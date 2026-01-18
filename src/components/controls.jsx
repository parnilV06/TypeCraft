import '../App.css'

// Difficulty and timer setting components 

export default function Controls({
    difficulty,
    timeLimit,
    onDifficultyChange,
    onTimeChange,
    disabled
}) {
    function handleDifficultyClick(e) {
        const value = e.target.dataset.value;
        if (!value) return;
        onDifficultyChange(value);
    }

    function handleTimeClick(e) {
        const value = e.target.dataset.value;
        if (!value) return;
        onTimeChange(Number(value));
    }
    function handleCustomTime() {
        const input = prompt("Enter custom time (seconds)");
        const value = Number(input);

        if (!Number.isNaN(value) && value > 0) {
            onTimeChange(value);
        }
    }
    return (
        <>
            <div className="controls">
                <div className="diff control-section" >
                    <span>
                        <img src="/difficulty.svg" className='control-icon' alt="difficulty" />
                    </span>
                    <button
                        id="easy-diff"
                        data-value="easy"
                        className={difficulty === "easy" ? "active" : "inactive"}
                        onClick={handleDifficultyClick}
                        disabled={disabled}
                    >
                        Easy
                    </button>

                    <span className="seperator"></span>
                    <button
                        id="med-diff"
                        data-value="medium"
                        className={difficulty === "medium" ? "active" : "inactive"}
                        onClick={handleDifficultyClick}
                    >
                        Medium
                    </button>
                    <span className="seperator"></span>
                    <button
                        id="hard-diff"
                        data-value="hard"
                        className={difficulty === "hard" ? "active" : "inactive"}
                        onClick={handleDifficultyClick}
                    >
                        Hard
                    </button>

                </div>

                <div className="time control-section" >
                    <span>
                        <img src="/time.svg" className='control-icon' alt="time" />
                    </span>
                    <button
                        id="time-30"
                        data-value="30"
                        className={timeLimit === 30 ? "active" : "inactive"}
                        onClick={handleTimeClick}
                    >
                        30
                    </button>
                    <span className="seperator"></span>
                    <button
                        id="time-60"
                        data-value="60"
                        className={timeLimit === 60 ? "active" : "inactive"}
                        onClick={handleTimeClick}
                    >
                        60
                    </button>
                    <span className="seperator"></span>
                    <button
                        id="time-120"
                        data-value="120"
                        className={timeLimit === 120 ? "active" : "inactive"}
                        onClick={handleTimeClick}
                    >
                        120
                    </button>
                    <span className="seperator"></span>
                    <button
                        className="custom-time inactive"
                        onClick={handleCustomTime}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    )
}