import React from "react";

const toDo = props => {
    return (
        <div
        onClick={props.onClick}
        className={`item${props.todo.completed ? " completed " : ""}`}>
            <p>{props.todo.name}</p>
        </div>
    ) 
}

export default toDo;