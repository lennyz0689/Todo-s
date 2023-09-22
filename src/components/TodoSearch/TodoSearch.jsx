import React from 'react'
import Style from './TodoSearch.module.css'

const TodoSearch = ({search, setSearch}) => {
    return (
        <input
            className={Style.TodoSearch}
            placeholder="Ingresar Todo'"
            value={search}
            onChange={(event) => setSearch(event.target.value)
            }
        />
    )
}

export { TodoSearch }