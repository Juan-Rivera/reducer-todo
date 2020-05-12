import React from 'react'
import Todo from './Todo'

function TodoList({ state, toggleTodo, clearCompleted }){
    return(
        <div className='listContainer'>
            <div className='list'>
            {state.list.map(todo => {
                return <Todo key={todo.id} id={todo.id} toggleTodo={toggleTodo} />
            })}
            </div>
            <button className='clear-btn' onClick={clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;