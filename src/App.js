import Input from './components/Input/Input';
import { useState } from 'react';
import Tasks from './components/Tasks/Tasks';

import './App.css'


let tasks = JSON.parse(localStorage.getItem('task_list')) || [];
function App() {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (event) => {

    setInputValue(event.target.value);
  };

  
  const addTask = ( ) => {

    const newTask =  {

      id: Math.floor( Math.random() * 100),
      title: inputValue,
      completed: false

    };

    tasks = [...tasks, newTask];
    setInputValue('');

    saveList();
  }

  const saveList = () => {

    localStorage.setItem('task_list', JSON.stringify(tasks));
  }

  

  return (

    <div className="container">

      <h1>Minhas tarefas</h1>
      
      <Input value = { inputValue } onChange = { handleInputValue } onClick = { addTask } />

      <Tasks tasks = { tasks } />
    
    </div>
  );
}

export default App;
