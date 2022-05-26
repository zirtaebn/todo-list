import React from "react";
import Task from "../Task/Task";

import './Tasks.css'

export default function Tasks( { tasks } ) {


    return (

        <div className="tasks">

            <Task tasks = { tasks } />        

        </div>
    )
}