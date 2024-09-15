import React, { useState } from 'react'

const Form = ({ addTodo, DUMMY_TODOS }) => {

    let [inp, setinp] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setinp(inp);
        console.log(inp);
        addTodo(inp);
        inp = "";

    }

    const handleInput = (e) => {
        inp = e.target.value;

    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='ADD to do here' onChange={handleInput} />
            <button type="submit">ADD</button>

        </form>
    )
}

export default Form
