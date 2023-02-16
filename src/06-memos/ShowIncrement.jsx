import { useCallback } from "react";

export const ShowIncrement = ({increment}) => {

    useCallback

  return (
    <button 
        className='btn btn-primary mt-2'
        onClick={() => {
            increment();
        }}>
            incrementar
    </button>
  )
}
