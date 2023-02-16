import { useState } from "react";

  export  const useCounter = ( initicalValue = 10 ) => {

        const [ counter, setCounter ] = useState( initicalValue );

        const increment = () => {
            setCounter( counter + 1 )
        };
        const decrement = () => {
            setCounter( counter - 1 )
        }; 
        const reset = () => {
            setCounter(initicalValue)
        };

        return {
            counter,
            increment,
            decrement,
            reset
        }
    }

   
