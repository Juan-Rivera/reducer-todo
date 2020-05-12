import React, { useState, useReducer } from 'react';
import { toDoReducer, intitialToDo } from './reducers/toDoReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';


function App() {
  const [newTodo, setNewTodo] = useState('');
  const [state, dispatch] = useReducer(toDoReducer, intitialToDo);

  const handleChanges = (e) => {
    setNewTodo(e.target.value)
  }

  const addTodo = todoName => {
    const newTodoO = {
      task: todoName,
      completed: false,
      id: Date.now(),
    }
    dispatch({ type: "ADD_TODO", payload: newTodoO })
    setNewTodo('');
  }

  const toggleTodo = id => {
    dispatch({ type: 'TOOGLE_COMPLETED', payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addTodo={addTodo} newTodo={newTodo} handleChanges={handleChanges}  />
        </div>
        <TodoList state={state} toggleTodo={toggleTodo}clearCompleted={clearCompleted} />
      </div>
  );
}

export default App;
