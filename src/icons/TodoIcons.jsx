import { ReactComponent as CheckSVG } from './Complete.svg'
import { ReactComponent as DeleteSVG } from './Delete.svg'
import './TodoIcons.css'

const iconTypes = {
    'check': (color) => <CheckSVG className='IconSvg' fill={color}/>,
    'delete': (color) => <DeleteSVG className='IconSvg' fill={color}/>
}

const TodoIcons = ({ type, color, onClick }) => {
    return (
        <span className={`IconContainer  IconContainer${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcons }