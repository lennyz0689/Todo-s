import Style from './TodoCounter.module.css'

const TodoCounter = ({ total, completed }) => {
    return (
        <h1 className={Style.TodoCounter}>
            Has completado <span>{completed}</span> Todo's de <span>{total}</span>
        </h1>
    )
}

export { TodoCounter }