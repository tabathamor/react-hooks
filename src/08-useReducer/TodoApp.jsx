import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"


const initialState = [


    // {
    //     id: new Date().getTime(),
    //     description: 'Initial',
    //     done: false,

    // }
]

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init )
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
        
    }, [todos]);

    const handleNewTodo = ( todo ) => {
       const action = {
        type: '[TODO] Add todo',
        payload: todo,

       }
       dispatch( action );
       
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Delete todo',
            payload: id,
        });
    }

    return (
    <>
    <h1>Todo</h1>
    <hr />

    <div className="row">
        <div className="col-7">
        <TodoList 
        todos={ todos } onDeleteTodo={ handleDeleteTodo }/>
        </div>

        <div className="col-5">
            <h4>ADD toDo</h4>
            <hr />

            <TodoAdd onNewTodo={ handleNewTodo }/>
        </div>

    </div>

    
    </>
  )
}

