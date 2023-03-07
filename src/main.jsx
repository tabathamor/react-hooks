import React from 'react'
import ReactDOM from 'react-dom/client'

import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'

// import { Padre } from './07-tarea-memo/Padre'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHook } from './03-example/MultipleCustomHook'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormularioWithCustomHook } from './02-useEffect/FormWithCustomHook'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
