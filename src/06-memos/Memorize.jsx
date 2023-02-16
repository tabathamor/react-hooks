import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"



export const Memorize = () => {

    const [show, setShow] = useState(true);

    const { counter, increment} = useCounter()

    
  return (
    <>
     <h1>Counter <Small  value={counter}/> </h1>
        <hr></hr>
        <button 
            className="btn btn-primary mt-2"
            onClick={ () => increment()}>
            +1
        </button>

        <button className="btn" onClick={() => setShow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>

 
    </>
   
  )
}
