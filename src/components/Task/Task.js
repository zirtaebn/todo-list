import React from "react";

import './Task.css'

export default function Task ( { tasks, taskCompleted, removeTask }) {

    const task = tasks.map(( task ) => 

        <li key = { task.id } 
        style = { task.completed ? {borderLeft: '5px solid rgb(39, 206, 184)'} : {}}>

            <span onClick = {() => taskCompleted(task.id) }>
                { task.title }
            </span>
            <span 
            onClick = { () => removeTask(task.id) }
            className = 'remove'>
                x
            </span>

        </li>
    )

    return (

        <>
            <ul>
                { task }            
            </ul>
        </>
    )
}