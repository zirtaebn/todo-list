import React from "react";

import './Input.css'

export default function Input({ value, onChange, onClick }) {


    return (

        <div className="input-area">

            <input value = { value } onChange = { onChange } placeholder = "Digite uma tarefa"/>
            <button onClick = { onClick }>Adicionar</button>
            
        </div>
    )


}