import '../App.css'

export default function Banner({ onStart }){
    return(
        <>
            <div className="banner">
                <div className="banner-container">
                    <button className="banner-button" onClick={onStart}>
                        Start
                    </button>
                    <p>
                        Press button and start typing to begin the test.
                    </p>
                </div>
            </div>
        </>
    )
}