import React from "react";
import Task from "../Task/Task";

import './Tasks.css'

export default function Tasks( { tasks, taskCompleted, removeTask} ) {


    return (

        <div className="tasks">

            <Task tasks = { tasks } taskCompleted = { taskCompleted } removeTask = { removeTask }/>        

        </div>
    )
}