import React from 'react'
import Todo from './Todo'

const Todolist = (props) => {
    const todolist = props.DUMMY_TODOS.map((todo) => {
        return <Todo
            task={todo.task}
            completed={todo.completed}
        ></Todo>
    })

    return (
        <ul>

            {todolist}
        </ul>

    )
};

export default Todolist
