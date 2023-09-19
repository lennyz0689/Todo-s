import Style from './TodoItem.module.css'

const combinacionx = `${Style.Icon} ${Style.IconDelete}`

const TodoItem = (props) => {

    const iconClasses = props.completed
        ? `${Style.Icon} ${Style.IconCheck} ${Style.IconCheckActive}`
        : `${Style.Icon} ${Style.IconCheck}`;

    const parrafo = props.completed
        ? `${Style.TodoItemP} ${Style.TodoItemPComplete} `
        : `${Style.TodoItemP}`

    return (

        <li className={Style.TodoItem}>
            <span className={iconClasses}>v</span>
            <p className={parrafo}>{props.text}</p>
            <span className={combinacionx}>x</span>
        </li>
    )
}

export { TodoItem }