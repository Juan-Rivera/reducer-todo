export const toDoReducer = (state, action) => {
    if (action.type === 'ADD_TODO'){
        return {
            ...state,
            todo: action.payload,
        }
    }
    if (action.type === 'TOGGLE_COMPLETED'){
        const completedTodo = state.todo.map((todo) => {
            if(todo.id === action.payload){
                todo.completed = !todo.completed
            }
            return todo;
        })
        return {
            ...state,
            todo: completedTodo,
        }
    }
    if (action.type === 'CLEAR_COMPLETED'){
        const incompleteTodo = state.todo.filter((todo) => {
            return todo.completed === false
        })
        return {
            ...state,
            todo: incompleteTodo,
        }
    }
    return state;
}

export const intitialToDo = {
    list: [
        {
            task: 'example task',
            completed: false,
            id: Date.now(),
        },
    ],
}
