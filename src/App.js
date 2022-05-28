import { useState } from 'react';
import Input from './components/Input/Input';
import Tasks from './components/Tasks/Tasks';

import './App.css'

function App() {

  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('task_list') || []))

  const handleInputValue = (event) => {

    setInputValue(event.target.value);
  };

  const addTask = ( ) => {

    if(inputValue) {
      
      const newTasks = [
        ...tasks,
        {

          id: Math.floor( Math.random() * 100),
          title: inputValue,
          completed: false

        }
      ];

      setInputValue('');
      setTasks(newTasks);

    }
  }

  const removeTask = (taskId) => {

    const newTasks = tasks.filter((task) => {return task.id !== taskId})


    setTasks(newTasks);
    
  }

  const taskCompleted = (taskId) => {

    const newTasks = tasks.map((task) => {

      if(task.id === taskId) return {...task, completed: !task.completed}

      return task
    })

    setTasks(newTasks);
    
  }


  const saveList = () => {

    localStorage.setItem('task_list', JSON.stringify(tasks));
  }

  saveList();

  return (

    <div className='container'>

      <h1>Minhas tarefas</h1>
      
      <Input value = { inputValue } handleInputValue = { handleInputValue } addTask = { addTask } />

      <Tasks tasks = { tasks } taskCompleted = { taskCompleted } removeTask = { removeTask }/>

      
    
    </div>
  );
}

export default App;
