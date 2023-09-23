import App from "./App"
import { useLocalStorage } from './localStorage';
import React from "react";

const AppUi = () => {

    const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
    const [search, setSearch] = React.useState('')

    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length
    const searchtext = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))



    const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        )
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }
    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    return (
        <App
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            search={search}
            setSearch={setSearch}
            searchtext={searchtext}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    )
}

export default AppUi