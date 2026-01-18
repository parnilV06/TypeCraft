import '../App.css'

// Reset button ( secondary control ) component

export default function sec_controls({ onReset }){
    return(
        <>
        <div className="sec-controls">
            <button className="sec-btn" onClick={onReset}>
                <img src="/restart.svg" alt="Restart" />
                <p>
                    Restart Test
                </p>
            </button>

        </div>
        </>
    )
}