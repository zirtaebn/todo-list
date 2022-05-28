import React from "react";

import './Input.css'

export default function Input({ value, handleInputValue, addTask }) {


    return (

        <div className="input-area">

            <input 
            value = { value } 
            onChange = { handleInputValue } placeholder = "Digite uma tarefa"
            onKeyPress = { (e) => e.key === 'Enter' ? addTask() : {}}/>
            <button onClick = { addTask } >Adicionar</button>
            
        </div>
    )


}