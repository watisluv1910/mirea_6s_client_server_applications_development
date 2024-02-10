import { useState } from 'react'
import './assets/App.css'

function App() {
    const [counter, setCounter] = useState(0);

    return (
    <>
        <div className="counter">
            <h1>Pract 1 - Counter or what idk wtf</h1>
            <span className="counter_output">{counter}</span>
            <div className="btn_container">
                <button className="btn control_btn" onClick={() => setCounter((count) => count + 1)}>+</button>
                <button className="btn control_btn" onClick={() => setCounter((count) => count - 1)}>-</button>
                <button className="reset_btn" onClick={() => setCounter(0)}>Reset</button>
            </div>
        </div>
    </>
    )
}

export default App
