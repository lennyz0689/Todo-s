import React from "react";
import { TodoIcons } from "../../icons/TodoIcons";

const IconComplete = ({ completed, onComplete }) => {
    return (
        <TodoIcons
            type='check'
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}

export { IconComplete }