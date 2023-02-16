import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

  return (
    <>
     <h1>FocusScreen</h1>
        <hr></hr>


    <input
        ref={inputRef} 
        type="text" 
        placeholder="Enter your name" 
        className="form-control"/>

        <button onClick={onClick} className="btn btn-primary mt-2">
            Set focus
        </button>
    </>
   
  )
}
