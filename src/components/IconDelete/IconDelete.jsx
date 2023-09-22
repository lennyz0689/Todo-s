import React from "react";
import { TodoIcons } from "../../icons/TodoIcons";

const IconDelete = ({ onDelete }) => {
    return (
        <TodoIcons
            type='delete'
            color='gray'
            onClick={onDelete}
        />
    )
}

export { IconDelete }