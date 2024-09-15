import React from 'react'
import { MdDelete } from "react-icons/md";

const Todo = (props) => {
    return (
        <li style={{ listStyle: "none" }}>
            <input type="checkbox" defaultChecked={props.completed} />
            <span>{props.task}</span>
            <MdDelete />
        </li>
    )
}

export default Todo
