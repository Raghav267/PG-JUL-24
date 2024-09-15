import React from 'react'
import Todo from './Todo'

const Todolist = (props) => {
    let todolist = props.todos.map((todo) => {
        return <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            deletTodo={props.deletTodo}
            toggleTodo={props.toggleTodo}
        ></Todo>
    })

    return (
        <ul>

            {todolist}
        </ul>

    )
};

export default Todolist
