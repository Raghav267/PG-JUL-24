import React from 'react'
import { MdDelete } from "react-icons/md";

const Todo = (props) => {
    return (
        <li style={{ listStyle: "none" }}>
            <input onChange={() => props.toggleTodo(props.id)} type="checkbox" defaultChecked={props.completed} />
            <span>{props.task}</span>
            <MdDelete onClick={() => props.deletTodo(props.id)} />
        </li>
    )
}

export default Todo
