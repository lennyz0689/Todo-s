import Style from './CreateTodoButton.module.css'

const CreateTodoButton = () => {
    return (
        <button
            className={Style.CreateTodoButton}
            onClick={() => console.log('Le diste click')}>+
        </button>
    )
}

export { CreateTodoButton }