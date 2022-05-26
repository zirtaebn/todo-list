import React from "react";

import './Task.css'

export default function Task ( { tasks }) {

    // const completeTask = () => {

        
    // }

    // const removeTask = () => {

        
    // }

    const task = tasks.map(( task ) => 
        <li key = { task.id } >

            { task.title }
            {/* <span onClick = { removeTask }>x</span> */}

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