

const initialState =  [{
    id: 1,
    todo: 'Recolectar piedra filosofal',
    done:  false
}]

const todoReducer = (state = initialState, action = {}) => {
    if( action.type === 'ADD_TODO' ){
        return [ ...state, action.payload ]
    }
    return state
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar piedra del poder',
    done:  false
}

const addTodo = {
    type: 'ADD_TODO',
    payload: newTodo
    
}
todos = todoReducer(todos, addTodo);

console.log({state: todos})

