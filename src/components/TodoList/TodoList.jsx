import Style from './TodoList.module.css'

const TodoList = (props) => {
    return (
        <ul className={Style.TodoList}>
            {props.children}
        </ul>
    )
}

export { TodoList }