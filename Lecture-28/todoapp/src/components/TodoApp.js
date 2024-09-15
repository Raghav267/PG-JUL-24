import React from 'react'
import Todolist from './Todolist'
import Form from './Form'

const TodoApp = () => {

    const DUMMY_TODOS = [
        {
            id: 1,
            task: "Got to gym",
            completed: true
        },
        {
            id: 2,
            task: "Learn React",
            completed: false
        },
        {
            id: 3,
            task: "Buy Groceries",
            completed: true
        }
    ]

    return (
        <div>
            <Form></Form>

            <Todolist DUMMY_TODOS={DUMMY_TODOS} ></Todolist>
        </div>
    )
}

export default TodoApp
