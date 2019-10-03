import React from "react";
import { nullLiteral } from "@babel/types";

const ToDo = props => {
    return (
        <div
        onClick={props.onClick}
        className={`item${props.todo.completed ? " completed " : ""}`}>
            <p>{props.todo.name}</p>
        </div>
    ) 
}

export default ToDo;