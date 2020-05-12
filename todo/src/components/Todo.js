import React from 'react'; 

function Todo({ todoName, completed, id, toggleTodo }) {
    return (
        <div 
        onClick={() => toggleTodo(id)}
        className={`todo${completed ? ' completed' : ''}`}
        >
          <p>Task: {todoName}</p>
        </div>
    );
  }
  export default Todo