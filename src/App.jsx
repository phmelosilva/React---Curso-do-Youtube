import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import Header from './components/Header';
import Tasks from './components/Tasks';
import "./App.css";
import AddTask from './components/AddTask';

// O const App é a declaração de um componente. O componente é declarado que nem uma função Java Script e é usado como se fosse uma tag HTML. Ele é como se fosse uma função
const App = () => {
    const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudar Programação',
        completed: false,
      },
      {
        id: '2',
        title: 'Ler livros',
        completed: true,
      },
    ]);

    const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) return { ...task, completed: !task.completed 
        }
        return task;
      });

      setTasks(newTasks)

    };

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [... tasks, 
          {
            title: taskTitle,
            id: uuidv4(),
            completed: false,
        },
      ];

      setTasks(newTasks);
    };

    const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id != taskId)
      setTasks(newTasks)
    }

// Props são dados que conseguimos passar de um componente pai para um componente filho. No return abaixo, tasks dentro das chaves é uma props.
// o App é um componente pai da Tasks, porque ele está renderizando a Tasks.

  return (
    <>
      <div className="container">
        <Header/>
        <AddTask handleTaskAddition={handleTaskAddition} 
        />
        <Tasks 
        tasks= {tasks} 
        handleTaskClick= {handleTaskClick}
        handleTaskDeletion = {handleTaskDeletion}
        />
      </div>
     
    </>
  );
};

export default App;

// State é uma variável onde guardamos um valor, mas quando ele é atualizado, o componente é renderizado novamente. Ele serve para atualizarmos um componente