import React from 'react';

export default function TodoForm({ addTodo, newTodo, handleChanges, }) {
    const submitForm = e => {
        e.preventDefault();
        addTodo(newTodo);
    };
        return(
            <form onSubmit={submitForm}>
                <input
                    type='text'
                    name='todo'
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button>Add ToDo</button>
            </form>
        );
  }