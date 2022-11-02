import React from "react";
import Task from "./Task";

// a variável tasks é uma props
const Tasks = ( { tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task => <Task task={task} 
            handleTaskClick={handleTaskClick} 
            handleTaskDeletion={handleTaskDeletion}
            />
            ))}
        </>
    )
};

export default Tasks;
// O componente é atualizado quando o State é alterado e quando as props dele são alteradas.