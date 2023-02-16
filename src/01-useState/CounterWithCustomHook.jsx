import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const  { counter, increment, decrement, reset }  = useCounter();
    // const {counter, increment } = state;
    

  return (
     <>
    <h1>Counter custom hook {counter} </h1>
    <hr />
    
    <button className="btn btn-primary" onClick={ increment }> +1 </button>
    <button className="btn btn-primary" onClick={ reset }> reset</button>
    <button className="btn btn-primary" onClick={ decrement }> -1</button>

    </>
  )
}

