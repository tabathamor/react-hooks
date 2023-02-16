import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iteartionNumber = 100) => {
  for (let i = 0; i < iteartionNumber; i++) {
    console.log('ahi vamosss')
  }

  return `${iteartionNumber} iteartionNumber realizadas`
}

export const MemoHook = () => {

    const [show, setShow] = useState(true);
    const { counter, increment} = useCounter(1000)

   const memorizeVal =  useMemo(() => heavyStuff(counter), [counter])

    
  return (
    <>
     <h1>Counter <small>{counter}</small> </h1>
        <hr></hr>

        <h4>{memorizeVal}</h4>
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
