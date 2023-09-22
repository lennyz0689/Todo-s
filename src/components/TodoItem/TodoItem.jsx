import { IconComplete } from '../IconComplete/IconComplete';
import { IconDelete } from '../IconDelete/IconDelete';
import Style from './TodoItem.module.css'

const TodoItem = (props) => {

    const parrafo = props.completed
        ? `${Style.TodoItemP} ${Style.TodoItemPComplete} `
        : `${Style.TodoItemP}`

    return (

        <li className={Style.TodoItem}>
            <IconComplete completed={props.completed} onComplete={props.onComplete}/>
            <p className={parrafo}>{props.text}</p>
            <IconDelete onDelete={props.onDelete}/>
        </li>
    )
}

export { TodoItem }