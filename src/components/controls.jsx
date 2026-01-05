import '../App.css'

export default function Controls(){
    return(
        <>
        <div className="controls">
            <div className="diff control-section" >
                <span>
                    <img src="/difficulty.svg" className='control-icon' alt="difficulty" />
                </span>
                <button id='easy-diff' className='inactive'>
                    Easy
                </button>
                <span className="seperator"></span>
                <button id='med-diff' className='inactive'>
                    Medium
                </button>
                <span className="seperator"></span>
                <button id='hard-diff' className='inactive'>
                    Hard
                </button>
            </div>

            <div className="time control-section" >
                <span>
                    <img src="/time.svg" className='control-icon' alt="time" />
                </span>
                <button id='time-30' className='inactive'>
                    30
                </button>
                <span className="seperator"></span>
                <button id='time-60' className='inactive'>
                    60
                </button>
                <span className="seperator"></span>
                <button id='time-120' className='inactive'>
                    120
                </button>
                <span className="seperator"></span>
                <button className="custom-time inactive">
                    +
                </button>
            </div>
        </div>
        </>
    )
}