import React, { useEffect, useState } from 'react'
import Todolist from './Todolist'
import Form from './Form'

const TodoApp = () => {


    let DUMMY_TODOS = JSON.parse(window.localStorage.getItem('todos') || '[]')

    const [todos, setTodos] = useState(DUMMY_TODOS)
    // It is for every render
    // useEffect(() => {
    //     console.log("use Effect");
    // })

    //  it is for first we render the page
    // useEffect(() => {
    //     console.log("use Effect");
    // }, [])

    // whenever there changes in todos.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (task) => {
        return setTodos((prevState) => {
            return [{ id: prevState.length + 1, task: task, completed: false }, ...prevState];
        })

    }

    const deletTodo = (id) => {
        return setTodos((prevState) => {
            return prevState.filter((todo) => todo.id !== id);
        })

    }

    const toggleTodo = (id) => {
        return setTodos((prevState) => prevState.map((todo) => todo.id == id ? { ...todo, completed: !todo.completed } : todo))

    }

    return (
        <section>
            <Form addTodo={addTodo} todos={todos}></Form>

            <Todolist todos={todos} deletTodo={deletTodo} toggleTodo={toggleTodo}></Todolist>
        </section>
    )
}

export default TodoApp
