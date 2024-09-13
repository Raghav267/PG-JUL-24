import React, { useState } from 'react'

const Counter = () => {
    let [count, setcount] = useState(0);

    function handleCount() {
        count += 1;
        setcount(count);
    }

    function handleColor() {

    }
    return (
        <div style={{
            width: "400px",
            border: "2px solid black",
            margin: "10px auto",
            backgroundColor: "aqua"
        }} onClick={handleColor}>

            <h1>Count : {count}</h1>
            <button onClick={handleCount}>Count++</button>
        </div>
    )
}

export default Counter
