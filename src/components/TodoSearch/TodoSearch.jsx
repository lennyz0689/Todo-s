import Style from './TodoSearch.module.css'

const TodoSearch = () => {
    return (
        <input
            className={Style.TodoSearch}
            placeholder="Ingresar Todo'"
        />
    )
}

export { TodoSearch }