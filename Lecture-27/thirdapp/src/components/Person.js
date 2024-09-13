import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'

const Person = () => {
    // let [myMood, setMyMood] = useState(true)
    // function handleToggle() {
    //     myMood = (!myMood);
    //     setMyMood(myMood);
    // }

    const [toggle, setToggle] = useToggle(true)
    return (
        <div style={{
            width: "360px",
            margin: "30px auto",
            border: "2px solid black"
        }}>
            <h2 onClick={setToggle}> {toggle ? "😃" : "🐍"}</h2>

        </div>
    )
}

export default Person
